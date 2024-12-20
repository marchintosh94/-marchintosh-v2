import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      backgroundImage: {
        'ig-background': 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
      },
      fontFamily: {
        montserrat: ['var(--montserrat)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        mb_dark: '#171717',
        mb_light: '#f5f5f7',
        mb_accent: '#ff7043',
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography")
  ],
};
export default config;
