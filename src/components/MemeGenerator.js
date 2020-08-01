import React from 'react'
import axios from 'axios'
import { Input, Button } from "@material-ui/core"

const meme_URL = "https://api.imgflip.com/get_memes"

class MemeGenerator extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "https://i.imgflip.com/345v97.jpg",
            apiImgs: [],
            formSubmitted: false,
        }
        this.handleSubmission = this.handleSubmission.bind(this)
    }

    
    componentDidMount = () => {
        // used GET method to get the api url 
        axios.get(`${meme_URL}`)
        // .then(res => res.json())
        // used .then method to make my response
        .then(response => {
            // response is equal to my memes variable
            // called the apiImgs property to gather the data from my empty arr
            const memes = response.data
            console.log(response.data)
            // setState to the apiImgs prop = memes data...
            this.setState({ apiImgs: [memes] })
        }
        )

        // always add .catch error message !!
        .catch(error => {
            console.log("something is wrong", error)
        })
    }
    

    handleSubmission = (event) => {
        event.preventDefault()
        const randomMeme = Math.floor(Math.random() * this.state.apiImgs[0].data.memes.length)
        console.log(randomMeme)
        console.log(this.state.apiImgs)
        // console.log(this.state.apiImgs.data)
        const randApiImg = this.state.apiImgs[0].data.memes[randomMeme].url
        this.setState({ randomImg: randApiImg })
    }

    render() {
        return (
            <div className="meme">
                <form className="meme__form" onSubmit={this.handleSubmission}>
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

                    <Button onClick={this.handleSubmission}>Generate</Button>
                </form>
                    <img src={this.state.randomImg} alt=""/>
            </div>
        )
    }
}



export default MemeGenerator;