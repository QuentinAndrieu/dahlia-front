import React, { Component } from 'react';

export default class InputCustom extends Component {

    constructor(props) {
        super();
    }

    render() {
        const errorInputStyle = {
            border: '2px solid #FF0000'
        }

        const inputStyle = {
            border: '1px solid #efefef',
            backgroundColor: 'rgb(250, 250, 250)',
            paddingLeft: '5px'
        }

        return (
            <div>
                <label>{this.props.label}</label>
                <input {...this.props.input}
                    type={this.props.type}
                    style={(this.props.touched && this.props.error) ? errorInputStyle : inputStyle} />
            </div>
        )
    }
}
