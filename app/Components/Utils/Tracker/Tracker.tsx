import { ReactNode, useEffect, useRef } from 'react';
import * as React from "react";
type TrackVisibilityProps = {
    onVisible: () => void;
    threshold?: number;
    children: ReactNode;
}
 const TrackVisibility = ({onVisible,threshold =1, children}: TrackVisibilityProps) => {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(()=>{
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                onVisible()
            }
        }, {
            root: null,
            rootMargin: '0px',
            threshold
        });
        if(ref.current) {
            observer.observe(ref.current)
        }
    }, [])

    return (<div ref={ref}> 
    {children} 
    </div>)

}
export default TrackVisibility;