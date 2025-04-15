'use client'

export default function FontStyles() {
  return (
    <style jsx global>{`
      @font-face {
        font-family: 'Uncut Sans';
        src: url('/fonts/UncutSans-Variable.woff2') format('woff2');
        font-weight: 100 900;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: 'Uncut Sans';
        src: url('/fonts/UncutSans-Light.woff2') format('woff2');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: 'Uncut Sans';
        src: url('/fonts/UncutSans-LightItalic.woff2') format('woff2');
        font-weight: 300;
        font-style: italic;
        font-display: swap;
      }

      @font-face {
        font-family: 'Uncut Sans';
        src: url('/fonts/UncutSans-Regular.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: 'Uncut Sans';
        src: url('/fonts/UncutSans-RegularItalic.woff2') format('woff2');
        font-weight: normal;
        font-style: italic;
        font-display: swap;
      }

      @font-face {
        font-family: 'Uncut Sans';
        src: url('/fonts/UncutSans-Medium.woff2') format('woff2');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: 'Uncut Sans';
        src: url('/fonts/UncutSans-MediumItalic.woff2') format('woff2');
        font-weight: 500;
        font-style: italic;
        font-display: swap;
      }

      @font-face {
        font-family: 'Uncut Sans';
        src: url('/fonts/UncutSans-Semibold.woff2') format('woff2');
        font-weight: 600;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: 'Uncut Sans';
        src: url('/fonts/UncutSans-SemiboldItalic.woff2') format('woff2');
        font-weight: 600;
        font-style: italic;
        font-display: swap;
      }

      @font-face {
        font-family: 'Uncut Sans';
        src: url('/fonts/UncutSans-Bold.woff2') format('woff2');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: 'Uncut Sans';
        src: url('/fonts/UncutSans-BoldItalic.woff2') format('woff2');
        font-weight: bold;
        font-style: italic;
        font-display: swap;
      }
    `}</style>
  )
} 