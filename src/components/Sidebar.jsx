// ICONS
import { RiHome3Fill, RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { AiOutlineCopy, AiFillPieChart } from "react-icons/ai";
import { useState } from "react";

function Sidebar() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div
        className={`bg-primary-900 h-full fixed lg:static w-[80%] md:w-[40%] lg:w-full transition-all duration-300 ${
          menu ? "left-0" : "-left-full"
        }`}
      >
        {/* Profile */}
        <div className="flex flex-col items-center justify-center p-8 gap-2 h-[30vh]">
          <img
            src="https://img.freepik.com/foto-gratis/chico-worldface-espanol-fondo-blanco_53876-137665.jpg?w=740&t=st=1666561249~exp=1666561849~hmac=2a0a110a03115dc4028bfce1506c6afc51aacb9d93498becf80e2311fb03c2e6"
            alt="image profile"
            className="w-[130px] h-[130px] rounded-full object-cover ring-2 ring-gray-500"
          />
          <h1 className="text-white text-2xl font-bold pt-3">
            Facundo Guardia
          </h1>
          <p className=" text-white bg-primary-100 py-1 px-3 rounded-full">
            Pro level
          </p>
        </div>
        {/* Nav */}
        <div className="bg-primary-300 p-8  rounded-tr-[100px] h-[70vh] flex flex-col justify-between gap-8">
          <nav className="flex flex-col gap-8">
            <a
              href="#"
              className=" flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors text-xl"
            >
              <RiHome3Fill /> Home
            </a>
            <a
              href="#"
              className=" flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors text-xl"
            >
              <AiOutlineCopy /> Projects
            </a>
            <a
              href="#"
              className=" flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors text-xl"
            >
              <BsFillCreditCard2BackFill /> Invoices
            </a>
            <a
              href="#"
              className=" flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors text-xl"
            >
              <AiFillPieChart /> Reports
            </a>
          </nav>
          <div className="bg-primary-900/50 rounded-xl p-3">
            <p className="text-gray-300">Having troubles?</p>
            <a href="#" className="text-white font-bold">
              Contact us
            </a>
          </div>
        </div>
      </div>
      {/* Button Movile */}
      <button
        onClick={() => setMenu(!menu)}
        className="lg:hidden fixed right-4 bottom-4 text-xl bg-primary-900 p-2.5 rounded-full text-white"
      >
        {menu ? <RiCloseFill /> : <RiMenu3Fill />}
      </button>
    </>
  );
}

export default Sidebar;
