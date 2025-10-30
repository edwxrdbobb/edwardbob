'use client';

import { ThemeToggle } from './ThemeToggle';
import { Button } from './ui/button';
import { Terminal, Home, User, Briefcase, Mail, Code } from 'lucide-react';

export function Header() {
  const navItems = [
    { icon: Home, label: "Home", href: "#hero" },
    { icon: User, label: "About", href: "#about" },
    { icon: Code, label: "Skills", href: "#skills" },
    { icon: Briefcase, label: "Projects", href: "#projects" },
    { icon: Mail, label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId) || 
                         document.querySelector(`[data-section="${targetId}"]`);
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b shadow-3d">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Terminal className="h-6 w-6" />
            <span className="text-lg font-medium">
              EBK
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Button
                  key={item.label}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(item.href)}
                >
                  <IconComponent className="h-4 w-4 mr-2" />
                  {item.label}
                </Button>
              );
            })}
          </nav>

          {/* Theme toggle */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
