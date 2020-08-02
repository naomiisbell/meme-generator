import React, { useState, useEffect }from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { auth } from "firebase";


function Copyright() {
    return (
    <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
        Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
    </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    },
    avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    },
    form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    },
    submit: {
    margin: theme.spacing(3, 0, 2),
    },
}));

function SignUp() {
    const classes = useStyles();
    
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    // const [user, setUser] = useState(null)


    const signUp = (event) => {
        // this will prevent the form from refreshing and losing information
        event.preventDefault()

        auth.createUserWithEmailAndPassword(firstName, lastName, email, password)
        .catch((error) => alert(error.message))

    }


    return (
    <Container 
    component="main" 
    maxWidth="xs"
    >
        <CssBaseline />
        <div className={classes.paper}>
        <Avatar className={classes.avatar}>
            
        </Avatar>
        <Typography component="h1" variant="h5">
                Sign up
        </Typography>
        <form className={classes.form} noValidate>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                // added code
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                // added code
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                // added code
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                // added code
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </Grid>
            </Grid>
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={signUp}
            >
            Sign Up
            </Button>
            <Grid container justify="flex-end">
            <Grid item>
                <Link href="./Login" variant="body2">
                Already have an account? Sign in
                </Link>
            </Grid>
            </Grid>
        </form>
        </div>
        <Box mt={5}>
        <Copyright />
        </Box>
    </Container>
    
    );
}

export default SignUp;