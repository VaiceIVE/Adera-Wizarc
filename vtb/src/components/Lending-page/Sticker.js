import React, { Component } from "react";
import '../../css/style.css';

export default class Sticker extends Component {
    constructor (props) {
        super(props);
        this.state = {
            text: '',
            color: '',
            rot: '',
            top: '',
            left: '',
            right: '',
        };
    }
    render() {
        const {text, color, rot, top, left, right} = this.props;
        const style = {
            "background": color,
            "top": top,
            "left": left,
            "right": right,
            "transform": rot
        }
        return (
            <div className="sticker" style={style}>{text}</div>
        )
    }
}