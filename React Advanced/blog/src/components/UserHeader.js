import React from 'react';
import { connect } from 'react-redux';

const UserHeader = (props) => {

    const u = props.users.find(user => props.uID === user.id);

    if (!u) {
        return null;
    } else
        return <h4> {u.name} </h4>
};

const mapStateToProps = (state) => {
    return { users: state.users };
};

export default connect(mapStateToProps)(UserHeader);