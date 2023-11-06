"use client";
import { useState } from "react";

export default function KeepList(){
    const [test,setTest] = useState<boolean>(false);
    return(
        <div className="flex flex-col ">
            <div className="flex flex-col h-3/5">
                <div className="justify-center items-center">
                    <img src="https://www.svgrepo.com/show/448233/kubernetes.svg" alt="" className="h-[100px] w-full"/>
                </div>
                <div className="justify-center items-center">
                    <img src="https://www.svgrepo.com/show/481587/monkey.svg" alt="" className="h-[50px] w-full" />
                </div>
                <div className="text-center">
                    tanaka
                </div>
            </div>
            <div className="flex">
                <div className={`w-1/2 h-1/5 items-center justify-center ${test ? '' : "border-b-2 border-black" }`}>
                    <button onClick={() => setTest(false)}><img src="https://www.svgrepo.com/show/82180/thumb-up.svg" alt="" className="object-cover h-1/5 w-1/5 block m-auto"/></button>
                </div>
                <div className={`w-1/2 h-1/5 items-center justify-center ${test ? "border-b-2 border-black" : '' }`}>
                    <button onClick={() => setTest(true)}><img src="https://www.svgrepo.com/show/513311/heart.svg" alt="" className="object-cover h-1/5 w-1/5 block m-auto"/></button>
                </div>
            </div>
            <div className="grid grid-cols-2 overflow-auto h-[280px]">
                <div className="object-cover h-full">
                    <img src="https://crea.ismcdn.jp/mwimgs/9/3/1200wm/img_93abdd5347237682a14cf050f2e2a6bd74395.jpg" alt="" className="object-cover h-4/5"/>
                    <div className="flex justify-center items-center object-cover h-1/5">
                        <div className="w-1/2 text-center">
                            <button>←</button>
                        </div>
                        <div className="w-1/2 text-center">
                            <button>♡</button>
                        </div>
                    </div>
                </div>
                <div className="object-cover h-full">
                    <img src="https://crea.ismcdn.jp/mwimgs/9/3/1200wm/img_93abdd5347237682a14cf050f2e2a6bd74395.jpg" alt="" className="object-cover h-4/5"/>
                    <div className="flex justify-center items-center object-cover h-1/5">
                        <div className="w-1/2 text-center">
                            <button>←</button>
                        </div>
                        <div className="w-1/2 text-center">
                            <button>♡</button>
                        </div>
                    </div>
                </div>
                <div className="object-cover h-full">
                    <img src="https://crea.ismcdn.jp/mwimgs/9/3/1200wm/img_93abdd5347237682a14cf050f2e2a6bd74395.jpg" alt="" className="object-cover h-4/5"/>
                    <div className="flex justify-center items-center object-cover h-1/5">
                        <div className="w-1/2 text-center">
                            <button>←</button>
                        </div>
                        <div className="w-1/2 text-center">
                            <button>♡</button>
                        </div>
                    </div>
                </div>
                <div className="object-cover h-full">
                    <img src="https://crea.ismcdn.jp/mwimgs/9/3/1200wm/img_93abdd5347237682a14cf050f2e2a6bd74395.jpg" alt="" className="object-cover h-4/5"/>
                    <div className="flex justify-center items-center object-cover h-1/5">
                        <div className="w-1/2 text-center">
                            <button>←</button>
                        </div>
                        <div className="w-1/2 text-center">
                            <button>♡</button>
                        </div>
                    </div>
                </div>
                <div className="object-cover h-full">
                    <img src="https://crea.ismcdn.jp/mwimgs/9/3/1200wm/img_93abdd5347237682a14cf050f2e2a6bd74395.jpg" alt="" className="object-cover h-4/5"/>
                    <div className="flex justify-center items-center object-cover h-1/5">
                        <div className="w-1/2 text-center">
                            <button>←</button>
                        </div>
                        <div className="w-1/2 text-center">
                            <button>♡</button>
                        </div>
                    </div>
                </div>
                <div className="object-cover h-full">
                    <img src="https://crea.ismcdn.jp/mwimgs/9/3/1200wm/img_93abdd5347237682a14cf050f2e2a6bd74395.jpg" alt="" className="object-cover h-4/5"/>
                    <div className="flex justify-center items-center object-cover h-1/5">
                        <div className="w-1/2 text-center">
                            <button>←</button>
                        </div>
                        <div className="w-1/2 text-center">
                            <button>♡</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

