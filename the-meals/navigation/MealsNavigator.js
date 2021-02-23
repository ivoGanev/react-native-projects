import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoriesMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailsScreen from '../screens/MealDetailsScreen'

const MealsNavigator = createStackNavigator({
   Categories: CategoriesScreen,
   CategoryMeals: CategoriesMealsScreen,
   MealsDetails: MealDetailsScreen,
})

export default createAppContainer(MealsNavigator)