import React from 'react';
import { StyleSheet, Text, View, Picker, ScrollView, TouchableOpacity } from 'react-native';

const DashboardScreen = () => {
    return(
        <View>
          <View style={styles.dashboard_header}>
            <Text style={styles.dashboard_header_item}>Categories</Text>
          </View>
          <ScrollView>
            <TouchableOpacity style={styles.dashboard_list}><Text style={styles.dashboard_list_item}>Category 1</Text></TouchableOpacity>
            <TouchableOpacity style={styles.dashboard_list}><Text style={styles.dashboard_list_item}>Category 2</Text></TouchableOpacity>
            <TouchableOpacity style={styles.dashboard_list}><Text style={styles.dashboard_list_item}>Category 3</Text></TouchableOpacity>
            <TouchableOpacity style={styles.dashboard_list}><Text style={styles.dashboard_list_item}>Category 4</Text></TouchableOpacity>
            <TouchableOpacity style={styles.dashboard_list}><Text style={styles.dashboard_list_item}>Category 5</Text></TouchableOpacity>
            <TouchableOpacity style={styles.dashboard_list}><Text style={styles.dashboard_list_item}>Category 6</Text></TouchableOpacity>
            <TouchableOpacity style={styles.dashboard_list}><Text style={styles.dashboard_list_item}>Category 7</Text></TouchableOpacity>
            <TouchableOpacity style={styles.dashboard_list}><Text style={styles.dashboard_list_item}>Category 8</Text></TouchableOpacity>
            <TouchableOpacity style={styles.dashboard_list}><Text style={styles.dashboard_list_item}>Category 10</Text></TouchableOpacity> 
            <TouchableOpacity style={styles.dashboard_list}><Text style={styles.dashboard_list_item}>Category 11</Text></TouchableOpacity>
            <TouchableOpacity style={styles.dashboard_list}><Text style={styles.dashboard_list_item}>Category 12</Text></TouchableOpacity>
            <TouchableOpacity style={styles.dashboard_list}><Text style={styles.dashboard_list_item}>Category 13</Text></TouchableOpacity>
            <TouchableOpacity style={styles.dashboard_list}><Text style={styles.dashboard_list_item}>Category 14</Text></TouchableOpacity>
            <TouchableOpacity style={styles.dashboard_list}><Text style={styles.dashboard_list_item}>Category 15</Text></TouchableOpacity>            
          </ScrollView>
        </View>
    );
}

export default DashboardScreen;

const styles = StyleSheet.create({
    dashboard_header: {
        height: 100,
        borderBottomWidth: 1,
        borderBottomColor: '#e6e6e6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dashboard_header_item: {
        fontSize: 20,
        paddingTop: 30,
    },
    dashboard_list: {
        height: 60,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
    },
    dashboard_list_item: {
        paddingLeft: 50,
        fontSize: 15,
        color: '#666666',
    }
});