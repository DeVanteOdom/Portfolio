"use client"
import { MutableRefObject, ReactNode, createContext, useContext, useRef } from "react";

type PageContextType = (MutableRefObject<null>[])
const PageContext = createContext<PageContextType>({} as PageContextType);

export const PageWrapper = ({children}: {children: ReactNode}) => {
    
    const homeRef = useRef(null);
    const projectsRef = useRef(null);
    const aboutRef = useRef(null);
    const ContactRef = useRef(null);

    return (
        <PageContext.Provider value={[homeRef, projectsRef, aboutRef, ContactRef]}>
            {children}
        </PageContext.Provider>
    )
}

export const usePageContext = () => {
    const [homeRef, projectsRef, aboutRef, ContactRef] = useContext(PageContext);
    
    return {homeRef, projectsRef, aboutRef, ContactRef}
}