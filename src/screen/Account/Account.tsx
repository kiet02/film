import React, { useCallback, useMemo, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  Switch,
} from 'react-native';
import { App } from '../../App';
import { AppImage } from '../../element/AppImage/AppImage';
import { Sizes } from '../../utils/resource/size';
import { AppText } from '../../element/AppText';
import { useUser } from './module/useUser';
import { AppButton } from '../../element';
import { useTheme } from '../../ThemeProvider';
import { useAppTheme } from '../../hooks/useAppTheme';
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
import { Colors } from '../../utils/resource/color';
import { AppAreaView } from '../../element/AppAreaView/AppAreaView';

type TUserForm = {
  name: string;
  password: string;
  confirmPassword: string;
};

export default function Account() {
  const { data, refetch, isFetching } = useUser();
  const { openSheet, closeSheet } = useBottomSheet();
  const navigation = useNavigation<TabBottomScreen<'User'>['navigation']>();
  const { isDarkMode, toggleTheme } = useTheme();
  const { colors } = useAppTheme();

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
    <AppAreaView style={styles.container}>
      <View style={styles.header}>
        <Switch
          style={styles.themeSwitch}
          value={isDarkMode}
          onValueChange={toggleTheme}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
        />
      </View>
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
            color: colors.text.primary,
            fontSize: Sizes.wpx(25),
            fontWeight: 'bold',
          }}
        />
      </View>

      <View>
        <AppButton
          containerStyle={[
            styles.option,
            { backgroundColor: colors.surface.primary },
          ]}
          onPress={handleChangeName}
          title="Change Name"
          TouchableType="TouchableOpacity"
          titileStyle={{
            color: colors.text.primary,
            fontSize: Sizes.wpx(13),
            height: Sizes.wpx(17),
          }}
        />
        <AppButton
          containerStyle={[
            styles.option,
            { backgroundColor: colors.surface.primary },
          ]}
          onPress={handleChangePassword}
          title="Change Password"
          TouchableType="TouchableOpacity"
          titileStyle={{
            color: colors.text.primary,
            fontSize: Sizes.wpx(13),
            height: Sizes.wpx(17),
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
    </AppAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 10,
  },
  themeSwitch: {
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
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
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: 'center',
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
