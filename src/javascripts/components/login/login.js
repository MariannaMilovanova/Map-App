import React, {Component} from 'react';
import {GoogleLogin, GoogleLogout} from 'react-google-login';
import {Icon} from 'semantic-ui-react';

const OAuth_CLIENT_ID = process.env.OAuth_CLIENT_ID;

class Login extends Component {
    responseSuccess = (response) => {
        if (!localStorage.getItem(`${response.googleId}`)) {
            let userData = {...response.profileObj};
            userData.searchHistory = [];
            userData.venues = [];
            localStorage.setItem(`${response.googleId}`, JSON.stringify(userData));
            localStorage.setItem('active', response.googleId);
            this.props.userLogin(response.profileObj);
        } else {
            let user = JSON.parse(localStorage.getItem(`${response.googleId}`));
            localStorage.setItem('active', response.googleId);
            this.props.userLogin(user);
        }
    }
    responseError = (response) => {
        console.log(response);
    }
    logout = () => {
        localStorage.removeItem('active');
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
                    buttonText='Login'
                    className={this.props.user ? 'none' : 'login-btn'}
                    fetchBasicProfile={true}
                    onSuccess={this.responseSuccess}
                    onFailure={this.responseError}
                />
                <GoogleLogout
                    buttonText='Logout'
                    className={this.props.user ? 'logout-btn' : 'none'}
                    onLogoutSuccess={this.logout}
                />
            </div>
        );
    }
}

export default Login;