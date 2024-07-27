import React from 'react';

const Education = () => {
    return (
        <div>
            <h1>Education Component</h1>
            <div className="bg-gray-200 p-4">
                <h2 className="text-xl font-bold mb-4">Education</h2>
                <div className="flex items-center mb-2">
                    <div className="w-12 h-12 bg-gray-400 rounded-full mr-4"></div>
                    <div>
                        <h3 className="text-lg font-semibold">University of XYZ</h3>
                        <p className="text-gray-600">Bachelor's Degree in Computer Science</p>
                        <p className="text-gray-600">2015 - 2019</p>
                    </div>
                </div>
                <div className="flex items-center mb-2">
                    <div className="w-12 h-12 bg-gray-400 rounded-full mr-4"></div>
                    <div>
                        <h3 className="text-lg font-semibold">ABC High School</h3>
                        <p className="text-gray-600">High School Diploma</p>
                        <p className="text-gray-600">2011 - 2015</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;