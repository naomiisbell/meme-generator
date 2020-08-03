**SOURCES**

https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/templates/sign-up/SignUp.js

https://reactrouter.com/web/guides/quick-start

https://youtu.be/f7T48W0cwXM

https://youtu.be/DLX62G4lc44

https://youtu.be/jl-9vlEz288

https://github.com/prescottprue/react-redux-firebase/issues/249

https://colorhunt.co/palette/196113

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



FOR THE LOGIN/SIGN-UP COMPONENT

-I will have to create a firebase component to keep track of the users

npm i firebase

- the component will be functional
- use useState and useEffect
- set variables/properties for ....
* open (login and sign up modal)
* username
* password
* email
* user

** create useEffect function that tells whether the user is logged in or logged out setUser(null) >> user has logged out 

** create sign up function that authorizes the user and creates the user with Email and Password setOpenSignUp(false) >> modal has not been opened

** create the same thing but for a login function

- use material UI for the sign up and login set up
value={whatever input property you are grabbing}
onChange={(e) => set...(e.target.value)}

-the sign up button should grab the signUp function





