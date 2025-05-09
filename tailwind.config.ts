import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-uncut-sans)', 'sans-serif'],
        mono: ['var(--font-uncut-plan8)', 'monospace'],
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '550',
        bold: '600',
        extrabold: '700',
        black: '800',
      },
      typography: {
        DEFAULT: {
          css: {
            'h1, h2, h3, h4, h5, h6, p, ul, ol, li': {
              fontFamily: 'var(--font-uncut-sans)',
            },
            'code, pre': {
              fontFamily: 'var(--font-uncut-plan8)',
            },
          },
        },
      },
    },
  },
  plugins: [
    typography(),
  ],
}

export default config 