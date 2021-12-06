import './styles.css';

import { Component } from "react";


export class Button extends Component {
    render() {
        const { text, onClick } = this.props;

        return (
            <button classsName='button' onClick={onClick}>
                {text}
            </button>
        );
    }
}

