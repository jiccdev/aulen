import LayoutPage from '../src/components/LayoutPage/LayoutPage';
import PropertiesProvider from '../src/context/properties/PropertiesProvider';
import CustomersProvider from '../src/context/customers/CustomersProvider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'mapbox-gl/dist/mapbox-gl.css';
import { NextUIProvider } from '@nextui-org/react';

export const App = ({ Component, pageProps }) => {
  return (
    <NextUIProvider>
      <CustomersProvider>
        <PropertiesProvider>
          <LayoutPage>
            <Component {...pageProps} />
          </LayoutPage>
        </PropertiesProvider>
      </CustomersProvider>
    </NextUIProvider>
  );
};

export default App;
