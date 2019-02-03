//importing redux library

import { combineReducers } from 'redux'

//reducers


const songReducers = () =>{
    return [
        {title: 'Sick Boy', artist: 'Chain Smokers', album: 'This is us'},
        {title: 'Bad at love', artist : 'Halsey', album: 'No love'},
        {title: 'Never let it go', artist: 'Slushii', album: 'Call in on me'},
        {title: 'In the end', artist: 'Linkin Park', album: 'Miniutes to midnight'}
    ]
}

const selectedSongReducers = (selectedSong = null, action) =>{
    if(action.type === 'SONG_SELECT'){
        return action.payload
    }
    return selectedSong;

    
}

export default combineReducers({
    songs: songReducers,
    selectedSong : selectedSongReducers
})