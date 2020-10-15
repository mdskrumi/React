import React from 'react';
import Modal from '../../Modal';
import { connect } from 'react-redux';

import { deleteStream } from '../../actions';

import history from '../../history';



const StreamDelete = (props) => {

    const onDelete = () => {
        props.deleteStream(props.match.params.id);
    }
    return (

        < div >
            <div className="ui active centered inline massive loader"></div>
            <Modal
                headerMsg="Delete Stream"
                contentMsg="Are you sure you want to delete this stream ? This can not be undone."
                YES={true}
                NO={true}
                onDismiss={() => history.push('/')}
                onYesClicked={onDelete}
            />
        </div >
    );
}



export default connect(null, {
    deleteStream
})(StreamDelete);