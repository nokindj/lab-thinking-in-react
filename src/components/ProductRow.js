import React from 'react';
import data from '../data.json';
import ProductTable from './ProductTable';

function ProductRow(props) {
  return (
    <tr>
      <td style={{ color: props.stocked ? 'black' : 'red' }}> {props.name}</td>
      <td>{props.price}</td>
    </tr>
  );
}

export default ProductRow;
