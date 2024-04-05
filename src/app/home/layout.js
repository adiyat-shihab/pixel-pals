import Navbar from "@/components/Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div className={"bg-[#121212] w-screen h-screen"}>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
