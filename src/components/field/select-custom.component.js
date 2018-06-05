import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

export default class SelectBoxCustom extends Component {

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
                <Select
                    {... this.props.input}
                    name={this.props.label}
                    value={this.props.input.value}
                    onChange={(value) => this.props.input.onChange(value)}
                    onBlur={(value) => this.props.input.onBlur(value)}
                    style={(this.props.touched && this.props.error) ? errorInputStyle : inputStyle}
                    options={this.props.values}
                    searchable={false}
                    simpleValue
                />
            </div>
        )
    }
}
