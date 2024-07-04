'use client';

import { useTheme } from "next-themes";
import { MouseEvent, useEffect, useState } from "react";
import { BsFillMoonFill } from "react-icons/bs";
import { MdLightMode } from "react-icons/md";

enum ThemeKind {
  DARK = 'dark',
  LIGHT = 'light',
  SYSTEM = 'system'
}

export default function ModeSwitcher () {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === ThemeKind.SYSTEM ? systemTheme : theme;
  const [ mounted, setMounted ] = useState(false);
  const themeClasses = 'text-xl hover:text-amber-500 cursor-pointer'

  const handleThemeChange = (event: MouseEvent<SVGElement, globalThis.MouseEvent>) => {
    event.preventDefault();
    setTheme(currentTheme === ThemeKind.DARK ? ThemeKind.LIGHT : ThemeKind.DARK)
  }
  useEffect(() => setMounted(true), []);

  return (
    <>
      { 
        mounted && (
          currentTheme === ThemeKind.DARK ? 
          <MdLightMode className={themeClasses} onClick={handleThemeChange} /> :
          <BsFillMoonFill className={themeClasses} onClick={handleThemeChange} /> 
        )
      }
    </>
  )
}