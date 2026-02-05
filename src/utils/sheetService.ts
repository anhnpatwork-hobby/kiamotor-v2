// Utility to submit data to Google Sheets via Google Apps Script Web App
// Note: Google Apps Script Web App requires POST requests.
// Due to CORS, we often use 'no-cors' mode which returns an opaque response.
// We assume success if the fetch promise resolves.

interface SheetData {
    Name: string; // Match headers in Google Sheet
    Phone: string;
    Car?: string;
    Type?: string; // "Tư vấn", "Lái thử", etc.
    Message?: string;
    Income?: string; // For installment form
    LoanAmount?: string; // For installment form
}

export const submitToSheet = async (data: SheetData) => {
    const SCRIPT_URL = import.meta.env.VITE_GOOGLE_SHEET_URL;

    if (!SCRIPT_URL || SCRIPT_URL.includes("PLACEHOLDER")) {
        console.error("Google Sheet Script URL is missing!");
        throw new Error("Chưa cấu hình Google Sheet URL trong file .env");
    }

    // Create Form Data
    const formData = new FormData();
    formData.append('Name', data.Name);
    formData.append('Phone', data.Phone);
    formData.append('Car', data.Car || '');
    formData.append('Type', data.Type || '');
    formData.append('Message', data.Message || '');
    formData.append('Income', data.Income || '');
    formData.append('LoanAmount', data.LoanAmount || '');
    // Timestamp is handled by the script

    try {
        await fetch(SCRIPT_URL, {
            method: 'POST',
            body: formData,
            mode: 'no-cors' // Critical for Google Apps Script to work without CORS error
        });
        // With 'no-cors', we can't read the response, but if we get here, it was sent.
        return true;
    } catch (error) {
        console.error("Google Sheet Error:", error);
        throw error;
    }
};
