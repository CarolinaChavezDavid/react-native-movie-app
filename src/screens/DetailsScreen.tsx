import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { ActivityIndicator, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Movie } from '../intefaces/movieInterface';
import { RootStackParams } from '../navigation/Navigator';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons'
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';

interface Props extends StackScreenProps<RootStackParams, 'DetailsScreen'> {};

const screenHeight = Dimensions.get('screen').height

export const DetailsScreen = ({route, navigation}: Props) => {
    const movie = route.params as Movie;

    const {isLoading, movieDetails, cast} = useMovieDetails(movie.id);

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <ScrollView>
        <View style = {styles.imageContainer}>
            <View style = {styles.imageBorder}>
            <Image  
                source = {{uri}}
                style ={ styles.posterImage }
            />

            </View>
            
        </View>
        <View style={{marginHorizontal: 15}}>
            <Text style={styles.subtitle}>{movie.original_title}</Text>
            <Text style={styles.title}>{movie.title}</Text>
        </View>

        <View style={{marginHorizontal: 20}}>
            {   isLoading
                 ? <ActivityIndicator size={35} color={'gray'} style={{marginTop: 20}}/>
                 : <MovieDetails movieDetail={movieDetails} cast={ cast}/>
            }
            
        </View>

        <View style = {styles.backButton}>
            <TouchableOpacity
                onPress={() => navigation.pop() }
            >
                <Icon 
                    color= 'white'
                    name='arrow-back-outline'
                    size={50}
                />
            </TouchableOpacity>
        </View>

    </ScrollView>
    
  )
}

const styles = StyleSheet.create({
    posterImage: {
        flex:1,
    },

    imageContainer: {
        width: '100%',
        height: screenHeight * 0.7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 3.84,
        elevation: 10,
    },
    marginContainer: {
        marginHorizontal:20,
        marginTop:30
    },
    subtitle:{
        marginTop:15,
        fontSize: 16,
        opacity: 0.8
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    imageBorder: {
        flex:1,
        overflow:'hidden',
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
    },

    backButton: {
        position: 'absolute',
        zIndex: 999,
        elevation: 9,
        top: 15,
        left: 5
    }
})