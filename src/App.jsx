// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Logo from "./assets/LOGOYOTECH.png";

function App() {
    // const [count, setCount] = useState(0);

    return (
        <>
            <div className="w-full h-full min-h-screen bg-lime-950 bg-dot-white/[0.2] relative flex items-center justify-center">
                <div className="mx-4 grid gap-0">
                    <img src={Logo} alt="" className="rounded-full w-48" />
                    <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-4">
                        Yolo Technology <br /> Semarang <br />
                    </p>
                    <p className="text-2xl text-white/60">is Coming Soon</p>
                </div>
            </div>
        </>
    );
}

export default App;
