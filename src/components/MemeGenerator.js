import React from 'react'
import axios from 'axios'

class MemeGenerator extends React.Component {
    constructor(){
        super()
        this.state = {
            topText: '',
            bottomText: '',
            randomImg: "https://i.imgflip.com/345v97.jpg",
            apiImgs: []
        }
    }

    componentDidMount = () => {
        axios.get(`https://api.imgflip.com/get_memes`)
        .then(res => {
            const memes = res.apiImgs.data
            this.setState({apiImgs: memes})
        })
        .catch(error => {
            console.log("something is wrong", error)
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