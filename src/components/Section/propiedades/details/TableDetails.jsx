import React from 'react';

/* Bootstrap components */
import Table from 'react-bootstrap/Table';

const TableDetails = () => {
  return (
    <Table striped bordered hover>
      <tbody>
        <tr>
          <th>Superficie útil</th>
          <td>5454</td>
        </tr>
        <tr>
          <th>Dormitorios</th>
          <td>5454</td>
        </tr>
        <tr>
          <th>Baños</th>
        </tr>
        <tr>
          <th>Fecha de entrega</th>
        </tr>
        <tr>
          <th>Estado del Proyecto</th>
        </tr>
      </tbody>
    </Table>
  );
};

export default TableDetails;
