import React, { Component } from 'react';
import { Collection, CollectionItem, Input, Row } from 'react-materialize';
import { Link } from 'react-router-dom';

class ListCustom extends Component {

    constructor(props) {
        super(props);

        this.state = {
            list: []
        }

        this.searchList = this.searchList.bind(this);
    }

    componentDidMount() {
        this.setState({
            list: this.props.list
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.list !== this.state.list) {
            this.setState({
                list: nextProps.list
            })
        }
    }

    searchList(event) {
        const target = event.target;
        const value = target.value;

        const updatedList = this.props.list.filter((element) => {
            return element.link.toLowerCase().search(
                value.toLowerCase()) !== -1;
        });

        this.setState({
            list: updatedList
        });
    }

    customPath(path, id) {
        return path + '/' + id;
    }

    render() {
        let mappedList = this.state.list.map(element =>
            <CollectionItem key={element._id} className="grey-text">
                <Link to={this.customPath(this.props.path, element._id)}>{element.link}</Link>
            </CollectionItem>);

        return (
            <div className="list">
                <Row>
                    <Input onChange={this.searchList} s={12} label="Search" />
                </Row>
                <Collection>
                    {mappedList}
                </Collection>
            </div>
        );
    }
}

export default ListCustom;
