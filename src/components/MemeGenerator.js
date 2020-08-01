import React from 'react'
import axios from 'axios'

class MemeGenerator extends React.Component {
    constructor() {
        super()
        
        this.state = {
            topText: '',
            bottomText: '',
            randomImage: "https://i.imgflip.com/30b1gx.jpg",
            memeImgs: []
        }
    }

    componentDidMount(memes) {
        axios.get(' https://api.imgflip.com/get_memes')
        .then(response => {
            memes = response.data
            this.setState({ memeImgs: memes})
        })
    }

    render() {
        return (
            <div className="meme__text">
                <form>
                    
                </form>
            </div>
            <div className="meme">
                <img className="meme__images" src={this.state.randomImage} alt="" />
            </div>
        )
    }
}

export default MemeGenerator;