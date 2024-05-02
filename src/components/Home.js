import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import { Link } from 'react-router-dom';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { connect } from 'react-redux';
import { setModelName } from '../redux/actions';

const Home = () => {
  const columnDefs = [
    { headerName: "Make", field: "make" },
    { headerName: "Model", field: "model", cellRenderer: ModelLinkRenderer },
    { headerName: "Price", field: "price" }
  ];

  const rowData = [
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxster", price: 72000 }
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}>
      </AgGridReact>
    </div>
  );
};

const ModelLinkRenderer = connect()(props => {
    const handleModelClick = () => {
        props.dispatch(setModelName(props.value));
    };

    return <Link to={`/profile`} onClick={handleModelClick}>{props.value}</Link>;
});


export default (Home);
