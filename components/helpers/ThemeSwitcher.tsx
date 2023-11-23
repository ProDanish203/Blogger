"use client"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes";

export const ThemeSwitcher = () => {
    
    const [mounted, setMounted] = useState(false);
    const {theme, setTheme} = useTheme();

    useEffect(() => {
        setMounted(true);
    }, [])

    if(!mounted)
        return null;

  return (
    <div className="flex gap-2 items-center">
    {/* <div onClick={() => setTheme("light")}>Light</div>
    <div onClick={() => setTheme("dark")}>dark</div> */}
    <i className={`${theme == 'light' ? 'fas fa-moon' : 'fas fa-sun'} text-xl cursor-pointer`}
    onClick={() => {
      theme == 'light' ? setTheme('dark') : setTheme('light');
    }}
    ></i>
    </div>

  )
}
