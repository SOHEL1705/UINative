import { Separator } from "@radix-ui/react-separator";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [light, setLight] = useState(false);

  const toggleTheme = () => {
    setLight(!light);
  };

  return (
    <header className="sticky top-0 z-50 w-full  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-6">
      <div className="container flex items-center justify-between h-14">
        <nav className="flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <a
            href="#"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <span>UINative</span>
          </a>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Products</a>
          <a href="#">Contact</a>
        </nav>
        <div className="flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Input placeholder="Search" className="hidden md:block border-0" />
          <Separator orientation="vertical" />
          <Button variant="outline" size="icon" onClick={toggleTheme}>
            {!light ? <Sun /> : <Moon />}
          </Button>
        </div>
      </div>
    </header>
  );
}
