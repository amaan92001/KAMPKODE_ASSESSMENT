"use client";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { ChevronDown } from 'lucide-react';

export const Navbar = () => {
  const navItems = [
    {
      name: <p>Home</p>,
      link: "#",
    },
    {
      name: (
        <div className="flex items-center">
          <p>Products</p>
          <ChevronDown className="ml-1 w-4 h-4" />
        </div>
      ),
      link: "#",
    },
    {
      name: (
        <div className="flex items-center">
          <p>Resources</p>
          <ChevronDown className="ml-1 w-4 h-4" />
        </div>
      ),
      link: "#",
    },
    {
      name: <p>Pricing</p>,
      link: "#",
    },
  ];

  return (
    <FloatingNav navItems={navItems} />
  );
}