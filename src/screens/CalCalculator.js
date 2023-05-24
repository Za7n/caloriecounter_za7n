import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, ScrollView, alert } from 'react-native';
import axios from 'axios'

const CalCalculator = () => {  
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [age, setage] = useState(0);
    const [gender, setgender] = useState("");
    const [result, setresult] = useState(0); 

    //Little to no exercise
    const [oneactive, setoneactive] = useState(0);
    //Light Exercise
    const [lightex, setlightex] = useState(0);
    //Moderate Exercise
    const [modex, setmodex] = useState(0);
    //Very Active
    const [vactiv, setvactiv] = useState(0);
    //Extra Active
    const [exactiv, setexactiv] = useState(0);

    function calcBMR() {
        if (gender == "M") {
            weight1 = parseInt(weight);
            height1 = parseInt(height);
            age1 = parseInt(age);
            let bmr = (10*weight1) + (6.25*height1) - (5*age1) + 5;
            setresult(bmr);
            console.log("male calculation");

            let no_exer = bmr * 1.2;
            let no_exerr = Math.round(no_exer);
            setoneactive(no_exerr);

            let light_exer = bmr * 1.375;
            let light_exerr = Math.round(light_exer);
            setlightex(light_exerr);

            let mod_exer = bmr * 1.55;
            let mod_exerr = Math.round(mod_exer);
            setmodex(mod_exerr);

            let v_active = bmr * 1.725;
            let v_activer = Math.round(v_active);
            setvactiv(v_activer);
            
            let extra_active = bmr * 1.9;
            let extra_activer = Math.round(extra_active)
            setexactiv(extra_activer);
        
        } else if (gender == "F") {
            console.log("female")
            weight1 = parseInt(weight)
            height1 = parseInt(height);
            age1 = parseInt(age);
            let bmr = (10*weight1) + (6.25*height1) - (5*age1) - 161;
            setresult(bmr);

            let no_exer = bmr * 1.2;
            let no_exerr = Math.round(no_exer);
            setoneactive(no_exerr);

            let light_exer = bmr * 1.375;
            let light_exerr = Math.round(light_exer);
            setlightex(light_exerr);

            let mod_exer = bmr * 1.55;
            let mod_exerr = Math.round(mod_exer);
            setmodex(mod_exerr);

            let v_active = bmr * 1.725;
            let v_activer = Math.round(v_active);
            setvactiv(v_activer);
            
            let extra_active = bmr * 1.9;
            let extra_activer = Math.round(extra_active)
            setexactiv(extra_activer);


        }   else {
            console.log("This if statement doesn't work then")
        }
    }

//if statement below, terinary if statement
    return (
        <ScrollView style={styles.bc}>
            <View style={styles.bc}>
             <Text style={styles.textLabel}>Enter the weight (in kg):</Text>
                <TextInput
                    style={styles.textInput}
                    value={weight.toString()}
                    keyboardType="numeric"
                    onChangeText={(weight) => setWeight(weight)}
                />
                <Text style={styles.textLabel}>Enter the height (in cm):</Text>

                <TextInput
                    style={styles.textInput}
                    value={height.toString()}
                    keyboardType="numeric"
                    onChangeText={(height) => setHeight(height)}
                />

                <Text style={styles.textLabel}>Enter your gender (It must be F for female or M for male):</Text>
                <TextInput
                    style={styles.textInput}
                    value={gender.toString()}
                    keyboardType="default"
                    onChangeText={gender => setgender(gender)}
                />
                
                <Text style={styles.textLabel}>Enter your age:</Text>
                <TextInput
                    style={styles.textInput}
                    value={age.toString()}
                    keyboardType="numeric"
                    onChangeText={age => setage(age)}
                />
                <Button 
                    title="Calculate"
                    onPress={() => {
                        if (weight != 0 && height != 0 && age != 0) {
                            calcBMR()
                        }
                        else {
                        }
                    }}
                />
                <Text style={styles.bold}>
                    This is your Calorie needs breakdown:
                </Text>
                <Text style={styles.textlook}>
                    - BMR: {result} Calories
                </Text>
                <Text style={styles.textlook}>
                    - If you are sedentary (little or no exercise): {oneactive} Calories
                </Text>                
                <Text style={styles.textlook}>
                    - If you are lightly active (light exercise/sports 1-3 days/week): {lightex} Calories
                </Text> 
                <Text style={styles.textlook}>
                    - If you are moderatetely active (moderate exercise/sports 3-5 days/week): {modex} Calories
                </Text> 
                <Text style={styles.textlook}>
                    - If you are very active (hard exercise/sports 6-7 days a week): {vactiv} Calories
                </Text> 
                <Text style={styles.textlook}>
                    - Extra active (very active/do a physical job): {exactiv} Calories
                </Text> 
                <Text style={styles.textlook}>
                    - Note to user: If your calorie breakdown contains all zeros, then it means there hasn't been a test
                </Text>
                <Text style={styles.textlook}>
                    - The breakdown shows your BMR (Basal Metabolic Rate) and the calories recommended you follow considering your activity level.
                </Text>
                <Text style={styles.textlook}>
                    - Following these calorie numbers will help maintain your current weight. Eat more or less calories alongside a healthy diet if you wish to see change.  
                </Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    bc: {
        backgroundColor: '#FFF',
        flex: 1,
    },
    textstyle2: {
        fontSize: 18,
        paddingLeft: 10,
        paddingBottom: 15,
    },
    space: {
        marginBottom: 270 // The marginBottom was added to create space so the user can see all the fields, without this the user would not be able to see what they are typing at the bottom field. 
    },
    bold: {
        fontWeight: 'bold',
        paddingLeft: 10,
        fontSize: 18,
        paddingBottom: 13
    },
    textlook: {
        paddingLeft: 10,
        fontSize: 14,
    },
    textInput: {
        fontSize: 20,
        padding: 10,
        margin: 5,
        borderWidth: 1,
    },
    textLabel: {
        fontSize: 18,
        paddingLeft: 10,
        marginTop: 10,
        fontWeight: 'bold',
    },
});

export default CalCalculator;
