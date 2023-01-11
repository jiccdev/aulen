import LayoutPage from '../src/components/LayoutPage/LayoutPage';
import PropertiesProvider from '../src/context/properties/PropertiesProvider';
import CustomersProvider from '../src/context/customers/CustomersProvider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/globals.css';
import 'mapbox-gl/dist/mapbox-gl.css';

export const App = ({ Component, pageProps }) => {
  return (
    <CustomersProvider>
      <PropertiesProvider>
        <LayoutPage>
          <Component {...pageProps} />
        </LayoutPage>
      </PropertiesProvider>
    </CustomersProvider>
  );
};

export default App;
