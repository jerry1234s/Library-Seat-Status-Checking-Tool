import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">

      <div className="max-w-4xl mx-auto px-6 py-12">

        <h1 className="text-5xl font-bold text-center mb-4">
          CityU Library Space Finder
        </h1>

        <p className="text-center text-gray-600 mb-10">
          View space availability, discover suitable study
          areas, and locate powered spaces before travelling.
        </p>

        <div className="grid md:grid-cols-2 gap-4">

          <button
            className="
              bg-blue-600
              text-white
              p-6
              rounded-2xl
              hover:bg-blue-700
            "
            onClick={() =>
              navigate(
                "/results?type=Individual%20Study"
              )
            }
          >
            Individual Study
          </button>

          <button
            className="
              bg-green-600
              text-white
              p-6
              rounded-2xl
              hover:bg-green-700
            "
            onClick={() =>
              navigate(
                "/results?type=Group%20Discussion"
              )
            }
          >
            Group Discussion
          </button>

          <button
            className="
              bg-purple-600
              text-white
              p-6
              rounded-2xl
              hover:bg-purple-700
            "
            onClick={() =>
              navigate(
                "/results?type=Relaxation"
              )
            }
          >
            Relaxation
          </button>

          <button
            className="
              bg-orange-600
              text-white
              p-6
              rounded-2xl
              hover:bg-orange-700
            "
            onClick={() =>
              navigate("/availability")
            }
          >
            Browse All Spaces
          </button>

        </div>

      </div>

    </div>
  );
}

export default Home;
