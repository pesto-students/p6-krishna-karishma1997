import { Box, Divider, Grid, List, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import TodoList from "./todo-item";

const useStyles = makeStyles(()=>({
    root:{
        margin: 20,
        padding: 20,
        backgroundColor: "rgb(92.9%, 92.9%, 92.9%)"
    }
}))
export default function TodoContainer(params) {
    const classes = useStyles();
    const {todos} = useSelector((state)=>{
        return{
            todos: state.todos
        }
    })
    return(
<Box className={classes.root}>
    <Grid container spacing={2}>
        <Grid item xs={6}>
            <Typography align="left" variant="h5" gutterBottom>
My Todos
            </Typography>
            <Divider/>
            <List>{todos.map((todo)=>{
                if(!todo.completed){
                return <TodoList {...todo}/>
                }else return null;
            })}</List>
        </Grid>
<Grid item xs={6} >
    <Typography align="left" variant="h5" gutterBottom>Completed</Typography>
    <Divider/>
    <List>{todos.map((todo)=>{
                if(todo.completed){
                return <TodoList {...todo}/>
                }else return null;
            })}</List>
</Grid>

    </Grid>
</Box>
    )
}