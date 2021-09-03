import {  StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    image:{
        width: '100%',
        aspectRatio: 5/3,
        resizeMode: 'cover',
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
    },
    match:{
        color: '#59d467',
        fontWeight: 'bold',
        marginRight: 10,
    },
    year:{
        color: 'grey',
        marginRight: 5,
    },
    ageContainer:{
        backgroundColor: '#e6e229',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        paddingHorizontal: 3,
        marginRight: 5,
    },
    age:{
        color: 'black',
        fontWeight: 'bold',
    },

    // Button
    playButton:{
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        padding: 5,
        marginVertical: 5,
    },
    playButtonText:{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    downloadButton:{
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        padding: 5,
        marginVertical: 5,
    },
    downloadButtonText:{
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },
})

export default styles;