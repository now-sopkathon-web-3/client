import { DefaultTheme } from 'styled-components';

const color = {
  black: '#000',
  white: '#ffffff',
  gray0: '#F9FAFB',
  gray50: '#F9FAFB',
  gray100: '#F3F4F6',
  gray200: '#E5E7EB',
  gray300: '#D2D5DA',
  gray400: '#9CA3AF',
  gray500: '#6D7280',
  gray600: '#4B5563',
  gray700: '#374151',
  gray800: '#1F2937',
  gray900: '#111827',
  main: '#09D17D',
  sub: '#F0C419',
  bg: '#A4E1F4',
};

export type ColorType = typeof theme.color;

interface Font {
  family: string;
  size: number;
  weight: number;
  height: string;
  letterSpacing: number;
}

const FONT = ({ family, weight, size, height, letterSpacing }: Font): string => {
  return `
        font-family:${family};
        font-size:${size}rem;
        font-weight:${weight};
        line-height:${height}%;
        letter-spacing: ${letterSpacing}px;
    `;
};

const fonts = {
  head1: FONT({
    family: 'Pretendard, sans-serif',
    size: 2.8,
    weight: 600,
    height: '140',
    letterSpacing: 0,
  }),
  head2: FONT({
    family: 'Pretendard',
    size: 2.4,
    weight: 600,
    height: '140',
    letterSpacing: 0,
  }),
  title1: FONT({
    family: 'Pretendard',
    size: 2,
    weight: 600,
    height: '140',
    letterSpacing: 0,
  }),
  title2: FONT({
    family: 'Pretendard',
    size: 1.8,
    weight: 600,
    height: '140',
    letterSpacing: 0,
  }),
  subtitle1: FONT({
    family: 'Pretendard',
    size: 1.6,
    weight: 600,
    height: '140',
    letterSpacing: 0,
  }),
  subtitle2: FONT({
    family: 'Pretendard',
    size: 1.6,
    weight: 400,
    height: '140',
    letterSpacing: 0,
  }),
  body4: FONT({
    family: 'Pretendard',
    size: 1.4,
    weight: 600,
    height: '140',
    letterSpacing: 0,
  }),
  body3: FONT({
    family: 'Pretendard',
    size: 1.4,
    weight: 400,
    height: '140',
    letterSpacing: 0,
  }),
  body2: FONT({
    family: 'Pretendard',
    size: 1.2,
    weight: 600,
    height: '140',
    letterSpacing: 0,
  }),
  body1: FONT({
    family: 'Pretendard',
    size: 1.2,
    weight: 400,
    height: '140',
    letterSpacing: 0,
  }),
  caption: FONT({
    family: 'Pretendard',
    size: 1,
    weight: 400,
    height: '140',
    letterSpacing: 0,
  }),

  number1: FONT({
    family: 'LOTTERIACHAB',
    size: 1.5,
    weight: 400,
    height: '140',
    letterSpacing: 0,
  }),

  number2: FONT({
    family: 'LOTTERIACHAB',
    size: 2.8,
    weight: 600,
    height: '140',
    letterSpacing: 0,
  }),
};

export type FontsTypes = typeof fonts;

const theme: DefaultTheme = {
  color,
  fonts,
};

export default theme;
