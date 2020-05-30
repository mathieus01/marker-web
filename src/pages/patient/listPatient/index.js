import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { FiEdit, FiPlus, FiTrash2 } from 'react-icons/fi';
import InfiniteScroll from 'react-infinite-scroll-component';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Swal from 'sweetalert2';
import AvatarFemaleIcon from '../../../assets/images/avatars/14.svg';
import AvatarMaleIcon from '../../../assets/images/avatars/2.svg';
import { Creators as PatientActions } from '../../../store/ducks/patient';
import CreatePatient from '../createPatient';
import { Button, Card, CardHeader, Container, Content, Item, LinkButton, List, PageTitle } from './styles';

const ListPatient = ({ patientState, getPatientsRequest, removePatientRequest }) => {
  const [addPatient, setAddPatient] = useState(false);
  const [page, setPage] = useState(1);
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    getPatientsRequest(page);
  }, [getPatientsRequest, page]);

  useEffect(() => {
    setPatients(patientState.patients);
  }, [patientState.patients]);

  const removePatient = (id) => {
    removePatientRequest(id);
  };

  const handleAddPatient = (value) => {
    setAddPatient(value);
  };

  const getPatients = () => {
    if (patientState.page < patientState.lastPage) {
      setPage(page + 1);
      getPatientsRequest(page + 1);
    }
  };

  const confirmDelete = (id) => {
    Swal.fire({
      title: 'Excluir Paciente',
      text: 'Tem certeza que deseja excluir esse paciente ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Sim',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Não',
    }).then((result) => {
      if (result.value) {
        removePatient(id);
      }
    });
  };

  return (
    <Container>
      <Content className='fade'>
        <PageTitle>
          <div>
            <h5>{patientState.total} Pacientes</h5>
          </div>
          <div>
            <Button onClick={(e) => handleAddPatient(true)}>
              <FiPlus size={18} />
            </Button>
          </div>
        </PageTitle>
        <Card>
          <CardHeader>
            <span>Pacientes</span>
            <div></div>
          </CardHeader>
          <List id='patientList'>
            <InfiniteScroll
              dataLength={patientState.patients.length}
              next={getPatients}
              hasMore={true}
              scrollableTarget='patientList'
            >
              {patients &&
                patients.map((patient) => (
                  <Item key={patient.id}>
                    <div>
                      <img src={patient.gender === 'F' ? AvatarMaleIcon : AvatarFemaleIcon} alt='' />
                    </div>
                    <div>
                      <strong>{patient.name}</strong>
                      <span>{patient.helthcare}</span>
                      <span>{moment(patient.birthday).format('DD MMM, YYYY')}</span>
                    </div>
                    <div>
                      <span>{patient.group.name}</span>
                      <span>{patient.email}</span>
                    </div>
                    <div>
                      <LinkButton to={`patient/${patient.id}`}>
                        <FiEdit size={18} />
                      </LinkButton>
                      <Button onClick={(e) => confirmDelete(patient.id)}>
                        <FiTrash2 size={18} />
                      </Button>
                    </div>
                  </Item>
                ))}
            </InfiniteScroll>
          </List>
        </Card>
      </Content>

      <Modal
        isOpen={addPatient}
        onRequestClose={(e) => handleAddPatient(false)}
        contentLabel='Example Modal'
        className='modal'
        overlayClassName='overlay'
      >
        <CreatePatient close={handleAddPatient}></CreatePatient>
      </Modal>
    </Container>
  );
};
const mapStateToProps = (state) => ({
  patientState: state.patient,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(PatientActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListPatient);
