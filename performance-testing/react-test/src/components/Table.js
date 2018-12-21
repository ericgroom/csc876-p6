import React from "react";
import "./Table.css";

const Table = props => (
  <table>
    <thead>
      <tr>
        <td>Key</td>
        <td>Random Value</td>
      </tr>
    </thead>
    <tbody>
      {props.items &&
        props.items.map(item => (
          <tr key={item.key}>
            <td>{item.key}</td>
            <td>{item.value}</td>
          </tr>
        ))}
    </tbody>
  </table>
);

export default Table;
