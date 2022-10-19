import React, {FC} from 'react';
import Root from './src/Root';
import {Provider} from 'react-redux';
import {store} from './src/redux/store/store';

interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @App
 **/

const App: FC<IProps> = () => {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
};

export default App;
