import React from 'react';
import {
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import Animated from 'react-native-reanimated';
type TTouchableComponent =
  | typeof TouchableOpacity
  | typeof TouchableWithoutFeedback
  | typeof TouchableHighlight;
type TAppButton = Omit<TTouchableComponent, 'style'> & {
  TouchableType:
    | 'TouchableWithoutFeedback'
    | 'TouchableOpacity'
    | 'TouchableHighlight';
  title?: string;
  onPress?: () => void;
  titileStyle?: StyleProp<TextStyle>;
  ButtonStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
};

export function AppButton({
  TouchableType,
  title,
  onPress,
  titileStyle,
  ButtonStyle,
  containerStyle,
  ...appButtonProps
}: TAppButton) {
  let TouchableComponent: TTouchableComponent;
  switch (TouchableType) {
    case 'TouchableOpacity':
      TouchableComponent = TouchableOpacity;
      break;
    case 'TouchableHighlight':
      TouchableComponent = TouchableHighlight;
      break;
    case 'TouchableWithoutFeedback':
    default:
      TouchableComponent = TouchableWithoutFeedback;
      break;
  }

  return (
    <Animated.View style={containerStyle}>
      <TouchableComponent
        {...appButtonProps}
        style={ButtonStyle}
        onPress={onPress}>
        <Text
          style={[
            {
              padding: 10,
              backgroundColor: '#007AFF',
              color: 'white',
              textAlign: 'center',
              borderRadius: 5,
              marginVertical: 5,
            },
            titileStyle,
          ]}>
          {title}
        </Text>
      </TouchableComponent>
    </Animated.View>
  );
}
