import React, { useState, useRef, useEffect } from 'react';
import Select from '../../../components/Select';
import Input from '../../../components/Input';
import DatePicker from '../../../components/DatePicker';
import { Form } from '@unform/web';
import ListProcedure from '../../procedures/listProcedure';
import { Content, InputGroup, ButtonGroup } from './styles';
import Util from '../../../utils/util';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators as SurgeryActions } from '../../../store/ducks/surgery';
import moment from 'moment';

const CreateSurgeries = ({ patient, surgery, close, saveSurgeryRequest, updateSurgeryRequest, cleanProcedures }) => {
  const formRef = useRef(null);
  const [procedures, setProcedures] = useState([]);

  useEffect(() => {
    if (surgery && surgery.id) {
      setTimeout(() => {
        formRef.current.setData({
          ...surgery,
          date: moment(surgery.date).format('DD/MM/YYYY'),
        });
        if (surgery.procedures && surgery.procedures.length > 0) {
          setProcedures([...surgery.procedures]);
        }
      }, 50);
    }
  }, [formRef, surgery]);

  function handleProcedures() {
    const newArray = procedures.map((procedure) => procedure.id);
    return newArray;
  }

  async function handleSubmit(data) {
    const newSurgery = {
      ...data,
      date: Util.stringToDate(data.date),
      patient_id: patient.id,
      procedures: handleProcedures(),
    };

    try {
      if (surgery && surgery.id) {
        await updateSurgeryRequest({ ...newSurgery, id: surgery.id });
      } else {
        await saveSurgeryRequest(newSurgery);
      }
      close(false);
    } catch (err) {
      console.log('teste');
    }
  }

  return (
    <Content>
      <Form className='fade' ref={formRef} onSubmit={handleSubmit}>
        <InputGroup>
          <label htmlFor='name' className='label-name'>
            <span className='content-name'>Tipo de Cirurgia</span>
          </label>
          <Select name='type' options={Util.surgeryTypes()} value={surgery && surgery.type ? surgery.type : ''} />
        </InputGroup>
        <InputGroup>
          <label htmlFor='name' className='label-name'>
            <span className='content-name'>Causa</span>
          </label>
          <Input name='cause' />
        </InputGroup>
        <InputGroup>
          <label htmlFor='name' className='label-name'>
            <span className='content-name'>Local</span>
          </label>
          <Input name='location' />
        </InputGroup>
        <InputGroup>
          <label htmlFor='date' className='label-name'>
            <span className='content-name'>Data de cirurgia</span>
          </label>
          <DatePicker name='date' />
        </InputGroup>
        <ListProcedure procedures={procedures} setProcedures={setProcedures} />
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
  surgeryState: state.surgery,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(SurgeryActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CreateSurgeries);
