import React, { Component } from 'react';

import classes from './Note.module.css'

class Note extends Component {
    constructor (props){
        super(props);

        console.log(props);
        
        this.state = {
            title : "",
            text: props.note.text ?? "",
            index: props.index,
            start : false
        }
    }

    componentDidUpdate(oldProps){
        if(oldProps !== this.props){
            console.log("Setting");
            console.log(this.props);
            
            this.setState({title : this.props.index ? this.props.note.title : "",
                text: this.props.index ? this.props.note.text : "",
                index: this.props.index}
            );
        }
    }

    render() {
        return (
            <div className={classes.Note} style={{transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)'}}>
                <input type="text" onChange={e => this.handleChangeTitle(e)} value={this.state.title} placeholder="Title"></input>
                <textarea onChange={ e => this.handleChangleText(e)} value={this.state.text} placeholder="Add note text" maxLength="512" rows="10"></textarea>
                <button className={classes.accept} disabled={this.state.title === ''} onClick={()=>{
                    this.props.save(this.state);
                }}>Save</button>
                {this.props.index !== undefined ? <button className={classes.delete} onClick={()=>{this.props.onDelete(this.props.index)}}>Delete</button>:null}
            </div>
        );
    }

    handleChangeTitle(e){
        this.setState({title: e.target.value});
        this.props.note.title = e.target.value;
    }

    handleChangleText(e){
        this.setState({text : e.target.value});
        this.props.note.text =e.target.value;
    }
};

export default Note;