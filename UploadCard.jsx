import { useState } from "react";
import API from "../services/api";

function UploadCard() {

  const [fileName, setFileName] = useState("");
  const [uploadStatus, setUploadStatus] = useState("");
  const [ocrText, setOcrText] = useState("");

  const handleFileChange = async (event) => {

    const file = event.target.files[0];

    if (!file) return;

    setFileName(file.name);

    const formData = new FormData();
    formData.append("file", file);

    try {

      setUploadStatus("Uploading...");

      const response = await API.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setUploadStatus(response.data.message);
      setOcrText(response.data.extracted_text);

    } catch (error) {

      console.error(error);

      setUploadStatus("Upload Failed");

    }
  };

  return (

    <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl w-full">

      <h2 className="text-2xl font-bold mb-6">
        Upload Your Documents
      </h2>

      <label className="border-2 border-dashed border-gray-400 rounded-xl h-64 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 transition">

        <input
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />

        <p className="text-lg text-gray-600">
          Drag & Drop or Click to Upload
        </p>

        <p className="text-sm text-gray-400 mt-2">
          PDF, JPG, PNG Supported
        </p>

      </label>

      {fileName && (

        <div className="mt-6 p-4 bg-gray-100 rounded-lg">

          <p className="font-semibold">
            Selected File:
          </p>

          <p className="text-blue-600">
            {fileName}
          </p>

        </div>

      )}

      {uploadStatus && (

        <div className="mt-4">

          <p className="font-medium text-green-600">
            {uploadStatus}
          </p>

        </div>

      )}

      {ocrText && (

        <div className="mt-6 p-4 bg-gray-100 rounded-lg">

          <h3 className="font-bold mb-2">
            Extracted Text:
          </h3>

          <p className="text-gray-700 whitespace-pre-wrap">
            {ocrText}
          </p>

        </div>

      )}

    </div>

  );
}

export default UploadCard;