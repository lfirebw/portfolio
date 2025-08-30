import React, { useState, useRef } from "react";
import { SendEmail } from "@/services";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const { t } = useTranslation();
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("click");
        if (email && message) {
            setLoading(true);
            SendEmail(formRef.current || new HTMLFormElement)
                .then(
                    (res)=>{
                        console.log('SUCCESS!', res.status, res.text);
                        alert("Your message has been sent successfully!");
                        setEmail("");
                        setMessage("");
                        setLoading(false);
                        formRef.current?.reset();
                    },
                    (err)=>{
                        alert("Ocurring an error when sending your email");
                        console.log('FAILED...', err);
                        setLoading(false);
                    }
                );
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
                name="email"
                className="px-4 py-2 rounded bg-deep-space-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-cyan"
            />
            <textarea
                required
                placeholder="Your message"
                value={message}
                onChange={e => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                rows={4}
                name="message"
                className="px-4 py-2 rounded bg-deep-space-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-cyan resize-none"
            />
            <button
                disabled={loading}
                type="submit"
                className={`mt-2 px-6 py-2 rounded text-black font-bold transition ${
                    loading
                        ? "bg-gray-500 text-gray-300 cursor-not-allowed"
                        : "bg-neon-cyan text-black hover:bg-vscode-blue hover:text-white"
                    }`}
            >
                { t("contactFormButton") }
            </button>
        </form>
    );
}