import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default function Account() {
  const [userImage, setUserImage] = useState('https://via.placeholder.com/100');
  const [userName, setUserName] = useState('User Name');

  const handleChangeName = () => {
    Alert.alert('Change Name', 'Name change functionality here');
  };

  const handleChangePassword = () => {
    Alert.alert('Change Password', 'Password change functionality here');
  };

  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('Logout pressed')},
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <Image source={{uri: userImage}} style={styles.profileImage} />
        <Text style={styles.userName}>{userName}</Text>
      </View>

      <View style={styles.optionsSection}>
        <TouchableOpacity style={styles.option} onPress={handleChangeName}>
          <Text style={styles.optionText}>Change Name</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.option} onPress={handleChangePassword}>
          <Text style={styles.optionText}>Change Password</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.option, styles.logoutButton]} 
          onPress={handleLogout}
        >
          <Text style={[styles.optionText, styles.logoutText]}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginVertical: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  optionsSection: {
    marginTop: 20,
  },
  option: {
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 16,
    textAlign: 'center',
  },
  logoutButton: {
    backgroundColor: '#ff4444',
    marginTop: 20,
  },
  logoutText: {
    color: 'white',
  },
});
