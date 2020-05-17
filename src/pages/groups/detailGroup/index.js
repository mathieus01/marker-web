import React, { useState, useEffect } from 'react';
import { Drawer } from '@material-ui/core';
import { Creators as GroupActions } from '../../../store/ducks/group';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Loading from '../../../components/Loading';
import CreateGroup from '../createGroup';
import AddUser from '../addUser';
import { Container, PageTitle, Content, Header, UserList, UserItem, Button } from './styles';
import moment from 'moment';
import { Icon, IconButton } from '@material-ui/core';
import { FiTrash2, FiEdit } from 'react-icons/fi';
import Swal from 'sweetalert2';
import Modal from 'react-modal';

const DetailGroup = ({ getGroupRequest, match, groupState, removeUsersToGroupRequest }) => {
  const [group, setGroup] = useState(null);
  const [open, setOpen] = useState(false);
  const [addUser, setAddUser] = useState(false);

  useEffect(() => {
    const { id } = match.params;
    getGroupRequest(id);
  }, [getGroupRequest, match]);

  useEffect(() => {
    const { group } = groupState;
    setGroup(group);
  }, [groupState, groupState.group]);

  const handleGroupOpen = () => {
    setOpen(true);
  };

  const handleAddUser = (toggle) => {
    setAddUser(toggle);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRemoveUser = (id) => {
    removeUsersToGroupRequest([id], groupState.group.id);
  };

  const confirmDelete = (id) => {
    Swal.fire({
      title: 'Excluir Equipe',
      text: 'Tem certeza que deseja excluir essa equipe ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Sim',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Não',
    }).then((result) => {
      if (result.value) {
        handleRemoveUser(id);
      }
    });
  };

  return (
    <Container>
      <PageTitle>
        <h5>Detalhes da equipe</h5>
      </PageTitle>
      <Content className='fade'>
        <Header>
          {group && (
            <div>
              <h1>{group.name}</h1>
              <p>{group.description}</p>
              {group.users && <p>{group.users.length} usuarios</p>}

              <button onClick={(e) => handleGroupOpen()}>
                <FiEdit size={14} />
                <span>Editar</span>
              </button>
            </div>
          )}
        </Header>
        <UserList cellPadding={0} cellSpacing={0}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Aniversario</th>
              <th>
                <IconButton onClick={(e) => handleAddUser(true)}>
                  <Icon>add</Icon>
                </IconButton>
              </th>
            </tr>
          </thead>
          <tbody>
            {groupState.loading && <Loading />}
            {!group || (!group.users && !group.loading) ? (
              <tr>
                <td colSpan={5}>Nenhum usuario cadastrada</td>
              </tr>
            ) : (
              group.users.map((user) => (
                <UserItem key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.birthday ? moment(user.birthday).format('DD MMM, YYYY') : 'Não informado'}</td>
                  <td>
                    <Button onClick={(e) => confirmDelete(user.id)}>
                      <FiTrash2 size={16} />
                    </Button>
                  </td>
                </UserItem>
              ))
            )}
          </tbody>
        </UserList>
        <Modal
          isOpen={open}
          onRequestClose={(e) => handleClose(false)}
          contentLabel='Criar Grupo'
          className='modal'
          overlayClassName='overlay'
        >
          <CreateGroup group={group} onClose={handleClose} />
        </Modal>
        <Modal
          isOpen={addUser}
          onRequestClose={(e) => handleAddUser(false)}
          contentLabel='AddUserToGroup'
          className='modal'
          overlayClassName='overlay'
        >
          <AddUser onClose={handleAddUser} />
        </Modal>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  groupState: state.group,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(GroupActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DetailGroup);
