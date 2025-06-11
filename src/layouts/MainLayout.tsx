import React from "react";

interface MainLayoutProps {
    children? : any
}

export default function MainLayout({children} : MainLayoutProps)
{
    return (
        <div className="bg-deep-space-black">
            {/* Header */}
            <main>
                {children}
            </main>
            {/* Footer */}
        </div>
    );
}