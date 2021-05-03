import React from 'react';
import { Provider } from 'react-redux';
import configStore from './store';
import TabBar from '@src/common/tab';
import '@src/styles/variable.scss';
import './app.less';
const store = configStore();
class App extends React.Component {
  config = {
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTextStyle: 'black',
      navigationStyle: 'default',
      navigationBarTitleText: '菜单1111',
    }
  }
  componentDidMount() {

  }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  render() {
    return (
      <Provider store={store}>
        {this.props.children}
        <TabBar />
      </Provider>
    )
  }
}

export default App;
