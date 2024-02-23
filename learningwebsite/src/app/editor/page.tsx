"use client"
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface ContentEditorProps {
    onAddContent: (content: string) => void;
}

const ContentEditor: React.FC<ContentEditorProps> = ({ onAddContent }) => {
    const [editorHtml, setEditorHtml] = useState<string>(
        '<h1>Welcome to the Content Editor!</h1><p>Add your content here...</p>'
    );
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleChange = (html: string) => {
        setEditorHtml(html);
    };

    const handleAddContent = () => {
        setIsModalOpen(true)
        // onAddContent(editorHtml);
        // Resetting editor content
        // setEditorHtml('<h1>Welcome to the Content Editor!</h1><p>Add your content here...</p>');
    };
    const closeModal = () => {
        // Close the modal
        setIsModalOpen(false);
    };

    return (
        <div className="h-screen flex flex-col">
            <h1 className="text-3xl font-bold mb-4 px-4 py-2 bg-gray-200">Content Editor</h1>
            <div className="flex-grow min-h-[400px]">
                <ReactQuill theme="snow" value={editorHtml} onChange={handleChange} />
            </div>
            {isModalOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-4 rounded-lg">
                        <h2 className="text-xl font-bold mb-4">Content Added!</h2>
                        <p>Your content has been successfully added!</p>
                        <div dangerouslySetInnerHTML={{ __html: editorHtml }} />
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-b focus:outline-none focus:shadow-outline"
                onClick={handleAddContent}
            >
                Preview Content

            </button>
        </div>
    );
};

export default ContentEditor;
