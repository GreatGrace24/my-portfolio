"use client"; // Required for interactivity in Next.js App Router
import { useState } from "react";
import { Menu, X } from "lucide-react"; // lightweight icon library
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="border-2 border-red-700 rounded-2xl p-2">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            MyPortfolio
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li>
            <a href="#about" className="hover:text-red-600 transition">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-red-600 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-red-600 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <ul className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 text-gray-700 font-medium">
          <li>
            <a
              href="#about"
              className="block hover:text-red-600 transition"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="block hover:text-red-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block hover:text-red-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
