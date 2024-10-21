import { Overview } from "./components/overview/Overview";
import { Sidebar } from "./components/sidebar/Sidebar";

export default function App() {
  return (
    <div className="w-full h-screen flex flex-col-reverse desktop:flex-row bg-Beige100">
      <Sidebar />
      <div className="flex-grow overflow-y-auto">
        <Overview />
      </div>
    </div>
  );
}
