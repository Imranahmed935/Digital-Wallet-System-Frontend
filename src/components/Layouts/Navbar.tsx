import Logo from "@/assets/icon/Logo";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { role } from "@/constant/role";

import {
  authApi,

  useLogoutMutation,

  useUserInfoQuery,
} from "@/redux/features/auth/auth.api";
import { useAppDispatch } from "@/redux/hooks";


import { Link, NavLink, useNavigate,  } from "react-router-dom";
import { ModeToggle } from "../ModeToggle";



const navigationLinks = [
  { href: "/", label: "Home", role: "PUBLIC" },
  { href: "/admin", label: "Dashboard", role: role.admin },
  { href: "/agent", label: "Dashboard", role: role.agent },
  { href: "/user", label: "Dashboard", role: role.user },
  { href: "/feature", label: "Features", role: "PUBLIC" },
  { href: "/pricing", label: "Pricing", role: "PUBLIC" },
  { href: "/about", label: "About", role: "PUBLIC" },
  { href: "/contact", label: "Contact", role: "PUBLIC" },
  { href: "/faq", label: "FAQ", role: "PUBLIC" },
];

export default function Navbar() {
  const { data, isLoading } = useUserInfoQuery(undefined);

  const [logout] = useLogoutMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout(undefined);
    dispatch(authApi.util.resetApiState());
    navigate("/login");
  };

  const filteredLinks = navigationLinks.filter(
    (link) => link.role === "PUBLIC" || (data?.data?.role && link.role === data?.data?.role)
  );
  
    if(isLoading){
    return <h1>loading</h1>
  }
  return (
    <header id="nav-menu" className="border-b px-4 md:px-6">
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex items-center gap-2">
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 md:hidden"
                variant="ghost"
                size="icon"
              >
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-36 p-1 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {filteredLinks.map((link, index) => (
                    <NavigationMenuItem key={index} className="w-full">
                      <NavigationMenuLink asChild className="py-1.5 w-full">
                        <NavLink
                          to={link.href}
                          className={({ isActive }) =>
                            `block w-full ${
                              isActive ? "text-primary font-semibold" : ""
                            }`
                          }
                        >
                          {link.label}
                        </NavLink>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>

          {/* Logo + Desktop Nav */}
          <div  className="flex items-center gap-6">
            <div className="flex gap-2 items-center">
              <Link to="/" className="text-primary hover:text-primary/90">
                <Logo />
              </Link>
             <h1 className="text-violet-600 md:text-3xl text-2xl font-bold">ZPay</h1>
            </div>
 
            {/* Desktop navigation menu */}
            <NavigationMenu className="max-md:hidden">
              <NavigationMenuList className="gap-4">
                {filteredLinks.map((link, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink asChild>
                      <NavLink
                        to={link.href}
                        className={({ isActive }) =>
                          `py-1.5 font-medium transition-colors hover:text-primary ${
                            isActive
                              ? "text-primary font-semibold"
                              : "text-muted-foreground"
                          }`
                        }
                      >
                        {link.label}
                      </NavLink>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        {/* Right side (Auth buttons) */}
        <div className="flex items-center gap-2">
        <ModeToggle/>
          {data?.data?.email ? (
            <Button
              onClick={handleLogout}
              variant="outline"
              className="text-sm"
            >
              Logout
            </Button>
          ) : (
            <Button asChild size="sm" className="text-sm">
              <Link to="/login">Login</Link>
            </Button>
          )}
        </div>
       
      </div>
    </header>
    
  );
}
