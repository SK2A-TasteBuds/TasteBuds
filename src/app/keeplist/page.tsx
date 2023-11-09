"use client";
import { useState } from "react";
import List from "./ShowListTest";
import Footer from "../components/footer";
export default function Page() {
    const [test, setTest] = useState<boolean>(false);
    function setKeep() {
        setTest(false)
    }
    function setLike() {
        setTest(true)
    }
    return (
        <div className="flex flex-col ">
            <div className="flex flex-col h-3/5">
                <div className="justify-center items-center">
                    <img src="https://www.svgrepo.com/show/448233/kubernetes.svg" alt="" className="h-[80px] w-full" />
                </div>
                <div className="justify-center items-center">
                    <img src="https://www.svgrepo.com/show/481587/monkey.svg" alt="" className="h-[50px] w-full" />
                </div>
                <div className="text-center">
                    tanaka
                </div>
            </div>
            <div className="flex">
                <div className={`w-1/2 h-1/5 items-center justify-center ${test ? '' : "border-b-2 border-black"}`}>
                    <button onClick={() => setKeep()}><img src="https://www.svgrepo.com/show/82180/thumb-up.svg" alt="" className="object-cover h-1/5 w-1/5 block m-auto" /></button>
                </div>
                <div className={`w-1/2 h-1/5 items-center justify-center ${test ? "border-b-2 border-black" : ''}`}>
                    <button onClick={() => setLike()}><img src="https://www.svgrepo.com/show/513311/heart.svg" alt="" className="object-cover h-1/5 w-1/5 block m-auto" /></button>
                </div>
            </div>

            <List condition={test} ></List>
            <Footer></Footer>

        </div>
    );
}

