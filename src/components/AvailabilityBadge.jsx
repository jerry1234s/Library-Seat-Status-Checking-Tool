function AvailabilityBadge({ occupancy }) {

  let color = "bg-green-500";
  let text = "Available";

  if (occupancy >= 80) {
    color = "bg-red-500";
    text = "Nearly Full";
  }
  else if (occupancy >= 60) {
    color = "bg-yellow-500";
    text = "Busy";
  }

  return (
    <span
      className={`${color} text-white px-3 py-1 rounded-full text-sm`}
    >
      {text}
    </span>
  );
}

export default AvailabilityBadge;
