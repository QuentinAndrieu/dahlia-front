import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

export default class SelectBoxCustom extends Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                <label>{this.props.label}</label>
                <Select
                    {... this.props.input}
                    name={this.props.label}
                    value={this.props.input.value}
                    // onChange={this.updateSelectedOption}
                    onChange={(value) => this.props.input.onChange(value)}
                    onBlur={(value) => this.props.input.onBlur(value)}
                    options={this.props.values}
                    searchable={false}
                    simpleValue
                />
            </div>
        )
    }
}
