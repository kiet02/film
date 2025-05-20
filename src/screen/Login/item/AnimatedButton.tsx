import React from 'react';
import { View } from 'react-native';

import { AppButton, AppTextTouchable } from '../../../element';
import { Sizes } from '../../../utils/resource/size';

type TAnimatedButton = {
  onPressLogin: () => void;
  onPressRegister: () => void;
};

export function AnimatedButton({
  onPressLogin,
  onPressRegister,
}: TAnimatedButton) {
  return (
    <View>
      <AppButton
        title="Login"
        TouchableType="TouchableOpacity"
        titileStyle={{
          fontSize: Sizes.wpx(20),
          width: Sizes.wpx(200),
          marginVertical: Sizes.wpx(10),
          alignSelf: 'center',
          padding: Sizes.wpx(5),
          borderRadius: 10,
        }}
        onPress={onPressLogin}
      />
      <AppTextTouchable text="Register here" onPress={onPressRegister} />
    </View>
  );
}
