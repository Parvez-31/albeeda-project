import { useAtom } from "jotai";
import { useEffect } from "react";
import { darkModeAtom } from "./themeAtom";

export const useDarkMode = () => {
  const [isDark, setIsDark] = useAtom(darkModeAtom);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  const toggle = () => setIsDark((prev) => !prev);

  return { isDark, toggle };
};
