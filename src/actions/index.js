//Action creator

export const selectSong = (song) =>{
    //return an action

    return {
        type : 'SONG_SELECT',
        payload : song
    };
};