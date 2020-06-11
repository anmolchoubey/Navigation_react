import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class InfoScreen extends React.Component {
    render() {
      return(
        <View style={styles.container}>
          <Text>This is the Info Screen</Text>
        </View>
      );
    }
}

export default InfoScreen;

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