import React, { useEffect, useState } from 'react';
import AvatarIcon from '../../assets/images/avatars/10.svg';
import { logout, getToken } from '../../services/auth';
import Dropdown from '../Dropdown';
import { Container, Profile } from './styles';
import { connect } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { FiLogOut, FiSettings } from 'react-icons/fi';

const Header = ({ authState, props }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const token = getToken();
    if (token) {
      const { data } = jwtDecode(token);
      setUser(data);
    }
  }, []);

  const userLogout = () => {
    logout();
    props.history.push('/signin');
  };

  return (
    <Container>
      <div>
        <span>Markeer</span>
      </div>

      <Profile>
        <Dropdown>
          <img src={AvatarIcon} alt='avatar' />
          <span>{user && user.username}</span>
          <div className='dropdown-content'>
            <p>
              <FiSettings size={16} />
              <span>Configurações</span>
            </p>
            <p onClick={(event) => userLogout()}>
              <FiLogOut size={16} />
              <span>Sair</span>
            </p>
          </div>
        </Dropdown>
      </Profile>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  authState: state.auth,
});

export default connect(mapStateToProps)(Header);
