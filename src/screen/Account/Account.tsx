import React, { useCallback, useMemo, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { App } from '../../App';
import { AppImage } from '../../element/AppImage/AppImage';
import { Sizes } from '../../utils/resource/size';
import { AppText } from '../../element/AppText';
import { useUser } from './module/useUser';
import { AppButton } from '../../element';
import {
  AccountService,
  fetchApi,
  MainScreenParamList,
  TabBottomScreen,
} from '../../utils';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetTextInput,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useBottomSheet } from '../../BottomSheetProvider';
import { Control, FieldValues, useForm } from 'react-hook-form';
import { BottomSheetChangeName } from './item/BottomSheetChangeName';
import { BottomSheetChangePassword } from './item/BottomSheetChangePassword';
import {
  CommonActions,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';

type TUserForm = {
  name: string;
  password: string;
  confirmPassword: string;
};

export default function Account() {
  const { data, refetch, isFetching } = useUser();
  const { openSheet, closeSheet } = useBottomSheet();
  const navigation = useNavigation<TabBottomScreen<'User'>['navigation']>();

  useFocusEffect(
    useCallback(() => {
      // Khi màn hình được focus, không làm gì cả
      return () => {
        closeSheet();
      };
    }, [closeSheet])
  );

  const handleChangeName = () => {
    openSheet(<BottomSheetChangeName refetch={refetch} />, 0);
  };

  const handleChangePassword = () => {
    openSheet(<BottomSheetChangePassword logOut={handleLogout} />, 1);
  };

  const handleLogout = () => {
    AccountService.remove();
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      })
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <AppImage
          uri=""
          styles={{
            width: Sizes.wpx(200),
            height: Sizes.wpx(200),
            marginVertical: Sizes.wpx(20),
          }}
        />
        <AppText
          text={data?.name}
          styleText={{
            color: 'black',
            fontSize: Sizes.wpx(25),
            fontWeight: 'bold',
          }}
        />
      </View>

      <View>
        <AppButton
          containerStyle={styles.option}
          onPress={handleChangeName}
          title="Change Name"
          TouchableType="TouchableOpacity"
          titileStyle={{
            color: 'black',
            fontSize: Sizes.wpx(13),
            height: Sizes.wpx(17),
            backgroundColor: '#f0f0f0',
          }}
        />
        <AppButton
          containerStyle={styles.option}
          onPress={handleChangePassword}
          title="Change Password"
          TouchableType="TouchableOpacity"
          titileStyle={{
            color: 'black',
            fontSize: Sizes.wpx(13),
            height: Sizes.wpx(17),
            backgroundColor: '#f0f0f0',
          }}
        />

        <AppButton
          containerStyle={[styles.option, styles.logoutButton]}
          onPress={handleLogout}
          title="Logout"
          TouchableType="TouchableOpacity"
          titileStyle={{
            color: 'white',
            fontSize: Sizes.wpx(15),
            height: Sizes.wpx(20),
            backgroundColor: '#ff4444',
          }}
        />
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
  contentContainer: {
    flex: 1,
    alignItems: 'center',
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
  option: {
    height: Sizes.wpx(50),
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: 'center',
    // alignItems: 'center',
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
  input: {
    marginTop: 8,
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 16,
    lineHeight: 20,
    padding: 8,
    backgroundColor: 'rgba(151, 151, 151, 0.25)',
  },
});
