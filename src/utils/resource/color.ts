const Colors = {
  light: {
    categories: {
      BSell: '#e3d6fb',
      classic: '#faded7',
      fiction: '#f9f7da',
      career: '#d8f2fb',
      more: '#f7f7f7',
    },
    explore: {
      item: '#f7f7f7',
    },
    background: '#ffffff',
    bottomTab: '#000000',
    tabFocus: '#ffffff',
  },
  dark: {},
};
export type TElement = keyof typeof Colors.light;

export type TColor = {
  [key in TElement]: {
    [key2 in keyof (typeof Colors.light)[key]]: string;
  };
};

export {Colors};
