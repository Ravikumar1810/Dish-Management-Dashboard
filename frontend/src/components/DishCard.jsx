import { toggleDishStatus } from "../services/api";
import toast from "react-hot-toast";

const DishCard = ({ dish, fetchDishes }) => {

        const handleToggle = async () => {
        try {
            await toggleDishStatus(dish._id);

            toast.success(
            dish.isPublished
                ? "Dish unpublished successfully"
                : "Dish published successfully"
            );

            fetchDishes();
        } catch (error) {
            toast.error("Something went wrong");
        }
        };

  return (
    <div className="group bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-2 transition-all duration-300 flex flex-col">
      
      <div className="overflow-hidden">
        <img
          src={dish.imageUrl}
          alt={dish.dishName}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1546069901-ba9599a7e63c";
          }}
        />
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h2 className="text-xl font-bold text-white line-clamp-1">
          {dish.dishName}
        </h2>

        <div className="mt-4">
          {dish.isPublished ? (
            <span className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
              🟢 Published
            </span>
          ) : (
            <span className="inline-flex items-center gap-2 bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-medium">
              🔴 Unpublished
            </span>
          )}
        </div>

        <button onClick={handleToggle}
          className={`mt-auto pt-5 w-full`}
        >
          <div
            className={`py-3 rounded-xl font-semibold text-white transition-all duration-300 ${
              dish.isPublished
                ? "bg-red-500 hover:bg-red-600"
                : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {dish.isPublished ? "Unpublish" : "Publish"}
          </div>
        </button>
      </div>
    </div>
  );
};

export default DishCard;