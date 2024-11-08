const Home = () => {
    return (
      <div className="max-w-4xl mx-auto">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Welcome to Vernier Caliper Simulator</h1>
          <p className="text-xl text-gray-600">
            An interactive tool for learning precision measurement
          </p>
        </section>
  
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Learn</h2>
            <p className="text-gray-600 mb-4">
              Start with our interactive tutorials to understand the basics of Vernier caliper measurements.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Start Tutorial
            </button>
          </div>
  
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Practice</h2>
            <p className="text-gray-600 mb-4">
              Test your knowledge with various measurement exercises at different difficulty levels.
            </p>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Start Practice
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;