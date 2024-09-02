import { useState } from "react";
import Tesseract from "tesseract.js";

const OCRProcessor = ({ image, onProcessComplete }: any) => {
  const [processing, setProcessing] = useState(false);

  const processImage = async () => {
    setProcessing(true);
    const result = await Tesseract.recognize(image, "eng");
    const text = result.data.text;

    // Dummy table parsing logic (you can implement more advanced logic)
    const parsedTable = text.split("\n").map((row) => row.split(/\s+/));

    setProcessing(false);
    onProcessComplete(parsedTable);
  };

  return (
    <div>
      {image && (
        <button onClick={processImage} disabled={processing}>
          {processing ? "Processing..." : "Process Image"}
        </button>
      )}
    </div>
  );
};

export default OCRProcessor;
