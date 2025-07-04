import React, { ReactNode, useState } from "react";

export default function NavBar()
{
    const [selectedLang, setLang] = useState('en');
    const navMenus: any[] = [
        { name: "Projects", href: "#projects" },
        { name: "About", href: "#about" },
        { name: "Contact", href: "#contact" },
    ];

    const socialLinks: any[] = [
        { href: "https://github.com/lfirebw", icon: 0, label:"github" },
        { href: "https://linkedin.com/in/emmyseco", icon: 1, label:"linkedin" },
    ];
    const langButtons: any[] = [
        { code:'en', label: "EN", title: "English Translate"},
        { code:'es', label: "ES", title: "Spanish Translate"},
    ]
    const iconsSocial: ReactNode[] = [
        <svg className="w-8 mx-auto hover:w-10 transition duration-200" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="3rem" width="3rem" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg>,
        <svg className="w-8 mx-auto hover:w-10 transition duration-200" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="3rem" width="3rem" xmlns="http://www.w3.org/2000/svg"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"></path></svg>
    ]
    return (
        <nav className="w-full container flex items-center justify-between px-6 py-4 mx-auto">
            {/* Logo */}
            <div className="flex items-center">
                <a href="#hero">
                    <img src="https://emmyseco.com/wp-content/uploads/2021/01/logo_emmyseco.png" alt="Logo" className="" />
                </a>
            </div>

            {/* Navigation Menus */}
            <ul className="flex space-x-6">
                {navMenus.map((menu) => (
                <li key={menu.name}>
                    <a href={menu.href} className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-neutral-300 hover:text-vscode-blue transition">
                    {menu.name}
                    </a>
                </li>
                ))}
            </ul>

            {/* Socials + Locate Button */}
            <div className="flex items-center space-x-3">
                {socialLinks.map((social) => (
                <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="m-0 w-12 rounded-full hover:bg-gunmetal-gray transition duration-300"
                >
                    {iconsSocial[social.icon]}
                </a>
                ))}
                <div className="inline-flex items-center space-x-1 border rounded-md p-1 bg-muted">
                    {langButtons.map((button)=>(
                        <button
                            className={`h-8 w-8 p-0 ${
                                selectedLang == button.code 
                                    ? 'text-neutral-800 bg-slate-100 font-bold'
                                    : 'opacity-50 hover:opacity-100'
                            }`}
                            key={button.code}
                            title={button.title}
                            aria-label={button.title}
                            onClick={()=>setLang(button.code)}
                        >
                            {button.label}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
}