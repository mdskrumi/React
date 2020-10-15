import React from 'react';
import { connect } from 'react-redux';
import StreamForm from './StreamForm';
import { fetchStream, updateStream } from '../../actions';




class StreamEdit extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        this.props.updateStream(this.props.stream.id, formValues);
        console.log(formValues);
    }

    render() {
        console.log(this.props);
        if (!this.props.stream) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <h3>Edit Stream {" "} {this.props.stream.title}</h3>
                <StreamForm
                    onSubmit={this.onSubmit}
                    initialValues={{ title: this.props.stream.title, description: this.props.stream.description }}
                />
            </div>
        )
    }
}



const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, {
    fetchStream,
    updateStream
})(StreamEdit);