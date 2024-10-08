import { Overview } from "./components/overview/Overview";
import { Sidebar } from "./components/sidebar/Sidebar";

export default function App() {
  return (<div className="w-full h-screen flex bg-Beige100">
    <Sidebar />
    <Overview />
    </div>
  )
}