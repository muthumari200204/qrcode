import React, { useState } from "react";


export const Qrcode = () => {
    const [img, setImg] = useState("");
    const [loading, setLoading] = useState(false);
    const [qrData, setQrData] = useState("muthu");
    const [qrSize, setQrSize] = useState("150");

    async function generateQr() {
        setLoading(true);
        try {
            
            const url = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrData)}&size=${qrSize}x${qrSize}`;
            setImg(url);
        } catch (error) {
            console.error("Error generating QR code", error);
        } finally {
            setLoading(false);
        }
    }

    function downloadQr() {
        fetch(img)
            .then((response) => response.blob())
            .then((blob) => {
                const link = document.createElement("a");
                link.href = URL.createObjectURL(blob);
                link.download = "qr.png";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            })
            .catch((error) => {
                console.error("Error downloading QR code", error);
            });
    }

    return (
        <div className="app-container">
            <h1>QR Code Generator</h1>
            {loading && <p>Please wait...</p>}
            {img && <img src={img} alt="Generated QR Code" className="qr-code-image" />}

            <div>
                <label htmlFor="datainput" className="input-label">
                    Data for QR Code
                </label>
                <input
                    type="text"
                    className="input"
                    value={qrData}
                    id="datainput"
                    placeholder="Enter data for QR Code"
                    onChange={(e) => setQrData(e.target.value)}
                />

                <label htmlFor="sizeinput" className="input-label">
                    Image Size (e.g., 150)
                </label>
                <input
                    type="text"
                    value={qrSize}
                    className="input"
                    id="sizeinput"
                    placeholder="Enter image size"
                    onChange={(e) => setQrSize(e.target.value)}
                />

                <button
                    className="generate-button"
                    disabled={loading}
                    onClick={generateQr}
                >
                    Generate QR Code
                </button>
                <button className="download-button" onClick={downloadQr}>
                    Download QR Code
                </button>
            </div>
            <p className="footer">Designed by Muthu</p>
        </div>
    );
};

export default Qrcode;