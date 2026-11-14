export function getOccupancyPercentage(
  totalSeats,
  availableSeats
) {

  if (totalSeats <= 0) {
    return 0;
  }

  const occupiedSeats =
    totalSeats - availableSeats;

  return Math.round(
    (occupiedSeats / totalSeats) * 100
  );

}

export function getAvailabilityPercentage(
  totalSeats,
  availableSeats
) {

  if (totalSeats <= 0) {
    return 0;
  }

  return Math.round(
    (availableSeats / totalSeats) * 100
  );

}

export function getOccupiedSeats(
  totalSeats,
  availableSeats
) {

  return Math.max(
    0,
    totalSeats - availableSeats
  );

}

export function getStatus(
  totalSeats,
  availableSeats
) {

  const occupancy =
    getOccupancyPercentage(
      totalSeats,
      availableSeats
    );

  if (occupancy >= 80) {
    return {
      label: "Nearly Full",
      bg: "bg-red-500",
      occupancy
    };
  }

  if (occupancy >= 60) {
    return {
      label: "Busy",
      bg: "bg-yellow-500",
      occupancy
    };
  }

  return {
    label: "Available",
    bg: "bg-green-500",
    occupancy
  };

}
