// dummy api call

export const dummyApiCall = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("dummy data");
    }, 1000);
  });
};
