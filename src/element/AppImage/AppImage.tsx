import { Image, ImageStyle } from 'react-native';
import { ImageProps } from 'react-native-svg';

type AppImageProps = Omit<ImageProps, 'style' | 'defaultValue'> & {
  uri: string;
  styles: ImageStyle;
};
export function AppImage({ uri, styles }: AppImageProps) {
  return (
    <Image
      source={uri ? { uri } : require('../../utils/image/a.png')}
      style={[
        {
          width: 100,
          height: 100,
          borderRadius: 50,

          borderColor: '#000',
        },
        styles,
      ]}
    />
  );
}
