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

    componentDidMount() {
        axios.get(' https://api.imgflip.com/get_memes')
        .then(response => {
            const { memes } = response.data
            this.setState({ memeImgs: memes})
        })
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default MemeGenerator;