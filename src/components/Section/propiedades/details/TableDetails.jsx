import React from 'react';

/* Bootstrap components */
import Table from 'react-bootstrap/Table';

const TableDetails = ({ filtredData }) => {
  const { squareMeters, bedrooms, bathrooms, projectStatus, deliveryDate } =
    filtredData[0] || {};

  return (
    <Table striped bordered>
      <tbody>
        <tr>
          <th>Superficie útil</th>
          <td className="bg-white">
            {squareMeters || ''} m<sup>2</sup>
          </td>
        </tr>
        <tr>
          <th>Dormitorios</th>
          <td>{bedrooms || ''}</td>
        </tr>
        <tr>
          <th>Baños</th>
          <td>{bathrooms || ''}</td>
        </tr>
        <tr>
          <th>Fecha de entrega</th>
          <td>{deliveryDate || ''}</td>
        </tr>
        <tr>
          <th>Estado del Proyecto</th>
          <td>{projectStatus || ''}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default TableDetails;
