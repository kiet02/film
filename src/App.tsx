import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {useQuery} from '@tanstack/react-query';
import {useRoute} from '@react-navigation/native';
import {fetchApi} from './utils/modules';

const App = () => {
  const {data, isLoading, error} = useQuery({
    queryKey: ['user'],
    queryFn: fetchApi.login,
  });

  const router = useRoute();

  if (isLoading) {
    return (
      <View style={styles.load}>
        <Text>Loading...</Text>
      </View>
    );
  }
  if (error) {
    console.log('Error occurred:', error.message); // Log chi tiết lỗi
    return (
      <View style={styles.container}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Username: {data?.username || 'N/A'}</Text>
      <Text style={styles.text}>ID: {data?.id || 'N/A'}</Text>
      <Text style={styles.text}>
        Avatar Hash: {data?.avatar?.gravatar?.hash || 'N/A'}
      </Text>
      <Text style={styles.text}>ID: {router.params.id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  load: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
  },
});
export {App};
