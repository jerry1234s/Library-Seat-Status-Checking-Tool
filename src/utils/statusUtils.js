export function getStatus(occupancy) {

  if (occupancy >= 80) {
    return {
      label: "Nearly Full",
      bg: "bg-red-500"
    };
  }

  if (occupancy >= 60) {
    return {
      label: "Busy",
      bg: "bg-yellow-500"
    };
  }

  return {
    label: "Available",
    bg: "bg-green-500"
  };

}
