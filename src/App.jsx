import React from "react";
import One from "../public/html.png";

const App = () => {
  return (
    <div>
      <h1 className="flex justify-center items-center text-3xl font-bold h-[5rem] bg-orange-100">
        Learning Managment System
      </h1>
      <div class="flex justify-center items-center pt-4">
        <div class="w-30 bg-gray-200 p-4 rounded-lg shadow-lg">
          <img src={One} alt="" class="w-full rounded-lg" />
          <div class="text-center items-center flex justify-around">
            <div className="pt-1 gap-1 flex flex-col">
            <h2 class="text-xl font-bold">HTML</h2>
            <p class="text-sm text-gray-600">Duration: 3hrs</p></div>
            <div>
              <p className="text-lg font-bold">Grade 3-5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
