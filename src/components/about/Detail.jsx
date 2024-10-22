export const Detail = ({ data }) => {
  const handleDownload = () => {
    // Replace 'path/to/your/cv.pdf' with the actual path to your PDF file
    const link = document.createElement('a');
    link.href = 'path/to/your/cv.pdf'; // URL of the PDF
    link.setAttribute('download', 'CV.pdf'); // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Clean up
  };

  return (
    <div className="text-primary flex justify-center flex-col md:items-end col-span-1 md:pt-20 lg:pl-20 lg:mb-10">
      <div className="flex flex-col items-center md:items-start">
        <div className="pb-2 flex justify-start">
          <h1 className="font-semibold text-textPrimary text-2xl animate-fadeInFromRight animate__delay-0s lg:ml-8 mr-20 md:ml-3">
            {data.greeting}
          </h1>
        </div>
        <div className="pb-4 md:pl-10">
          <h2 className="font-extrabold text-2xl md:text-3xl text-blue-500 animate-fadeInFromRight animate__delay-1s">
            {data.name}
          </h2>
        </div>
        <div className="mb-2 flex justify-end">
          <p className="lg:text-lg text-sm md:px-10 text-textSecondary max-w-2xl animate-fadeInFromRight animate__delay-1s lg:ml-10 ml-4">
            {data.description}
          </p>
        </div>
      </div>
      <div className="p-2 mb-2 flex justify-start">
        <button 
          className="md:p-4 p-2 bg-blue-500 text-white rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105"
          onClick={handleDownload}
        >
          Descargar CV
        </button>
      </div>
    </div>
  );
};
