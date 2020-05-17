import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import Loading from "../../components/Loading";
import { Creators as AuthActions } from "../../store/ducks/auth";
import { Container } from "./styles";

class Signup extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  };

  signup(e) {
    e.preventDefault();
    const { username, email, password } = this.state;
    const redirect_url = window.location.origin.toString();
    this.props.signupRequest({
      username,
      email,
      password,
      redirect_url,
      gender: "M"
    });
  }

  render() {
    return (
      <Container>
        <div className="signup animated fadeInDown">
          <div className="content">
            <div className="titulo">
              <span>Crie sua conta</span>
              <small>simplifique sua vida</small>
            </div>
            <input
              type="text"
              placeholder="Nome"
              value={this.state.username}
              onChange={e => this.setState({ username: e.target.value })}
            />
            <input
              type="text"
              placeholder="E-mail"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Senha"
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
            />
            {this.props.auth.loading ? (
              <Loading />
            ) : (
              <button onClick={e => this.signup(e)}>Criar Conta</button>
            )}
          </div>
          <div className="bottom">
            Já possui uma conta ? <Link to="signin">Login</Link>
          </div>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(AuthActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
