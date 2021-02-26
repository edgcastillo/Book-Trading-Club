const size = {
  small: '320px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1440px',
};

export const devices = {
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
  mobile: `(min-width: ${size.small} and max-width: ${size.tablet})`,
};
