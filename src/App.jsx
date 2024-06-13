// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Logo from "./assets/LOGOYOTECH.png";

function App() {
    // const [count, setCount] = useState(0);

    return (
        <>
            <div className="w-full h-full min-h-screen dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
                {/* Radial gradient for the container to give a faded look */}
                {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> */}
                <div>
                    <img src={Logo} alt="" className="rounded-full w-48" />
                    <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
                        Yolo Technology <br /> Semarang <br />
                    </p>
                    <p className="text-2xl text-white">is Coming Soon</p>
                </div>
            </div>
        </>
    );
}

export default App;
