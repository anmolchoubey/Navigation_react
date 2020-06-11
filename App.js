// import React from 'react';
// import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
// import {
//   createSwitchNavigator,
//   createDrawerNavigator,
//   createBottomTabNavigator,
//   createMaterialTopTabNavigator,
//   createAppContainer,
// } from '@react-navigation/native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Drawer from 'react-native-drawer';
// import {Header} from 'react-native-elements';
// import 'react-native-gesture-handler';

// import HomeScreen from './screens/HomeScreen'
// import InfoScreen from './screens/InfoScreen'
// import ProfileScreen from './screens/ProfileScreen'
// import DashboardScreen from './screens/DashboardScreen'

// const drawerStyles = {
//   drawer: { shadowColor: '#000000', shadowOpacity: 1, shadowRadius: 10,  borderRightWidth: 1, borderRightColor: '#e6e6e6'},
//   main: {paddingLeft: 0},
// }

// //=========================================================================================


// class MainScreen extends React.Component {
//   render() {
//     return(
//       <Drawer
//         ref = {(ref) => {this.drawer = ref}}
//         type="static"
//         content={<DashboardScreen />}
//         tapToClose={true}
//         openDrawerOffset={100}
//         styles={drawerStyles}
//         tweenHandler={Drawer.tweenPresets.parallax}
//         >
//           <View style={styles.plain}>
//             <Header
//               backgroundColor='#ffffff'
//               containerStyle={{borderBottomColor:'#e6e6e6', borderBottomWidth:1}}
//               leftComponent={{ icon: 'menu', color: '#000000', onPress: () => {this.drawer.open()} }}
//               centerComponent={{ text: 'MY TITLE', style: { color: '#000000' } }}
//               rightComponent={{ icon: 'message', color: '#000000', onPress: () => alert("Message") }}
              
//             />
//             <MainContainer />  
//           </View>
//       </Drawer>
//     );
//   }
// }

// //=========================================================================================

// const start = createSwitchNavigator(
//   {
//     Main : MainScreen,
//   }
// );

// const tabs = createBottomTabNavigator(
//   {
//     Home : HomeScreen,
//     Info : InfoScreen,
//     Profile : ProfileScreen,
//   },
//   {
//     initialRouteName : 'Home',
//     defaultNavigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ focused, horizontal, tintColor }) => {
//         const { routeName } = navigation.state;
//         let IconComponent = Ionicons;
//         let iconName;
//         if (routeName === 'Home') {
//           iconName = 'ios-home'; 
//         } else if (routeName === 'Info') {
//           iconName = 'ios-information-circle-outline';
//         } else if (routeName === 'Profile') {
//           iconName = 'ios-person';
//         }

//         // You can return any component that you like here!
//         return <IconComponent name={iconName} size={25} color={tintColor} />;
//       },
//     }),
//     tabBarOptions: {
//       activeTintColor: '#000000',
//       labelStyle: {
//         fontSize: 12,
//       },
//       showLabel: false,
//     }
//   }
// );



// const AppContainer = createAppContainer(start);
// const MainContainer = createAppContainer(tabs);


// //=========================================================================================

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.plain}>
//         <StatusBar barStyle="dark-content" />
//         <AppContainer />
//       </View>
//     );
//   }
// }

// //==========================================================================================

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   plain: {
//     flex: 1,
//   },
// });

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { AuthContext } from "./context";
import {
  SignIn,
  CreateAccount,
  Search,
  Home,
  Details,
  Search2,
  Profile,
  Splash
} from "./Screens";

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="SignIn"
      component={SignIn}
      options={{ title: "Sign In" }}
    />
    <AuthStack.Screen
      name="CreateAccount"
      component={CreateAccount}
      options={{ title: "Create Account" }}
    />
  </AuthStack.Navigator>
);

const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen
      name="Details"
      component={Details}
      options={({ route }) => ({
        title: route.params.name
      })}
    />
  </HomeStack.Navigator>
);

const SearchStackScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen name="Search" component={Search} />
    <SearchStack.Screen name="Search2" component={Search2} />
  </SearchStack.Navigator>
);

const ProfileStack = createStackNavigator();
const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile} />
  </ProfileStack.Navigator>
);

const TabsScreen = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="Home" component={HomeStackScreen} />
    <Tabs.Screen name="Search" component={SearchStackScreen} />
  </Tabs.Navigator>
);

const Drawer = createDrawerNavigator();
const DrawerScreen = () => (
  <Drawer.Navigator initialRouteName="Profile">
    <Drawer.Screen name="Home" component={TabsScreen} />
    <Drawer.Screen name="Profile" component={ProfileStackScreen} />
  </Drawer.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator headerMode="none">
    {userToken ? (
      <RootStack.Screen
        name="App"
        component={DrawerScreen}
        options={{
          animationEnabled: false
        }}
      />
    ) : (
      <RootStack.Screen
        name="Auth"
        component={AuthStackScreen}
        options={{
          animationEnabled: false
        }}
      />
    )}
  </RootStack.Navigator>
);

export default () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      }
    };
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStackScreen userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};