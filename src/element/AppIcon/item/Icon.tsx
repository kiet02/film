import { icons } from 'lucide-react-native';
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';

type IconProps = {
  name: keyof typeof icons;
  color?: string;
  size?: number;
  onpress?: () => void;
  style?: StyleProp<ViewStyle>;
};

const Icon = ({ name, color, size, onpress, style }: IconProps) => {
  const LucideIcon = icons[name];

  return (
    <TouchableOpacity disabled={!onpress} onPress={onpress} style={style}>
      <LucideIcon color={color} size={size} />
    </TouchableOpacity>
  );
};

export default Icon;
