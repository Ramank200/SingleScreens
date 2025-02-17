import { themeChart } from "@components/app/types";

const ThemeChart: themeChart = {
  dark: {
    "--primaryBlack": "#0e0d0d",
    "--plainWhite": "#f7f7f7",
    "--solidWhite": "#fff",
    "--primaryBlue": "#444f9a",
    "--gradientPairDarkRight": "#2e45a2",
    "--gradientPairLightLeft": "#6a71f3",
    "--textColor": "var(--plainWhite)",
    "--primaryThemeColor": "var(--primaryBlue)",
    "--background": "#0e0d0d",
    "--border": "transparent",
  },
  light: {
    "--textColor": "#6a6a6a",
    "--background": "#f7f7f7",
    "--gradientPairLightLeft": "#f9f9f7",
    "--gradientPairDarkRight": "#eaeaea",
    "--border": "#222",
  },
  default: {
    "--primaryBlack": "#0e0d0d",
    "--plainWhite": "#f7f7f7",
    "--solidWhite": "#fff",
    "--primaryBlue": "#444f9a",
    "--gradientPairDarkRight": "#2e45a2",
    "--gradientPairLightLeft": "#6a71f3",
    "--textColor": "var(--plainWhite)",
    "--primaryThemeColor": "var(--primaryBlue)",
    "--background": "#0e0d0d",
  },
  neonCyberpunk: {
    "--background": "#080808",
    "--primaryColor": "#ff00ff",
    "--gradientPairLightLeft": "#ff0099",
    "--gradientPairDarkRight": "#6600ff",
    "--textColor": "#ffffff",
    "--border": "#ff00ff",
  },
  earthyWarm: {
    "--background": "#f4e1d2",
    "--primaryColor": "#8b5e3b",
    "--gradientPairLightLeft": "#d8a47f",
    "--gradientPairDarkRight": "#a67c52",
    "--textColor": "#3e2723",
    "--border": "#5c4033",
  },
  aquaFresh: {
    "--background": "#e0f7fa",
    "--primaryColor": "#00796b",
    "--gradientPairLightLeft": "#4dd0e1",
    "--gradientPairDarkRight": "#00838f",
    "--textColor": "#004d40",
    "--border": "#00acc1",
  },
  monochromeMinimalist: {
    "--background": "#ffffff",
    "--primaryColor": "#000000",
    "--gradientPairLightLeft": "#e0e0e0",
    "--gradientPairDarkRight": "#bdbdbd",
    "--textColor": "#333333",
    "--border": "#999999",
  },
  retro80s: {
    "--background": "#2c003e",
    "--primaryColor": "#ff00ff",
    "--gradientPairLightLeft": "#ff6600",
    "--gradientPairDarkRight": "#ff3366",
    "--textColor": "#ffffff",
    "--border": "#ffcc00",
  },
  natureGreen: {
    "--background": "#f0f8e0",
    "--primaryColor": "#2e7d32",
    "--gradientPairLightLeft": "#c8e6c9",
    "--gradientPairDarkRight": "#81c784",
    "--textColor": "#1b3a1b",
    "--border": "#4caf50",
  },
};

export default ThemeChart;
