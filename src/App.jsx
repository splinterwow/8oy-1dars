import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { add, remove } from "./redux/usersSlice";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  function handleDelete(id) {
    dispatch(remove(id))
  }
  return (
    <div className="containerr">
      <Navbar />
      <div>
        <div className="min-h-screen flex items-center">
          <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              <span className="text-indigo-600 uppercase tracking-wide font-bold">
                Webflow Design Agency
              </span>
              <h1 className="text-4xl font-bold leading-tight mt-2">
                A top-notch Webflow Design Agency
              </h1>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit dolor
                posuere vel venenatis eu sit massa volutpat massa rhoncus odio
                feugiat tellus, elit massa sed.
              </p>
              <div className="mt-8 flex gap-4">
                <a
                  href="#"
                  className="transition-all bg-indigo-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-indigo-500"
                >
                  Get started
                </a>
                <a
                  href="#"
                  className="transition-all border border-indigo-600 text-indigo-600 px-6 py-3 rounded-full shadow-lg hover:bg-indigo-100"
                >
                  Learn more
                </a>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <img
                src="https://picsum.photos/600/400"
                alt="Team"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-7 flex-wrap justify-center mb-10">
        {users.map((user, index) => {
          return (
            <div key={index} className="card bg-base-100 image-full w-96 shadow-xl">
              <figure>
                <img
                className="w-[300px] "
                  src={user.img}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body flex items-center">
                <h2 className="card-title text-3xl">name: {user.name}</h2>
                <p className="text-3xl">age: {user.age}</p>
                <div className="card-actions justify-end">
                  <button onClick={() => handleDelete(user.id)} className="btn btn-primary mt-3">delete</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
