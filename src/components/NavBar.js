import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

export default function NavBar() {
  return (
    <header className="bg-red-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink to="/" exact className={({ isActive }) => (isActive ? "text-white " : "") + "inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-yellow-300 text-4xl font-bold cursive tracking-widest"}>Home</NavLink>
          <NavLink to="/about"  className={({ isActive }) => (isActive ? "text-red-100 bg-red-700 " : "") + "inline-flex items-center py-3 px-3 rounded text-red-200 hover:text-yellow-300"}>About</NavLink>
          <NavLink to="/post" className={({ isActive }) => (isActive ? "text-red-100 bg-red-700 " : "") + "inline-flex items-center py-3 px-3 rounded text-red-200 hover:text-yellow-300"}>Blog Posts</NavLink>
          <NavLink to="/project" className={({ isActive }) => (isActive ? "text-red-100 bg-red-700 " : "") + "inline-flex items-center py-3 px-3 rounded text-red-200 hover:text-yellow-300"}>Projects</NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} url="https://youtube.com/"/>
          <SocialIcon className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} url="https://instagram.com" />
          <SocialIcon className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} url="https://linkedin.com" />
        </div>
      </div>
    </header>
  )
}