import React, { useEffect } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { AppText } from '../../element/AppText';
import { useQuery } from '@tanstack/react-query';
import { fetchApi } from '../../utils/modules';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useCategories } from './module/useCategories';
import { RootStackParamList, RootStackScreenProps } from '../../utils';
import { Sizes } from '../../utils/resource/size';
import Icon from '../../element/AppButton/AppIcon';
import { CategoriesHeader } from './item/CategoriesHeader';
import { Colors } from '../../utils/resource/color';

type Category = {
  id: string;
  name: string;
  imageUrl: string;
  author: string;
};

export const Categories = () => {
  const navigation = useNavigation();
  const route = useRoute<RootStackScreenProps<'Categories'>['route']>();
  const name = route.params?.name;
  const { data, isLoading } = useCategories(name);

  const renderItem = ({ item }: { item: Category }) => (
    <TouchableOpacity style={styles.categoryCard}>
      <View style={styles.rowContainer}>
        <Image
          source={{ uri: item.imageUrl }}
          style={styles.bookCover}
          resizeMode="cover"
        />
        <View style={styles.bookInfo}>
          <AppText text={item.name} style={styles.categoryName} />
          <AppText text={item.author} style={styles.authorName} />
          <AppText text="View details >" style={styles.viewDetail} />
        </View>
      </View>
    </TouchableOpacity>
  );

  if (isLoading) {
    return (
      <View style={styles.container}>
        <CategoriesHeader name={name} onPress={() => navigation.goBack()} />

        <AppText text="Loading..." style={styles.loadingText} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CategoriesHeader name={name} onPress={() => navigation.goBack()} />
      {!data?.Books?.length ? (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <AppText text="No books found in this category" />
        </View>
      ) : (
        <FlatList
          data={data?.Books as unknown as ArrayLike<Category>}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  listContainer: {
    padding: 16,
  },
  categoryCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    marginHorizontal: 8,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bookCover: {
    width: 80,
    height: 120,
    borderRadius: 8,
    marginRight: 12,
  },
  bookInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  categoryName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  authorName: {
    fontSize: 14,
    color: '#666',
    marginVertical: 4,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 8,
  },
  viewDetail: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
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
