import React, { Component } from 'react';

import classes from './Backdrop.module.css';

class Backdrop extends Component {
    render() {
        return (
            <div className={classes.Backdrop} style={this.props.show ? {} : {display:'none'}} onClick={(e)=>this.props.resetBackdrop()} >
                {this.props.children}
            </div>
        );
}
};

export default Backdrop;