import React, { useContext, useEffect } from 'react'
import { ActivityIndicator, Dimensions, ScrollView, View } from 'react-native'
import { useMovies } from '../hooks/useMovies'
import { MoviePosterCard } from '../components/MoviePosterCard'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground'
import { GradientContext } from '../context/GradientContext'
import { getImagePosterColors } from '../helpers/getColors'
import { getColors } from 'react-native-image-colors'

const windowWidth = Dimensions.get('window').width;

export const HomeScreen = () => {
    const {setMainColors, setPrevMainColors} = useContext(GradientContext)

    const { nowPlaying, popular, topRated, upComing, isLoading } = useMovies();
    const { top } = useSafeAreaInsets();

    const getPosterColors = async (index: number) => {
        const movie = nowPlaying[index];
        const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        const [ primary = 'green', secondary= 'orange' ] = await getImagePosterColors(uri);

        setMainColors({primary, secondary})
    }

    useEffect(() =>{
        if(nowPlaying.length > 0){
            getPosterColors(0)
        }
    }, [nowPlaying])

    if (isLoading ){
        return (
            <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
                <ActivityIndicator color= 'red' size= {100}/>
            </View>
        )
    }

  return (
    <GradientBackground>
        <ScrollView>
            <View style={{marginTop: top +20 }}>
                <View style={{
                    height:440
                }}>
                    <Carousel
                        data={ nowPlaying }
                        renderItem={({item}) => <MoviePosterCard movie={ item }/>}
                        sliderWidth={windowWidth}
                        itemWidth={300}
                        inactiveSlideOpacity={0.9}
                        onSnapToItem={index => getPosterColors (index)}
                    />
                </View>

                <HorizontalSlider movies={upComing} title='Upcoming' />
                <HorizontalSlider movies={popular} title='Popular' />
                <HorizontalSlider movies={topRated}  title='TopRated' />

            </View>

        </ScrollView>

    </GradientBackground>
    
  )
}
