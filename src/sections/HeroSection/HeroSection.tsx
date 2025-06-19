import BackgroundAnimation from '@/components/BackgrooundAnimation/BackgroundAnimation';

export default function HeroSection()
{
    return (
        <section id='hero' className="min-h-[80vh] pt-[60px]">
            <div className='container mx-auto relative'>
                <div className="my-[50px]"></div>
                
                <div className="flex flex-row z-10 relative">
                    <div className='flex items-center mx-auto justify-center min-w-96 pt-6'>
                        <picture className="bg-deep-space-black border-full z-10" >
                            <img className="max-w-80 outline outline-slate-600 outline-offset-4 rounded-full opacity-60 grayscale-[50%]" src="/images/perfil1.jpg" alt="Profile" />
                        </picture>
                    </div>
                    <div className="">
                        <h1 className="text-slate-300 text-4xl font-monoplex font-bold mb-5">Emmy Seco,</h1>
                        <h2 className="text-7xl font-monoplex font-extrabold mb-[50px] text-transparent bg-clip-text bg-gradient-to-bl from-vscode-blue to-cyan-500">Desarrollador <br />Web</h2>
                        <p className="mb-4 text-2xl text-slate-300 mb-[60px]">Ingeniero de Sistemas y desarrollador software, me dedico desde hace mucho tiempo en la creación de soluciones tecnológicas, desde páginas web simples hasta aplicaciones a medida a diversas empresas.</p>
                        <div className="flex flex-wrap gap-3">
                            <button className="btn py-2 px-4 min-w-30 bg-slate-600 rounded-full">Ver CV</button>
                            <button className="btn py-2 px-4 min-w-30 border-2 border-slate-200 rounded-full">emmyseco@gmail.com</button>
                        </div>
                    </div>
                </div>
                <BackgroundAnimation classCustom="absolute top-0 left-0 max-w-[500px] w-full z-0" />
            </div>
            <div className='mb-[-1px]'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#007ACC" fill-opacity="1" d="M0,160L80,176C160,192,320,224,480,245.3C640,267,800,277,960,261.3C1120,245,1280,203,1360,181.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            </div>
        </section>
    );
}