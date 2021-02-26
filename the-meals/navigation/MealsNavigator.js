import React from "react";
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from "react-navigation-tabs";

import { Color } from '../constants/colors';

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoriesMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailsScreen from '../screens/MealDetailsScreen'
import FavoritesScreen from '../screens/FavoritesScreen';
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Your project is accessing the following APIs'])

const MealsNavigator = createStackNavigator({
   Categories: CategoriesScreen,
   CategoryMeals: CategoriesMealsScreen,
   MealsDetails: MealDetailsScreen,
}, {
   defaultNavigationOptions: {
      headerTintColor: '#ffffff',
      headerStyle: {
         backgroundColor: Color.background

      },
   }
})

const tabScreenConfig = {
   Meals: {
      screen: MealsNavigator, navigationOptions: {
         tabBarIcon: (tabInfo) => { return <Ionicons name='ios-restaurant' size={25} color={Color.tabIcons} /> },
         tabBarColor: Color.imageDetails
      },
      
   
   },
   Favorites: {
      screen: FavoritesScreen, navigationOptions: {
         tabBarIcon: (tabInfo) => { return <Ionicons name='ios-star' size={25} color={Color.tabIcons} /> },
         tabBarColor: Color.background
      },

   },
}


const MealsTabFavNavigator = Platform.OS === 'android' ? createMaterialBottomTabNavigator(tabScreenConfig, {
   activeTintColor: Color.background,
   shifting: true,
   barStyle: { backgroundColor: Color.background, }
}) :
   createBottomTabNavigator(tabScreenConfig,
      {
         tabBarOptions: {
            activeTintColor: Color.tabIcons,
         }
      })



export default createAppContainer(MealsTabFavNavigator)