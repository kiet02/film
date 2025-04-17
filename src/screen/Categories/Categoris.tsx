import React from 'react';
import {View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {AppText} from '../../element/AppText';
import {useQuery} from '@tanstack/react-query';
import {fetchApi} from '../../utils/modules';
import {useNavigation} from '@react-navigation/native';

type Category = {
  id: string;
  name: string;
};

export const Categories = () => {
  const navigation = useNavigation();
//   const {data: categories, isLoading} = useQuery({
//     queryKey: ['categories'],
//     queryFn: fetchApi.getCategories,
//   });

  const renderItem = ({item}: {item: Category}) => (
    <TouchableOpacity
      style={styles.categoryCard}
    //   onPress={() => navigation.navigate('BookList', {categoryId: item.id})}
      >
      <AppText text={item.name} style={styles.categoryName} />
      <AppText
    //    text={item.description}
       style={styles.categoryDescription} />
      <AppText
        // text={`${item.bookCount} books`}
        style={styles.categoryBookCount}
      />
    </TouchableOpacity>
  );

//   if (isLoading) {
//     return (
//       <View style={styles.container}>
//         <AppText text="Loading..." style={styles.loadingText} />
//       </View>
//     );
//   }

  return (
    <View style={styles.container}>
      {/* <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContainer: {
    padding: 16,
  },
  categoryCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  categoryName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  categoryDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  categoryBookCount: {
    fontSize: 12,
    color: '#999',
  },
  loadingText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#666',
  },
});