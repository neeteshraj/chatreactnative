import React, {FC} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as ReduxProvider} from 'react-redux';
import RootNav from './navigation/Root/Root';
import {store} from './redux/store/store';

interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @Root
 **/

const Root: FC<IProps> = () => {
  return (
    <ReduxProvider store={store}>
      <PaperProvider>
        <RootNav />
      </PaperProvider>
    </ReduxProvider>
  );
};

export default Root;
