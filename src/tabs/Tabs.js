import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
import Harian from '../tabs/Harian'
import Bulanan from '../tabs/Bulanan'

const Tabs = createMaterialTopTabNavigator({
  Harian: Harian,
  Bulanan: Bulanan,
},
  {
    tabBarPosition: 'top',
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'yellow',
      labelStyle: {
        fontSize: 15,
        fontFamily: 'BreeSerif-Regular',
        fontWeight: '400'
      },
      style: {
        backgroundColor: '#ffb817',
        alignSelf: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        width: '100%'
      },
    },

  });

export default createAppContainer(Tabs);