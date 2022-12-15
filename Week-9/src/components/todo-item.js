import { FormControlLabel, FormGroup, ListItem, Checkbox, Typography, ListItemSecondaryAction, IconButton } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { TOGGLE_COMPLETED, TOGGLE_DELETE, TOGGLE_IMPORTANT } from "../Redux/action";
import DeleteIcon from "@material-ui/icons/Delete";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";

export default function TodoList({id,title,completed, important}){
    const dispatch = useDispatch();
    function toggleCheckBox() {
        dispatch({
            type: TOGGLE_COMPLETED,
            payload: {id},
        })
    }
    function handleDeleteClick() {
        dispatch({
            type: TOGGLE_DELETE,
            payload: {id},
        })
    }
    function handleImportantClick() {
        dispatch({
            type: TOGGLE_IMPORTANT,
            payload: {id},
        })
    }
    return(
        <ListItem dense>
            <FormGroup><FormControlLabel control={
                <Checkbox
                checked={completed}
                name={title}
                onChange={toggleCheckBox}
                color="primary"/>
            }
            label={<Typography style={{textDecoration:completed && "line-through"}}>{title}</Typography>}
            >
                </FormControlLabel></FormGroup>
                <ListItemSecondaryAction>
                <IconButton onClick={handleImportantClick} edge="end">{important ? <StarIcon/> : <StarBorderIcon/>}</IconButton>

                    <IconButton onClick={handleDeleteClick} edge="end">
                        <DeleteIcon/>
                    </IconButton>
                </ListItemSecondaryAction>

        </ListItem>
    )
}