import localFont from 'next/font/local'

// Font files can be colocated inside of `app`
export const montserratFont = localFont({
  src: [
    {
      path: './Montserrat-Light.ttf',
      weight: '300',
      style: 'normal'
    },
    {
      path: './Montserrat-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './Montserrat-ExtraLight.ttf',
      weight: '200',
      style: 'normal'
    },
    {
      path: './Montserrat-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: './Montserrat-SemiBold.ttf',
      weight: '600',
      style: 'normal'
    }
  ],
  display: 'swap',
  variable: '--montserrat'
})
