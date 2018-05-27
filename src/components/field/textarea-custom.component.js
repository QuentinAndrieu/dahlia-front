import React, { Component } from 'react';

export default class TextareaCustom extends Component {

    constructor(props) {
        super();
    }

    render() {
        const errorInput = {
            borderBottom: '2px solid #FF0000'
        }

        return (
            <div>
                <label>{this.props.label}</label>
                <textarea
                    {...this.props.input}
                    className="materialize-textarea"
                    type={this.props.type}
                    style={(this.props.touched && this.props.error) ? errorInput : {}}
                    placeholder={this.props.label} />
            </div>
        )
    }
}
