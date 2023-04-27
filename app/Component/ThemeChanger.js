"use client";
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { BsFillMoonFill,BsFillSunFill } from 'react-icons/bs';

export default function ThemeChanger(){
    const {systemTheme,theme,setTheme}=useTheme();
    const [Mounted,setMounted]=useState(false)

    useEffect(()=>{
        setMounted(true)
    },[])

    const currentTheme=theme==="system"? systemTheme:theme
  return (
    <div>
        <div className='py-3 text-xl flex '>
            {
               Mounted && (currentTheme==="light"?
               (<BsFillMoonFill onClick={(e)=>setTheme("dark")} />)
               :(<BsFillSunFill onClick={(e)=>setTheme("light")} />)
               )
            }
        </div>
    </div>
  )
}
