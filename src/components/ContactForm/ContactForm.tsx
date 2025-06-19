import React, { useState, useRef } from "react";

export default function ContactForm() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email && message) {
            alert("Your message has been sent successfully!");
            setEmail("");
            setMessage("");
            formRef.current?.reset();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        formRef.current?.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
        }
    };

    return (
        <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="max-w-md mx-auto bg-gunmetal-gray p-8 rounded-lg shadow-lg flex flex-col gap-5"
        >
            <input
                type="email"
                required
                placeholder="Your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onKeyDown={handleKeyDown}
                className="px-4 py-2 rounded bg-deep-space-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-cyan"
            />
            <textarea
                required
                placeholder="Your message"
                value={message}
                onChange={e => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                rows={4}
                className="px-4 py-2 rounded bg-deep-space-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-cyan resize-none"
            />
            <button
                type="submit"
                className="mt-2 px-6 py-2 rounded bg-neon-cyan text-black font-bold hover:bg-vscode-blue hover:text-white transition"
            >
                Send
            </button>
        </form>
    );
}