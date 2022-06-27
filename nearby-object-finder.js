// find the nearest object from an array according to the user's lat long
const nearestIndex = (lat, long, arr) => {
    let nearestIndex = 0;
    let minDistance = Infinity;
    for (let i = 0; i < arr.length; i++) {
      const distance = getDistance(lat, long, arr[i].lat, arr[i].long);
      if (distance < minDistance) {
        minDistance = distance;
        nearestIndex = arr[i];
      }
    }
    return nearestIndex;
  };
  
  // Distance calculation
  const getDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1); // deg2rad below
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return d;
  };
  
  // Deg conversion
  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };
  
  // User's location
  const lat = 31.442907;
  const long = 74.271519;
  
  // Array of locations
  const arr = [
    {
      name: "Kudos",
      lat: 31.460443680085763,
      long: 74.26974289747655,
    },
    {
      name: "Dr Hospital",
      lat: 31.480616187193373,
      long: 74.28008468009904,
    },
    {
      name: "Steak Studio",
      lat: 31.446620698317826,
      long: 74.2704643576623,
    },
  ];
  
  // Testing
  console.log(nearestIndex(lat, long, arr));
  