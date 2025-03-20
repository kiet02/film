import {Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const device_width = Dimensions.get('screen').width;
const device_height = Dimensions.get('screen').height;
const window_height = Dimensions.get('window').height;

let scale = 1;
if (device_width >= 744 && device_width < 1280) {
  scale = 0.75;
}
if (device_width >= 744 && device_width / device_height >= 0.7) {
  scale = 0.6;
}
if (device_width >= 1280) {
  scale = 0.6;
}

// responsive width-dependent pixel
const wpx = (px: number) => wp((px / 375) * 100 * scale);

const Sizes = {
  wpx,
  device_width,
  device_height,
  window_height,
  width: (per: string | number) => wp(per),
  height: (per: string | number) => hp(per),

  //padding, margin, spacing, font size
  teeny: wpx(2),
  tiniest: wpx(4),
  tinier: wpx(6),
  tiny: wpx(8),
  little: wpx(10),
  smallest: wpx(11),
  smaller: wpx(12), // default
  small: wpx(13),
  normal: wpx(14),
  medium: wpx(16),
  large: wpx(18),
  larger: wpx(20),
  largest: wpx(22),
  big: wpx(24),
  bigger: wpx(26),
  biggest: wpx(28),
  huge: wpx(30),
  massive: wpx(32),
  mega: wpx(34),
  enormous: wpx(36),
  gigantic: wpx(38),
  titanic: wpx(40),

  // border radius
  border_radius: wpx(8),
  border_radius_small: wpx(4),
  border_radius_big: wpx(16),
  border_radius_circle: 9999,
  oval_radius: wpx(32),
  border: wpx(1),
};

export {Sizes};
