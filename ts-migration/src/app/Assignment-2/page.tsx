"use client"
import Link from "next/link";
import { useContext, useEffect } from "react";
import { ThemeContext } from "./Context/ThemeContext";
import { LanguageContext } from "./Context/LanguageContext";

export default function Assignment2(){
    const theme_context = useContext(ThemeContext);
    const lang_context = useContext(LanguageContext);

    if (!theme_context) {
  throw new Error("ThemeContext must be used within a ThemeProvider");
}
    if (!lang_context) {
  throw new Error("LangContext must be used within a LangProvider");
    }

    const { theme, toggleTheme } = theme_context;
    const { lang, langSwitcher} = lang_context;

    function Toggler(){
        toggleTheme()
    }

    useEffect(() => {
    document.body.className = '';
    if (theme === 'dark') {
      document.body.classList.add('dark');
    }
  }, [theme]);
    return(
        <ul>
          <h1>{lang}</h1>
          <button onClick={langSwitcher}>Switch language</button>
            <button onClick={Toggler}> Toggle Theme : {theme}</button>
            <li><Link href="Assignment-2/Question1">Question1</Link></li>
            <li><Link href="Assignment-2/Question2">Question2</Link></li>
            <li><Link href="Assignment-2/Question3">Question3</Link></li>
            <li><Link href="Assignment-2/Question4">Question4</Link></li>
            <li><Link href="Assignment-2/Question5">Question5</Link></li>
            <li><Link href="Assignment-2/Question6">Question6</Link></li>
            <li><Link href="Assignment-2/Question11">Question11</Link></li>
            <li><Link href="Assignment-2/Question12">Question12</Link></li>
            <li><Link href="Assignment-2/Question13">Question13</Link></li>
            <li><Link href="Assignment-2/Question14">Question14</Link></li>
            <li><Link href="Assignment-2/Question15">Question15</Link></li>
            <li><Link href="Assignment-2/Question16">Question16</Link></li>
            <li><Link href="Assignment-2/Question17">Question17</Link></li>
            <li><Link href="Assignment-2/Question18">Question18</Link></li>
            <li><Link href="Assignment-2/Question19">Question19</Link></li>
        </ul>
    )
}