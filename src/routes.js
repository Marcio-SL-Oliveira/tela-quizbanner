import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from './pages/Main';
import Menu from './pages/Menu';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Menu,
    },
    {
      headerLayoutPreset: 'left',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#03A9f4',
        },
        headerTintColor: '#000',
      },
    }
  )
);
export default Routes;

/*
    <color name="colorPrimary">#03A9F4</color>
    <color name="colorPrimaryDark">#0288D1</color>
    <color name="colorAccent">#4FC3F7</color>

*/
