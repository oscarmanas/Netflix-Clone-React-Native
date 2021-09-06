import React, {useState} from 'react';
import styles from './styles';
import { View, Image, Text, Pressable, FlatList } from 'react-native';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import { MaterialIcons, AntDesign, Ionicons, Feather } from '@expo/vector-icons';


import movie from '../../assets/data/movie';
import EpisodeItem from '../../components/EpisodeItem';
import { Picker } from '@react-native-picker/picker';

const firstSeason = movie.seasons.items[0];
const firstEpisode = firstSeason.episodes.items[0];

const MovieDetailsScreen = () => {
    const[currentSeason, setCurrentSeason] = useState(firstSeason)
    
    
    const seasonNames = movie.seasons.items.map(season => season.name);

    return(
        <View>
            <Image style={styles.image} source={{ uri: firstEpisode.poster }} />       
            
            <FlatList
                data={currentSeason.episodes.items}
                renderItem={({item}) => <EpisodeItem episode={item} />}
                style={{marginBottom: 250}}
                ListHeaderComponent={(
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
                                <FontAwesome name="send-o" size={24} color="black" />
                                <Text style={{marginTop:5}}>Share</Text>
                            </View>
                        </View>

                            <Picker
                                selectedValue={currentSeason.name}
                                onValueChange={(itemValue, itemIndex) =>{
                                    setCurrentSeason(movie.seasons.items[itemIndex])
                                }}
                                style={{color: 'black', fontWeight: 'bold', width: 130,}}
                                dropdownIconColor={'black'}
                            >
                                {seasonNames.map(seasonName => (
                                    <Picker.Item label={seasonName} value={seasonName} key={seasonName} />
                                ))}
                            </Picker>
                    </View>
                )}
            />
        </View>
    )
};

export default MovieDetailsScreen;