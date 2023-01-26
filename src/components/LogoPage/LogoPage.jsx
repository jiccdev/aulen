import React from 'react';
import Image from 'next/image';
import LogoAulenPropiedades from '../../assets/img/LogoSite/LOGO-AULEN-PROPIEDADES.png';

const LogoPage = () => {
  return (
    <Image
      src={LogoAulenPropiedades}
      alt="logo-aulen-propiedades"
      priority
      className="img-fluid"
      width={220}
      height={220}
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default LogoPage;
