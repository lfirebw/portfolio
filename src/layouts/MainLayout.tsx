import React from "react";
import { Header, Footer } from '@/components'
interface MainLayoutProps {
    children? : any
}

export default function MainLayout({children} : MainLayoutProps)
{
    return (
        <div className="bg-deep-space-black">
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
}