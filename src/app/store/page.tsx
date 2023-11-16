"use client";
import { useState,useEffect } from "react";
import BottomNav from "../components/BottomNav";
import "./swipe.css";
export default function Page() {
    const [like,setLike] = useState(80);
    const [bad,setBad] = useState(20);
    const [OpenGrid,setOpen] = useState(false);
    const [up,setUp] = useState(false);
    let startY = 0;
    function setGridopen(){
        setOpen(!OpenGrid);
    }
    useEffect(()=>{
        
        window.addEventListener('touchstart',(e)=>{
            const touchPos = e.changedTouches[0];
            startY = touchPos.clientY;
        })
        window.addEventListener('touchend',(e)=>{
            const touchPos = e.changedTouches[0];
            if(startY < touchPos.clientY){
                setUp(true);
            }else{
                setUp(false);
            }
        })
    });
    return (
        <div className="flex flex-col w-full h-full ">
            <div className="store-img h-3/5 w-4/5 relative m-auto">
                <div className='object-cover block h-full w-[20px] bg-[#ffc7b7] rounded-md absolute z-0 left-[300px]'></div>
                <div className='object-cover block h-full w-[20px] bg-[#fe9477] rounded-md absolute z-0 left-[290px]'></div>
                {/* 写真は複数枚でタップしたら切り替わる */}
                <img 
                    src="https://prtimes.jp/i/30283/28/ogp/d30283-28-979529-0.jpg" 
                    alt="店舗写真"
                    className="object-cover h-full w-full rounded-lg relative" 
                />
            </div>
            <div className="store-name store-badges flex h-1/5 m-1">
                <div className="store-name  w-1/2 text-left"><p className="ml-3">焼き肉店</p></div>
                <div className="store-badges w-1/2 text-right flex object-cover h-full justify-end">
                    <img src="https://www.svgrepo.com/show/180591/badges-money.svg" alt="" className="object-cover h-1/5 w-1/5"/>
                    <img src="https://www.svgrepo.com/show/275090/badges-star.svg" alt="" className="object-cover h-1/5 w-1/5"/>
                    <img src="https://www.svgrepo.com/show/514318/badge.svg" alt="" className="object-cover h-1/5 w-1/5"/>
                </div>
            </div>
            
            <div className="scroll-place overflow-auto h-[320px]">
                <div className="like-bar w-full h-5 flex ">
                    {/* 
                        バッククォートshift + @ `` 
                        表示されない場合${bad}と${like}を消し数値を入れて表示されるのを確信してから戻したら表示されるはず
                    */}
                    <div className={`object-cover w-[${bad}%] h-3 bg-[#018DB3] block`}></div>
                    <div className={`object-cover w-[${like}%] h-3 bg-[#FE724C] block`}></div>
                </div>
                <div className="img-grid ">
                    <div className={`imgs grid grid-cols-3 ${OpenGrid ? "h-full overflow-auto":"h-[120px] overflow-hidden"}`}>
                        <img src="https://restaurant.img-ikyu.com/rsDatas/rsData112000/r111563/orig/111563p10000001.jpg?auto=compress%2Cformat&lossless=0" alt="" />
                        <img src="https://th.bing.com/th/id/R.9795eb6861547250907d4bb49a25b7bb?rik=MqQ83EqiAFR%2fjQ&riu=http%3a%2f%2fwww.ozmall.co.jp%2frestaurant%2fimages%2fphoto%2f0007_12467_ph.jpg&ehk=TAfg0kUxIPzuKJHKQAujcqYreRG%2fzcVC6fq7uv7v3bY%3d&risl=&pid=ImgRaw&r=0" alt="" />
                        <img src="https://goshiki5491.jp/images/common/top_sec02_p02.jpg" alt="" />
                        <img src="https://th.bing.com/th/id/R.0ee0935fcbbe2e51ad866d92af849749?rik=N3ZOms4ouW2Vcw&riu=http%3a%2f%2fcdn-rs.ikyu.com%2frsDatas%2frsData101500%2fr101292%2f101292p10000147.jpg&ehk=wJJcVRJstKaBB%2bxghGIa3HimnlBpquvwBlt7rxgoxyM%3d&risl=&pid=ImgRaw&r=0" alt="" />
                        <img src="https://makeshop-multi-images.akamaized.net/kawatoku/shopimages/74/20/5_000000002074.jpg?1591615961" alt="" />
                        <img src="https://www.najilabo.net/images/A00004706page00001244.jpg" alt="" />
                        <img src="https://3.bp.blogspot.com/-BU9YURB7Lbo/WSz18_W8zaI/AAAAAAAAAw8/ccbeNETFAwEgrypgt5ByVb2jNGZxNeGzACLcB/s1600/14000%25E3%2580%2580%25E8%2582%2589%25E6%2596%2599%25E7%2590%2586%25E3%2580%2580%25E3%2582%25B9%25E3%2582%25AF%25E3%2582%25A8%25E3%2582%25A220160716.jpg" alt="" />
                        <img src="https://www.ozmall.co.jp/restaurant/images/plan/0453_88481_plan_promise2.jpg" alt="" />
                        <img src="https://bridal.kyotohotel.co.jp/img/cuisine/anniversary135th/img_anniversary135th_05.jpg" alt="" />
                    </div>
                    <div className="opendiv bg-gray-400 container flex justify-end ">
                        <button onClick={()=>setGridopen()} className="mr-3">
                            V
                        </button>
                    </div>

                </div>
                <div className="reviews">
                    <div className="flex h-[5%]">
                        <img src="https://www.svgrepo.com/show/483719/icon-of-a-man-wearing-glasses.svg" alt="アイコン" className="w-1/6"/>
                        <p className="w-4/6">まあまあうまい</p>
                        <div className="goodbad w-2/6 flex">
                            <img src="https://www.svgrepo.com/show/513857/thumbs-up.svg" alt="" 
                                className="object-cover w-1/2"/>
                            <img src="https://www.svgrepo.com/show/513858/thumbs-down.svg" alt="" 
                                className="object-cover w-1/2"/>
                        </div>
                    </div>
                    <div className="flex h-[5%]">
                        <img src="https://www.svgrepo.com/show/483719/icon-of-a-man-wearing-glasses.svg" alt="アイコン" className="w-1/6"/>
                        <p className="w-4/6">ちょいうま</p>
                        <div className="goodbad w-2/6 flex">
                            <img src="https://www.svgrepo.com/show/513857/thumbs-up.svg" alt="" 
                                className="object-cover w-1/2"/>
                            <img src="https://www.svgrepo.com/show/513858/thumbs-down.svg" alt="" 
                                className="object-cover w-1/2"/>
                        </div>
                    </div>
                    <div className="flex h-[5%]">
                        <img src="https://www.svgrepo.com/show/483719/icon-of-a-man-wearing-glasses.svg" alt="アイコン" className="w-1/6"/>
                        <p className="w-4/6">インスタ映えしない</p>
                        <div className="goodbad w-2/6 flex">
                            <img src="https://www.svgrepo.com/show/513857/thumbs-up.svg" alt="" 
                                className="object-cover w-1/2"/>
                            <img src="https://www.svgrepo.com/show/513858/thumbs-down.svg" alt="" 
                                className="object-cover w-1/2"/>
                        </div>
                    </div>
                    <div className="flex h-[5%]">
                        <img src="https://www.svgrepo.com/show/483719/icon-of-a-man-wearing-glasses.svg" alt="アイコン" className="w-1/6"/>
                        <p className="w-4/6">値段通りの味</p>
                        <div className="goodbad w-2/6 flex">
                            <img src="https://www.svgrepo.com/show/513857/thumbs-up.svg" alt="" 
                                className="object-cover w-1/2"/>
                            <img src="https://www.svgrepo.com/show/513858/thumbs-down.svg" alt="" 
                                className="object-cover w-1/2"/>
                        </div>
                    </div>
                    <div className="flex h-[5%]">
                        <img src="https://www.svgrepo.com/show/483719/icon-of-a-man-wearing-glasses.svg" alt="アイコン" className="w-1/6"/>
                        <p className="w-4/6">よかった</p>
                        <div className="goodbad w-2/6 flex">
                            <img src="https://www.svgrepo.com/show/513857/thumbs-up.svg" alt="" 
                                className="object-cover w-1/2"/>
                            <img src="https://www.svgrepo.com/show/513858/thumbs-down.svg" alt="" 
                                className="object-cover w-1/2"/>
                        </div>
                    </div>
                    <div className="flex h-[5%]">
                        <img src="https://www.svgrepo.com/show/483719/icon-of-a-man-wearing-glasses.svg" alt="アイコン" className="w-1/6"/>
                        <p className="w-4/6">家族で行くならおすすめ</p>
                        <div className="goodbad w-2/6 flex">
                            <img src="https://www.svgrepo.com/show/513857/thumbs-up.svg" alt="" 
                                className="object-cover w-1/2"/>
                            <img src="https://www.svgrepo.com/show/513858/thumbs-down.svg" alt="" 
                                className="object-cover w-1/2"/>
                        </div>
                    </div>
                    <div className="flex h-[5%]">
                        <img src="https://www.svgrepo.com/show/483719/icon-of-a-man-wearing-glasses.svg" alt="アイコン" className="w-1/6"/>
                        <p className="w-4/6">雰囲気はいい</p>
                        <div className="goodbad w-2/6 flex">
                            <img src="https://www.svgrepo.com/show/513857/thumbs-up.svg" alt="" 
                                className="object-cover w-1/2"/>
                            <img src="https://www.svgrepo.com/show/513858/thumbs-down.svg" alt="" 
                                className="object-cover w-1/2"/>
                        </div>
                    </div>
                    <div className="flex h-[5%]">
                        <img src="https://www.svgrepo.com/show/483719/icon-of-a-man-wearing-glasses.svg" alt="アイコン" className="w-1/6"/>
                        <p className="w-4/6">ふつう</p>
                        <div className="goodbad w-2/6 flex">
                            <img src="https://www.svgrepo.com/show/513857/thumbs-up.svg" alt="" 
                                className="object-cover w-1/2"/>
                            <img src="https://www.svgrepo.com/show/513858/thumbs-down.svg" alt="" 
                                className="object-cover w-1/2"/>
                        </div>
                    </div>
                    <div className="flex h-[5%]">
                        <img src="https://www.svgrepo.com/show/483719/icon-of-a-man-wearing-glasses.svg" alt="アイコン" className="w-1/6"/>
                        <p className="w-4/6">うまい</p>
                        <div className="goodbad w-2/6 flex">
                            <img src="https://www.svgrepo.com/show/513857/thumbs-up.svg" alt="" 
                                className="object-cover w-1/2"/>
                            <img src="https://www.svgrepo.com/show/513858/thumbs-down.svg" alt="" 
                                className="object-cover w-1/2"/>
                        </div>
                    </div>
                    <div className="flex h-[5%]">
                        <img src="https://www.svgrepo.com/show/483719/icon-of-a-man-wearing-glasses.svg" alt="アイコン" className="w-1/6"/>
                        <p className="w-4/6">ふつう</p>
                        <div className="goodbad w-2/6 flex">
                            <img src="https://www.svgrepo.com/show/513857/thumbs-up.svg" alt="" 
                                className="object-cover w-1/2"/>
                            <img src="https://www.svgrepo.com/show/513858/thumbs-down.svg" alt="" 
                                className="object-cover w-1/2"/>
                        </div>
                    </div>
                    <div className="flex h-[5%]">
                        <img src="https://www.svgrepo.com/show/483719/icon-of-a-man-wearing-glasses.svg" alt="アイコン" className="w-1/6"/>
                        <p className="w-4/6">1回行ったら満足</p>
                        <div className="goodbad w-2/6 flex">
                            <img src="https://www.svgrepo.com/show/513857/thumbs-up.svg" alt="" 
                                className="object-cover w-1/2"/>
                            <img src="https://www.svgrepo.com/show/513858/thumbs-down.svg" alt="" 
                                className="object-cover w-1/2"/>
                        </div>
                    </div>
                    <div className="flex h-[5%]">
                        <img src="https://www.svgrepo.com/show/483719/icon-of-a-man-wearing-glasses.svg" alt="アイコン" className="w-1/6"/>
                        <p className="w-4/6">まずいね</p>
                        <div className="goodbad w-2/6 flex">
                            <img src="https://www.svgrepo.com/show/513857/thumbs-up.svg" alt="" 
                                className="object-cover w-1/2"/>
                            <img src="https://www.svgrepo.com/show/513858/thumbs-down.svg" alt="" 
                                className="object-cover w-1/2"/>
                        </div>
                    </div>
                </div>
                <div className={`address-iphone fixed bottom-[8%] w-full ${up ? "UpMove":"DownMove"}`}>
                    <div className="address object-cover w-full h-1/5 flex">
                        <div className="object-cover w-full">
                            大阪府
                        </div>
                        <div className="text-right">
                            <button className=" object-cover w-[10%] text-right">
                                <img src="https://www.svgrepo.com/show/471658/marker-pin-04.svg" alt="" className="object-cover w-full m-auto"/>
                            </button>
                        </div>
                    </div>
                    <div className="phoneNumber object-cover w-full h-1/5 flex">
                        <div className="object-cover w-full text-left">
                            123816248
                        </div>
                        <div className="text-right">
                            <button className=" object-cover w-[10%] text-right">
                                <img src="https://www.svgrepo.com/show/513783/phone-rotary.svg" alt="" className="object-cover w-full m-auto"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <BottomNav session={null} />
        </div>
        
    );
}