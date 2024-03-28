"use client"
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
const NavBar=({ className }: { className?: string })=>{
    const [active, setActive] = useState<string | null>(null);

    return (
        <>
        <div 
        className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                <Link href={"/"}>
                <MenuItem setActive={setActive} active={active} item="Home">
                </MenuItem>
                </Link>
                <MenuItem setActive={setActive} active={active} item="our courses">
                <div className="flex flex-col space-y-4">
                <HoveredLink href="/courses">all courses</HoveredLink>
                <HoveredLink href="/courses">Basic Music courses</HoveredLink>
                <HoveredLink href="/courses">Advance courses</HoveredLink>
                <HoveredLink href="/courses">more  courses</HoveredLink>
                <HoveredLink href="/courses">bdia courses</HoveredLink>  
                </div>
                </MenuItem>
                <Link href={"/contact"}>
                <MenuItem setActive={setActive} active={active} item="Contact Us"></MenuItem>
                </Link>
                

                
            </Menu>
        </div>
        </>
    )
}
export default NavBar