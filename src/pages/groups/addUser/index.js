import React, { useState, useEffect, useRef } from 'react';
import Input from '../../../components/Input';
import { Form } from '@unform/core';
import { Container, InputGroup, ButtonGroup, ListUser, UserHeader, UserItem, UserContent } from './styles';
import { Creators as UserActions } from '../../../store/ducks/user';
import { Creators as GroupActions } from '../../../store/ducks/group';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Title from '../../../components/Title';

const AddUser = (props) => {
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const formRef = useRef(null);

  useEffect(() => {
    setUsers(props.user.users);
  }, [props.user.users]);

  const findUsers = () => {
    const name = formRef.current.getFieldValue('username');
    if (name.length > 3) {
      props.findUsersByUsernameRequest(name);
    }
  };

  const cancelar = () => {
    props.onClose(false);
  };

  const handleSubmit = (data) => {
    props.addUsersToGroupRequest(selectedUsers, props.group.group.id);
    cancelar();
  };

  const addUser = (id) => {
    if (selectedUsers.includes(id)) {
      const newArray = selectedUsers.filter((user) => user !== id);
      setSelectedUsers(newArray);
    } else {
      setSelectedUsers([...selectedUsers, id]);
    }
  };

  return (
    <Container>
      <Form ref={formRef}>
        <InputGroup>
          <label htmlFor='name' className='label-name'>
            <span className='content-name'>Nome</span>
          </label>
          <Input onKeyUp={findUsers} name='username' />
        </InputGroup>
        <ListUser>
          <UserHeader>
            <span>email</span>
            <span>email</span>
          </UserHeader>
          <UserContent>
            {users &&
              users.length > 0 &&
              users.map((user) => (
                <UserItem
                  key={user.id}
                  onClick={(e) => addUser(user.id)}
                  className={'teste ' + (selectedUsers.includes(user.id) ? 'selected' : '')}
                >
                  <span>{user.username}</span>
                  <span>{user.email}</span>
                </UserItem>
              ))}
          </UserContent>
        </ListUser>
        <ButtonGroup>
          <button onClick={handleSubmit}>Salvar</button>
          <button onClick={cancelar}>Cancelar</button>
        </ButtonGroup>
      </Form>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
  group: state.group,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ ...UserActions, ...GroupActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
