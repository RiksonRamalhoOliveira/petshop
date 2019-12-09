import { createStackNavigator} from 'react-navigation';

import Main from './pages/main';
import petshop from './index'


export default createStackNavigator({
    Main,
},
{
    navigationOptions: {
        headerStyle:{
            backgroundColor:"#DA552F"
        },
        headerTintColor:"#FFF"
    }
})