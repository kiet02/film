import { icons } from 'lucide-react-native';
import Icon from './item/Icon';
import { useAppTheme } from '../../hooks/useAppTheme';

type AppIconProps = {
  name: keyof typeof icons;
  size?: number;
  color?: string;
};

export function AppIcon({ name, size, color }: AppIconProps) {
  const { colors } = useAppTheme();
  return <Icon name={name} size={size} color={color || colors.text.primary} />;
}
