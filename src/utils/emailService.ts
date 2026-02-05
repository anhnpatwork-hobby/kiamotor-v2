import emailjs from '@emailjs/browser';

// Initialize EmailJS with Public Key
export const initEmail = () => {
    // You should call this once in your app, e.g., in App.tsx `useEffect`
    // Or just let the send function handle it if passing publicKey explicitly.
    // Ideally put this in env variables.
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (PUBLIC_KEY) {
        emailjs.init(PUBLIC_KEY);
    } else {
        console.warn("EmailJS Public Key is missing!");
    }
};

interface EmailData {
    to_name?: string; // Tên người nhận (Sales) - Optional set in template
    from_name: string; // Tên khách hàng
    phone: string;
    message: string;
    car_model?: string;
    type: string; // "Tư vấn", "Lái thử", "Trả góp", v.v.
    income?: string; // Cho form trả góp
    loan_amount?: string; // Cho form trả góp
}

export const sendEmail = async (data: EmailData) => {
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        console.error("EmailJS Env Variables are missing!");
        throw new Error("Cấu hình Email chưa đầy đủ. Vui lòng kiểm tra file .env");
    }

    try {
        const response = await emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            {
                from_name: data.from_name,
                phone: data.phone,
                message: data.message || "Không có lời nhắn",
                car_model: data.car_model || "Không rõ",
                type: data.type,
                income: data.income || "N/A",
                loan_amount: data.loan_amount || "N/A",
                timestamp: new Date().toLocaleString('vi-VN')
            },
            PUBLIC_KEY
        );
        return response;
    } catch (error) {
        console.error("EmailJS Error:", error);
        throw error;
    }
};
