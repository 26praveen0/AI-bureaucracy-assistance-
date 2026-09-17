import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {

    const [documents, setDocuments] = useState([]);

    useEffect(() => {

      fetchDocuments();

      const interval = setInterval(() => {

        fetchDocuments();

    }, 3000);

    return () => clearInterval(interval);

}, []);

    const fetchDocuments = async () => {

        try {

            const response = await axios.get(
                "http://127.0.0.1:8000/documents"
            );

            setDocuments(response.data);

        } catch (error) {

            console.log(error);

        }
    };

    return (

        <div className="p-10">

            <h1 className="text-3xl font-bold mb-6">
                AI Bureaucracy Dashboard
            </h1>

            <div className="grid gap-4">

                {documents.map((doc) => (

                    <div
                        key={doc.id}
                        className="border p-5 rounded-xl shadow"
                    >

                        <h2 className="text-xl font-semibold">
                            {doc.filename}
                        </h2>

                        <p>
                            Type: {doc.document_type}
                        </p>

                        <p>
                            Status: {doc.workflow_status}
                        </p>

                        <p>
                            Completion: {doc.completion_percentage}%
                        </p>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default Dashboard;