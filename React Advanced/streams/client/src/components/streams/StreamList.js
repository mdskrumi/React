import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams();
    }


    renderAdmin(stream) {
        if (stream.userId && this.props.userId && stream.userId === this.props.userId) {
            return (
                <div className="right floated content">
                    <Link to={`/streams/edit/${stream.id}`} className="ui button primary" > Edit </Link>
                    <Link to={`/streams/delete/${stream.id}`} className="ui button negative" > Delete </Link>
                </div>
            )
        }
        else {
            return null;
        }
    }

    renderCreateStreamButton() {
        if (this.props.isSignedIn) {
            return (
                <div style={{ textAlign: 'right' }}>
                    <Link to="/streams/new" className="ui button primary" style={{ marginTop: "20px" }} >
                        Create New Stream
                    </Link>
                </div>
            )
        }
    }

    renderList() {
        return this.props.streams.map((stream) => {
            return (
                <div className="item" key={stream.id}>
                    {this.renderAdmin(stream)}
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        <Link className="big header" to={`/streams/${stream.id}`}>{stream.title}</Link>
                        <div className='description'>{stream.description}</div>
                    </div>
                </div>
            );
        });
    }


    render() {
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">
                    {this.renderList()}
                    <hr />
                    {this.renderCreateStreamButton()}
                </div>
            </div>
        )
    }
}


const mapStatetoProps = (state) => {

    return {
        streams: Object.values(state.streams),
        userId: state.auth.userId,
        isSignedIn: state.auth.auth,
    };
}

export default connect(mapStatetoProps, {
    fetchStreams,
})(StreamList);