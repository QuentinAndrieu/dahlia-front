import React, { Component } from 'react';

export default class TextareaCustom extends Component {

    constructor(props) {
        super();
    }

    render() {
        const errorInputStyle = {
            borderBottom: '2px solid #FF0000'
        }

        const inputStyle = {
            border: '1px solid #efefef',
            backgroundColor: 'rgb(250, 250, 250)',
            paddingLeft: '5px'
        }

        return (
            <div>
                <label>{this.props.label}</label>
                <textarea
                    {...this.props.input}
                    className="materialize-textarea"
                    type={this.props.type}
                    style={(this.props.touched && this.props.error) ? errorInputStyle : inputStyle} />
            </div>
        )
    }
}
