// icons
import { FaSlackHash } from "react-icons/fa";
import { FcStatistics } from "react-icons/fc";
import { BsCurrencyEuro } from "react-icons/bs";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

function App() {
  return (
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <Sidebar />
      <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-8">
        <Header />
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10">
          <div className="bg-primary-100 p-8 rounded-xl text-gray-300 flex flex-col gap-6">
            <FcStatistics className="text-[80px]"/>
            <h4 className="text-3xl ">Earnings</h4>
            <div className="flex items-center">
              <BsCurrencyEuro className="text-[40px]" /> <span className="text-5xl text-white">1,212</span> 
            </div>
            <span className="bg-primary-300 py-1 px-3 rounded-full ">+ 10% since last month</span>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
