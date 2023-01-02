export const getColumnCount = (cubeSize) => {
  if (typeof window !== "undefined") {
    return Math.floor(window.innerWidth / cubeSize);
  }
};

export const getRowCount = (cubeSize) => {
  if (typeof window !== "undefined") {
    return Math.floor(window.innerHeight / cubeSize);
  }
};
