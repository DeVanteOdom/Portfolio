"use client"

import DesktopNav from "./DesktopNav/DesktopNav"
import MobileNav from "./MobileNav/MobileNav"
import useIsMobile from "./MobileNav/useIsMobile"


const Nav = () => {
    const isMobile = useIsMobile()

    return (isMobile ? <MobileNav /> : <DesktopNav />)
}
export default Nav;