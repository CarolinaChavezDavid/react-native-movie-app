import React from 'react'
import { Cast } from '../intefaces/movieCreditsInterface'
import { Image, StyleSheet, Text, View } from 'react-native'

interface Props {
    actor: Cast
}

export const CastItem = ({actor}: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
  return (
    <View style={style.container}>
        {
            actor.profile_path &&  <Image 
            source={{uri}} style={{width:50, height:58, borderRadius:10}}
            />
        }
       
        
        <View style ={style.actorInfo}>
            <Text style={{fontSize: 19, fontWeight: 'bold'}}>
                {actor.name}
            </Text>
            <Text style={{fontSize: 16, opacity: 0.7, marginBottom: 10}}>
                {actor.character}
            </Text>
        </View>

    </View>
  )
}

const style = StyleSheet.create({
    container:{
        flexDirection:'row',
        height:58,
        borderRadius:10,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 2,
        marginRight:20,
        paddingRight: 10 
    },
    actorInfo:{
        marginLeft:10,
        marginTop: 5

    }
})