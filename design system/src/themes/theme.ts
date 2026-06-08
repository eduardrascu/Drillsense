import {
  breakpoints,
  colors,
  components,
  fontFamilies,
  fontSizes,
  fontWeights,
  layout,
  lineHeights,
  radii,
  shadows,
  sizes,
  space,
  spacing,
  typography,
} from './tokens';

const dataViz = {
  sequential_7_1: [
    '#E8F2FF',
    '#C5DCFF',
    '#A1C6FF',
    '#7EB0FF',
    '#5A9AFF',
    '#3784FF',
    '#136EFF',
  ],
  qualitative_2_1: ['#136EFF', '#FF6B3D'],
  qualitative_2_2: ['#136EFF', '#34C759'],
  qualitative_4: ['#136EFF', '#34C759', '#FF6B3D', '#FFCC00'],
  qualitative_12: [
    '#136EFF',
    '#34C759',
    '#FF6B3D',
    '#FFCC00',
    '#AF52DE',
    '#FF2D55',
    '#5856D6',
    '#FF9500',
    '#32ADE6',
    '#007AFF',
    '#5AC8FA',
    '#4CD964',
  ],
};

const attributes = {
  categorical: '#136EFF',
  dateTime: '#34C759',
  numeric: '#FF6B3D',
  geo: '#FFCC00',
  meta: '#AF52DE',
};

const ux = {
  primary: colors.ui.indigo['07'],
  secondary: colors.ui.gray['07'],
  success: colors.ui.green['07'],
  warning: colors.ui.yellow['07'],
  error: colors.ui.red['07'],
  info: colors.ui.indigo['07'],
};

const baseTheme = {
  radii,
  breakpoints,
  sizes,
  space,
	spacing,
  fontSizes,
  fontWeights,
  lineHeights,
  fontFamilies,
  typography,
  layout,
  shadows,
  components,
};

/* ============================================================================
 * SEMANTIC LAYER — light
 * Hoisted to a const so the component layer below can reference it
 * (a component cannot reference a sibling key inside the same object literal).
 * ==========================================================================*/
const lightColors = {
  ...colors,
  ux,
  dataViz,
  attributes,
  neutral: {
    text: {
      default: colors.ui.gray['13'],
      weak: colors.ui.gray['09'],
      weaker: colors.ui.gray['07'],
      weakest: colors.ui.gray['06'],
      static: colors.white,
      inverted: {
        default: colors.ui.gray['01'],
        weak: colors.ui.gray['05'],
        weaker: colors.ui.gray['07'],
        weakest: colors.ui.gray['08'],
      },
    },
    icon: {
      default: colors.ui.gray['13'],
      weak: colors.ui.gray['09'],
      weaker: colors.ui.gray['07'],
      weakest: colors.ui.gray['06'],
      static: colors.white,
      inverted: {
        default: colors.ui.gray['01'],
        weak: colors.ui.gray['05'],
        weaker: colors.ui.gray['07'],
        weakest: colors.ui.gray['08'],
      },
    },
    border: {
      strong: colors.ui.gray['11'],
      default: colors.ui.gray['06'],
      weak: colors.ui.gray['04'],
      weaker: colors.ui.gray['03'],
      weakest: colors.ui.gray['02'],
    },
    background: {
      base: colors.white,
      baseInverted: colors.black,
      strongest: colors.ui.gray['13'],
      stronger: colors.ui.gray['12'],
      strong: colors.ui.gray['11'],
      default: colors.ui.gray['01'],
      hover: colors.ui.gray['02'],
      active: colors.ui.gray['03'],
      transparent: {
        backdrop: colors.transparent.gray['24%'],
        strong: colors.transparent.gray['16%'],
        default: colors.transparent.gray['12%'],
        weak: colors.transparent.gray['8%'],
        weaker: colors.transparent.gray['4%'],
      },
    },
  },
  primary: {
    text: {
      default: colors.ui.indigo['10'],
      weak: colors.ui.indigo['09'],
      weaker: colors.ui.indigo['08'],
      weakest: colors.ui.indigo['07'],
      inverted: {
        default: colors.ui.indigo['04'],
        weak: colors.ui.indigo['05'],
        weakest: colors.ui.indigo['07'],
      },
    },
    icon: {
      default: colors.ui.indigo['10'],
      weak: colors.ui.indigo['09'],
      weaker: colors.ui.indigo['08'],
      weakest: colors.ui.indigo['07'],
      inverted: {
        default: colors.ui.indigo['04'],
        weak: colors.ui.indigo['05'],
        weakest: colors.ui.indigo['07'],
      },
    },
    border: {
      default: colors.ui.indigo['06'],
      hover: colors.ui.indigo['07'],
      active: colors.ui.indigo['08'],
      disabled: colors.ui.indigo['02'],
    },
    background: {
      strongest: colors.ui.indigo['09'],
      stronger: colors.ui.indigo['08'],
      strong: colors.ui.indigo['07'],
      default: colors.ui.indigo['02'],
      hover: colors.ui.indigo['03'],
      active: colors.ui.indigo['04'],
      transparent: {
        strong: colors.transparent.primary['24%'],
        default: colors.transparent.primary['16%'],
        weak: colors.transparent.primary['12%'],
        weaker: colors.transparent.primary['4%'],
      },
    },
  },
  system: {
    info: {
      text: {
        default: colors.ui.indigo['10'],
        inverted: colors.ui.indigo['04'],
      },
      icon: {
        default: colors.ui.indigo['10'],
        weak: colors.ui.indigo['09'],
        inverted: colors.ui.indigo['04'],
      },
      border: {
        default: colors.ui.indigo['06'],
      },
      background: {
        default: colors.ui.indigo['07'],
        hover: colors.ui.indigo['08'],
        active: colors.ui.indigo['09'],
        weakest: colors.ui.indigo['01'],
        weakestHover: colors.ui.indigo['02'],
        weakestActive: colors.ui.indigo['03'],
        transparent: colors.transparent.primary['12%'],
      },
    },
    success: {
      text: {
        default: colors.ui.green['10'],
        inverted: colors.ui.green['04'],
      },
      icon: {
        default: colors.ui.green['10'],
        weak: colors.ui.green['09'],
        inverted: colors.ui.green['04'],
      },
      border: {
        default: colors.ui.green['06'],
      },
      background: {
        default: colors.ui.green['07'],
        hover: colors.ui.green['08'],
        active: colors.ui.green['09'],
        weakest: colors.ui.green['01'],
        weakestHover: colors.ui.green['02'],
        weakestActive: colors.ui.green['03'],
        transparent: colors.transparent.green['12%'],
      },
    },
    warning: {
      text: {
        default: colors.ui.yellow['10'],
        inverted: colors.ui.yellow['04'],
      },
      icon: {
        default: colors.ui.yellow['10'],
        weak: colors.ui.yellow['09'],
        inverted: colors.ui.yellow['04'],
      },
      border: {
        default: colors.ui.yellow['06'],
      },
      background: {
        default: colors.ui.yellow['07'],
        hover: colors.ui.yellow['08'],
        active: colors.ui.yellow['09'],
        weakest: colors.ui.yellow['01'],
        weakestHover: colors.ui.yellow['02'],
        weakestActive: colors.ui.yellow['03'],
        transparent: colors.transparent.yellow['20%'],
      },
    },
    error: {
      text: {
        default: colors.ui.red['10'],
        inverted: colors.ui.red['04'],
      },
      icon: {
        default: colors.ui.red['10'],
        weak: colors.ui.red['09'],
        inverted: colors.ui.red['04'],
      },
      border: {
        default: colors.ui.red['06'],
      },
      background: {
        default: colors.ui.red['07'],
        hover: colors.ui.red['08'],
        active: colors.ui.red['09'],
        weakest: colors.ui.red['01'],
        weakestHover: colors.ui.red['02'],
        weakestActive: colors.ui.red['03'],
        transparent: colors.transparent.red['12%'],
      },
    },
  },
};

/* COMPONENT LAYER — light. References the semantic layer above, never core
 * primitives (except code-only utility variants with no semantic equivalent:
 * primaryGray*, tertiary/ghost literals, chip.disabled 8%). */
const lightComponents = {
  input: {
    text: {
      default: lightColors.neutral.text.default,
      weak: lightColors.neutral.text.weaker,
      disabled: lightColors.neutral.text.weakest,
    },
    icon: {
      default: lightColors.neutral.icon.default,
      weak: lightColors.neutral.icon.weak,
      hover: lightColors.primary.icon.weaker,
      active: lightColors.primary.icon.weak,
      disabled: lightColors.neutral.icon.weakest,
    },
    border: {
      default: lightColors.neutral.border.weaker,
      hover: lightColors.neutral.border.weak,
      active: lightColors.primary.border.active,
    },
  },
  button: {
    text: {
      default: lightColors.primary.text.default,
      weak: lightColors.primary.text.weak,
      disabled: lightColors.neutral.text.weakest,
      inverted: lightColors.neutral.text.static,
      invertedDisabled: lightColors.neutral.text.inverted.weakest,
    },
    icon: {
      default: lightColors.primary.icon.default,
      weak: lightColors.primary.icon.weak,
      active: lightColors.primary.icon.weaker,
      disabled: lightColors.neutral.icon.weakest,
      inverted: lightColors.neutral.icon.static,
      invertedWeak: lightColors.primary.icon.inverted.weak,
      invertedDisabled: lightColors.neutral.icon.inverted.weakest,
    },
    border: {
      default: lightColors.primary.border.default,
      hover: lightColors.primary.border.hover,
      active: lightColors.primary.border.active,
      disabled: lightColors.neutral.border.weakest,
    },
    background: {
      primary: lightColors.primary.background.strong,
      primaryHover: lightColors.primary.background.stronger,
      primaryActive: lightColors.primary.background.strongest,
      secondary: lightColors.primary.background.transparent.weak,
      secondaryHover: lightColors.primary.background.transparent.default,
      secondaryActive: lightColors.primary.background.transparent.strong,
      primaryGray: colors.ui.gray['07'],
      primaryGrayHover: colors.ui.gray['08'],
      primaryGrayActive: colors.ui.gray['13'],
      secondaryGray: lightColors.neutral.background.transparent.default,
      secondaryGrayHover: lightColors.neutral.background.transparent.strong,
      secondaryGrayActive: lightColors.neutral.background.transparent.backdrop,
      tertiary: 'transparent',
      tertiaryHover: lightColors.primary.background.transparent.weak,
      tertiaryActive: lightColors.primary.background.transparent.default,
      ghost: 'transparent',
      ghostHover: lightColors.neutral.background.transparent.default,
      ghostActive: lightColors.neutral.background.transparent.strong,
      error: lightColors.system.error.background.default,
      errorHover: lightColors.system.error.background.hover,
      errorActive: lightColors.system.error.background.active,
    },
  },
  link: {
    text: {
      default: lightColors.primary.text.weakest,
      hover: lightColors.primary.text.weaker,
      active: lightColors.primary.text.weak,
      disabled: lightColors.neutral.text.weakest,
      inverse: lightColors.primary.text.weakest,
    },
    icon: {
      default: lightColors.primary.icon.weakest,
      hover: lightColors.primary.icon.weaker,
      active: lightColors.primary.icon.weak,
      disabled: lightColors.neutral.icon.weakest,
    },
  },
  tab: {
    text: {
      default: lightColors.neutral.text.weak,
      active: lightColors.primary.text.weak,
      disabled: lightColors.primary.text.weakest,
    },
    icon: {
      default: lightColors.neutral.icon.weak,
      active: lightColors.primary.icon.weak,
      disabled: lightColors.primary.icon.weakest,
    },
    border: {
      default: lightColors.neutral.border.weaker,
      hover: lightColors.primary.border.hover,
      active: lightColors.primary.border.active,
      disabled: lightColors.primary.border.disabled,
    },
    background: {
      hover: lightColors.primary.background.transparent.weak,
      active: lightColors.primary.background.transparent.strong,
    },
  },
  chip: {
    text: {
      default: lightColors.neutral.text.default,
      weak: lightColors.neutral.text.weak,
      disabled: lightColors.neutral.text.weakest,
    },
    icon: {
      default: lightColors.neutral.icon.weakest,
      hover: lightColors.primary.icon.weak,
      active: lightColors.primary.icon.weaker,
    },
    background: {
      default: lightColors.neutral.background.default,
      hover: lightColors.neutral.background.hover,
      active: lightColors.neutral.background.active,
      selected: lightColors.primary.background.transparent.strong,
      disabled: colors.transparent.primary['8%'],
    },
  },
};

export const lightTheme = {
  ...baseTheme,
  colors: {
    ...lightColors,
    components: lightComponents,
  },
};

/* ============================================================================
 * SEMANTIC LAYER — dark
 * ==========================================================================*/
const darkColors = {
  ...colors,
  ux,
  dataViz,
  attributes,
  neutral: {
    text: {
      default: colors.ui.gray['01'],
      weak: colors.ui.gray['05'],
      weaker: colors.ui.gray['07'],
      weakest: colors.ui.gray['08'],
      static: colors.white,
      inverted: {
        default: colors.ui.gray['13'],
        weak: colors.ui.gray['09'],
        weaker: colors.ui.gray['07'],
        weakest: colors.ui.gray['06'],
      },
    },
    icon: {
      default: colors.ui.gray['01'],
      weak: colors.ui.gray['05'],
      weaker: colors.ui.gray['07'],
      weakest: colors.ui.gray['08'],
      static: colors.white,
      inverted: {
        default: colors.ui.gray['13'],
        weak: colors.ui.gray['09'],
        weaker: colors.ui.gray['07'],
        weakest: colors.ui.gray['06'],
      },
    },
    border: {
      strong: colors.ui.gray['03'],
      default: colors.ui.gray['08'],
      weak: colors.ui.gray['10'],
      weaker: colors.ui.gray['11'],
      weakest: colors.ui.gray['12'],
    },
    background: {
      base: colors.black,
      baseInverted: colors.white,
      strongest: colors.ui.gray['01'],
      stronger: colors.ui.gray['02'],
      strong: colors.ui.gray['03'],
      default: colors.ui.gray['13'],
      hover: colors.ui.gray['12'],
      active: colors.ui.gray['11'],
      transparent: {
        backdrop: colors.transparent.gray['24%'],
        strong: colors.transparent.white['16%'],
        default: colors.transparent.white['12%'],
        weak: colors.transparent.white['8%'],
        weaker: colors.transparent.white['4%'],
      },
    },
  },
  primary: {
    text: {
      default: colors.ui.indigo['04'],
      weak: colors.ui.indigo['05'],
      weaker: colors.ui.indigo['06'],
      weakest: colors.ui.indigo['07'],
      inverted: {
        default: colors.ui.indigo['10'],
        weak: colors.ui.indigo['09'],
        weakest: colors.ui.indigo['07'],
      },
    },
    icon: {
      default: colors.ui.indigo['04'],
      weak: colors.ui.indigo['05'],
      weaker: colors.ui.indigo['06'],
      weakest: colors.ui.indigo['07'],
      inverted: {
        default: colors.ui.indigo['10'],
        weak: colors.ui.indigo['09'],
        weakest: colors.ui.indigo['07'],
      },
    },
    border: {
      default: colors.ui.indigo['08'],
      hover: colors.ui.indigo['07'],
      active: colors.ui.indigo['06'],
      disabled: colors.ui.indigo['12'],
    },
    background: {
      strongest: colors.ui.indigo['05'],
      stronger: colors.ui.indigo['06'],
      strong: colors.ui.indigo['07'],
      default: colors.ui.indigo['12'],
      hover: colors.ui.indigo['11'],
      active: colors.ui.indigo['10'],
      transparent: {
        strong: colors.transparent.primary['24%'],
        default: colors.transparent.primary['16%'],
        weak: colors.transparent.primary['12%'],
        weaker: colors.transparent.primary['8%'],
      },
    },
  },
  system: {
    info: {
      text: {
        default: colors.ui.indigo['04'],
        inverted: colors.ui.indigo['10'],
      },
      icon: {
        default: colors.ui.indigo['04'],
        weak: colors.ui.indigo['05'],
        inverted: colors.ui.indigo['10'],
      },
      border: {
        default: colors.ui.indigo['08'],
      },
      background: {
        default: colors.ui.indigo['07'],
        hover: colors.ui.indigo['06'],
        active: colors.ui.indigo['05'],
        weakest: colors.ui.indigo['13'],
        weakestHover: colors.ui.indigo['12'],
        weakestActive: colors.ui.indigo['11'],
        transparent: colors.transparent.primary['12%'],
      },
    },
    success: {
      text: {
        default: colors.ui.green['04'],
        inverted: colors.ui.green['10'],
      },
      icon: {
        default: colors.ui.green['04'],
        weak: colors.ui.green['05'],
        inverted: colors.ui.green['10'],
      },
      border: {
        default: colors.ui.green['08'],
      },
      background: {
        default: colors.ui.green['07'],
        hover: colors.ui.green['06'],
        active: colors.ui.green['05'],
        weakest: colors.ui.green['13'],
        weakestHover: colors.ui.green['12'],
        weakestActive: colors.ui.green['11'],
        transparent: colors.transparent.green['12%'],
      },
    },
    warning: {
      text: {
        default: colors.ui.yellow['04'],
        inverted: colors.ui.yellow['10'],
      },
      icon: {
        default: colors.ui.yellow['04'],
        weak: colors.ui.yellow['05'],
        inverted: colors.ui.yellow['10'],
      },
      border: {
        default: colors.ui.yellow['08'],
      },
      background: {
        default: colors.ui.yellow['07'],
        hover: colors.ui.yellow['06'],
        active: colors.ui.yellow['05'],
        weakest: colors.ui.yellow['13'],
        weakestHover: colors.ui.yellow['12'],
        weakestActive: colors.ui.yellow['11'],
        transparent: colors.transparent.yellow['20%'],
      },
    },
    error: {
      text: {
        default: colors.ui.red['04'],
        inverted: colors.ui.red['10'],
      },
      icon: {
        default: colors.ui.red['04'],
        weak: colors.ui.red['05'],
        inverted: colors.ui.red['10'],
      },
      border: {
        default: colors.ui.red['08'],
      },
      background: {
        default: colors.ui.red['07'],
        hover: colors.ui.red['06'],
        active: colors.ui.red['05'],
        weakest: colors.ui.red['13'],
        weakestHover: colors.ui.red['12'],
        weakestActive: colors.ui.red['11'],
        transparent: colors.transparent.red['12%'],
      },
    },
  },
};

/* COMPONENT LAYER — dark. References the semantic layer above.
 * The dark primary button now resolves THROUGH primary.background.active/hover/default
 * (UI.primary 10/11/12 = #00366B / #001E54 / #00073E) per the Figma "Dark (classic swap)"
 * spec — fixing the prior teal mismapping. Utility variants with no semantic equivalent
 * (primaryGray*, secondaryGray*, secondaryActive 32%, tertiary/ghost literals) stay primitive. */
const darkComponents = {
  input: {
    text: {
      default: darkColors.neutral.text.default,
      weak: darkColors.neutral.text.weaker,
      disabled: darkColors.neutral.text.weakest,
    },
    icon: {
      default: darkColors.neutral.icon.default,
      weak: darkColors.neutral.icon.weak,
      hover: darkColors.primary.icon.weaker,
      active: darkColors.primary.icon.weak,
      disabled: darkColors.neutral.icon.weakest,
    },
    border: {
      default: darkColors.neutral.border.weaker,
      hover: darkColors.neutral.border.weak,
      active: darkColors.primary.border.active,
    },
  },
  button: {
    text: {
      default: darkColors.primary.text.default,
      weak: darkColors.primary.text.weak,
      disabled: darkColors.neutral.text.weakest,
      inverted: darkColors.neutral.text.static,
      invertedDisabled: darkColors.neutral.text.inverted.weakest,
    },
    icon: {
      default: darkColors.primary.icon.default,
      weak: darkColors.primary.icon.weak,
      active: darkColors.primary.icon.weaker,
      disabled: darkColors.neutral.icon.weakest,
      inverted: darkColors.neutral.icon.static,
      invertedWeak: darkColors.primary.icon.inverted.weak,
      invertedDisabled: darkColors.neutral.icon.inverted.weakest,
    },
    border: {
      default: darkColors.primary.border.default,
      hover: darkColors.primary.border.hover,
      active: darkColors.primary.border.active,
      disabled: darkColors.neutral.border.weakest,
    },
    background: {
      primary: darkColors.primary.background.active,
      primaryHover: darkColors.primary.background.hover,
      primaryActive: darkColors.primary.background.default,
      secondary: darkColors.primary.background.transparent.default,
      secondaryHover: darkColors.primary.background.transparent.strong,
      secondaryActive: colors.transparent.primary['32%'],
      primaryGray: colors.ui.gray['07'],
      primaryGrayHover: colors.ui.gray['06'],
      primaryGrayActive: colors.ui.gray['05'],
      secondaryGray: colors.transparent.gray['16%'],
      secondaryGrayHover: colors.transparent.gray['24%'],
      secondaryGrayActive: colors.transparent.gray['32%'],
      tertiary: 'transparent',
      tertiaryHover: darkColors.primary.background.transparent.default,
      tertiaryActive: darkColors.primary.background.transparent.strong,
      ghost: 'transparent',
      ghostHover: darkColors.neutral.background.transparent.default,
      ghostActive: darkColors.neutral.background.transparent.strong,
      error: darkColors.system.error.background.default,
      errorHover: darkColors.system.error.background.hover,
      errorActive: darkColors.system.error.background.active,
    },
  },
  link: {
    text: {
      default: darkColors.primary.text.weakest,
      hover: darkColors.primary.text.weaker,
      active: darkColors.primary.text.weak,
      disabled: darkColors.neutral.text.weakest,
      inverse: darkColors.primary.text.weakest,
    },
    icon: {
      default: darkColors.primary.icon.weakest,
      hover: darkColors.primary.icon.weaker,
      active: darkColors.primary.icon.weak,
      disabled: darkColors.neutral.icon.weakest,
    },
  },
  tab: {
    text: {
      default: darkColors.neutral.text.weak,
      active: darkColors.primary.text.weak,
      disabled: darkColors.primary.text.weakest,
    },
    icon: {
      default: darkColors.neutral.icon.weak,
      active: darkColors.primary.icon.weak,
      disabled: darkColors.primary.icon.weakest,
    },
    border: {
      default: darkColors.neutral.border.weaker,
      hover: darkColors.primary.border.hover,
      active: darkColors.primary.border.active,
      disabled: darkColors.primary.border.disabled,
    },
    background: {
      hover: darkColors.primary.background.transparent.default,
      active: darkColors.primary.background.transparent.strong,
    },
  },
  chip: {
    text: {
      default: darkColors.neutral.text.default,
      weak: darkColors.neutral.text.weak,
      disabled: darkColors.neutral.text.weakest,
    },
    icon: {
      default: darkColors.neutral.icon.weakest,
      hover: darkColors.primary.icon.weak,
      active: darkColors.primary.icon.weaker,
    },
    background: {
      default: darkColors.neutral.background.default,
      hover: darkColors.neutral.background.hover,
      active: darkColors.neutral.background.active,
      selected: darkColors.primary.background.transparent.strong,
      disabled: darkColors.primary.background.transparent.weaker,
    },
  },
};

export const darkTheme = {
  ...baseTheme,
  colors: {
    ...darkColors,
    components: darkComponents,
  },
};

export default {
  light: lightTheme,
  dark: darkTheme,
};
