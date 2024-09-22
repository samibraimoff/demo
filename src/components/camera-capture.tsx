import { useState } from "react";
import heic2any from "heic2any";

const CameraCapture = ({ onCapture }: any) => {
  const [image, setImage] = useState<string>();

  const handleCapture = async (event: any) => {
    const file = event.target.files[0];
    if (file && file.type === "image/heic") {
      try {
        const convertedBlob = (await heic2any({
          blob: file,
          toType: "image/jpeg",
        })) as any;
        const convertedImageUrl = URL.createObjectURL(convertedBlob);
        setImage(convertedImageUrl);
        onCapture(convertedImageUrl);
      } catch (error) {
        console.error("Error converting HEIC image: ", error);
      }
    } else {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      onCapture(imageUrl);
    }
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
