import React from 'react'
import axios from 'axios'
import { Input, Button } from "@material-ui/core"

class MemeGenerator extends React.Component {
    constructor(){
        super()
        this.state = {
            topText: '',
            bottomText: '',
            randomImg: "https://i.imgflip.com/345v97.jpg",
            apiImgs: [],
            formSubmitted: false,
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
                <Input 
                name="topText"
                type="text"
                placeholder="add top text"
                value={this.state.topText}
                />
                <Input 
                name="bottomText"
                type="text"
                placeholder="add bottom text"
                value={this.state.bottomText}
                />

                <Button>Generate</Button>
            </div>
        )
    }
}



export default MemeGenerator;