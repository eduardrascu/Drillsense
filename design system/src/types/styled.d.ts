import 'styled-components';
import { TSize } from '@src/types/common.types';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      ui: {
        gray: Record<string, string>;
        blue: Record<string, string>;
        red: Record<string, string>;
        yellow: Record<string, string>;
        green: Record<string, string>;
        indigo: Record<string, string>;
      };
      ux: Record<string, string>;
      black: string;
      white: string;
      transparent: {
        gray: Record<string, string>;
        white: Record<string, string>;
        primary: Record<string, string>;
        red: Record<string, string>;
        yellow: Record<string, string>;
        green: Record<string, string>;
      };

      neutral: {
        text: {
          default: string;
          weak: string;
          weaker: string;
          weakest: string;
          static: string;
          inverted: {
            default: string;
            weak: string;
            weaker: string;
            weakest: string;
          };
        };
        icon: {
          default: string;
          weak: string;
          weaker: string;
          weakest: string;
          static: string;
          inverted: {
            default: string;
            weak: string;
            weaker: string;
            weakest: string;
          };
        };
        border: {
          strong: string;
          default: string;
          weak: string;
          weaker: string;
          weakest: string;
        };
        background: {
          base: string;
          baseInverted: string;
          strongest: string;
          stronger: string;
          strong: string;
          default: string;
          hover: string;
          active: string;
          transparent: {
            backdrop: string;
            strong: string;
            default: string;
            weak: string;
            weaker: string;
          };
        };
      };

      primary: {
        text: {
          default: string;
          weak: string;
          weaker: string;
          weakest: string;
          inverted: {
            default: string;
            weak: string;
            weakest: string;
          };
        };
        icon: {
          default: string;
          weak: string;
          weaker: string;
          weakest: string;
          inverted: {
            default: string;
            weak: string;
            weakest: string;
          };
        };
        border: {
          default: string;
          hover: string;
          active: string;
          disabled: string;
        };
        background: {
          strongest: string;
          stronger: string;
          strong: string;
          default: string;
          hover: string;
          active: string;
          transparent: {
            strong: string;
            default: string;
            weak: string;
            weaker: string;
          };
        };
      };

      system: {
        info: {
          text: {
            default: string;
            inverted: string;
          };
          icon: {
            default: string;
            weak: string;
            inverted: string;
          };
          border: {
            default: string;
          };
          background: {
            default: string;
            hover: string;
            active: string;
            weakest: string;
            weakestHover: string;
            weakestActive: string;
            transparent: string;
          };
        };
        success: {
          text: {
            default: string;
            inverted: string;
          };
          icon: {
            default: string;
            weak: string;
            inverted: string;
          };
          border: {
            default: string;
          };
          background: {
            default: string;
            hover: string;
            active: string;
            weakest: string;
            weakestHover: string;
            weakestActive: string;
            transparent: string;
          };
        };
        warning: {
          text: {
            default: string;
            inverted: string;
          };
          icon: {
            default: string;
            weak: string;
            inverted: string;
          };
          border: {
            default: string;
          };
          background: {
            default: string;
            hover: string;
            active: string;
            weakest: string;
            weakestHover: string;
            weakestActive: string;
            transparent: string;
          };
        };
        error: {
          text: {
            default: string;
            inverted: string;
          };
          icon: {
            default: string;
            weak: string;
            inverted: string;
          };
          border: {
            default: string;
          };
          background: {
            default: string;
            hover: string;
            active: string;
            weakest: string;
            weakestHover: string;
            weakestActive: string;
            transparent: string;
          };
        };
      };

      components: {
        input: {
          text: {
            default: string;
            weak: string;
            disabled: string;
          };
          icon: {
            default: string;
            weak: string;
            hover: string;
            active: string;
            disabled: string;
          };
          border: {
            default: string;
            hover: string;
            active: string;
          };
        };
        button: {
          text: {
            default: string;
            weak: string;
            disabled: string;
            inverted: string;
            invertedDisabled: string;
          };
          icon: {
            default: string;
            weak: string;
            active: string;
            disabled: string;
            inverted: string;
            invertedWeak: string;
            invertedDisabled: string;
          };
          border: {
            default: string;
            hover: string;
            active: string;
            disabled: string;
          };
          background: {
            primary: string;
            primaryHover: string;
            primaryActive: string;
            secondary: string;
            secondaryHover: string;
            secondaryActive: string;
            primaryGray: string;
            primaryGrayHover: string;
            primaryGrayActive: string;
            secondaryGray: string;
            secondaryGrayHover: string;
            secondaryGrayActive: string;
            tertiary: string;
            tertiaryHover: string;
            tertiaryActive: string;
            ghost: string;
            ghostHover: string;
            ghostActive: string;
            error: string;
            errorHover: string;
            errorActive: string;
          };
        };
        link: {
          text: {
            default: string;
            hover: string;
            active: string;
            disabled: string;
            inverse: string;
          };
          icon: {
            default: string;
            hover: string;
            active: string;
            disabled: string;
          };
        };
        tab: {
          text: {
            default: string;
            active: string;
            disabled: string;
          };
          icon: {
            default: string;
            active: string;
            disabled: string;
          };
          border: {
            default: string;
            hover: string;
            active: string;
            disabled: string;
          };
          background: {
            hover: string;
            active: string;
          };
        };
        chip: {
          text: {
            default: string;
            weak: string;
            disabled: string;
          };
          icon: {
            default: string;
            hover: string;
            active: string;
          };
          background: {
            default: string;
            hover: string;
            active: string;
            selected: string;
            disabled: string;
          };
        };
      };

      dataViz: {
        sequential_7_1: string[];
        qualitative_2_1: string[];
        qualitative_2_2: string[];
        qualitative_4: string[];
        qualitative_12: string[];
      };

      attributes: {
        categorical: string;
        dateTime: string;
        numeric: string;
        geo: string;
        meta: string;
      };
    };

    sizes: Record<TSize, string>;
    spacing: Record<TSize, string>;
    fontSizes: Record<TSize, string>;
    fontWeights: Record<TSize, string>;
    lineHeights: Record<TSize, string>;
    radii: Record<string, number>;
    breakpoints: Record<string, string>;
    typography: {
      heading: Record<string, Record<string, string>>;
      body: Record<string, Record<string, string>>;
    };
    shadows: Record<string, string>;

    components: {
      buttons: {
        sizes: Record<
          string,
          {
            padding: string;
            gap: number;
          }
        >;
        borderRadius: {
          primary: number;
          secondary: number;
        };
      };
      inputs: {
        sizes: Record<
          string,
          {
            padding: string;
            labelPaddingY?: number;
            paddingWithValue?: string;
          }
        >;
        borderRadius: number;
      };
      tabs: {
        sizes: Record<
          string,
          {
            padding: string;
            gap?: number;
          }
        >;
        borderRadius: {
          style1: number;
          style1Segment: number;
          style2: number;
        };
      };
    };

    layout: {
      page: {
        gutter: Record<string, number>;
        margin: Record<string, number>;
        columns: Record<string, number>;
      };
      card: Record<
        string,
        {
          padding: Record<string, string>;
          borderRadius: number;
        }
      >;
    };
  }
}
