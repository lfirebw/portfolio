import BackgroundAnimation from '@/components/BackgrooundAnimation/BackgroundAnimation';
import { useTranslation } from "react-i18next"
import { Trans } from "react-i18next"

export default function HeroSection()
{
    const { t } = useTranslation();
    return (
        <section id='hero' className="min-h-[80vh] pt-[60px]">
            <div className='container mx-auto relative'>
                <div className="my-[50px]"></div>
                
                <div className="flex flex-row z-10 relative">
                    <div className='flex items-center mx-auto justify-center min-w-96 pt-6'>
                        <picture className="bg-deep-space-black rounded-full z-10" >
                            <img className="max-w-80 outline outline-slate-600 outline-offset-4 rounded-full opacity-60 grayscale-[50%]" src={process.env.PUBLIC_URL + "/images/perfil1.jpg"} alt="Profile" />
                        </picture>
                    </div>
                    <div className="">
                        <h1 className="text-slate-300 text-4xl font-monoplex font-bold mb-5">Emmy Seco,</h1>
                        <h2 className="text-7xl font-monoplex font-extrabold mb-[50px] text-transparent bg-clip-text bg-gradient-to-bl from-vscode-blue to-cyan-500">
                            <Trans i18nKey="role"></Trans>
                        </h2>
                        <p className="mb-4 text-xl text-slate-300 mb-[60px]">{ t("iam") }</p>
                        <div className="flex flex-wrap gap-3">
                            <a 
                                className="btn py-2 px-4 min-w-30 bg-slate-600 rounded-full"
                                href={process.env.PUBLIC_URL + "/media/CV_Emmy_Seco.pdf"}
                                target="BLANK"
                            >
                                { t("cv") }
                            </a>
                            <a 
                                href="mailto:emmyseco@gmail.com" 
                                className="btn py-2 px-4 min-w-30 border-2 border-slate-200 rounded-full" 
                                target="_blank" 
                                rel="noreferrer"
                            >
                                emmyseco@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
                <BackgroundAnimation classCustom="absolute top-0 left-0 max-w-[500px] w-full z-0" />
            </div>
            <div className='mb-[-1px]'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#007ACC" fillOpacity="1" d="M0,160L80,176C160,192,320,224,480,245.3C640,267,800,277,960,261.3C1120,245,1280,203,1360,181.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            </div>
        </section>
    );
}