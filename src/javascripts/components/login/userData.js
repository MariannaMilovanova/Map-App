import React from 'react';
import { Image, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import "./login.scss"

const UserData = (props) => (
    <div className="user-wrapper">
        {props.user 
            ? <Image  src={props.user.imageUrl} avatar size='tiny' /> 
            : <Icon name='spy' size='huge' color='blue' />}
    </div>
);

const mapStateToProps = (state) => {
    return ({
        user: state.login.user
    });
};

export default connect(
    mapStateToProps
)(UserData);