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
                <div className="mx-4 py-5 grid h-screen  content-between">
                    <div className="h-full ">
                        <img src={Logo} alt="" className="rounded-full w-48" />
                        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-4">
                            Yolo Technology <br /> Semarang <br />
                        </p>
                        <p className="text-2xl text-white/60 mb-3">
                            is Coming Soon
                        </p>
                    </div>
                    <div className="h-fit ">
                        <p className="text-lg text-white/60">Contact us in:</p>
                        <div className="grid grid-cols-2 md:flex gap-4 mt-1">
                            <a
                                href="mailto:yolotech.smg@gmail.com"
                                target="_blank"
                                className="text-white/60 hover:text-white"
                            >
                                Email
                            </a>
                            <a
                                className="text-white/60 hover:text-white"
                                href="https://www.instagram.com/yotech.smg/"
                                target="_blank"
                            >
                                Instagram
                            </a>
                            <a
                                className="text-white/60 hover:text-white col-span-2"
                                href="https://whatsapp.com/channel/0029VageSTeEawdjuapBqd42"
                                target="_blank"
                            >
                                WhatsApp Channel
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
