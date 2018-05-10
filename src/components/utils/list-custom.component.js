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
            list: this.filterList(this.props.list)
        });
    }

    componentWillReceiveProps(nextProps) {
        if (this.filterList(nextProps.list) !== this.state.list) {
            this.setState({
                list: this.filterList(nextProps.list)
            })
        }
    }

    searchList(event) {
        const target = event.target;
        const value = target.value;

        const updatedList = this.filterList(this.props.list).filter((element) => {
            return element.link.toLowerCase().search(
                value.toLowerCase()) !== -1;
        });

        this.setState({
            list: updatedList
        });
    }

    customPath(path, id) {
        if (path) {
            return path + '/' + id;
        } else {
            return '/';
        }
    }

    filterList(list) {
        const listUpdated = list.filter((item) => {
            return !item.trash;
        });

        return listUpdated;
    }

    customSearchTitle(title) {
        return 'Search ' + title;
    }

    render() {
        let mappedList = this.state.list.map(element => <Link key={element._id} to={this.customPath(this.props.path, element._id)}>
            <CollectionItem key={element._id} className="grey-text">
                {element.link}
            </CollectionItem>
        </Link>);

        return (
            <div className="list">
                <Row>
                    <Input onChange={this.searchList} s={12} label={this.customSearchTitle(this.props.title)} />
                </Row>
                <Collection>
                    {mappedList}
                </Collection>
            </div>
        );
    }
}

export default ListCustom;
