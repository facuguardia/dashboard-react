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
      <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 h-[100vh] overflow-y-scroll">
        <Header />
        {/* Section 1 */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-10 gap-8">
          {/* Card 1 */}
          <div className="bg-primary-100 p-8 rounded-xl text-gray-300 flex flex-col gap-6">
            <FcStatistics className="text-[80px]" />
            <h4 className="text-3xl ">Earnings</h4>
            <div className="flex items-center">
              <BsCurrencyEuro className="text-[40px]" />{" "}
              <span className="text-5xl text-white">1,212</span>
            </div>
            <span className=" bg-primary-300 py-1 pl-8 rounded-full ">
              + 10% since last month
            </span>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-8 rounded-xl flex flex-col gap-6 drop-shadow-xl">
            <div className="flex items-center gap-4 bg-primary-100/10 p-4 rounded-xl">
              <span className="bg-primary-100/70 text-gray-100 p-3 rounded-lg text-2xl font-bold">
                98
              </span>
              <div>
                <h3 className="text-xl font-bold">Rank</h3>
                <p className="text-gray-700">In top 30%</p>
              </div>
            </div>
            <div className=" bg-primary-100/10 p-4 rounded-xl">
              <div className="flex items-center gap-4">
                <span className="bg-primary-100/70 text-gray-100 p-3 rounded-lg text-2xl font-bold">
                  32
                </span>
                <div>
                  <h3 className="text-xl font-bold">Projects</h3>
                  <p className="text-gray-700">8 this month</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3">
                <button className="bg-primary-100/20 py-2 px-1.5 rounded-full  hover:bg-primary-100/40">
                  mobile app
                </button>
                <button className="bg-primary-100/20 py-2 px-1.5 rounded-full hover:bg-primary-100/40">
                  branding
                </button>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="col-span-1 md:col-span-2 drop-shadow-xl">
            <h1 className="text-2xl font-bold pb-4">Your Projects</h1>
            <div className="flex items-center gap-4 pt-6 p-4 bg-white rounded-lg">
              <div>
                <img
                  src="https://img.freepik.com/foto-gratis/alegre-mujer-mediana-edad-cabello-rizado_1262-20859.jpg"
                  alt="profile of a woman"
                  className="h-20 w-20 rounded-full object-cover ring-2"
                />
              </div>
              <div>
                <h3 className="font-bold text-xl">Logo design for Bakery</h3>
                <p className="text-gray-700">1 day remaining</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white rounded-lg">
              <div>
                <img
                  src="https://img.freepik.com/foto-gratis/alegre-mujer-mediana-edad-cabello-rizado_1262-20859.jpg"
                  alt="profile of a woman"
                  className="h-20 w-20 rounded-full object-cover ring-2"
                />
              </div>
              <div>
                <h3 className="font-bold text-xl">Logo design for Bakery</h3>
                <p className="text-gray-700">1 day remaining</p>
              </div>
            </div>
            <div className="bg-white rounded-br-xl rounded-bl-xl p-2 text-xl flex items-center justify-end transition-colors hover:font-bold ">
              <a href="#">See all projects</a>
            </div>
          </div>
        </section>
        {/* Section 2 */}
        <section className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-8">
          <div>
            <h1 className="text-2xl font-bold mb-8">Recent invoices</h1>
            <div className="bg-white rounded-xl p-8 shadow-2xl flex flex-col gap-8">
              {/* Card 1 */}
              <div className="grid grid-cols-1 xl:grid-cols-4 items-center gap-4 mb-4">
                <div className="col-span-2 flex items-center gap-4">
                  <img
                    src="https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg"
                    className="h-20 w-20 rounded-xl object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-xl">Emma Williams</h3>
                    <p className="text-gray-700">JQ Holdings</p>
                  </div>
                </div>
                <div>
                  <span className="bg-green-100 text-green-900 font-medium rounded-full py-1 px-3">
                    Paid
                  </span>
                </div>
                <div>
                  <span className="text-xl font-bold">€ 1200.87</span>
                </div>
              </div>
              <div className="grid grid-cols-1 xl:grid-cols-4 items-center gap-4 mb-4">
                <div className="col-span-2 flex items-center gap-4">
                  <img
                    src="https://img.freepik.com/foto-gratis/mujer-tranquila-cabello-tenido-pie-manos-cruzadas-sonrisa-sincera-encantadora-demostrando-sus-dientes-perfectos-posando_273609-7675.jpg"
                    className="h-20 w-20 rounded-xl object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-xl">Emil Philips</h3>
                    <p className="text-gray-700">Anchor Techs</p>
                  </div>
                </div>
                <div>
                  <span className="bg-red-100 text-red-900 font-medium rounded-full py-1 px-3">
                    Late
                  </span>
                </div>
                <div>
                  <span className="text-xl font-bold">€ 12,998.88</span>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-primary-900 text-gray-300 flex items-center justify-between mt-10 gap-6 p-8 rounded-xl shadow-2xl">
              <div>
                <FaSlackHash className="text-5xl" />
              </div>
              <div>
                <h3 className="text-white font-bold">Engage with clients</h3>
                <p className="text-gray-300">Join slack channel</p>
              </div>
              <div>
                <button className="text-white bg-primary-100  py-2 px-6 rounded-xl hover:border border-white">
                  Join now
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
