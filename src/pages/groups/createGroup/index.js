import React, { useRef, useEffect } from 'react';
import { Form } from '@unform/web';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Input from '../../../components/Input';
import { Creators as GroupActions } from '../../../store/ducks/group';
import { Content, InputGroup, ButtonGroup } from './styles';

const CreateGroup = ({ group, onClose, updateGroupRequest, saveGroupRequest }) => {
  const formRef = useRef(null);

  useEffect(() => {
    if (!!group) {
      formRef.current.setData(group);
    } else {
      formRef.current.setData({});
    }
  }, [formRef, group]);

  const cancelar = () => {
    onClose();
  };

  function handleSubmit(data) {
    if (group) {
      updateGroupRequest({ ...data, id: group.id });
    } else {
      saveGroupRequest(data);
    }
    cancelar();
  }

  return (
    <Content>
      <Form className='fade' onSubmit={handleSubmit} ref={formRef}>
        <InputGroup>
          <label htmlFor='name' className='label-name'>
            <span className='content-name'>Nome</span>
          </label>
          <Input name='name' />
        </InputGroup>
        <InputGroup>
          <label htmlFor='name' className='label-name'>
            <span className='content-name'>Descrição</span>
          </label>
          <Input name='description' />
        </InputGroup>
        <ButtonGroup>
          <button type='submit'>Salvar</button>
          <button type='button' onClick={(e) => cancelar()}>
            Cancelar
          </button>
        </ButtonGroup>
      </Form>
    </Content>
  );
};

const mapDispatchToProps = (dispatch) => bindActionCreators(GroupActions, dispatch);

const mapStateToProps = (state) => ({
  stateGroup: state.group,
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateGroup);
