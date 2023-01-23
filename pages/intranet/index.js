import React, { Fragment } from 'react';
import HeadPage from '../../src/components/HeadPage/HeadPage';
import Login from '../../src/components/Section/intranet/Login';

const Intranet = () => {
  return (
    <Fragment>
      <HeadPage title="Intranet" />

      {/* LOGIN FORM - INTRANET */}
      <Login />
    </Fragment>
  );
};

export default Intranet;
