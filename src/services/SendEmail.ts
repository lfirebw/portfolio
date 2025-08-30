import emailjs from '@emailjs/browser';

export default function SendEmail(form: HTMLFormElement)
{
    const SERVICE_ID: string = "service_2wnkv3q";
    const TEMPLATE_ID: string = "template_3tvm1t9";
    const PUBLIC_KEY: string = "4ogbXIu2WqqnNeCbT";

    return emailjs.sendForm(
        SERVICE_ID, 
        TEMPLATE_ID, 
        form, 
        { 
            publicKey: PUBLIC_KEY 
        }
    );
}