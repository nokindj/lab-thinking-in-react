import React from 'react';
import data from './data.json';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';
import { render } from '@testing-library/react';

class App extends React.Component {
  state = {
    products: data,
  };

  render() {
    return (
      <div className="App">
        <FilterableProductTable products={this.state.products} />
      </div>
    );
  }
}

export default App;
