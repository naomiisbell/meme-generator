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
        // used GET method to get the api url 
        axios.get(`https://api.imgflip.com/get_memes`)
        // used .then method to make my response
        .then(res => {
            // response is equal to my memes variable
            // called the apiImgs property to gather the data from my empty arr
            const memes = res.apiImgs.data
            // setState to the apiImgs prop = memes data...
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