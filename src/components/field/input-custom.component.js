import React, { Component } from 'react';

export default class InputCustom extends Component {

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
                <input {...this.props.input}
                    type={this.props.type}
                    style={(this.props.touched && this.props.error) ? errorInput : {}}
                    placeholder={this.props.label} />
            </div>
        )
    }
}
