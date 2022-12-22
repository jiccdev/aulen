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
      width={250}
      height={250}
    />
  );
};

export default LogoPage;
