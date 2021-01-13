export default {
  styles: {
    root: {
      fontFamily: 'CircularStd',
      fontSize: '16px',
    },
    a: {
      textDecoration: 'none',
      color: 'accent',
    },
  },
  buttons: {
    primary: {
      p: '12px 16px',
      color: 'inverse',
      bg: 'primary',
      '&:hover': {
        bg: 'primaryLighter',
      },
    },
    secondary: {
      p: '12px 16px',
      color: 'primary',
      bg: 'transparent',
      border: '1px solid',
      borderColor: 'primary',
    },
  },
  fonts: {
    body: 'CircularStd',
    heading: 'CircularStd',
  },
  links: {
    nav: {
      color: 'text',
      textDecoration: 'none',
    },
    footer: {
      color: '#fff',
      textDecoration: 'none',
    },
  },
  colors: {
    primaryLighter: '#75d8ff',
    primary: '#33c5ff',
    text: '#111',
    inverse: '#fff',
    background: '#fff',
    suppressed: '#a8a8a8',
    accent: '#479AE9',
    gray: '#737373',
    i01: '#C625FF',
    i02: '#FF8125',
    i03: '#FF2581',
    i04: '#C625FF',
    i05: '#00E2E2',
    i06: '#4090C9',
    i07: '#CA0055',
  },
  background: {
    footer: '#000',
  },
  borders: {
    weakSeparator: '1px solid #e0e0e0',
  },
  text: {
    headingLarge: {
      fontSize: 48,
      fontWeight: 500,
      letterSpacing: '-2px',
      mb: '48px',
    },
    headingNormal: {
      fontSize: 36,
      fontWeight: 500,
      letterSpacing: '-2px',
      mb: '48px',
    },
    headingMedium: {
      fontSize: 28,
      fontWeight: 500,
      letterSpacing: '-1px',
      mb: '16px',
    },
    headingSmall: {
      fontSize: 24,
      fontWeight: 500,
      letterSpacing: '-1px',
      mb: '16px',
    },
    headingSuppressed: {
      color: 'suppressed',
      fontWeight: 300,
      fontSize: '22px',
      mb: '32px',
    },
    body: {
      fontSize: '16px',
    },
    bodyMedium: {
      fontSize: '18px',
    },
    bodyLarge: {
      fontWeight: 300,
      fontSize: '24px',
      letterSpacing: '-1px',
    },
  },
}
