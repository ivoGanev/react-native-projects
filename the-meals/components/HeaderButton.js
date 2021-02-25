import React from 'react'
import { HeaderButton } from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons'
import { Color } from '../constants/colors'

const CustomHeaderButton = props => {
    console.log(props)
    return <HeaderButton
        {...props}
        IconComponent={Ionicons}
        iconSize={23}
        color={'white'} />
}

export default CustomHeaderButton