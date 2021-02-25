import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import { Color } from '../../constants/colors';

export const MealItem = props => {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View>
                    <View style={{ ...styles.mealRow, ...styles.mealTitle }}>
                        <ImageBackground source={{ uri: props.item.imageUrl }} style={styles.bgImage} >
                            <Text style={styles.title} numberOfLines={1}>{props.item.title} </Text>
                        </ImageBackground>
                    </View>
                    <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                        <Text >{props.item.duration}</Text>
                        <Text >{props.item.complexity}</Text>
                        <Text >{props.item.affordability}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mealItem: {
        backgroundColor: '#ccc',
        alignSelf: 'center',
        height: 200,
        width: '90%',
    },

    mealTitle: {
        height: '90%',
    },

    mealDetail: {
        justifyContent: 'space-between'
    },

    mealRow: {
        flexDirection: 'row',
    },

    bgImage: {
        width: '100%',
        height: '100%',
    },

    title: {
        backgroundColor: Color.imageDetails,
        borderRadius: 20,
        color: 'white',
        margin: 6,
        padding: 10,
        textAlign: 'center',
        width: '70%',
    }
});
