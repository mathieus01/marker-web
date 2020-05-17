import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { Creators as AuthActions } from '../../store/ducks/auth';
import { Container } from './styles';
import Loading from '../../components/Loading';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  login(e) {
    e.preventDefault();
    this.props.signInRequest(this.state.email, this.state.password);
  }

  render() {
    return (
      <Container>
        <div className='login animated fadeInDown'>
          <div className='content'>
            <div className='titulo'>
              <span>Login</span>
              <small>Faça o login em sua conta</small>
            </div>
            <input
              type='text'
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
              placeholder='email'
            />
            <input
              type='password'
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
              placeholder='senha'
            />
            {this.props.auth.loading ? <Loading /> : <button onClick={(e) => this.login(e)}>Entrar</button>}
            <Link to=''>Esqueceu a senha</Link>
          </div>
          <div className='bottom'>
            Não possui uma conta ? <Link to='signup'>Criar conta</Link>
          </div>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(AuthActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
