// icons
import { BiSearchAlt } from "react-icons/bi";
import { FaSlackHash } from "react-icons/fa";

import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="grid lg:grid-cols-4 grid-cols-6 min-h-screen">
      <Sidebar />
      <main className="lg:col-span-3 xl:col-span-5"></main>
    </div>
  );
}

export default App;
