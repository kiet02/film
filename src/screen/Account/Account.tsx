import React, { useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { AppImage } from '../../element/AppImage/AppImage';
import { Sizes } from '../../utils/resource/size';
import { AppText } from '../../element/AppText';
import { useUser } from './module/useUser';
import { AppButton } from '../../element';
import { useColorScheme } from '../../ThemeProvider';
import { useAppTheme } from '../../hooks/useAppTheme';
import { AccountService, TabBottomScreen } from '../../utils';
import { useBottomSheet } from '../../BottomSheetProvider';
import { BottomSheetChangeName } from './item/BottomSheetChangeName';
import { BottomSheetChangePassword } from './item/BottomSheetChangePassword';
import {
  CommonActions,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import { AppAreaView } from '../../element/AppAreaView/AppAreaView';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Icon from '../../element/AppIcon/item/Icon';

export default function Account() {
  const { data, refetch } = useUser();
  const { openSheet, closeSheet } = useBottomSheet();
  const navigation = useNavigation<TabBottomScreen<'User'>['navigation']>();
  const { toggle, colorScheme, active } = useColorScheme();
  const { colors } = useAppTheme();

  useFocusEffect(
    useCallback(() => {
      // Khi màn hình được focus, không làm gì cả
      return () => {
        closeSheet();
      };
    }, [closeSheet])
  );

  const tap = Gesture.Tap()
    .runOnJS(true)
    .onStart(e => {
      if (!active) {
        toggle(e.absoluteX, e.absoluteY);
      }
    });

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
      <View style={{ width: '90%', height: '100%' }}>
        <View style={styles.header}>
          <GestureDetector gesture={tap}>
            <Icon
              size={Sizes.width(7)}
              name={colorScheme === 'light' ? 'Moon' : 'Sun'}
              color={colors.text.primary}
            />
          </GestureDetector>
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
      </View>
    </AppAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',

    position: 'absolute',
    top: 40,
    right: 10,
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
