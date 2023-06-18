import React, { useEffect, useRef } from 'react'
import { Animated, Button, View } from 'react-native'
import { useFadeAnimation } from '../hooks/useFadeAnimation';

export const FadeScreen = () => {
    const {opacity, fadeIn, fadeOut} = useFadeAnimation();

  return (
    <View style={{
        flex:1,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center'

    }}>
        <Animated.View style={{
            backgroundColor: '#084F6A',
            width:150,
            height: 150,
            borderColor: 'white',
            borderWidth:10,
            opacity: opacity,
            marginBottom:10
        }} />

        <Button
            title='FadeIn'
            onPress={()=>fadeIn}
        />
        <Button
            title='FadeOut'
            onPress={fadeOut}
        />

         
    </View>
  )
}
