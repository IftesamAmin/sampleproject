// dummy api call

export const dummyApiCall = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("dummy data");
    }, 1000);
  });
};

// dummy post api call
export const dummyPostApiCall = async (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("dummy data");
    }, 1000);
  });
};
