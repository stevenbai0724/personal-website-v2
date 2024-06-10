"use client";
import {  Navbar,   NavbarBrand, Link, Button,  NavbarContent,   NavbarItem, NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem} from "@nextui-org/react"
import "../app/globals.css";
import React, {useState, useEffect, useRef} from "react"
import { SlMenu } from "react-icons/sl";


export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
    <div className="p-5 border-b-1 sticky top-0 opacity-90 bg-black border-white w-full flex flex-column justify-center">
      <Navbar 
        isMenuOpen={isMenuOpen}
        className="w-full max-w-3xl"
      >
        <NavbarContent>
          <NavbarBrand>
            <Link className="text-lg whitespace-nowrap" href="/">
              Steven Bai
            </Link>
          </NavbarBrand>
          
        </NavbarContent>

        <NavbarContent className="hidden md:flex w-full gap-2 flex-row justify-end items-center" justify="center">
          <NavbarItem>
            <Link className="text-xl p-2 rounded-md hover:bg-gray-600" href="/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-xl p-2 rounded-md hover:bg-gray-600" href="/projects">
              Projects
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-xl p-2 rounded-md hover:bg-gray-600" href="/blog">
              Blog
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-xl p-2 rounded-md hover:bg-gray-600" target="_blank" href="/stevenbairesume.pdf">
              Resume
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenuToggle
            className="md:hidden"
            srOnlyText=" "
            icon={<SlMenu size={24} />} onClick={() => setIsMenuOpen(!isMenuOpen)} />

        <NavbarMenu className="fixed top-14 left-0 z-50 bg-black text-white p-4  w-full h-full opacity-95 rounded-xl">
          <NavbarMenuItem key="1">
            <Link className="text-xl p-2 rounded-md hover:bg-gray-600" href="/">
              Home
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem key="2">
          <Link className="text-xl p-2 rounded-md hover:bg-gray-600" href="/projects">
              Projects
            </Link>
          </NavbarMenuItem >
          <NavbarMenuItem key="3">
            <Link className="text-xl p-2 rounded-md hover:bg-gray-600" href="/blog">
              Blog
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem key="4">
            <Link className="text-xl p-2 rounded-md hover:bg-gray-600" target="_blank" href="/stevenbairesume.pdf">
              Resume
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </div>
    )
}