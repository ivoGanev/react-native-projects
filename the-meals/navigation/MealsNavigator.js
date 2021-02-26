import React from "react";
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from "react-navigation-tabs";

import { Color } from '../constants/colors';

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoriesMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailsScreen from '../screens/MealDetailsScreen'
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from "../screens/FiltersScreen";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Your project is accessing the following APIs'])


const defaultNavOptions = { 
   headerTintColor: '#ffffff',
   headerStyle: {
      backgroundColor: Color.background
   },
}

const MealsNavigator = createStackNavigator({
   Categories: CategoriesScreen,
   CategoryMeals: CategoriesMealsScreen,
   MealsDetails: MealDetailsScreen,
}, {
   defaultNavigationOptions: defaultNavOptions
})

const FavoritesNavigator = createStackNavigator({
   Favorites: FavoritesScreen,
   MealDetails: MealDetailsScreen
}, {
   defaultNavigationOptions: defaultNavOptions
})


const tabScreenConfig = {
   Meals: {
      screen: MealsNavigator, navigationOptions: {
         tabBarIcon: (tabInfo) => { return <Ionicons name='ios-restaurant' size={25} color={Color.tabIcons} /> },
         tabBarColor: Color.imageDetails
      },
   },
   Favorites: {
      screen: FavoritesNavigator, navigationOptions: {
         tabBarIcon: (tabInfo) => { return <Ionicons name='ios-star' size={25} color={Color.tabIcons} /> },
         tabBarColor: Color.background
      },

   },
}

const FiltersNavigator = createStackNavigator({
   Filters: FiltersScreen
}, {    defaultNavigationOptions: defaultNavOptions})

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

const MainNavigator = createDrawerNavigator({
   Favorites: MealsTabFavNavigator,
   Filters: FiltersNavigator,
})

export default createAppContainer(MainNavigator)