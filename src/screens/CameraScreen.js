import React from "react";
import {Pressable, StyleSheet, View, Text, Button} from 'react-native';
import {Camera} from "expo-camera";
import { useState, useEffect } from "react";
import {MaterialIcons} from '@expo/vector-icons';
import WeightContext from "../../contexts/WeightContext";



const CameraScreen = ({navigation}) => {
    const [hasPermission, setHasPermission] = useState(null);
    const getPermission = async () => {
        const {status} = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
    };

    let camera;
    const getPicture = async () => {
        if (camera) {
            const photo = await camera.takePictureAsync();
            navigation.navigate('Photo', {uri: photo.uri});
            console.log(photo)
        }
    }

    useEffect(() => {
        getPermission();
    }, []);
    if (hasPermission === null) {
        return <Text> Awaiting Premission </Text>
    }
    if (hasPermission === false) {
        return <Text> Access Denied! </Text>
    }

    return (
        <View style={styles.container}>
            <Camera style={styles.subContainer} ref={(ref) => { camera = ref }}>
                <Pressable style={styles.buttonStyle} onPress= {() => {
                    getPicture()
                }}>
                    <MaterialIcons name="circle" size={80} color="white" />

                </Pressable>
            </Camera>

        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        flex:1,
    },

    subContainer: {
        flex:1,
        backgroundColor: "transparent",
        flexDirection: "row-reverse",
        alignItems: "flex-end",
    },

    buttonStyle: {
        flex: 1,
        alignItems:"center",
        paddingBottom:70
    },

    textStyle: {
        fontSize: 24,
        marginBottom: 15,
        color:"yellow",
    }
});

export default CameraScreen;