import { combineReducers } from 'redux';


const songsReducer = () => {
    return [
        {
            title: 'My Song One',
            duration: '2:30',
        },
        {
            title: 'My Song Two',
            duration: '2:30',
        },
        {
            title: 'My Song three',
            duration: '2:30',
        },
        {
            title: 'My Song Four',
            duration: '2:30',
        },
        {
            title: 'My Song Five',
            duration: '2:30',
        },
        {
            title: 'My Song Six',
            duration: '2:30',
        },
    ]
}


const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.paylaod;
    }
    return selectedSong;
}


export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});