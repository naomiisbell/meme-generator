PSEUDOCODE 

** Need to create react router for home page, create page, and profile page

All Components >>

- MemeGenerator.js
- Header.js
- Firebase.js 
- MemeUpload.js
- Posts.js

** multi-page website **
- LoginOrSignUp.js
- MemeGenerator.js
(components will be inside of here)

** MEME GEN. and INSTALLING API **

npm i axios

create class component

this.state = {
    topText: 
    bottomText:
    randomImage:
    memeImgs: [empty array]
}

for API

componentDidMount() {
    use axios.fetch('url')
    .then
    const {memes} = the data and response
    this.setState({ memeImgs: memes})
}

RETURN >>>
    a form 
    input > topText using this.state (value)
    onChange > this.function (create function to handleChange)

    input > bottomText using this.state (value)
    onChange > this.function

    create a generate button to randomize through photos

    create a div for the meme
    - header for top top text (this.state)
    - header for bottom text (this.state)
    - image this.state.randomImg << using random image as a filler
    *the generate button will shuffle through random photos in the API


LASTLY >>
 create handleSubmit function
 essentially creating a loop for the API images

 code snippet ...

 handleSubmit(event) {
     event.preventDefault()
     const randNum = Math.floor(Math.random() * this.state.memeImgs.length)
     const randMemeImg = this.state.memeImgs[randNum].url
     this.setState({ randomImg: memeImgs })
 }


 