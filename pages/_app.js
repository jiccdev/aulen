import LayoutPage from '../src/components/LayoutPage/LayoutPage';
import PropertiesProvider from '../src/context/properties/PropertiesProvider';
import '../styles/globals.css';

export const App = ({ Component, pageProps }) => {
  return (
    <PropertiesProvider>
      <LayoutPage>
        <Component {...pageProps} />
      </LayoutPage>
    </PropertiesProvider>
  );
};

export default App;
