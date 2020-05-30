import { Grid, makeStyles } from '@material-ui/core';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { FiTrash, FiPlus } from 'react-icons/fi';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as SurgeryActions } from '../../../store/ducks/surgery';
import CreateSurgery from '../createSurgeries';
import { Button, Container, Header, List, ListItem } from './styles';
import Modal from 'react-modal';
import Swal from 'sweetalert2';
const useStyles = makeStyles(() => ({
  button: {
    fontSize: '2.4rem',
    padding: '0.6rem',
  },
  chip: {
    padding: '0.5rem 0px',
    fontSize: '1.4rem',
  },
  blue: {
    color: '#fff',
    background: '#078bf5',
    padding: '0px 3px',
    fontSize: '1.2rem',
    borderRadius: '6px',
    justifyContent: 'center !important',
  },
  orange: {
    color: '#fff',
    background: '#ffab00',
    padding: '0px 3px',
    fontSize: '1.2rem',
    borderRadius: '6px',
    justifyContent: 'center !important',
  },
  red: {
    color: '#fff',
    background: '#ff5630',
    padding: '0px 3px',
    fontSize: '1.2rem',
    borderRadius: '6px',
    justifyContent: 'center !important',
  },
}));

const ListSurgeries = ({
  patient,
  surgeryState,
  getSurgeriesRequest,
  removeSurgeryRequest,
  selectSurgery,
  selectedSurgery,
  selected,
}) => {
  const classes = useStyles();
  const [addSurgery, setAddSurgery] = useState(false);
  const [surgeries, setSurgeries] = useState([]);
  const [surgery, setSurgery] = useState(null);

  useEffect(() => {
    if (patient && patient.id) {
      getSurgeriesRequest({ patient: patient.id });
    }
  }, [patient, getSurgeriesRequest]);

  useEffect(() => {
    setSurgeries(surgeryState.surgeries);
  }, [surgeryState, surgeryState.surgeries]);

  const handleAddSurgery = (event) => {
    if (!event) {
      setSurgery(null);
    }
    setAddSurgery(event);
  };

  const handleSelectSurgery = (surgery) => {
    selectSurgery(surgery);
  };

  const handleRemoveSurgery = (id) => {
    removeSurgeryRequest(id);
  };

  const confirmDelete = (id) => {
    Swal.fire({
      title: 'Excluir Cirurgia',
      text: 'Tem certeza que deseja excluir essa cirurgia',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Sim',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Não',
    }).then((result) => {
      if (result.value) {
        console.log(surgery);
        handleRemoveSurgery(id);
      }
    });
  };

  return (
    <Container selected={selected}>
      <Header>
        <h1>Cirurgias</h1>
        <Button onClick={(e) => setAddSurgery(true)}>
          <FiPlus size={16} />
        </Button>
      </Header>
      <List>
        {surgeries.length > 0 && patient && patient.id ? (
          surgeries.map((surgery) => (
            <ListItem
              key={surgery.id}
              onClick={(e) => handleSelectSurgery(surgery)}
              selected={selectedSurgery && selectedSurgery.id === surgery.id}
            >
              <div>
                <strong>{surgery.cause}</strong>
                <small>{patient.helthcare}</small>
                <span>{surgery.date ? moment(surgery.date).format('DD/MM/YYYY') : 'Sem data'}</span>
              </div>
              <div>
                <Button onClick={(e) => confirmDelete(surgery.id)}>
                  <FiTrash size={16} />
                </Button>
                {surgery.type === '0' && (
                  <label className={classes.blue}>
                    <span>Eletiva</span>
                  </label>
                )}

                {surgery.type === '1' && (
                  <label className={classes.orange}>
                    <span>Urgencia</span>
                  </label>
                )}
                {surgery.type === '2' && (
                  <label className={classes.red}>
                    <span>Emergencia</span>
                  </label>
                )}
              </div>
            </ListItem>
          ))
        ) : (
          <li style={{ fontSize: '18px', padding: '15px 0px', color: '#3c4858' }}>
            <Grid item xs={12} className='justify-center'>
              <strong>Nenhum item encontrado</strong>
            </Grid>
          </li>
        )}

        <Modal
          isOpen={addSurgery}
          onRequestClose={(e) => handleAddSurgery(false)}
          contentLabel='Example Modal'
          className='modal'
          overlayClassName='overlay'
        >
          <CreateSurgery patient={patient} close={handleAddSurgery}></CreateSurgery>
        </Modal>
        {/* <Drawer anchor='right' open={addSurgery} onClose={(e) => handleAddSurgery(false)}>
          <CreateSurgery patient={patient} close={handleAddSurgery}></CreateSurgery>
        </Drawer> */}
      </List>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  surgeryState: state.surgery,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(SurgeryActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListSurgeries);
