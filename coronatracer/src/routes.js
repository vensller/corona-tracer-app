import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from '~/pages/Main';
import Permissions from '~/pages/Permissions'

const Routes = createAppContainer(createStackNavigator(
        { 
            Main, 
            Permissions 
        },
        {
            initialRouteName: 'Main',
            defaultNavigationOptions: {
                headerTransparent: true,
            }
        }
    )
);

export default Routes;
