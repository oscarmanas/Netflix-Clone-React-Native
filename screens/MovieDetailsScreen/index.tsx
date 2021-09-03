import * as React from 'react';
import styles from './styles';
import { View, Image, Text, Pressable } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons, AntDesign, Ionicons, Feather } from '@expo/vector-icons';

import movie from '../../assets/data/movie';

const firstEpisode = movie.seasons.items[0].episodes.items[0];

const MovieDetailsScreen = () => {
    console.log(firstEpisode)
    return(
        <View>
            <Image style={styles.image} source={{ uri: firstEpisode.poster }} />
            <View style={{padding: 12 }}>
                <Text style={styles.title}>{movie.title}</Text>
                    <View style={{flexDirection:'row',}}>
                        <Text style={styles.match}>98% match</Text>
                        <Text style={styles.year}>{movie.year}</Text>
                        <View style={styles.ageContainer}>
                        <Text style={styles.age}>12+</Text>
                    </View>
                <Text style={styles.year}>{movie.numberOfSeasons} Seasons</Text>
                <MaterialIcons name="hd" size={27} color="grey" />
            </View>
                
                <Pressable onPress={() => {console.warn('Plage')}} style={styles.playButton}>
                    <Text style={styles.playButtonText}>
                    <Entypo name="controller-play" size={18} color="white" />
                    Play
                    </Text>
                </Pressable>

                <Pressable onPress={() => {console.warn('Download')}} style={styles.downloadButton}>
                    <Text style={styles.downloadButtonText}>
                    <AntDesign name="download" size={18} color="black" />
                    {' '}
                    Download
                    </Text>
                </Pressable>

                <Text style={{marginBottom: 5, marginTop: 5,}}>{movie.plot}</Text>
                <Text style={styles.year}>Cast: {movie.cast}</Text>
                <Text style={styles.year}>Creator: {movie.creator}</Text>


                <View style={{flexDirection: 'row'}}>
                    <View style={{alignItems: 'center', marginHorizontal: 30, marginVertical: 10,}}>
                        <AntDesign name="plus" size={24} color="black" />
                        <Text style={{marginTop:5}}>My List</Text>
                    </View>

                    <View style={{alignItems: 'center', marginHorizontal: 30, marginVertical: 10,}}>
                        <Feather name="thumbs-up" size={24} color="black" />
                        <Text style={{marginTop:5}}>Rate</Text>
                    </View>

                    <View style={{alignItems: 'center', marginHorizontal: 30, marginVertical: 10,}}>
                        <Ionicons name="share-social" size={24} color="black" />
                        <Text style={{marginTop:5}}>Share</Text>
                    </View>
                </View>

                

            </View>
        </View>
    )
};

export default MovieDetailsScreen;