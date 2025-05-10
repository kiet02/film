import {icons} from 'lucide-react-native';
import {ColorValue} from 'react-native';

type TIcon = {
  name?: keyof typeof icons; // Tên icon hợp lệ
  color: ColorValue; // Màu sắc
  size: number; // Kích thước
};

const Icon = ({name, color, size}: TIcon) => {
  if (name) {
    const LucideIcon = icons[name];
    if (!LucideIcon) {
      console.warn(`Không tìm thấy icon "${name}"`);
      return null;
    }
    return <LucideIcon color={color} size={size} />;
  }
};

export default Icon;
