"use client"
import React, { useState } from 'react';
import contentData from './content.json'; // Import JSON file containing content data

const SampleBlogPost: React.FC = () => {
    const [isContentUnlocked, setContentUnlocked] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState<number[]>([]);

    const unlockContent = () => {
        setContentUnlocked(true);
    };

    const handleOptionChange = (questionIndex: number, optionIndex: number) => {
        const newSelectedOptions = [...selectedOptions];
        newSelectedOptions[questionIndex] = optionIndex;
        setSelectedOptions(newSelectedOptions);
    };
    // Extract correct answers from quiz data
    const correctAnswers = contentData.quiz.map(question => question.answer);

    // Check user-selected options against correct answers
    const checkAnswers = () => {
        let score = 0;
        selectedOptions.forEach((optionIndex, questionIndex) => {
            const correctAnswerIndex = correctAnswers[questionIndex].charCodeAt(0) - 97;
            if (optionIndex === correctAnswerIndex) {
                score++;
            }
        });

        const totalQuestions = correctAnswers.length;
        const percentage = (score / totalQuestions) * 100;
        let message = `Your score is ${score}/${totalQuestions}. `;
        if (percentage === 100) {
            message += '🎉 Congratulations! You got all the answers correct! 🎉';
        } else if (percentage >= 70) {
            message += '👍 Well done! You passed the quiz. 👍';
        } else {
            message += '👎 Sorry, you did not pass the quiz. Keep practicing! 👎';
        }
        alert(message);
    };


    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">{contentData.title}</h1>
            {/* <p className="text-lg mb-4">{contentData.intro}</p> */}

            {/* Render HTML content */}
            <div dangerouslySetInnerHTML={{ __html: contentData.content }} />
            {/* Render Quiz */}
            {isContentUnlocked && (
                <div className="mt-8">
                    <h2 className="text-xl font-bold mb-4">Quiz</h2>
                    <ol className="list-decimal">
                        {contentData.quiz.map((question, index) => (
                            <li key={index} className="mb-4">
                                {question.question}
                                <br />
                                {question.options.map((option, optionIndex) => (
                                    <label key={optionIndex}>
                                        <input
                                            type="radio"
                                            name={`question${index}`}
                                            value={option.value} // Use option value here
                                            checked={selectedOptions[index] === optionIndex}
                                            onChange={() => handleOptionChange(index, optionIndex)}
                                        />
                                        {option.text} {/* Display option text */}
                                    </label>
                                ))}
                            </li>
                        ))}

                    </ol>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={checkAnswers}
                    >
                        Submit Answers
                    </button>
                </div>
            )}

            {/* Render Unlock Button */}
            {!isContentUnlocked && (
                <div className="flex justify-center items-center">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
                        onClick={unlockContent}
                    >
                        <svg
                            className="w-6 h-6 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 14v1a3 3 0 01-3 3H9a3 3 0 01-3-3v-1M10 9V7a1 1 0 011-1h2a1 1 0 011 1v2M9 17h6"
                            />
                        </svg>
                        Unlock More
                    </button>
                </div>
            )}
        </div>
    );
};

export default SampleBlogPost;
