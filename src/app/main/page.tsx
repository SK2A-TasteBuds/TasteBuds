import "./main.css"
// 画像は仮です
//name気に入らなかったら変えてもらって構いません
export default function Main(){
    return(
        <div className="main flex flex-col items-center">
            <div className="icon">
                <img src="https://www.svgrepo.com/show/419452/day-dinner-love-2.svg" alt="" className="h-10" />
            </div>
            <div className="store-img md:w-4">
                <img src="https://crea.ismcdn.jp/mwimgs/9/3/1200wm/img_93abdd5347237682a14cf050f2e2a6bd74395.jpg" alt="店舗画像"  />
            </div>
            <div className="store-name">
                <p className="bg-gray text-center">pafe</p>
            </div>
            <div className="flex flex-row good-bad">
                
                <img src="https://www.svgrepo.com/show/421162/bad-dislike-thumbs-down.svg" alt="" className="max-w-xs"/>
                <img src="https://www.svgrepo.com/show/478767/good-job-hand-2.svg" alt="" />
            </div>
            <div className="under-menu-bar">
                <img src="https://www.svgrepo.com/show/527754/home-1.svg" alt="" />
                <img src="https://www.svgrepo.com/show/527754/home-1.svg" alt="" />
                <img src="https://www.svgrepo.com/show/527754/home-1.svg" alt="" />
                <img src="https://www.svgrepo.com/show/527754/home-1.svg" alt="" />
                <img src="https://www.svgrepo.com/show/527754/home-1.svg" alt="" />
            </div>
        </div>
    );
}