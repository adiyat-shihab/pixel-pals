import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div className={"bg-[#121212] "}>
      <Navbar />
      <div className={"px-60 py-7 flex items-center"}>
        <div className="relative text-gray-600 w-fit ">
          <input
            type="search"
            name="serch"
            placeholder="Search"
            className="bg-[#202020] h-10 px-9 pr-10 rounded-full text-sm focus:outline-none "
          />
          <button type="submit" className="absolute left-3 top-0 mt-3 mr-4">
            <svg className="h-4 w-4 fill-current " viewBox="0 0 56.966 56.966">
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
        </div>

        <div
          className={
            "flex items-center gap-7 mx-6 px-4 font-medium text-neutral-500 text-[1.10rem]"
          }
        >
          <Link href={"/home"}>
            <p className={" "}>Discover</p>
          </Link>
          <Link href={"/home/browse"}>
            <p className={""}>Browse</p>
          </Link>
        </div>
      </div>
      <div className={" py-7"}>{children}</div>
    </div>
  );
};

export default Layout;
