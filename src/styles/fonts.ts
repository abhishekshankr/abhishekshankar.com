import localFont from 'next/font/local'

export const uncutSans = localFont({
  src: './UncutSans-Variable.woff2',
  variable: '--font-uncut-sans',
})

export const uncutPlan8 = localFont({
  src: [
    {
      path: './UncutPlan8-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './UncutPlan8-RegularItalic.woff2',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-uncut-plan8',
}) 