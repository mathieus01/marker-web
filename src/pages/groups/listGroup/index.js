import React, { useEffect, useState } from 'react';
import { FiPlus, FiTrash2, FiEdit } from 'react-icons/fi';
import AvatarFemaleIcon from '../../../assets/images/avatars/14.svg';
import CreateGroup from '../createGroup';
import { connect } from 'react-redux';
import { Creators as GroupActions } from '../../../store/ducks/group';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import { Container, Content, PageTitle, Button, LinkButton, Card, CardHeader, List, Item } from './styles';
import Swal from 'sweetalert2';
import InfiniteScroll from 'react-infinite-scroll-component';
import Modal from 'react-modal';

const ListGroup = ({ getGroupsByUserRequest, groupState, deleteGroupRequest }) => {
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    getGroupsByUserRequest(page);
  }, [getGroupsByUserRequest, page]);

  useEffect(() => {
    const { groups } = groupState;
    setGroups(groups);
  }, [groupState, groupState.groups]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteGroup = (id) => {
    deleteGroupRequest(id);
  };

  const getGroups = () => {
    if (groupState.page < groupState.lastPage) {
      setPage(page + 1);
      getGroupsByUserRequest(page + 1);
    }
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
        deleteGroup(id);
      }
    });
  };

  return (
    <Container>
      <Content className='fade'>
        <PageTitle>
          <div>
            <h5>{groupState.total} Equipes</h5>
          </div>
          <div>
            <Button onClick={(e) => handleOpen(true)}>
              <FiPlus size={18} />
            </Button>
          </div>
        </PageTitle>
        <Card>
          <CardHeader>
            <span>Equipes</span>
            <div></div>
          </CardHeader>
          <List id='groupList'>
            <InfiniteScroll
              dataLength={groupState.groups.length}
              next={getGroups}
              hasMore={true}
              scrollableTarget='groupList'
            >
              {groups &&
                groups.map((group) => (
                  <Item key={group.id}>
                    <div>
                      <img src={AvatarFemaleIcon} alt='' />
                    </div>
                    <div>
                      <strong>{group.name}</strong>
                      <span>{group.description}</span>
                      <span>
                        {group.users && group.users.length} Usuario
                        {group.users && group.users.length > 1 && 's'}
                      </span>
                      <span>{moment(group.created_at).format('DD MMM, YYYY')}</span>
                    </div>
                    <div>
                      <LinkButton to={`groups/${group.id}`}>
                        <FiEdit size={18} />
                      </LinkButton>
                      <Button>
                        <FiTrash2 size={18} onClick={(e) => confirmDelete(group.id)} />
                      </Button>
                    </div>
                  </Item>
                ))}
            </InfiniteScroll>
          </List>
        </Card>
      </Content>

      <Modal
        isOpen={open}
        onRequestClose={(e) => handleClose(false)}
        contentLabel='Example Modal'
        className='modal'
        overlayClassName='overlay'
      >
        <CreateGroup onClose={handleClose} />
      </Modal>
      {/* <Drawer anchor='right' open={open} onClose={(e) => handleClose(false)}>
      </Drawer> */}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  groupState: state.group,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(GroupActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListGroup);
