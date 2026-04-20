// dummy api call

export const dummyApiCall = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("dummy data");
    }, 1000);
  });
};

// dummy get api call
export const dummyGetApiCall = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: "dummy data",
        status: 200,
        message: "success",
      });
    }, 1000);
  });
};
