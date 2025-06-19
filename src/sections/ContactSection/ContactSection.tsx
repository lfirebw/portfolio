import { ContactForm } from "@/components";

export default function ContactSection()
{
    return(
        <section id="contact" className="container mx-auto my-20 pt-[100px] relative z-10">
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-gunmetal-gray mb-20">Contact</h1>
            <div className="text-center">
                <p className="text-xl text-slate-300">¿Tienes preguntas?, ¿necesitas asesoramiento o quieres colaborar con algún proyecto?</p>
                <p className="text-xl text-slate-300">Puedes escribirme por email, enviarme un mensaje por LinkedIn.</p>
                <div className="flex justify-center my-10 gap-4">
                    <a className="px-4 py-2 rounded-full bg-vscode-blue bg-gradient-to-r from-vscode-blue to-blue-600 text-slate-100" href="mailto:emmyseco@gmail.com" target="_blank" rel="noreferrer">
                        emmyseco@gmail.com
                    </a>
                    <a className="px-4 py-2 rounded-full bg-vscode-blue bg-gradient-to-r from-vscode-blue to-blue-600 text-slate-100" href="https://linkedin.com/in/emmyseco" target="_blank" rel="noreferrer">
                        Mensaje en LinkedIn
                    </a>
                </div>
                <p className="text-lg text-slate-300 mb-4">¿Contactarme ahora mismo?, puedes usar el formulario de contacto y enviarme tu mensaje.</p>
                <ContactForm />
            </div>
        </section>
    );
}