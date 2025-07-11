"use client"
import { createContext, ReactNode, useState } from "react"

interface LanguageContextProps{
    lang : string;
    langSwitcher : ()=> void;
}
const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);


interface LanguageProviderProps{
    children : ReactNode;
}
const LanguageProvider = ({children}: LanguageProviderProps) =>{
    const[lang, setLang] = useState("en");

    const langSwitcher = () =>{
        setLang((prev)=>("en" === prev ? "es" : "en"));
    }

    return(
        <LanguageContext.Provider value={{lang, langSwitcher}}>
            {children}
        </LanguageContext.Provider>
    )
}

export {LanguageContext, LanguageProvider};