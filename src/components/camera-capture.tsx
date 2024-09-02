import { useState } from "react";

const CameraCapture = ({ onCapture }: any) => {
  const [image, setImage] = useState(null);

  const handleCapture = (event: any) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
    onCapture(imageUrl);
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleCapture}
      />
      {image && (
        <img
          src={image}
          alt="Captured"
          style={{ width: "100%", marginTop: "10px" }}
        />
      )}
    </div>
  );
};

export default CameraCapture;
