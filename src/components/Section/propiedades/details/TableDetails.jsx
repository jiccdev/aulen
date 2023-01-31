import React from 'react';

/* Bootstrap components */
import Table from 'react-bootstrap/Table';
import styles from '../../../../../styles/components/propiedades/details/TableDetails.module.css';

const TableDetails = ({ propertyData }) => {
  const { surface_m2, bedrooms, bathrooms } = propertyData;

  return (
    <Table striped bordered className={styles.tableDetails}>
      <tbody>
        <tr>
          <th>Superficie útil</th>
          <td className="bg-white">
            {surface_m2 === null ? 'sin registro en' : surface_m2} m<sup>2</sup>
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
          <td>sin registro</td>
          {/* <td>{deliveryDate || ''}</td> */}
        </tr>
        <tr>
          <th>Estado del Proyecto</th>
          <td>sin registro</td>
          {/* <td>{projectStatus || ''}</td> */}
        </tr>
      </tbody>
    </Table>
  );
};

export default TableDetails;
