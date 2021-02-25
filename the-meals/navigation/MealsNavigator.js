import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { Color } from '../constants/colors';

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoriesMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailsScreen from '../screens/MealDetailsScreen'

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

export default createAppContainer(MealsNavigator)