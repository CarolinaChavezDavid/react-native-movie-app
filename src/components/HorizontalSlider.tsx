import React from 'react'
import { Movie } from '../intefaces/movieInterface'
import { Text, View, ListRenderItem } from 'react-native';
import { FlatList } from 'react-native-gesture-handler'
import { MoviePosterCard } from './MoviePosterCard'

interface Props {
    title?: string,
    movies: Movie[]
}

export const HorizontalSlider = ({title, movies}: Props) => {
  return (
    <View style ={{
        height: (title) ? 260 : 220
        }}>

        {
            title && <Text style ={ { 
                fontSize: 25, 
                fontWeight: 'bold', 
                marginStart: 10,
                marginBottom: 10
            }}>{title}</Text>
        }

        <FlatList 
            data = {movies}
        renderItem={({item}) => (
                <MoviePosterCard movie={ item } width={140} height={200}/>
            )}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        />
    </View>
  )
}
