import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class ProfileScreen extends React.Component {
    render() {
      return(
        <View style={styles.container}>
          <Text>This is the Profile Screen</Text>
        </View>
      );
    }
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e6e6e6',
      alignItems: 'center',
      justifyContent: 'center',
    },
    plain: {
      flex: 1,
    },
});