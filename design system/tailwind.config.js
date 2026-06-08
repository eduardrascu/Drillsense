const designTokens = require('./tokens.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors (Indigo)
        primary: {
          DEFAULT: designTokens.colors.ui.indigo['08'], // #454BDF
          dark: designTokens.colors.ui.indigo['09'], // #2C33C8
          light: designTokens.colors.ui.indigo['07'], // #5D63F6
          '01': designTokens.colors.ui.indigo['01'],
          '02': designTokens.colors.ui.indigo['02'],
          '03': designTokens.colors.ui.indigo['03'],
          '04': designTokens.colors.ui.indigo['04'],
          '05': designTokens.colors.ui.indigo['05'],
          '06': designTokens.colors.ui.indigo['06'],
          '07': designTokens.colors.ui.indigo['07'],
          '08': designTokens.colors.ui.indigo['08'],
          '09': designTokens.colors.ui.indigo['09'],
          '10': designTokens.colors.ui.indigo['10'],
        },
        // Text colors
        text: {
          primary: designTokens.colors.ui.gray['13'], // #21262E
          secondary: designTokens.colors.ui.gray['09'], // #515967
          tertiary: designTokens.colors.ui.gray['07'], // #6C7584
          disabled: designTokens.colors.ui.gray['06'], // #8F95A0
          weakest: designTokens.colors.ui.gray['06'],
        },
        // Border colors
        border: {
          DEFAULT: designTokens.colors.ui.gray['02'], // #DFE1E4
          light: designTokens.colors.ui.gray['03'], // #CFD2D6
          weak: designTokens.colors.ui.gray['04'], // #AFB3BB
          default: designTokens.colors.ui.gray['06'], // #8F95A0
        },
        // Background colors
        background: {
          DEFAULT: designTokens.colors.white,
          secondary: designTokens.colors.ui.gray['01'], // #EFF0F1
          muted: designTokens.colors.transparent.gray['4%'], // rgba(108, 117, 132, 0.04)
          hover: designTokens.colors.ui.gray['02'],
          active: designTokens.colors.ui.gray['03'],
        },
        // Success colors
        success: {
          DEFAULT: designTokens.colors.ui.green['09'], // #005632
          light: designTokens.colors.ui.green['10'], // #003E1B
          text: designTokens.colors.ui.green['10'],
          bg: designTokens.colors.ui.green['07'],
        },
        // Warning colors
        warning: {
          DEFAULT: designTokens.colors.ui.yellow['07'],
          text: designTokens.colors.ui.yellow['10'],
        },
        // Error colors
        error: {
          DEFAULT: designTokens.colors.ui.red['07'],
          text: designTokens.colors.ui.red['10'],
        },
        // Gray scale
        gray: designTokens.colors.ui.gray,
        // Transparent colors - using direct values for Tailwind
        'transparent-gray': {
          '4': designTokens.colors.transparent.gray['4%'],
          '8': designTokens.colors.transparent.gray['8%'],
          '12': designTokens.colors.transparent.gray['12%'],
          '16': designTokens.colors.transparent.gray['16%'],
          '24': designTokens.colors.transparent.gray['24%'],
        },
        'transparent-primary': {
          '4': designTokens.colors.transparent.primary['4%'],
          '8': designTokens.colors.transparent.primary['8%'],
          '12': designTokens.colors.transparent.primary['12%'],
          '16': designTokens.colors.transparent.primary['16%'],
          '24': designTokens.colors.transparent.primary['24%'],
          '32': designTokens.colors.transparent.primary['32%'],
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        // Body sizes
        'xs': [designTokens.typography.body.xs.fontSize, { lineHeight: designTokens.typography.body.xs.lineHeight, letterSpacing: '0.02em' }],
        'sm': [designTokens.typography.body.sm.fontSize, { lineHeight: designTokens.typography.body.sm.lineHeight }],
        'md': [designTokens.typography.body.md.fontSize, { lineHeight: designTokens.typography.body.md.lineHeight }],
        'lg': [designTokens.typography.body.lg.fontSize, { lineHeight: designTokens.typography.body.lg.lineHeight }],
        // Heading sizes
        'heading-sm': [designTokens.typography.heading.sm.fontSize, { lineHeight: designTokens.typography.heading.sm.lineHeight }],
        'heading-md': [designTokens.typography.heading.md.fontSize, { lineHeight: designTokens.typography.heading.md.lineHeight }],
        'heading-lg': [designTokens.typography.heading.lg.fontSize, { lineHeight: designTokens.typography.heading.lg.lineHeight }],
        'heading-xl': [designTokens.typography.heading.xl.fontSize, { lineHeight: designTokens.typography.heading.xl.lineHeight }],
        'heading-2xl': [designTokens.typography.heading['2xl'].fontSize, { lineHeight: designTokens.typography.heading['2xl'].lineHeight }],
        'heading-3xl': [designTokens.typography.heading['3xl'].fontSize, { lineHeight: designTokens.typography.heading['3xl'].lineHeight }],
        'heading-4xl': [designTokens.typography.heading['4xl'].fontSize, { lineHeight: designTokens.typography.heading['4xl'].lineHeight }],
      },
      fontWeight: {
        regular: 400,
        semibold: 600,
      },
      spacing: {
        '3xs': designTokens.spacing['3xs'],
        '2xs': designTokens.spacing['2xs'],
        '2.5xs': designTokens.spacing['2.5xs'],
        xs: designTokens.spacing.xs,
        sm: designTokens.spacing.sm,
        md: designTokens.spacing.md,
        lg: designTokens.spacing.lg,
        xl: designTokens.spacing.xl,
        '2xl': designTokens.spacing['2xl'],
      },
      borderRadius: {
        '2xs': designTokens.radius['2xs'],
        xs: designTokens.radius.xs,
        sm: designTokens.radius.sm,
        md: designTokens.radius.md,
        lg: designTokens.radius.lg,
        '2lg': designTokens.radius['2lg'],
        xl: designTokens.radius.xl,
        '2xl': designTokens.radius['2xl'],
        full: designTokens.radius.full,
      },
      boxShadow: {
        sm: designTokens.shadows.sm,
        md: designTokens.shadows.md,
        lg: designTokens.shadows.lg,
        focus: designTokens.shadows.focus,
      },
    },
  },
  plugins: [],
}
