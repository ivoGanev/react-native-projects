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

const MealsTabFavNavigator = createBottomTabNavigator({
   Meals: {
      screen: MealsNavigator, navigationOptions: {
         tabBarIcon: (tabInfo) => { return <Ionicons name='ios-restaurant' size={25} color={Color.tabIcons} /> }
      }
   },
   Favorites: {
      screen: FavoritesScreen, navigationOptions: {
         tabBarIcon: (tabInfo) => { return <Ionicons name='ios-star' size={25} color={Color.tabIcons} /> }
      }
   },
},

   {
      tabBarOptions: {
         activeTintColor: Color.tabIcons,
      }
   })

export default createAppContainer(MealsTabFavNavigator)