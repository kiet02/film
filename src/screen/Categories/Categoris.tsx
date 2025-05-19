import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from 'react-native';
import { AppText } from '../../element/AppText';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RootStackScreenProps } from '../../utils';
import { CategoriesHeader } from './item/CategoriesHeader';
import { useCategories } from './module/useCategories';
import { AppAreaView } from '../../element/AppAreaView/AppAreaView';

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
          <AppText text={item.name} styleText={styles.categoryName} />
          <AppText text={item.author} styleText={styles.authorName} />
          <AppText text="View details >" styleText={styles.viewDetail} />
        </View>
      </View>
    </TouchableOpacity>
  );

  if (isLoading) {
    return (
      <AppAreaView>
        <CategoriesHeader name={name} onPress={() => navigation.goBack()} />
        <AppText text="Loading..." styleText={styles.loadingText} />
      </AppAreaView>
    );
  }

  return (
    <AppAreaView>
      <CategoriesHeader name={name} onPress={() => navigation.goBack()} />
      {!data?.Books?.length ? (
        <View style={styles.emptyContainer}>
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
    </AppAreaView>
  );
};

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    padding: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  bookCover: {
    width: 80,
    height: 120,
    borderRadius: 4,
  },
  bookInfo: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
  categoryName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  authorName: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  viewDetail: {
    color: '#1fb28a',
    fontSize: 14,
  },
  listContainer: {
    padding: 16,
  },
  loadingText: {
    textAlign: 'center',
    marginTop: 20,
  },
});
