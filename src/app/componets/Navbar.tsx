"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  FileText,
  Highlighter,
  SquareMenu,
  History,
  Info,
  Home,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const navigationLinks = [
  {
    href: "/",
    title: "Home",
    icon: <Home className="w-4 h-4 mr-2" />,
  },
  {
    href: "/history",
    title: "History",
    icon: <History className="w-4 h-4 mr-2" />,
  },
  {
    href: "/about",
    title: "About",
    icon: <Info className="w-4 h-4 mr-2" />,
  },
];

const pageData: Record<string, { title: string; icon: React.ReactNode }> = {
  "/": {
    title: "Enhance Prompt",
    icon: <FileText className="ml-2 mr-2 my-auto" />,
  },
  "/history": {
    title: "History",
    icon: <History className="ml-2 mr-2 my-auto" />,
  },
  "/about": {
    title: "About",
    icon: <Info className="ml-2 mr-2 my-auto" />,
  },
};

const Navbar = () => {
  const pathname = usePathname();
  const current = pageData[pathname] || { title: "PromptBoost", icon: null };

  return (
    <div className="h-15 border-b-2 flex justify-between items-center">
      <div className="text-2xl font-extrabold pl-2 flex flex-row ">
        {current.icon}
        {current.title}
      </div>

      <div className="flex items-center gap-6 pr-5">
        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-4">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent ${
                pathname === link.href
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {link.icon}
              {link.title}
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger className="md:hidden">
            <SquareMenu />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel className="flex flex-row">
              <Highlighter className="m-auto mr-0.5 my-auto" size={18} />
              <span className="">PromptBoost</span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {navigationLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <DropdownMenuItem className="flex items-center">
                  {link.icon}
                  {link.title}
                </DropdownMenuItem>
              </Link>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
