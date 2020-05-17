import moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Card from '../../components/Card';
import Title from '../../components/Title';
import { Creators as GroupsActions } from '../../store/ducks/group';
import { Creators as PatientActions } from '../../store/ducks/patient';
import { Creators as ScheduleActions } from '../../store/ducks/schedule';
import { Container, Row, LinkRow, Header, List, ChipCustom } from './styles';
import { Grid, Avatar } from '@material-ui/core';
import AvatarMaleIcon from '../../assets/images/avatars/2.svg';
import AvatarFemaleIcon from '../../assets/images/avatars/14.svg';

class Home extends Component {
  componentDidMount() {
    this.getGroups();
    this.getPatients();
    this.getSimpleSchedule();
  }

  getGroups() {
    this.props.getGroupsByUserRequest();
  }

  getPatients() {
    this.props.getPatientsRequest();
  }

  getSimpleSchedule() {
    this.props.getSimpleScheduleRequest();
  }

  render() {
    moment.locale('');
    const groups = this.props.group.groups;
    const patients = this.props.patient.patients;
    const schedules = this.props.schedule.schedule;
    return (
      <Container>
        <Title title='Inicio' />
        <Row>
          <Card xs={6} md={6}>
            <Header>
              <span>Agenda</span>
              <button className='btn btn-light'>Mais Detalhes</button>
            </Header>
            <List>
              {schedules && schedules.length ? (
                schedules.map((item) => (
                  <LinkRow to={`patient/${item.patient.id}`}>
                    <li key={item.id}>
                      <Grid item xs={1}>
                        <Avatar src={item.patient.gender === 'F' ? AvatarFemaleIcon : AvatarMaleIcon}></Avatar>
                      </Grid>
                      <Grid item xs={6}>
                        <strong>{item.patient.name}</strong>
                        <span>{item.cause}</span>
                      </Grid>
                      <Grid item xs={3}>
                        <strong>{item.location}</strong>
                        <span>{item.date && moment(item.date).format('DD/MM/YYYY')}</span>
                      </Grid>
                      <Grid item xs={2}>
                        {item.type === '0' ? (
                          <ChipCustom variant='outlined' color='secondary' label='Emergencia' />
                        ) : (
                          <ChipCustom variant='outlined' color='primary' label='Eletiva' />
                        )}
                      </Grid>
                    </li>
                  </LinkRow>
                ))
              ) : (
                <li className='empty-data'>Nenhuma atividade encontrada</li>
              )}
            </List>
          </Card>
        </Row>
        <Row>
          <Card xs={6} md={6}>
            <Header>
              <span>Pacientes</span>
              <button className='btn btn-light'>Mais Detalhes</button>
            </Header>
            <List>
              {patients && patients.length ? (
                patients.map((patient) => (
                  <LinkRow to={`patient/${patient.id}`}>
                    <li>
                      <Grid item xs={1}>
                        <Avatar src={patient.gender === 'F' ? AvatarFemaleIcon : AvatarMaleIcon}></Avatar>
                      </Grid>
                      <Grid item xs={6}>
                        <strong>{patient.name}</strong>
                        <span>{patient.group.name}</span>
                      </Grid>
                      <Grid item xs={3}>
                        <span>{patient.helthcare}</span>
                        <small>{patient.birthday && moment(patient.birthday).format('DD/MM/YYYY')}</small>
                      </Grid>
                    </li>
                  </LinkRow>
                ))
              ) : (
                <li className='empty-data'>Você não possui grupos</li>
              )}
            </List>
          </Card>
          <Card xs={6} md={6}>
            <Header>
              <span>Equipes</span>
              <button className='btn btn-light'>Mais Detalhes</button>
            </Header>
            <List>
              {groups && groups.length ? (
                groups.map((group) => (
                  <LinkRow to={`groups/${group.id}`}>
                    <li>
                      <Grid item xs={9}>
                        <strong>{group.name}</strong>
                        <span>{group.description}</span>
                      </Grid>
                      <Grid item xs={3}>
                        <span>{group.users.length} Usuarios</span>
                      </Grid>
                    </li>
                  </LinkRow>
                ))
              ) : (
                <li className='empty-data'>Você não possui grupos</li>
              )}
            </List>
          </Card>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  group: state.group,
  patient: state.patient,
  schedule: state.schedule,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...GroupsActions, ...PatientActions, ...ScheduleActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
