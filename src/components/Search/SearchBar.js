import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input } from 'antd';
import { Select } from 'antd';


class SearchBar extends Component {
    state = {
        dropdown: "AUTHOR",
    }
    handleChange = (value) => {
        this.setState({
            dropdown: `${value}`
        })
    }
    sendSearch = (event) => {
        const action = {
            type: `GET_SEARCH_STORIES_${this.state.dropdown}`,
            payload: event.toLowerCase()  //to make searching less specific
        };
        this.props.dispatch(action);
    }
    render() {
        const Search = Input.Search;
        const Option = Select.Option;
        return (
            <div>
                <h1>Search All Stories</h1>
                <Search
                    placeholder="input search text"
                    onSearch={value => this.sendSearch(value)}
                    style={{ width: 200 }}
                />
                <div>
                    <Select defaultValue="Search By: Author" style={{ width: 160 }} onChange={this.handleChange}>
                        <Option value="AUTHOR" >Author</Option>
                        <Option value="TITLE">Title</Option>
                        <Option value="DESCRIPTION">Description</Option>
                    </Select>
                </div>
            </div>
        )
    }
};

export default connect()(SearchBar);