import React from 'react';
import { Image, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import "./login.scss"

const UserData = (props) => (
     <div className="user-wrapper">
        {props.user
            ? <div>
                <Image  src={props.user.imageUrl} avatar size='tiny' alt={props.user.name} title={props.user.name} />
              </div>
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