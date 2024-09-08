import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primaryColor: "#173b61",
      secondaryColor: "#17616e",
      tertiaryColor: "#ffebd0",
      accentColor: "#fd8916 ",
      textColor: " #f5f5f5",
      backgroundColor: "#293241",
      buttonColor: "#7697a0",
      grayColor: "#D3D3D3",
      grayerColor: "#A9A9A9",
      grayestColor: "#808080",
      whiteColor: "#ffffff",
      grayTextColor: "#60758a",
    },
    extend: {},
  },
  plugins: [],
};
export default config;
