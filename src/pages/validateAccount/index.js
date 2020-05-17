import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Creators as AuthActions } from "../../store/ducks/auth";

import { Container } from "./styles";
import Loading from "../../components/Loading";
import EmailIcon from "../../assets/images/mail.gif";

class ValidateAccount extends Component {
  state = {
    token: null
  };

  componentDidMount() {
    const { token } = this.props.match.params;
    this.setState({ token });
    if (token) {
      this.props.validateAccountRequest(token);
    }
  }

  render() {
    return (
      <Container>
        {this.state.token ? (
          <div className="validate">
            <Loading />
            <div className="content">
              <span>Validando conta</span>
              <small>Aguarde um momento enquanto validamos sua conta</small>
            </div>
          </div>
        ) : (
          <div className="validate">
            <img src={EmailIcon} alt="email" />
            <div className="content">
              <span>Agora falta pouco</span>
              <small>
                Foi enviado um email com o link para validar sua conta
              </small>
            </div>
          </div>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(AuthActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ValidateAccount);
