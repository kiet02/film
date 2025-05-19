import React from 'react';
import {
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Text,
  TextStyle,
  ViewStyle,
  TouchableOpacityProps,
  TouchableHighlightProps,
  TouchableWithoutFeedbackProps,
  Animated,
  StyleProp,
} from 'react-native';
import { useAppTheme } from '../../hooks/useAppTheme';

type TTouchableComponent =
  | typeof TouchableOpacity
  | typeof TouchableHighlight
  | typeof TouchableWithoutFeedback;

type TTouchableProps =
  | TouchableOpacityProps
  | TouchableHighlightProps
  | TouchableWithoutFeedbackProps;

type TAppButton = TTouchableProps & {
  TouchableType:
    | 'TouchableOpacity'
    | 'TouchableHighlight'
    | 'TouchableWithoutFeedback';
  title: string;
  onPress: () => void;
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
  const { colors } = useAppTheme();
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
        onPress={onPress}
      >
        <Text
          style={[
            {
              backgroundColor: colors.surface.primary,
              color: colors.text.primary,
              textAlign: 'center',
            },
            titileStyle,
          ]}
        >
          {title}
        </Text>
      </TouchableComponent>
    </Animated.View>
  );
}
