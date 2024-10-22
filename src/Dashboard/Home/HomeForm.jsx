const HomeForm = ({ formData, handleChange, handleSubmit }) => (
    <form
      onSubmit={handleSubmit}
      className="border p-4 sm:p-6 rounded shadow-lg w-full sm:max-w-[400px] mx-auto"
    >
      <div className="flex flex-col gap-6">
        <input
          type="text"
          name="greeting"
          placeholder="Greeting"
          value={formData.greeting}
          onChange={handleChange}
          className="w-full p-2 border rounded text-gray-700 focus:outline-none focus:shadow-outline"
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded text-gray-700 focus:outline-none focus:shadow-outline"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border rounded text-gray-700 focus:outline-none focus:shadow-outline resize-none text-xs"
          rows="3"
        />
        <input
          type="file"
          name="imageUrl"
          onChange={handleChange}
          className="block w-full"
        />
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Update Home
        </button>
      </div>
    </form>
  );
  
  export default HomeForm;
  