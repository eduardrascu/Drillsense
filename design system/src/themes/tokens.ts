// Don't change it directly, use generate-token script by running command: yarn generate-tokens-v2

export const spacing = {
  '3xs': '2px',
  '2xs': '4px',
  xs: '8px',
  sm: '12px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '40px',
  '3xl': '48px',
};

export const space = {
  '0': '0px',
  '2px': '2px',
  '4px': '4px',
  '6px': '6px',
  '8px': '8px',
  '10px': '10px',
  '12px': '12px',
  '16px': '16px',
  '20px': '20px',
  '24px': '24px',
  '32px': '32px',
  '40px': '40px',
  '48px': '48px',
  '56px': '56px',
  '64px': '64px',
  '80px': '80px',
  '96px': '96px',
  '112px': '112px',
  '128px': '128px',
  '144px': '144px',
  '160px': '160px',
  '176px': '176px',
  '192px': '192px',
  '208px': '208px',
  '224px': '224px',
  '240px': '240px',
  '256px': '256px',
  '288px': '288px',
  '320px': '320px',
  '384px': '384px',
};

export const radius = {
  none: 0,
  '2px': '2px',
  '4px': '4px',
  '8px': '8px',
  '12px': '12px',
  '16px': '16px',
  '24px': '24px',
  '32px': '32px',
  '100%': '999px',
};

export const radii = {
  none: `${radius['none']}`,
  '2xs': `${space['2px']}`,
  xs: `${space['4px']}`,
  sm: `${space['8px']}`,
  md: `${space['12px']}`,
  lg: `${space['16px']}`,
  xl: `${space['24px']}`,
  '2xl': `${space['32px']}`,
  rounded: `${radius['100%']}`,
};

export const breakpoints = {
  desktop: '1440px',
  laptop: '1280px',
  tablet: '768px',
  mobile: '360px',
};

export const sizes = {
  lg: '44px',
  md: '36px',
  sm: '32px',
  xs: '24px',
};

export const fontSizes = {
  '3xs': '8px',
  '2xs': '10px',
  xs: '12px',
  s: '14px',
  m: '16px',
  l: '18px',
  xl: '20px',
  '2xl': '24px',
  '3xl': '30px',
  '4xl': '36px',
  '5xl': '44px',
};

export const fontWeights = {
  light: 300,
  regular: 400,
  semibold: 600,
};

export const lineHeights = {
  '2xs': '12px',
  xs: '14px',
  s: '16px',
  m: '20px',
  l: '24px',
  xl: '28px',
  '2xl': '32px',
  '3xl': '36px',
  '4xl': '40px',
  '5xl': '48px',
};

export const fontFamilies = {
  heading: 'Inter, sans-serif',
  body: 'Inter, sans-serif',
};

export const typography = {
  heading: {
    '4xl': {
      regular: {
        fontSize: `${fontSizes['5xl']}`,
        fontWeight: `${fontWeights.regular}`,
        lineHeight: `${lineHeights['5xl']}`,
        letterSpacing: '-2px',
      },
      semibold: {
        fontSize: `${fontSizes['5xl']}`,
        fontWeight: `${fontWeights.semibold}`,
        lineHeight: `${lineHeights['5xl']}`,
        letterSpacing: '-2px',
      },
    },
    '3xl': {
      regular: {
        fontSize: `${fontSizes['4xl']}`,
        fontWeight: `${fontWeights.regular}`,
        lineHeight: `${lineHeights['4xl']}`,
      },
      semibold: {
        fontSize: `${fontSizes['4xl']}`,
        fontWeight: `${fontWeights.semibold}`,
        lineHeight: `${lineHeights['4xl']}`,
      },
    },
    '2xl': {
      regular: {
        fontSize: `${fontSizes['3xl']}`,
        fontWeight: `${fontWeights.regular}`,
        lineHeight: `${lineHeights['3xl']}`,
      },
      semibold: {
        fontSize: `${fontSizes['3xl']}`,
        fontWeight: `${fontWeights.semibold}`,
        lineHeight: `${lineHeights['3xl']}`,
      },
    },
    xl: {
      regular: {
        fontSize: `${fontSizes['2xl']}`,
        fontWeight: `${fontWeights.regular}`,
        lineHeight: `${lineHeights['2xl']}`,
      },
      semibold: {
        fontSize: `${fontSizes['2xl']}`,
        fontWeight: `${fontWeights.semibold}`,
        lineHeight: `${lineHeights['2xl']}`,
      },
    },
    lg: {
      regular: {
        fontSize: `${fontSizes['xl']}`,
        fontWeight: `${fontWeights.regular}`,
        lineHeight: `${lineHeights['xl']}`,
      },
      semibold: {
        fontSize: `${fontSizes['xl']}`,
        fontWeight: `${fontWeights.semibold}`,
        lineHeight: `${lineHeights['xl']}`,
      },
    },
    md: {
      light: {
        fontSize: `${fontSizes['l']}`,
        fontWeight: `${fontWeights.light}`,
        lineHeight: `${lineHeights['xl']}`,
      },
      regular: {
        fontSize: `${fontSizes['l']}`,
        fontWeight: `${fontWeights.regular}`,
        lineHeight: `${lineHeights['xl']}`,
      },
      semibold: {
        fontSize: `${fontSizes['l']}`,
        fontWeight: `${fontWeights.semibold}`,
        lineHeight: `${lineHeights['xl']}`,
      },
    },
    sm: {
      regular: {
        fontSize: `${fontSizes['m']}`,
        fontWeight: `${fontWeights.regular}`,
        lineHeight: `${lineHeights['l']}`,
      },
      semibold: {
        fontSize: `${fontSizes['m']}`,
        fontWeight: `${fontWeights.semibold}`,
        lineHeight: `${lineHeights['l']}`,
      },
    },
  },
  body: {
    lg: {
      regular: {
        fontSize: `${fontSizes['m']}`,
        fontWeight: `${fontWeights.regular}`,
        lineHeight: `${lineHeights['l']}`,
      },
      semibold: {
        fontSize: `${fontSizes['m']}`,
        fontWeight: `${fontWeights.semibold}`,
        lineHeight: `${lineHeights['l']}`,
      },
      underline: {
        fontSize: `${fontSizes['m']}`,
        fontWeight: `${fontWeights.regular}`,
        lineHeight: `${lineHeights['l']}`,
        textDecoration: 'underline',
      },
    },
    md: {
      regular: {
        fontSize: `${fontSizes['s']}`,
        fontWeight: `${fontWeights.regular}`,
        lineHeight: `${lineHeights['m']}`,
      },
      semibold: {
        fontSize: `${fontSizes['s']}`,
        fontWeight: `${fontWeights.semibold}`,
        lineHeight: `${lineHeights['m']}`,
      },
      underline: {
        fontSize: `${fontSizes['s']}`,
        fontWeight: `${fontWeights.regular}`,
        lineHeight: `${lineHeights['m']}`,
        textDecoration: 'underline',
      },
    },
    sm: {
      regular: {
        fontSize: `${fontSizes['xs']}`,
        fontWeight: `${fontWeights.regular}`,
        lineHeight: `${lineHeights['s']}`,
      },
      semibold: {
        fontSize: `${fontSizes['xs']}`,
        fontWeight: `${fontWeights.semibold}`,
        lineHeight: `${lineHeights['s']}`,
      },
    },
    xs: {
      regular: {
        fontSize: `${fontSizes['2xs']}`,
        fontWeight: `${fontWeights.regular}`,
        lineHeight: `${lineHeights['xs']}`,
        letterSpacing: '2%',
      },
      semibold: {
        fontSize: `${fontSizes['2xs']}`,
        fontWeight: `${fontWeights.semibold}`,
        lineHeight: `${lineHeights['xs']}`,
        letterSpacing: '2%',
      },
      'upper case': {
        fontSize: `${fontSizes['2xs']}`,
        fontWeight: `${fontWeights.regular}`,
        lineHeight: `${lineHeights['xs']}`,
        letterSpacing: '2%',
        textTransform: 'uppercase',
      },
    },
    '2xs': {
      regular: {
        fontSize: `${fontSizes['3xs']}`,
        fontWeight: `${fontWeights.regular}`,
        lineHeight: `${lineHeights['2xs']}`,
      },
    },
  },
};

export const layout = {
  page: {
    gutter: {
      desktop: '32px',
      laptop: '24px',
      tablet: '24px',
      mobile: '16px',
    },
    'margin right_left': {
      desktop: '80px',
      laptop: '56px',
      tablet: '32px',
      mobile: '16px',
    },
    columns: {
      desktop: '12px',
      laptop: '12px',
      tablet: '8px',
      mobile: '4px',
    },
    illustration: {
      desktop: '160px',
      laptop: '160px',
      tablet: '128px',
      mobile: '112px',
    },
  },
  'sign in_up': {
    'margin right_left': {
      desktop: '80px',
      laptop: '80px',
      tablet: '64px',
      mobile: '40px',
    },
    'margin top_bottom': {
      desktop: '80px',
      laptop: '80px',
      tablet: '64px',
      mobile: '40px',
    },
    radius: {
      desktop: `${radii['lg']}`,
      laptop: `${radii['lg']}`,
      tablet: `${radii['lg']}`,
      mobile: `${radii['lg']}`,
    },
  },
  modal: {
    'margin right_left': {
      desktop: '20px',
      laptop: '20px',
      tablet: '20px',
      mobile: '16px',
    },
    'margin top_bottom': {
      desktop: '20px',
      laptop: '20px',
      tablet: '20px',
      mobile: '16px',
    },
    radius: {
      desktop: `${radii['lg']}`,
      laptop: `${radii['lg']}`,
      tablet: `${radii['lg']}`,
      mobile: `${radii['lg']}`,
    },
    illustration: {
      desktop: '96px',
      laptop: '96px',
      tablet: '80px',
      mobile: '80px',
    },
  },
  'card l (storytelling)': {
    'margin right_left': {
      desktop: '32px',
      laptop: '32px',
      tablet: '24px',
      mobile: '16px',
    },
    'margin top_bottom': {
      desktop: '24px',
      laptop: '24px',
      tablet: '16px',
      mobile: '12px',
    },
    radius: {
      desktop: `${radii['md']}`,
      laptop: `${radii['md']}`,
      tablet: `${radii['md']}`,
      mobile: `${radii['md']}`,
    },
  },
  'card m (dashboard)': {
    'margin right_left': {
      desktop: '16px',
      laptop: '16px',
      tablet: '16px',
      mobile: '16px',
    },
    'margin top_bottom': {
      desktop: '12px',
      laptop: '12px',
      tablet: '12px',
      mobile: '12px',
    },
    radius: {
      desktop: `${radii['md']}`,
      laptop: `${radii['md']}`,
      tablet: `${radii['md']}`,
      mobile: `${radii['md']}`,
    },
  },
  'card s': {
    'margin right_left': {
      desktop: '12px',
      laptop: '12px',
      tablet: '12px',
      mobile: '12px',
    },
    'margin top_bottom': {
      desktop: '12px',
      laptop: '12px',
      tablet: '12px',
      mobile: '12px',
    },
    radius: {
      desktop: `${radii['sm']}`,
      laptop: `${radii['sm']}`,
      tablet: `${radii['sm']}`,
      mobile: `${radii['sm']}`,
    },
  },
  'card xs (interactive molecules)': {
    'margin right_left': {
      desktop: '12px',
      laptop: '12px',
      tablet: '12px',
      mobile: '12px',
    },
    'margin top_bottom': {
      desktop: '12px',
      laptop: '12px',
      tablet: '12px',
      mobile: '12px',
    },
    radius: {
      desktop: `${radii['xs']}`,
      laptop: `${radii['xs']}`,
      tablet: `${radii['xs']}`,
      mobile: `${radii['xs']}`,
    },
  },
};

export const shadows = {
  focus: '0 0 0 2px rgba(93, 99, 246, 1)',
  sm: '0 4px 8px 1px rgba(19, 22, 29, 0.04), 0 2px 8px 0px rgba(19, 22, 29, 0.06)',
  md: '0 2px 4px 0px rgba(40, 46, 55, 0.04), 0 4px 8px 2px rgba(40, 46, 55, 0.06)',
  lg: '0 2px 4px 0px rgba(40, 46, 55, 0.06), 0 8px 12px 4px rgba(40, 46, 55, 0.06)',
  xl: '0 4px 6px 0px rgba(40, 46, 55, 0.06), 0 12px 16px 6px rgba(40, 46, 55, 0.06)',
  '2xl':
    '0 4px 8px 0px rgba(40, 46, 55, 0.06), 0 16px 20px 6px rgba(40, 46, 55, 0.06)',
  inner:
    'inset 0 2px 4px 1px rgba(40, 46, 55, 0.06), inset 0 2px 2px 0px rgba(40, 46, 55, 0.06)',
};
export const components = {
  buttons: {
    lg: {
      padding: `${spacing['sm']} ${spacing['md']}`,
      'input-label-inside-py': `${spacing['xs']}`,
    },
    gap: `${spacing['xs']}`,
    md: {
      padding: `${spacing['xs']} ${spacing['sm']}`,
    },
    sm: {
      padding: `${spacing['xs']} ${spacing['sm']}`,
      gap: `${spacing['xs']}`,
    },
    borderRadius: {
      primary: `${radii.sm}`,
      secondary: `${radii.sm}`,
    },
    xs: {
      padding: `${spacing['sm']} ${spacing['md']}`,
      gap: `${spacing['xs']}`,
    },
  },
  inputs: {
    lg: {
      padding: `${spacing['xs']} ${spacing['sm']}`,
      'input-label-inside-py': `${spacing['xs']}`,
    },
    gap: `${spacing['xs']}`,
    md: {
      padding: `${spacing['2xs']} ${spacing['xs']}`,
    },
		borderRadius: radii.sm,
    sm: {
      padding: `${spacing['2xs']} ${spacing['xs']}`,
      gap: `${spacing['xs']}`,
    },
    xsm: {
      padding: `${spacing['2xs']} ${spacing['xs']}`,
      gap: `${spacing['xs']}`,
    },
  },
  modal: {
    'min-width': '320px',
    'max-width': '380px',
  },
  tabs: {
    gap: `${spacing['2xs']}`,
    lg: {
      padding: `${spacing['sm']} ${spacing['md']}`,
    },
    md: {
      padding: `${spacing['sm']} ${spacing['md']}`,
    },
    sm: {
      padding: `${spacing['sm']} ${spacing['md']}`,
      gap: `${spacing['3xs']}`,
    },
    borderRadius: `${radii.md}`,
  },
  data_table_cell: {
    lg: {
      padding: `${spacing['sm']} ${spacing['md']}`,
    },
    md: {
      padding: `${spacing['sm']} ${spacing['md']}`,
    },
    sm: {
      padding: `${spacing['sm']} ${spacing['md']}`,
    },
  },
  ai: {
    borderRadius: {
      primary: `${radii.sm}`,
      secondary: `${radii.rounded}`,
    },
    'actions/btn-lg-p': `${spacing['sm']}`,
    'actions/btn-md-p': `${spacing['sm']}`,
    'actions/dropdown-p': `${spacing['sm']}`,
    'actions/prompt-px': `${spacing['md']}`,
    'actions/prompt-py': `${spacing['xs']}`,
    'actions/input-p': `${spacing['xs']}`,
  },
};

export const colors = {
  ui: {
    gray: {
      '10': '#38393C',
      '11': '#2C2D30',
      '12': '#1B1B1B',
      '13': '#181818',
      '14': '#0B0B0B',
      '01': '#F5F5F5',
      '02': '#E8E8E8',
      '03': '#DBDBDB',
      '04': '#C1C1C1',
      '05': '#A8A8A8',
      '06': '#8E8E8E',
      '07': '#757575',
      '08': '#5D5D5E',
      '09': '#444547',
    },
    blue: {
      '10': '#0029AA',
      '11': '#001193',
      '12': '#00007D',
      '13': '#000066',
      '01': '#E6F1FD',
      '02': '#CEE3FC',
      '03': '#B5D4FA',
      '04': '#84B8F7',
      '05': '#6CAAF5',
      '06': '#3B8DF2',
      '07': '#0A71EF',
      '08': '#0059D8',
      '09': '#0041C1',
      '14 (remove)': '#000066',
    },
    red: {
      '10': '#940000',
      '11': '#7B0000',
      '12': '#630000',
      '13': '#570000',
      '01': '#FCEAEC',
      '02': '#F8D5D9',
      '03': '#F5C0C7',
      '04': '#EE96A1',
      '05': '#EB828E',
      '06': '#E45869',
      '07': '#DD2E43',
      '08': '#C5162C',
      '09': '#AC0015',
      '14 (remove)': '#330000',
    },
    yellow: {
      '10': '#6A1700',
      '11': '#510000',
      '12': '#390000',
      '13': '#2D0000',
      '01': '#FFEB8C',
      '02': '#FFD273',
      '03': '#FFC566',
      '04': '#FFAB4D',
      '05': '#E69233',
      '06': '#C06C0D',
      '07': '#B35F00',
      '08': '#9B4700',
      '09': '#822F00',
      '14 (remove)': '#332900',
    },
    green: {
      '10': '#003E05',
      '11': '#002600',
      '12': '#001A00',
      '13': '#000F00',
      '01': '#E7F3ED',
      '02': '#D0E7DB',
      '03': '#B8DBC9',
      '04': '#89C3A4',
      '05': '#71B692',
      '06': '#429E6E',
      '07': '#13864A',
      '08': '#006E33',
      '09': '#00561C',
      '14 (remove)': '#003313',
    },
    indigo: {
      '10': '#00366B',
      '11': '#001E54',
      '12': '#00073E',
      '13': '#000027',
      '01': '#E5F2F7',
      '02': '#CCE5EF',
      '03': '#B2D8E7',
      '04': '#80BED7',
      '05': '#66B2D0',
      '06': '#3398C0',
      '07': '#007EB0',
      '08': '#006699',
      '09': '#004E82',
      '14 (remove)': '#101030',
    },
  },
  ux: {
    '10': '#38393C',
    '11': '#2C2D30',
    '12': '#181A1E',
    '13': '#13161D',
    '14': '#07090E',
    '01': '#F5F5F5',
    '02': '#E8E8E8',
    '03': '#DBDBDB',
    '04': '#C1C1C1',
    '05': '#A8A8A8',
    '06': '#8E8E8E',
    '07': '#757575',
    '08': '#5D5D5E',
    '09': '#444547',
  },
  transparent: {
    gray: {
      '4%': '#6C75840A',
      '8%': '#6C75841F',
      '12%': '#6C758429',
      '16%': '#6C758433',
      '24%': '#21262E3D',
    },
    white: {
      '4%': '#F1F1F20A',
      '8%': '#F1F1F214',
      '12%': '#F1F1F21F',
      '16%': '#F1F1F229',
      '72%': '#F1F1F2B8',
    },
    primary: {
      '4%': '#007EB00A',
      '8%': '#007EB014',
      '12%': '#007EB01F',
      '16%': '#007EB029',
      '24%': '#007EB03D',
      '32%': '#007EB052',
    },
    red: {
      '12%': '#DD2E431F',
      '20%': '#DD2E4333',
      '24%': '#DD2E433D',
    },
    yellow: {
      '20%': '#B35F0033',
      '30%': '#B35F004D',
      '40%': '#B35F0066',
    },
    green: {
      '12%': '#13864A1F',
      '20%': '#13864A29',
      '24%': '#13864A29',
    },
  },
  black: '#121212',
  white: '#FFFFFF',
};
