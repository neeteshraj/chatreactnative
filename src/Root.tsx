import React, {FC} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as ReduxProvider} from 'react-redux';
import RootNav from './navigation/Root/Root';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';

//CUSTOM IMPORTS
import {store} from './redux/store/store';

interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @Root
 **/

let persistor = persistStore(store);

const Root: FC<IProps> = () => {
  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor}>
        <PaperProvider>
          <RootNav />
        </PaperProvider>
      </PersistGate>
    </ReduxProvider>
  );
};

export default Root;
