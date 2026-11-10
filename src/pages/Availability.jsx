import { useNavigate } from "react-router-dom";
//Feature 1
function Availability() { 

  const navigate = useNavigate();

  const floors = [
    {
      floor: "2F",
      occupancy: 60,
      freeSeats: 15
    },

    {
      floor: "3F",
      occupancy: 45,
      freeSeats: 22
    }
  ];

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        Library Availability Overview
      </h1>

      {
        floors.map((floor) => (

          <div
            key={floor.floor}
            className="border rounded-xl p-4 mb-4"
          >
            <h2 className="font-bold text-lg">
              {floor.floor}
            </h2>

            <p>
              Occupancy: {floor.occupancy}%
            </p>

            <p>
              Free Seats: {floor.freeSeats}
            </p>

          </div>

        ))
      }

      <button
        onClick={() => navigate("/results")}
        className="bg-blue-600 text-white px-5 py-3 rounded-xl mt-4"
      >
        Explore Spaces
      </button>

    </div>
  );
}

export default Availability;
