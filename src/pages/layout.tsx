import Header from "../components/header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <div className="container flex flex-grow h-full bg-white">{children}</div>
    </>
  );
};

export default Layout;
