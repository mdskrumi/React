import React from 'react';

import { connect } from 'react-redux';
import { signIn, signOut } from '../actions'

const AUTH_TASK = {
    SIGNIN: 'SignIn',
    SIGNOUT: 'SignOut',
}

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load("client:auth2", () => {
            window.gapi.client.init({
                clientId: "809620780514-iqh3pgt4ia1tmtbuf4eiue1a7vsv6jsl.apps.googleusercontent.com",
                scope: "email",
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.authChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.authChange);
            })
        });
    }

    authChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut(this.auth.currentUser.get().getId());
        }
    }

    userAuth = (task) => {
        if (task === AUTH_TASK.SIGNIN) {
            this.auth.signIn();
            this.props.signIn(this.auth.currentUser.get().getId());

        }
        else if (task === AUTH_TASK.SIGNOUT) {
            this.auth.signOut();
            this.props.signOut(this.auth.currentUser.get().getId());
        }
    }

    renderContent() {
        if (this.props.isSignedIn === null || this.props.isSignedIn === false)
            return <button className="ui blue button"
                onClick={() => this.userAuth('SignIn')}> Sign In </button>
        return <button className="ui red button"
            onClick={() => this.userAuth('SignOut')}> Sign Out </button >
    }

    render() {
        return <div>
            {this.renderContent()}
        </div>
    }
}

const mapStatetoMap = (state) => {
    return ({
        isSignedIn: state.auth.auth
    });
}



export default connect(mapStatetoMap, {
    signIn,
    signOut
})(GoogleAuth);