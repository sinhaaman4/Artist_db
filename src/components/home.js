import React from 'react'

import Banner from '../components/banner'

import ArtistsList from './artist_list'

const URL_ARTIST ='http://localhost:3004/artists'

class Home extends React.Component{

    constructor(props){
        super(props)

        this.state ={
            artists:''
        }
    }

    componentDidMount(){
        fetch(URL_ARTIST,{
            method:'GET'
        })
        .then(Response=>Response.json())
        .then(json=>{
            this.setState({
                artists:json
            })
        })
    }

    render(){
        return(
            <div>
                <Banner/>
                <ArtistsList allArtists ={this.state.artists}/>
            </div>
        )
        
    }
        
}

export default Home;
