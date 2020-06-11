// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// class HomeScreen extends React.Component {
//     render() {
//       return(
//         <View style={styles.container}>
//           <Text>This is the Home Screen</Text>
//         </View>
//       );
//     }
// }

// export default HomeScreen;

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#e6e6e6',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     plain: {
//       flex: 1,
//     },
// });

import React from 'react';
import { Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return <Text style={styles.text}>HomeSchjffreen</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;