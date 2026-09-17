import { useState } from "react";
import axios from "axios";

function Upload() {

    const [file, setFile] = useState(null);

    const [response, setResponse] = useState(null);

    const [loading, setLoading] = useState(false);

    const handleUpload = async () => {

        if (!file) {

            alert("Please select a file");

            return;
        }

        const formData = new FormData();

        formData.append("file", file);

        try {

            setLoading(true);

            const res = await axios.post(
                "http://127.0.0.1:8000/upload",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            setResponse(res.data);

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);
        }
    };

    return (

        <div className="p-10">

            <h1 className="text-3xl font-bold mb-6">
                Upload Document
            </h1>

            <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                className="mb-4"
            />

            <br />

            <button
                onClick={handleUpload}
                className="bg-black text-white px-6 py-2 rounded-lg"
            >
                {loading ? "Uploading..." : "Upload"}
            </button>

            {response && (

                <div className="mt-8 border p-5 rounded-xl">

                    <h2 className="text-2xl font-semibold mb-3">
                        Processing Status
                    </h2>

                    <p>
                        <strong>Message:</strong>{" "}
                        {response.message}
                    </p>

                    <p>
                        <strong>Task ID:</strong>{" "}
                        {response.task_id}
                    </p>

                    <p>
                        <strong>Status:</strong>{" "}
                        {response.status}
                    </p>

                    {/* Optional Future Fields */}

                    {response.document_type && (

                        <p>
                            <strong>Document Type:</strong>{" "}
                            {response.document_type}
                        </p>
                    )}

                    {response.workflow_status && (

                        <p>
                            <strong>Workflow Status:</strong>{" "}
                            {response.workflow_status}
                        </p>
                    )}

                    {response.completion_percentage && (

                        <p>
                            <strong>Completion:</strong>{" "}
                            {response.completion_percentage}%
                        </p>
                    )}

                    {response?.missing_documents?.length > 0 && (

                        <>
                            <p className="mt-4">
                                <strong>Missing Documents:</strong>
                            </p>

                            <ul className="list-disc ml-6">

                                {response.missing_documents.map((doc, index) => (

                                    <li key={index}>
                                        {doc}
                                    </li>

                                ))}

                            </ul>
                        </>
                    )}

                </div>
            )}

        </div>
    );
}

export default Upload;