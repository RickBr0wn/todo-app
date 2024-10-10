// for this to work correctly, add these lines to: `tailwind.config.ts`
// import { screens } from 'tailwindcss/defaultTheme'
//
// const config = {
//  ...
//  theme :{
//    screens: {
//    xs: '475px',
//     ...screens,
//  },
// ...

import ScreenWidth from './screen-width'

export default function ScreenSizeIndicator() {
  return (
    <div className="fixed z-50 top-0 left-0 p-4 text-xl font-bold">
      <h1 className="xs:block sm:hidden">
        XS <span className="opacity-50 text-xs">475px - 639px</span>
      </h1>
      <h1 className="hidden sm:block md:hidden">
        SM <span className="opacity-50 text-xs">640px - 767px</span>
      </h1>
      <h1 className="hidden md:block lg:hidden">
        MD <span className="opacity-50 text-xs">768px - 1023px</span>
      </h1>
      <h1 className="hidden lg:block xl:hidden">
        LG
        <span className="ml-2 opacity-50 text-xs">1024px - 1279px</span>
      </h1>
      <h1 className="hidden xl:block 2xl:hidden">
        XL
        <span className="ml-2 opacity-50 text-xs">1280px - 1535px</span>
      </h1>
      <h1 className="hidden 2xl:block">
        2XL
        <span className="ml-2 opacity-50 text-xs">1280px - 1535px</span>
      </h1>
      <ScreenWidth />
    </div>
  )
}
