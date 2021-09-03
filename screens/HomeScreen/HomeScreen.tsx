import * as React from 'react';
import styles from './styles';
import { FlatList } from 'react-native';
import { View } from '../../components/Themed';
import categories from '../../assets/data/categories';
import HomeCategory from '../../components/HomeCategory';

const HomeScreen = () =>  {
  return (
    <View style={styles.container}>
        <FlatList
            data={categories.items}
            renderItem={({item}) => <HomeCategory category={item} />}
        />
    </View>
  );
}

export default HomeScreen;