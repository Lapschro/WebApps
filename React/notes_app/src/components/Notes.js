import React, { Component } from 'react';
import classes from './Notes.module.css'

class Notes extends Component {
    render() {
        return (
            <div className={classes.container}>
                {this.props.notes.map((note, i)=>{
                    return (
                        <div key={i} className={classes.card} onClick={()=>{this.props.onNoteClick({title:note.title, text:note.text, index:note.index})}}>
                            <h1>
                                {note.title}
                            </h1>
                            <hr></hr>
                            <p>
                                {note.text}
                            </p>
                        </div>
                    );
                })}
                <div className={classes.card} onClick={()=>this.props.onAddNote()}>
                    Add Note
                </div>
            </div>
        );
}
};

export default Notes;  