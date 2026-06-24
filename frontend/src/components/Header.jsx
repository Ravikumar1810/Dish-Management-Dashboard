import { FaUtensils } from "react-icons/fa";

const Header = () => {
  return (
    <header className="mb-10">
      <div className="flex items-center justify-center gap-3">
        

        <h1 className="text-3xl md:text-5xl font-bold text-white text-center">Dish Management Dashboard
        </h1>
      </div>

      <p className="text-slate-400 text-center mt-3">
        Manage and publish dishes effortlessly
      </p>
    </header>
  );
};

export default Header;