import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Pedometer } from 'expo-sensors';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export default class App extends React.Component {
  state = {
    isPedometerAvailable: 'checking',
    pastStepCount: 0,
    currentStepCount: 0,
  };

  componentDidMount() {
    this._subscribe();
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  _subscribe = () => {
    this._subscription = Pedometer.watchStepCount(result => {
      this.setState({
        currentStepCount: result.steps,
      });
    });

    Pedometer.isAvailableAsync().then(
      result => {
        this.setState({
          isPedometerAvailable: String(result),
        });
      },
      error => {
        this.setState({
          isPedometerAvailable: 'Could not get isPedometerAvailable: ' + error,
        });
      }
    );

    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 1);
    Pedometer.getStepCountAsync(start, end).then(
      result => {
        this.setState({ pastStepCount: result.steps });
      },
      error => {
        this.setState({
          pastStepCount: 'Could not get stepCount: ' + error,
        });
      }
    );
  };

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };

  render() {
    return (
      <View >
        <Text>Avaliable Sensors: {this.state.isPedometerAvailable}</Text>
        <Image style={styles.image} source= {require('../../assets/Circle.png')} />
        <Image style={styles.imagetwo} source= {require('../../assets/Circle.png')} />
        <Text style= {styles.step}>Steps Taken: {this.state.pastStepCount}</Text>
        <Text style= {styles.steptwo}>Step Counter: {this.state.currentStepCount}</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  step: {
      fontSize: 25,
      position: "absolute",
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 80,
      marginTop: 440,
      fontWeight: 'bold',
      fontStyle: 'italic',
  },

  steptwo: {
    fontSize: 25,
    position: "absolute",
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 80,
    marginTop: 150,
    fontWeight: 'bold',
    fontStyle: 'italic',

  },

    image: {
    width: 300,
    height: 290,
    marginTop: 0,
    marginBottom: 20,
    marginLeft: 30,

  },

  imagetwo: {
    width: 300,
    height: 290,
    marginTop: -30 ,
    marginBottom: 250,
    marginLeft: 30,

  },

});