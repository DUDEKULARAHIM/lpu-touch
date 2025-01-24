import React, { useState } from "react";
import QrReader from "react-qr-scanner";
import { useNavigate, useParams } from "react-router-dom";
import MyBottomSheet from "../components/HomeComponents/MyBottomSheet";
import Loading from "../assets/loader.gif";
import successSound from "../assets/images/beep.ogg"; // Import your sound file

const Test = (props) => {
  const { mealLink } = useParams();
  const { messType } = useParams();
  const { mealType } = props;
  const [delay, setDelay] = useState(800);
  const [result, setResult] = useState({ text: "No result" });
  const [loading, setLoading] = useState(false); // State for loading screen
  const navigate = useNavigate();

  const handleScan = (data) => {
    if (data) {
      const extractedData = {
        text: data.text,
        format: data.format,
      };
      setResult(extractedData);
      setLoading(true); // Show loading screen
      
      // Play sound
      const audio = new Audio(successSound);
      audio.play();

      setTimeout(() => {
        setLoading(false); // Hide loading screen after 2 seconds
        if (extractedData) {
          if (messType === "Mess BH-3") {
            navigate(`/mess/scan/${mealLink}/${messType}`);
          } else if (messType === "Mess-Centre-02") {
            navigate(`/central/scan/${mealLink}/${messType}`);
          } else if (messType === "Mess-Centre-01") {
            navigate(`/north/scan/${mealLink}/${messType}`);
          }
        }
      }, 2000);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const qrScannerStyle = {
    objectFit: "cover",
    height: "100vh",
    width: "100%",
    position: "relative",
  };

  const squareStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "250px",
    height: "250px",
    outline: "800px solid rgba(0, 0, 0, 0.5)",
    zIndex: 2,
  };

  return (
    <>
      <div className="h-full w-full" style={{ position: "relative" }}>
        <QrReader
          delay={delay}
          style={qrScannerStyle}
          onError={handleError}
          onScan={handleScan}
          constraints={{
            video: { facingMode: "environment" },
          }}
        />
        <div className="parent">
          <div style={squareStyle} className="child1 flex items-center">
            <span className={"w-full bg-red-500 p-[0.09px]"}></span>
          </div>
        </div>
        <p className="fixed z-10 bottom-0 w-full text-white z-3 left-0 flex items-center justify-center text-[13px]">
          Place a barcode inside the viewfinder rectangle to scan it.
        </p>
      </div>
      {loading && 
        <div className="fixed z-50 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <img src={Loading} alt="loading" className="w-20 h-20" />
        </div>
      }
    </>
  );
};

export default Test;
