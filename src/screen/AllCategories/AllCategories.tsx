import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { AllCategoriesHeader } from './item/AllCategoriesHeader';
import { MainScreenParamList } from '../../utils';
import { useNavigation } from '@react-navigation/native';
import { useAllCategories } from './module/useAllCategories';

const categories = [
  { id: '1', name: 'Action' },
  { id: '2', name: 'Comedy' },
  { id: '3', name: 'Drama' },
  { id: '4', name: 'Horror' },
  { id: '5', name: 'Romance' },
  { id: '6', name: 'Sci-Fi' },
];

function AllCategories() {
  const { data, isLoading } = useAllCategories();

  const navigation =
    useNavigation<MainScreenParamList<'AllCategories'>['navigation']>();
  const renderCategory = ({ item }: { item: { id: string; name: string } }) => (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() => navigation.navigate('Categories', { name: item.name })}
    >
      <Text style={styles.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );

  if (isLoading) {
    return (
      <View style={styles.container}>
        <AllCategoriesHeader
          name="All Categories"
          onPress={() => navigation.goBack()}
        />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <AllCategoriesHeader
        name="All Categories"
        onPress={() => navigation.goBack()}
      />
      <FlatList
        data={data as unknown as ArrayLike<{ id: string; name: string }>}
        renderItem={renderCategory}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  categoryItem: {
    flex: 1,
    margin: 5,
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default AllCategories;
