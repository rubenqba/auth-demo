import { signIn, signOut, useSession } from "next-auth/react";
import { Rubik } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-demo",
});

const Header = () => {
  const { data, status } = useSession();

  const logout = () =>
    signOut({
      callbackUrl: "/",
    });

  return (
    <header>
      <nav>
        <div
          className={`${rubik.variable} flex justify-end items-center m-5 font-demo`}
        >
          {status !== "authenticated" && (
            <button
              onClick={() => signIn("keycloak")}
              className="bg-demo-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Sign in
            </button>
          )}
          {status === "authenticated" && (
            <div className="flex justify-between px-5 gap-3 relative">
              <span className="py-2 inline-block align-text-bottom">
                {data.user?.name}
              </span>
              <Image
                className="peer w-10 h-10 rounded ring-2"
                src={data.user?.image}
                alt={data.user?.name || "avatar"}
                width={10}
                height={10}
              />
              <div className="hidden peer-hover:flex hover:flex absolute top-10 right-10 mt-0 w-[200px] flex-col bg-white drop-shadow-lg">
                <Link
                  className="px-5 py-3 hover:bg-gray-200"
                  href="/protected/aboutme"
                >
                  About Me
                </Link>
                <Link
                  className="px-5 py-3 hover:bg-gray-200"
                  href="/protected/data"
                >
                  API Data
                </Link>
                <Link
                  className="px-5 py-3 hover:bg-gray-200"
                  href="/protected/campaigns"
                >
                  Campaings API
                </Link>

                <Link
                  onClick={logout}
                  className="px-5 py-3 hover:bg-gray-200"
                  href="#"
                >
                  Logout
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
