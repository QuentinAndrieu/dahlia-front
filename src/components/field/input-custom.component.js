import React, { Component } from 'react';

export default class InputCustom extends Component {

    constructor(props) {
        super();
    }

    render() {
        const errorInputStyle = {
            border: '1px solid #DB93B0',
            backgroundColor: 'rgb(250, 250, 250)',
            paddingLeft: '5px'
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
                    style={(this.props.meta.touched && this.props.meta.error) ? errorInputStyle : inputStyle} />
            </div>
        )
    }
}
