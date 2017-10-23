import React, { Component } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { Icon } from 'semantic-ui-react';
import { userLogin, userLogout } from './loginActions';
import { OAuth_CLIENT_ID } from '../../../../config/apiKeys';
import { connect } from 'react-redux';

class Login extends Component {
    componentDidMount() {
        let userId = localStorage.getItem('active');
        if (localStorage.getItem('active')) {
            let user =  JSON.parse(localStorage.getItem(userId))
            this.props.userLogin(user);    
        }
    }
    responseSuccess = (response) => {
        localStorage.setItem(`${response.googleId}`,  JSON.stringify(response.profileObj));
        localStorage.setItem('active', response.googleId);
        this.props.userLogin(response.profileObj);
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
                    className={this.props.user ? 'none' : 'active-btn'}
                    fetchBasicProfile = {true}
                    onSuccess={this.responseSuccess}
                    onFailure={this.responseError}
                /> 
                <GoogleLogout
                    buttonText='Logout'
                    className={this.props.user ? 'active-btn' : 'none'}
                    onLogoutSuccess={this.logout}
                />
            </div>
        );
    } 
}
const mapStateToProps = (state) => {
    return ({
        user: state.login.user
    });
};
const mapDispatchToProps = {
   userLogin,
   userLogout
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);