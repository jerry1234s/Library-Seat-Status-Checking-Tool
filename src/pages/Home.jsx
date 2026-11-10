import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen p-6">

      <h1 className="text-4xl font-bold mb-4">
        CityU Library Space Finder
      </h1>

      <p className="mb-8">
        Find suitable library spaces before travelling.
      </p>

      <div className="grid gap-4">

        <button
          onClick={() => navigate("/availability")}
          className="bg-blue-600 text-white p-4 rounded-xl"
        >
          Find Spaces
        </button>

      </div>

    </div>
  );
}

export default Home;
