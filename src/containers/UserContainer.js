import React, { Component } from 'react';
import { connect } from 'react-redux';
import { User } from '../components/User';

class UserContainer extends Component {
    render() {
        const { user } = this.props;
        return <User name={user.name} />;
    }
}

const mapStateToProps = store => {
    return {
        user: store.user,
    };
};

export default connect(mapStateToProps)(UserContainer);
