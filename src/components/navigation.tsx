import { NextPage } from "next";
import Link from "next/link";
import { UserAvatar } from "./user-avatar";
import { AuthenticatedUser } from "@model/auth";
import { gravatar } from "@utils/gravatar";
import { signIn, signOut } from "next-auth/react";
import { Avatar } from "./avatar";

export interface NavigationItemOptions {
  linkUrl: string;
  title: string;
  additionalStyles: string;
}

export const NavigationItem: NextPage<NavigationItemOptions> = (props) => {
  const { linkUrl, title, additionalStyles } = props;
  return (
    <Link href={linkUrl}>
      <span
        className={`px-3 py-2 rounded-md text-sm font-medium ${additionalStyles}`}
      >
        {title}
      </span>
    </Link>
  );
};

export interface NavigationAccessOptions {
  user?: AuthenticatedUser;
}

export const NavigationAccess: NextPage<NavigationAccessOptions> = (props) => {
  const { user } = props;

  const logout = () =>
    signOut({
      callbackUrl: "/",
    });
  return (
    <div className="flex items-center">
      {user && (
        <div className=" inline-block  h-full">
          <button className="peer flex items-center justify-between px-5 gap-3 focus:outline-none">
            <span className="ml-4 font-medium text-white">{user.name}</span>
            <UserAvatar
              styles="h-12 w-12 rounded-full"
              url={user.image || gravatar({ email: user.email })}
              name={user.name}
            />
          </button>
          <div className="hidden absolute top-full hover:block peer-hover:block right-0 -mt-2 py-2 w-48 bg-white rounded-bl-lg rounded-br-lg shadow-xl z-10">
            <a
              onClick={logout}
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
            >
              Cerrar sesión
            </a>
          </div>
        </div>
      )}
      {!user && (
        <a
          onClick={() => signIn("keycloak")}
          href="#"
          className="ml-4 text-sm font-medium text-gray-300 hover:text-white"
        >
          Iniciar sesión
        </a>
      )}
    </div>
  );
};
