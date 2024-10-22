const HomePreview = ({ loading, error, homeData, imageSrc }) => (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : (
        <div className="border p-4 sm:p-6 rounded shadow-lg flex flex-col justify-between h-[400px] w-full sm:max-w-[400px] mx-auto overflow-hidden">
          <h2 className="text-xl font-semibold mb-2 text-center">Vista Previa</h2>
          <div className="flex-1 space-y-2">
            <p className="text-sm">
              <strong>Greeting:</strong> {homeData.greeting}
            </p>
            <p className="text-sm">
              <strong>Name:</strong> {homeData.name}
            </p>
            <p className="text-xs">
              <strong>Description:</strong> {homeData.description}
            </p>
          </div>
          {imageSrc && (
            <div className="flex justify-end">
              <img
                src={imageSrc}
                alt="Home"
                className="object-cover w-32 h-32 rounded-full border-2 border-gray-300 p1"
              />
            </div>
          )}
        </div>
      )}
    </>
  );
  
  export default HomePreview;
  