import { useEffect, useState } from "react";
import Header from "../components/Header";
import { getDishes } from "../services/api";
import DishCard from "../components/DishCard";
import {
  FaUtensils,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import socket from "../socket";

const Dashboard = () => {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDishes();

    socket.on("dishUpdated", () => {
      fetchDishes();
    });
    return () => {
      socket.off("dishUpdated");
    }
  }, []);

    const fetchDishes = async () => {
    try {
        setLoading(true);

        const { data } = await getDishes();

        setDishes(data.dishes);
    } catch (error) {
        console.log(error);
    } finally {
        setLoading(false);
    }
    };

  const publishedCount = dishes.filter(
    (dish) => dish.isPublished
  ).length;

  const unpublishedCount = dishes.filter(
    (dish) => !dish.isPublished
  ).length;

    if (loading) {
    return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="h-12 w-12 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
    );
    }

  return (
    <div className="min-h-screen bg-slate-900 px-4 py-10">
      <div className="max-w-7xl mx-auto w-full">
        <Header />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
                <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-slate-400">
                    Total Dishes
                    </h3>

                    <p className="text-white text-4xl font-bold mt-2">
                    {dishes.length || 0 && (
                        <div className="text-center text-slate-400 mt-20">
                            <h2 className="text-slate-400 text-xl">
                                No Dishes found
                            </h2>     
                        </div>  
                    )}
                    </p>
                </div>

                <FaUtensils className="text-cyan-400 text-3xl" />
                </div>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
                <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-slate-400">
                    Published
                    </h3>

                    <p className="text-green-400 text-4xl font-bold mt-2">
                    {publishedCount}
                    </p>
                </div>

                <FaCheckCircle className="text-green-400 text-3xl" />
                </div>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
                <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-slate-400">
                    Unpublished
                    </h3>

                    <p className="text-red-400 text-4xl font-bold mt-2">
                    {unpublishedCount}
                    </p>
                </div>

                <FaTimesCircle className="text-red-400 text-3xl" />
                </div>
            </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
                {dishes.map((dish) => (
                    <DishCard
                    key={dish._id}
                    dish={dish}
                    fetchDishes={fetchDishes}
                    />
                ))}
            </div>
      </div>
    </div>
  );
};

export default Dashboard;