import React, { useEffect, useState, useRef } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Form } from '@unform/web';
import Input from '../../../components/Input';
import DatePicker from '../../../components/DatePicker';
import Select from '../../../components/Select';
import { Creators as GroupActions } from '../../../store/ducks/group';
import { Creators as PatientActions } from '../../../store/ducks/patient';
import Util from '../../../utils/util';

import { Content, InputGroup, ButtonGroup } from './styles';

const CreatePatient = ({ getGroupsByUserRequest, patient, stateGroup, savePatientRequest, close }) => {
  const formRef = useRef(null);
  const [groups, setGroups] = useState([]);
  const [genders, setGenders] = useState([]);

  useEffect(() => {
    getGroupsByUserRequest();
    setGenders(Util.genders());
  }, [getGroupsByUserRequest]);

  useEffect(() => {
    if (!!patient) {
      formRef.current.setData(patient);
    } else {
      formRef.current.setData({});
    }
  }, [formRef, patient]);

  useEffect(() => {
    const groups = stateGroup.groups.map((group) => ({
      label: group.name,
      value: group.id,
    }));
    setGroups(groups);
  }, [stateGroup.groups]);

  function handleSubmit(data) {
    data.birthday = Util.stringToDate(data.birthday);
    savePatientRequest(data);
  }

  return (
    <Content>
      {/* <Title title='Cadastrar Paciente' noDate /> */}
      <Form className='fade' onSubmit={handleSubmit} ref={formRef}>
        <InputGroup>
          <label htmlFor='name' className='label-name'>
            <span className='content-name'>Equipes</span>
          </label>

          <Select name='group_id' options={groups} value={patient && patient.group_id ? patient.group_id : ''} />
        </InputGroup>
        <InputGroup>
          <label htmlFor='name' className='label-name'>
            <span className='content-name'>Nome</span>
          </label>
          <Input name='name' />
        </InputGroup>
        <InputGroup>
          <label htmlFor='birthday' className='label-name'>
            <span className='content-name'>Data de Nascimento</span>
          </label>
          <DatePicker name='birthday' />
        </InputGroup>
        <InputGroup>
          <label htmlFor='name' className='label-name'>
            <span className='content-name'>Genero</span>
          </label>

          <Select name='gender' options={genders} value={patient && patient.gender ? patient.gender : ''} />
        </InputGroup>
        <InputGroup>
          <label htmlFor='email' className='label-name'>
            <span className='content-name'>Email</span>
          </label>
          <Input name='email' />
        </InputGroup>
        <InputGroup>
          <label htmlFor='phone' className='label-name'>
            <span className='content-name'>Telefone</span>
          </label>
          <Input name='phone' />
        </InputGroup>
        <InputGroup>
          <label htmlFor='address' className='label-name'>
            <span className='content-name'>Endereco</span>
          </label>
          <Input name='address' />
        </InputGroup>
        <InputGroup>
          <label htmlFor='birthday' className='label-name'>
            <span className='content-name'>Profissão</span>
          </label>
          <Input name='occupation' />
        </InputGroup>
        <InputGroup>
          <label htmlFor='Convenio' className='label-name'>
            <span className='content-name'>Convenio</span>
          </label>
          <Input name='helthcare' />
        </InputGroup>
        <InputGroup>
          <label htmlFor='comorbidades' className='label-name'>
            <span className='content-name'>Comorbidades/Alergias</span>
          </label>
          <Input name='alergy' />
        </InputGroup>
        <ButtonGroup>
          <button type='submit'>Salvar</button>
          <button type='button' onClick={(e) => close(false)}>
            Cancelar
          </button>
        </ButtonGroup>
      </Form>
    </Content>
  );
};
const mapStateToProps = (state) => ({
  stateGroup: state.group,
  statePatient: state.patient,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ ...GroupActions, ...PatientActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CreatePatient);
