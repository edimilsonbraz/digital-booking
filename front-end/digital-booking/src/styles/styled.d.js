import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string,
      light: string,
      primary: string,
      title: string,
      text: string,
    },
    size: {
      sm: string,
      md: string,
      lg: string,
      full: string
    },
  }
}