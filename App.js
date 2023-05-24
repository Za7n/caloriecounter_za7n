
import * as React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import AddItemScreen from './src/screens/AddItemScreen';
import AddRecipePage from './src/screens/AddRecipePage';
import EditRecipePage from './src/screens/EditRecipePage';
import EditItemScreen from './src/screens/EditItemScreen';
import ListViewScreen from './src/screens/ListViewScreen';
import RecipePage from './src/screens/RecipePage';
import ViewRecipePage from './src/screens/ViewRecipePage';
import ViewItemScreen from './src/screens/ViewItemScreen';
import { ItemProvider } from './contexts/ItemContext';
import { RecipeProvider } from './contexts/recipeContext';
import WeightPage from './src/screens/WeightPage';
import AddWeightPage from './src/screens/AddWeightPage';
import EditWeightPage from './src/screens/EditWeightScreen';
import ViewWeightPage from './src/screens/ViewWeightPage';
import { WeightProvider } from './contexts/WeightContext';
import CameraScreen from './src/screens/CameraScreen';
import CameraPhoto from './src/screens/CameraPhoto';
import StepCounter from './src/screens/StepCounter';
import FoodCalcMenu from './src/screens/FoodCalcMenu';
import CalCalculator from './src/screens/CalCalculator';
import FoodCalcSearch from './src/screens/FoodCalcSearch';
import USCalCalculator from './src/screens/USCalCalculator';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function CalorieStack() {
return (
  <Stack.Navigator
  initialRouteName="Calorie"
  screenOptions={{
    headerStyle: { backgroundColor: '#f59120' },
    headerTintColor: '#fff',
    headerTitleStyle: { fontWeight: 'bold' },
  }}>
  <Stack.Screen
  name="Calorie"
  component={ListViewScreen}
  options={{ title: 'Calorie Page',}}
/>
<Stack.Screen
  name="AddCalorie"
  component={AddItemScreen}
  options={{ title: 'Add Calorie Page' }}
/>
<Stack.Screen
  name="EditCalorie"
  component={EditItemScreen}
  options={{ title: 'Edit Calorie Page' }}
/>

<Stack.Screen
  name="ViewCalorie"
  component={ViewItemScreen}
  options={{ title: 'View Calorie Page' }}
/>
</Stack.Navigator>
);
}

function RecipeStack() {
  return (
    <Stack.Navigator
    initialRouteName="Recipe"
    screenOptions={{
      headerStyle: { backgroundColor: '#f59120' },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' },
    }}>

  <Stack.Screen
    name="Recipe"
    component={RecipePage}
    options={{ title: 'Recipe Page', }}
  />
  <Stack.Screen
    name="AddRecipe"
    component={AddRecipePage}
    options={{ title: 'Add Recipe Page' }}
  />
  <Stack.Screen
    name="EditRecipe"
    component={EditRecipePage}
    options={{ title: 'Edit Recipe Page' }}
  />
  
  <Stack.Screen
    name="ViewRecipe"
    component={ViewRecipePage}
    options={{ title: 'View Recipe Page' }}
  />
  </Stack.Navigator>
  );
  }

  function WeightStack() {
    return (
      <Stack.Navigator
      initialRouteName="Weight"
      screenOptions={{
        headerStyle: { backgroundColor: '#f59120' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <Stack.Screen
      name="Weight"
      component={WeightPage}
      options={{ title: 'Weight Page', }}
    />
    <Stack.Screen
      name="AddWeight"
      component={AddWeightPage}
      options={{ title: 'Add Weight Page' }}
    />
    <Stack.Screen
      name="EditWeight"
      component={EditWeightPage}
      options={{ title: 'Edit Weight Page' }}
    />
    
    <Stack.Screen
      name="ViewWeight"
      component={ViewWeightPage}
      options={{ title: 'View Weight Page' }}
    />
    <Stack.Screen
      name="Camera"
      component={CameraScreen}
      options={{ title: 'Take a Picture' }}
    />

    <Stack.Screen
      name="Photo"
      component={CameraPhoto}
      options={{ title: 'Here is the picture' }}
    />
    </Stack.Navigator>
    );
    }

    function StepStack() {
      return (
        <Stack.Navigator
        initialRouteName="StepCounter"
        screenOptions={{
          headerStyle: { backgroundColor: '#f59120' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}>
        <Stack.Screen
        name="StepCounter"
        component={StepCounter}
        options={{ title: 'Step Counter' }}
      />
    </Stack.Navigator>
    );
    }

    function CalculatorStack() {
      return (
        <Stack.Navigator
        initialRouteName="Food Calculator Menu"
        screenOptions={{
          headerStyle: { backgroundColor: '#f59120' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}>
        <Stack.Screen
        name="Cal calculator metric"
        component={CalCalculator}
        options={{ title: 'Calorie Calculator' }}
      />
      <Stack.Screen
        name="Calorie Search"
        component={FoodCalcSearch}
        options={{ title: 'Calorie Search' }}
      />
      <Stack.Screen
        name="Food Calculator Menu"
        component={FoodCalcMenu}
        options={{ title: 'Calorie Calculators' }}
      />
      <Stack.Screen
        name="Food US calorie Calculator Menu"
        component={USCalCalculator}
        options={{ title: 'US metric Calorie calculator' }}
      />

    </Stack.Navigator>
    );
    }

  function App() {
    return (
      <WeightProvider>
        <RecipeProvider>
          <ItemProvider>
            <NavigationContainer>
                <Tab.Navigator
                  initialRouteName="Feed"
                  screenOptions={{
                  tabBarActiveTintColor: '#fc5400',
                  tabBarInactiveTintColor: '#ffffff',
                  tabBarStyle:{
                    backgroundColor:'#f59120',
                    height:90,
                  },
                  
                   }}>

                <Tab.Screen
                  name="Calorie Page"
                  component={CalorieStack}
                  options={{
                  tabBarLabel: 'Calorie',
                  headerShown: false,
                  tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="calendar" color={color} size={size} />
                ),
                }}
                />
                <Tab.Screen
                  name="Calorie Calculator"
                  component={CalculatorStack}
                  options={{
                  tabBarLabel: 'Calculator',
                  headerShown: false,
                  tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="calculator" color={color} size={size} />
                ),
                }}
                />
                <Tab.Screen
                  name="Recipe Page"
                  component={RecipeStack}
                  options={{
                  tabBarLabel: 'Recipe',
                  headerShown: false,
                  tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="food-apple"
                  color={color}
                  size={size}
                />
                ),
                }}
                />
                <Tab.Screen
                  name="Weight Page"
                  component={WeightStack}
                  options={{
                  tabBarLabel: 'Weight',
                  headerShown: false,
                  tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="weight-lifter" color={color} size={size} />
                ),
                }}
                />

                <Tab.Screen
                  name="Step Counter"
                  component={StepStack}
                  options={{
                  tabBarLabel: 'Step Counter',
                  headerShown: false,
                  tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="watch" color={color} size={size} />
                ),
                }}
                />


                </Tab.Navigator>
              </NavigationContainer>
            </ItemProvider>
          </RecipeProvider>
        </WeightProvider>
    );
  }

  export default App;