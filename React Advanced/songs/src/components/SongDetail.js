import React from 'react';

import { connect } from 'react-redux';


const SongDetail = ({ song }) => {
    if (song === null) {
        return (
            <div style={{ margin: '60px' }}>
                <h3>Select a Song</h3>
            </div>
        );
    }
    return (
        <div style={{ margin: '60px' }}>
            <h3>{song.title}</h3>
            <h4>{song.duration}</h4>
        </div>
    )
}


const mapStateToProps = (state) => {
    // console.log(state.selectedSong);
    return { song: state.selectedSong };
}


export default connect(mapStateToProps)(SongDetail);

