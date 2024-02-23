// pages/dashboard.tsx
import React from 'react';

const DashboardPage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">HTML Keyword Dashboard</h1>

            {/* Difficulty Levels */}
            <div className="mb-8">
                <h2 className="text-xl font-bold mb-2">Difficulty Levels:</h2>
                <div className="flex">
                    <div className="mr-4">
                        <div className="text-green-600 font-bold">Beginner</div>
                        <div>Basic HTML Tags</div>
                    </div>
                    <div className="mr-4">
                        <div className="text-yellow-600 font-bold">Intermediate</div>
                        <div>Forms and Tables</div>
                    </div>
                    <div>
                        <div className="text-red-600 font-bold">Advanced</div>
                        <div>Responsive Design and CSS Frameworks</div>
                    </div>
                </div>
            </div>

            {/* Keywords */}
            <div>
                <h2 className="text-xl font-bold mb-2">Keywords:</h2>
                <div className="grid grid-cols-3 gap-4">
                    {/* Beginner Keywords */}
                    <div className="border p-4 rounded bg-green-100">
                        <h3 className="text-lg font-bold mb-2">Beginner</h3>
                        <ul>
                            <li>HTML</li>
                            <li>Headings</li>
                            <li>Paragraphs</li>
                            {/* Add more beginner keywords */}
                        </ul>
                    </div>

                    {/* Intermediate Keywords */}
                    <div className="border p-4 rounded bg-yellow-100">
                        <h3 className="text-lg font-bold mb-2">Intermediate</h3>
                        <ul>
                            <li>Forms</li>
                            <li>Tables</li>
                            <li>Lists</li>
                            {/* Add more intermediate keywords */}
                        </ul>
                    </div>

                    {/* Advanced Keywords */}
                    <div className="border p-4 rounded bg-red-100">
                        <h3 className="text-lg font-bold mb-2">Advanced</h3>
                        <ul>
                            <li>Responsive Design</li>
                            <li>CSS Frameworks</li>
                            <li>Flexbox</li>
                            {/* Add more advanced keywords */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
