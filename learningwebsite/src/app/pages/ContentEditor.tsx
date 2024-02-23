import React, { useState } from 'react';
import dynamic from 'next/dynamic'; // Import dynamic from next/dynamic

// Dynamically import ReactQuill to prevent server-side rendering issues
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const ContentEditor: React.FC = () => {
    const [editorHtml, setEditorHtml] = useState<string>(''); // State to hold the HTML content of the editor

    // Function to handle changes in the editor content
    const handleEditorChange = (html: string) => {
        setEditorHtml(html); // Update the state with the new HTML content
    };

    // Function to handle adding content to the page
    const handleAddContent = () => {
        // You can implement your logic to add the content to the page here
        console.log(editorHtml); // For demonstration, log the editor HTML content
        setEditorHtml(''); // Clear the editor after adding content
    };

    return (
        <div>
            <ReactQuill
                theme="snow" // Use the snow theme (similar to the provided theme)
                value={editorHtml} // Set the HTML content of the editor
                onChange={handleEditorChange} // Handle changes in the editor content
            />
            <button onClick={handleAddContent}>Add to Content</button> {/* Button to add content to the page */}
        </div>
    );
};

export default ContentEditor;
