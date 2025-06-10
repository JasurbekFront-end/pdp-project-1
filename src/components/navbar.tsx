import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation(); 
  function handleNavigate(pathname: string) {
    navigate(pathname);
  }

  function getLinkClass(path: string) {
    return `cursor-pointer text-[18px] font-[500] ${
      location.pathname === path ? "text-black font-semibold" : "text-gray-700"
    }`;
  }

  return (
    <div className="font-poppins fixed top-0 left-0 z-10 flex h-[70px] w-full items-center border-b border-gray-400 bg-white px-8">
      <div className="flex-1">
        <h1 className="text-[20px] font-bold text-green-500">Raqamli fan</h1>
      </div>

      <div className="flex flex-1 justify-center gap-6">
        <h1 className={getLinkClass("/home")} onClick={() => handleNavigate("/home")}>
          Asosiy
        </h1>
        <h1 className={getLinkClass("/questions")} onClick={() => handleNavigate("/questions")}>
          Baholash
        </h1>
        <h1 className={getLinkClass("/results")} onClick={() => handleNavigate("/results")}>
          Natijalar
        </h1>
      </div>

      <div className="flex-1" />
    </div>
  );
}
