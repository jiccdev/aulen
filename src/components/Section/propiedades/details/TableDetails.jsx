import React from 'react';

/* Bootstrap components */
import Table from 'react-bootstrap/Table';

const TableDetails = ({ propertyData }) => {
  const { surface_m2, bedrooms, bathrooms } = propertyData;

  return (
    <Table striped bordered>
      <tbody>
        <tr>
          <th>Superficie útil</th>
          <td className="bg-white">
            {surface_m2 === null ? 'sin registro' : surface_m2} m<sup>2</sup>
          </td>
        </tr>
        <tr>
          <th>Dormitorios</th>
          <td>{bedrooms === null ? 'sin registro' : bedrooms}</td>
        </tr>
        <tr>
          <th>Baños</th>
          <td>{bathrooms === null ? 'sin registro' : bathrooms}</td>
        </tr>
        <tr>
          <th>Fecha de entrega</th>
          {/* <td>{deliveryDate || ''}</td> */}
        </tr>
        <tr>
          <th>Estado del Proyecto</th>
          {/* <td>{projectStatus || ''}</td> */}
        </tr>
      </tbody>
    </Table>
  );
};

export default TableDetails;
