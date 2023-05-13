import HeaderAlterno from "@components/header-alterno";
import Header from "../components/header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-gray-800">
        <HeaderAlterno />
      </nav>
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default Layout;
