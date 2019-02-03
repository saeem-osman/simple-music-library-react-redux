import React from 'react'
import { connect } from 'react-redux'

const SongDetail = ( {song} ) => {
    if(!song)
        return(
            <div>Please select anything</div>
        )
    return(
        <div className="content">
            <div className="item">
                <h3>Info</h3>
                <hr />
                <p>
                    <b>Title: </b> {song.title}
                    <br />
                    <b>Artist: </b> {song.artist}
                    <br />
                    <b>Album: </b> {song.album}
                    <br />
                </p> 
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>{
    
    return {song : state.selectedSong}
}


export default connect(mapStateToProps)(SongDetail)