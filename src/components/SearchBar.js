import React from 'react';
import data from '../data.json';

class SearchBar extends React.Component {
  state = {
    searchQuery: '',
  };

  handleOnChange = (event) => {
    this.props.onFilter(event.target.value);
    this.setState({
      searchQuery: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <form>
          <label>Search</label>
          <input
            type="text"
            name="searchQuery"
            onChange={this.handleOnChange}
            value={this.state.searchQuery}
          />
          <label>Only show products on stock</label>
          <input type="checkbox" name="inStock" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
