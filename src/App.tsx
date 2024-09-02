import { useState } from "react";
import "./App.css";
import CameraCapture from "./components/camera-capture";
import OCRProcessor from "./components/ocr-processor";
import ExportButton from "./components/export-button";

function App() {
  const [image, setImage] = useState(null);
  const [tableData, setTableData] = useState([]);

  return (
    <div className="App">
      <h1>Demo</h1>
      <CameraCapture onCapture={setImage} />
      <OCRProcessor image={image} onProcessComplete={setTableData} />
      {tableData.length > 0 && (
        <>
          <h2>Parsed Table Data</h2>
          <pre>{JSON.stringify(tableData, null, 2)}</pre>
          <ExportButton data={tableData} />
        </>
      )}
    </div>
  );
}

export default App;
