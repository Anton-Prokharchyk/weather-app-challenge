const breakpoints = {
  mobile: '375px',
};

export const theme = {
  breakpoints,
  media: {
    mobile: (styles: string) => `
      @media (max-width: ${breakpoints.mobile}) {
        ${styles}
      }
    `,
  },
};

export type Theme = typeof theme;
