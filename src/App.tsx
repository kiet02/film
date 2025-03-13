import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {fetchApi} from './utils/modules/FetchApi/FetchApi';
import {useQuery} from '@tanstack/react-query';

const App = () => {
  const {data, isLoading, error} = useQuery({
    queryKey: ['user'],
    queryFn: fetchApi.login,
  });

  // Log trạng thái của query
  console.log('Query State:', {isLoading, error, data});

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
    color: 'white',
  },
});
export {App};
