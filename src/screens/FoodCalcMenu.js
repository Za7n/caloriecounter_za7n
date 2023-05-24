import React, {} from 'react';
import {Pressable, StyleSheet, View, Text, SafeAreaView} from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const FoodCalcMenu = ({ route, navigation }) => {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: 16}}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate("Calorie Search")}>
              <Text>Search for Food Calories</Text>
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate("Cal calculator metric")}>
              <Text>Calorie Counter (Metric units) </Text>
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate("Food US calorie Calculator Menu")}>
              <Text>Calorie Calculator (US Metrics)</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    );
  };
  const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      backgroundColor: '#FF6600',
      fontWeight: "bold",
      fontSize: 40,
      padding: 40,
      width: 300,
      marginTop: 50,
    },
    textInput: {
      fontSize: 20,
      padding: 10,
      margin: 5,
      borderWidth: 1,
    },
    textLabel: {
      fontSize: 20,
      paddingLeft: 10,
      marginTop: 10,
      fontWeight: 'bold',
    }
  });
  
export default FoodCalcMenu;
