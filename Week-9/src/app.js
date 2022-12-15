import React from "react";
import logo from "./images/logo.png"
import  { AppBar, Box, Container, IconButton, makeStyles, Paper, Toolbar, Typography } from "@material-ui/core";
import TodoAdder from "./components/todo-adder";
import TodoContainer from "./components/todo-container";

const useStyles = makeStyles((theme) => ({
    root: {},
    appContainer: {
        paddingLeft: 100,
        paddingRight: 100,
        marginTop: 100,
    },
    wrapper: {
        textAlign:"center",
        width:"100%"
    }
}));

export default function Todos(){
    const classes = useStyles();
    return(
        <Box className={classes.root}>
            
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge = "start" color="inherit">
                    <img src={logo} style={{width:"50px",borderRadius:"50px"}}/>
                    </IconButton>
                    <Typography variant="h5">Todos</Typography>
                </Toolbar>
            </AppBar>
            <Container className={classes.appContainer}>
                <Paper className={classes.wrapper}>
<TodoAdder/>
<TodoContainer/>
                </Paper>
            </Container>
        </Box>
    )
}