import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { NavigationAccess, NavigationItem } from "./navigation";
import { UserAvatar } from "./user-avatar";

type NavItems = {
  position: number;
  title: string;
  linkUrl: string;
  visible: boolean;
  styles: string;
};

const items: NavItems[] = [
  {
    position: 1,
    title: "Inicio",
    linkUrl: "/",
    visible: true,
    styles: "text-white bg-gray-900",
  },
  {
    position: 2,
    title: "User API",
    linkUrl: "/protected/users",
    visible: false,
    styles: "text-gray-300 hover:text-white hover:bg-gray-700",
  },
  {
    position: 3,
    title: "Campaigns API",
    linkUrl: "/protected/campaigns",
    visible: false,
    styles: "text-gray-300 hover:text-white hover:bg-gray-700",
  },
  {
    position: 4,
    title: "About me",
    linkUrl: "/protected/aboutme",
    visible: false,
    styles: "text-gray-300 hover:text-white hover:bg-gray-700",
  },
];

const HeaderAlterno = () => {
  const { data, status } = useSession();

  return (
    <nav id="navbar" className="bg-gray-800">
      <div
        id="nav-container"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex items-center justify-between h-16 relative">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-8 w-8"
                src="/dardeus/logo.svg"
                alt="Logo de la aplicación"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {items
                  .filter((it) => it.visible || status === "authenticated")
                  .map((it) => (
                    <NavigationItem
                      key={it.position}
                      title={it.title}
                      linkUrl={it.linkUrl}
                      additionalStyles={it.styles}
                    />
                  ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <NavigationAccess user={data?.user} />
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <a className="sr-only">Open main menu</a>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="md:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/">
            <span className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900">
              Inicio
            </span>
          </Link>
          <Link href="/productos">
            <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">
              Productos
            </span>
          </Link>
          <Link href="/servicios">
            <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">
              Servicios
            </span>
          </Link>
          <Link href="/contacto">
            <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">
              Contacto
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default HeaderAlterno;
