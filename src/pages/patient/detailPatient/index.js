import { Drawer, makeStyles, Tab, Tabs } from '@material-ui/core';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { FiEdit, FiCalendar, FiPhoneCall, FiInfo, FiBriefcase, FiMail } from 'react-icons/fi';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TabPanel from '../../../components/TabPanel';
import { Creators as PatientActions } from '../../../store/ducks/patient';
import CreateSurgery from '../../surgeries/createSurgeries';
import DetailSurgery from '../../surgeries/detailSurgery';
import ListSurgeries from '../../surgeries/listSurgeries';
import CreatePatient from '../createPatient';
import { Container, Content, Header, Surgeries, Card, PageTitle } from './styles';
import Modal from 'react-modal';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    width: '100%',
  },
  tabs: {
    background: '#fff',
    border: '1px solid #e6ecf5',
    borderRadius: '8px',
    fontFamily: '"Montserrat", sans-serif !important',
    boxShadow: '0 0.75rem 1.5rem rgba(18, 38, 63, 0.03);',
  },
  tab: {
    borderBottom: '#f2f2f2',
    fontSize: '14px',
    fontFamily: '"Montserrat", sans-serif !important',
  },
}));

const DetailPatient = ({ getPatientRequest, match, patientState, surgeryState }) => {
  const classes = useStyles();
  const [selected, setSelected] = useState(false);
  const [patient, setPatient] = useState(null);
  const [surgery, setSurgery] = useState(null);
  const [surgeries, setSurgeries] = useState(null);
  const [editPatient, setEditPatient] = useState(false);
  const [editSurgery, setEditSurgery] = useState(false);
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    const { id } = match.params;
    getPatientRequest(id);
  }, [match.params, getPatientRequest]);

  useEffect(() => {
    setPatient(patientState.patient);
  }, [patientState.patient]);

  useEffect(() => {
    setSurgeries(surgeryState.surgeries);
    if (surgeryState.surgeries && surgeryState.surgeries.length > 0) {
      setSurgery(surgeryState.surgeries[0]);
    } else {
      handleSelectedSurgery(null);
    }
  }, [surgeryState.surgeries, surgeryState.surgeries.length]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSelectedSurgery = (surgery) => {
    setSelected(!!surgery);
    setSurgery(surgery);
  };

  const handleEditPatient = (value) => {
    setEditPatient(value);
  };
  const handleEditSurgery = (value) => {
    setEditSurgery(value);
  };

  return (
    <Container className='fade'>
      <PageTitle>
        <h5>Detalhes</h5>
      </PageTitle>
      {patient && (
        <Header>
          <Card>
            <header>
              <div>
                <span>{patient.name}</span>
                <small>{patient.group && patient.group.name}</small>
              </div>
              <div>
                <button
                  onClick={(e) => {
                    handleEditPatient(true);
                  }}
                >
                  <FiEdit size={14} />
                  <span>Editar</span>
                </button>
              </div>
            </header>
            <section>
              <div>
                <h1>{surgeries.length}</h1>
                <span>Cirurgias</span>
              </div>
              <div>
                <h1>0</h1>
                <span>Consultas</span>
              </div>
              <div>
                <h1>0</h1>
                <span>Pagamentos</span>
              </div>
            </section>
            <footer>
              <button>
                <FiMail size={18} />
                <span>Mensagem</span>
              </button>
            </footer>
          </Card>
          <Card>
            <section>
              <label>
                <FiCalendar size={16} />
                <span>Data de Nascimento</span>
              </label>
              <small>{patient.birthday ? moment(patient.birthday).format('DD/MM/YYYY') : 'Não informado'}</small>
            </section>
            <section>
              <label>
                <FiPhoneCall size={16} />
                <span>Telefone</span>
              </label>
              <small>{patient.phone ? patient.phone : 'Não informado'}</small>
            </section>
            <section>
              <label>
                <FiBriefcase size={16} />
                <span>Profissão</span>
              </label>
              <small>{patient.occupation ? patient.occupation : 'Não informado'}</small>
            </section>
            <section>
              <label>
                <FiInfo size={16} />
                <span>Alergias</span>
              </label>
              <small>{patient.alergy ? patient.alergy : 'Não informado'}</small>
            </section>
          </Card>
        </Header>
      )}
      <Content className='fade'>
        <div className={'fade ' + classes.root}>
          <Tabs value={value} onChange={handleChange} indicatorColor='primary' classes={{ root: classes.tabs }}>
            <Tab label='Cirurgias' className={classes.tab}></Tab>
            <Tab label='Consultas' className={classes.tab}></Tab>
            <Tab label='Pagamentos' className={classes.tab}></Tab>
          </Tabs>
          <TabPanel value={value} index={0}>
            <Surgeries>
              <ListSurgeries
                patient={patient}
                selectSurgery={handleSelectedSurgery}
                selectedSurgery={surgery}
                selected={selected}
              ></ListSurgeries>
              {surgery && (
                <DetailSurgery
                  surgery={surgery}
                  editSurgery={handleEditSurgery}
                  selected={selected}
                  setSelected={setSelected}
                />
              )}
            </Surgeries>
          </TabPanel>
        </div>

        <Modal
          isOpen={editPatient}
          onRequestClose={(e) => handleEditPatient(false)}
          contentLabel='Example Modal'
          className='modal'
          overlayClassName='overlay'
        >
          <CreatePatient patient={patient} close={handleEditPatient}></CreatePatient>
        </Modal>
        <Modal
          isOpen={editSurgery}
          onRequestClose={(e) => handleEditSurgery(false)}
          contentLabel='Example Modal'
          className='modal'
          overlayClassName='overlay'
        >
          <CreateSurgery surgery={surgery} close={handleEditSurgery}></CreateSurgery>
        </Modal>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  patientState: state.patient,
  surgeryState: state.surgery,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(PatientActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DetailPatient);
