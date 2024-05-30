import React from 'react';
import One from '../../public/one.jpg'

const LessonPlanDashboard = () => {
  const subtopics = [
    { title: 'HTML Basics', link: 'https://html.com/' },
    { title: 'HTML Elements', link: 'https://www.w3.org/TR/2012/WD-html-markup-20121025/elements.html' },
    { title: 'HTML Attributes', link: 'https://www.digitalocean.com/community/tutorials/how-to-use-html-attributes' },
    { title: 'HTML Forms', link: 'https://www.javatpoint.com/html-form' },
  ];

  const sessionQuestions = [
    'What are the main parts of an HTML document?',
    'How do you create a hyperlink in HTML?',
    'What is the purpose of the <div> tag?',
    'How many types of heading does an HTML contain?',
  ];

  const scenarioQuestions = [
    'Design a simple webpage layout using HTML tags.',
    'Create a form in HTML that collects user information.',
    'Make a card component using HTML'
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-dodgerblue-700">HTML Lesson Plan</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Box 1 */}
        <div className="relative col-span-1 h-full">
          <img src={One} alt="" className="w-full h-full object-cover rounded-lg shadow-md" />
          <div className="absolute top-0 left-0 bg-blue-500 px-2 py-1 rounded-tr-lg rounded-bl-lg">
            <p className="text-cyan-50 font-semibold">Grade 8-10</p>
          </div>
          <div className="absolute bottom-0 right-0 bg-blue-900 bg-opacity-75 px-4 py-2 rounded-tl-lg rounded-br-lg">
            {/* <p className="text-white">Subject: HTML</p> */}
            <p className="text-white">Duration: 3 hrs</p>
          </div>
        </div>

        {/* Box 2 */}
        <div className="col-span-1 h-full">
          <div className="bg-white p-6 rounded-lg shadow-md h-full">
            <h2 className="text-xl font-semibold mb-4 text-dodgerblue-700">Subtopics</h2>
            <div className="grid grid-cols-1 gap-4">
              {subtopics.map((subtopic, index) => (
                <a key={index} href={subtopic.link} className="p-4 bg-gray-200 text-dodgerblue-700 rounded-md text-center hover:bg-dodgerblue-100 block">
                  {subtopic.title}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-1 h-full">
          <div className="bg-white p-6 rounded-lg shadow-md h-full">
            <h2 className="text-xl font-semibold mb-4 text-dodgerblue-700">Delivery Type</h2>
            <div className="grid grid-cols-2 gap-4 justify-center items-center p-4">
              <a href="#" className="p-4 h-[6rem] flex items-center justify-center bg-dodgerblue-600 text-white rounded-md text-center hover:bg-dodgerblue-700">Activity Based</a>
              <a href="#" className="p-4 h-[6rem] flex items-center justify-center bg-dodgerblue-600 text-white rounded-md text-center hover:bg-dodgerblue-700 ">Content</a>
              <a href="#" className="p-4 h-[6rem] flex items-center justify-center bg-dodgerblue-600 text-white rounded-md text-center hover:bg-dodgerblue-700">Enquiry Based</a>
              <a href="#" className="p-4 h-[6rem] flex items-center justify-center bg-dodgerblue-600 text-white rounded-md text-center hover:bg-dodgerblue-700">Experimental Learning</a>
            </div>
          </div>
        </div>

        <div className="col-span-1 h-full">
          <div className="bg-white p-6 rounded-lg shadow-md h-full">
            <h2 className="text-xl font-semibold mb-4 text-dodgerblue-700">Session Questions</h2>
            <ul className="list-disc pl-6">
              {sessionQuestions.map((question, index) => (
                <li key={index}>{question}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-span-1 h-full">
          <div className="bg-white p-6 rounded-lg shadow-md h-full">
            <h2 className="text-xl font-semibold mb-4 text-dodgerblue-700">Scenario-Based Questions</h2>
            <ul className="list-disc pl-6">
              {scenarioQuestions.map((question, index) => (
                <li key={index}>{question}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-span-1 h-full">
          <div className="bg-white p-6 rounded-lg shadow-md h-full">
            <h2 className="text-xl font-semibold mb-4 text-dodgerblue-700">Assessment</h2>
            <p>Quiz on HTML Basics</p>
          </div>
        </div>

        {/* Box 4 */}
        <div className="col-span-1 h-full">
          <div className="bg-white p-6 rounded-lg shadow-md h-full">
            <h2 className="text-xl font-semibold mb-4 text-dodgerblue-700">PPT</h2>
            <a href="/path/to/sample_presentation.pptx" className="text-dodgerblue-600 underline block" target="_blank" rel="noopener noreferrer">Example: Basic HTML Tags</a>
          </div>
        </div>

        {/* Box 5 */}
        <div className="col-span-1 h-full">
          <div className="bg-white p-6 rounded-lg shadow-md h-full">
            <h2 className="text-xl font-semibold mb-4 text-dodgerblue-700">Worksheet</h2>
            <a href="/path/to/sample_worksheet.pdf" download className="text-dodgerblue-600 underline block">Download Worksheet</a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LessonPlanDashboard;
