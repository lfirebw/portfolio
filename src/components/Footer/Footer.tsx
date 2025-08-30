export default function Footer()
{
    return(
        <footer className="h-[300px] relative">
            <div className="container mx-auto">
                <p className="text-sm text-slate-400">
                    © {new Date().getFullYear()} Portfolio. All rights reserved. Site made with ❤️ 
                </p>
            </div>
            <div className="absolute w-full bottom-0 z-0">
                <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 490" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150">
                    <defs><linearGradient id="gradient" x1="9%" y1="21%" x2="91%" y2="79%"><stop offset="5%" stopColor="#007acc"></stop><stop offset="95%" stopColor="#1a1c1f"></stop></linearGradient></defs><path d="M 0,500 L 0,275 C 116.57142857142858,301.6607142857143 233.14285714285717,328.32142857142856 356,329 C 478.85714285714283,329.67857142857144 608,304.375 717,247 C 826,189.625 914.8571428571429,100.17857142857142 1032,62 C 1149.142857142857,23.821428571428577 1294.5714285714284,36.91071428571429 1440,50 L 1440,500 L 0,500 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="0.53" className="transition-all duration-300 ease-in-out delay-150 path-0"></path><defs><linearGradient id="gradient" x1="9%" y1="21%" x2="91%" y2="79%"><stop offset="5%" stopColor="#007acc"></stop><stop offset="95%" stopColor="#1a1c1f"></stop></linearGradient></defs><path d="M 0,500 L 0,441 C 82.92857142857142,455.44642857142856 165.85714285714283,469.89285714285717 302,450 C 438.14285714285717,430.10714285714283 627.5000000000001,375.875 759,349 C 890.4999999999999,322.125 964.1428571428571,322.6071428571429 1068,305 C 1171.857142857143,287.3928571428571 1305.9285714285716,251.69642857142856 1440,216 L 1440,500 L 0,500 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-1"></path>
                </svg>
            </div>
        </footer>
    );
}