import ThemeChart from "@components/constants/ThemeChart";

export const ThemeChanger = (theme: string): void => {
  const themeChanges = ThemeChart[theme];

  Object.keys(themeChanges).forEach((key) => {
    document.documentElement.style.setProperty(key, themeChanges[key]);
  });
};
