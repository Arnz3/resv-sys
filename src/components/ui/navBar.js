"use client"
import { Navbar, NavbarBrand, NavbarContent, Image, Link, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button } from "@nextui-org/react";
import { MdSettings } from "react-icons/md";

export default function NavBar() {
  const menuItems = [
    "dashboard",
    "history",
  ];

  return (
    <Navbar disableAnimation isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Link href="/">
            <Image 
              width={100}
              alt="Viking helm"
              src="/images/Viking_helm.png"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <Link href="/">
            <Image 
              width={100}
              alt="Viking helm"
              src="/images/Viking_helm.png"
            />
          </Link>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="/dashboard" className="text-lg" >
            Dashboard
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/history" isDisabled className="text-lg">
            History
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <Link href="/instellingen" color="foreground" className="hidden sm:flex gap-4">
          <MdSettings />
        </Link>
        <Button as={Link} color="primary" href="#" variant="flat" className="text-base">
            Logout
        </Button>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              href={item}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
