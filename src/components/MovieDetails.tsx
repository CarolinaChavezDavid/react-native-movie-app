import React from 'react'
import currencyFormatter from "currency-formatter";
import { FlatList, Text, View } from 'react-native'
import { MovieDetailResp } from '../intefaces/movieDetailInterface'
import { Cast } from '../intefaces/movieCreditsInterface'
import Icon from 'react-native-vector-icons/Ionicons'
import { CastItem } from './CastItem';

interface Props {
    movieDetail?: MovieDetailResp,
    cast: Cast[]
}

export const MovieDetails = ({movieDetail, cast}: Props) => {

  return (
    <>
        <View>
            <View style = {{flexDirection: 'row'}}>
                <Icon 
                    name = "star-outline"
                    color = 'gray'
                    size = {16}
                />
                
                <Text>{ movieDetail?.vote_average }</Text>
                <Text>
                    - {movieDetail?.genres.map(g => g.name).join(', ')}
                </Text>

            </View>

            <Text style ={{ fontSize: 23, marginTop:10, fontWeight: 'bold'}}>
                Story
            </Text>

            <Text style ={{ fontSize: 16}}>
                {movieDetail?.overview}
            </Text>

            <Text style ={{ fontSize: 23, marginTop:10, fontWeight: 'bold'}}>
                Budget
            </Text>

            <Text style ={{ fontSize: 18}}>
                { currencyFormatter.format(movieDetail?.budget!, {code: 'USD'})}
            </Text>

            <View style={{marginTop: 10, marginBottom: 100}}>
                <Text style ={{ fontSize: 23, marginTop:10, fontWeight: 'bold'}}>
                    Cast
                </Text>
                <FlatList 
                    data={cast}
                    keyExtractor={ (item) => item.id.toString()}
                    renderItem={ ({item}) => <CastItem  actor={item}/>}
                    horizontal ={true}
                    showsHorizontalScrollIndicator ={false}
                    style ={{marginTop: 10, height: 70}} 
                    />
            </View>

        </View>
        
    </>
  )
}
