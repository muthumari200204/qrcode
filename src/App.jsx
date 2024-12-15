// import { useState, useEffect } from "react";
// import QRCode from "qrcode";
// import './components/qrcode.css'; 

// function App() {
//   const [count, setCount] = useState(0);
//   const [qrCodeUrl, setQrCodeUrl] = useState('');

//   useEffect(() => {
//     const generateQRCode = async () => {
//       try {
//         const url = await QRCode.toDataURL(`https://example.com/${count}`);
//         setQrCodeUrl(url);
//       } catch (err) {
//         console.error('Error generating QR code:', err);
//         setQrCodeUrl(''); 
//       }
//     };

//     generateQRCode();
//   }, [count]); 

//   return (
//     <>
//       <div>
//         <h1>React + Vite + QR Code Generator</h1>
//         <div className="card">
//           <button 
//             onClick={() => setCount((prev) => prev + 1)}
//             className="generate-button"
//           >
//             Generate QR Code for {count}
//           </button>
//           <div className="qr-container">
//             {qrCodeUrl ? (
//               <img
//                 src={qrCodeUrl}
//                 alt={`Generated QR Code for ${count}`}
//                 className="qr-code-image"
//               />
//             ) : (
//               <p>Loading QR Code...</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
