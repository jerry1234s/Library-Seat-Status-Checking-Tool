import {
  getLastUpdated
} from "../utils/storageUtils";

import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  const lastUpdated =
    getLastUpdated();

  return (

    <div className="min-h-screen bg-gray-100">

      <div className="max-w-4xl mx-auto px-6 py-12">

        <h1 className="text-5xl font-bold text-center mb-4">
          CityU Library Space Finder
        </h1>

        <p className="text-center text-gray-600 mb-2">
          View space availability, discover suitable study
          areas, and locate powered spaces before travelling.
        </p>

        <p className="text-center text-gray-500 mb-10">

          Last Updated:

          {" "}

          {
            lastUpdated ||
            "Not Available"
          }

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
                "/results?types=Individual Study"
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
                "/results?types=Group Discussion"
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
                "/results?types=Relaxation"
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

        <div className="mt-12 border-t pt-8">

          <h2 className="text-xl font-bold mb-2">
            Prototype Demonstration Tools
          </h2>

          <p className="text-gray-600 mb-4">
            For demonstration purposes only.
            This tool simulates occupancy updates and
            is not connected to any actual library system.
            Changes are stored locally in the current browser
            using local storage and will persist only on
            this device unless the browser data is cleared.
          </p>

          <button
            className="
              bg-gray-800
              text-white
              px-6
              py-3
              rounded-xl
              hover:bg-black
            "
            onClick={() =>
              navigate("/simulator")
            }
          >
            Open Occupancy Editor
          </button>

        </div>

      </div>

    </div>

  );

}

export default Home;
