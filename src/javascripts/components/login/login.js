import React, { Component } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { userLogin, userLogout } from './loginActions';
import { OAuth_CLIENT_ID } from '../../../../config/apiKeys';
import { connect } from 'react-redux';

class Login extends Component {
    
    responseSuccess = (response) => {
        this.props.userLogin(response.profileObj)
    }
    responseError = (response) => {
        console.log(response);
    }
    logout = () => {
        var auth2 = gapi.auth2.getAuthInstance();
            auth2.signOut().then(function () {
            console.log('User signed out.');
        });
        this.props.userLogout();
    }

    render() {
        return (
            <div className="google-login">
                <GoogleLogin
                    clientId={OAuth_CLIENT_ID}
                    buttonText="Login"
                    fetchBasicProfile = {true}
                    onSuccess={this.responseSuccess}
                    onFailure={this.responseError}
                />
                <GoogleLogout
                    buttonText="Logout"
                    onLogoutSuccess={this.logout}
                />
            </div>
        );
    } 
}

const mapDispatchToProps = {
   userLogin,
   userLogout
};

export default connect(
    null,
    mapDispatchToProps
)(Login);