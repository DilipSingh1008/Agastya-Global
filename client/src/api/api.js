import axiosInstance from "./axiosInstance";

export const getData = async (endpoint, params = {}) => {
  try {
    const response = await axiosInstance.get(endpoint, { params });
    return response.data;
  } catch (error) {
    console.error("GET Error:", error);
    throw error;
  }
};

export const postData = async (endpoint, data) => {
  try {
    const response = await axiosInstance.post(endpoint, data);
    // console.log(response);
    return response.data;
  } catch (error) {
    console.error("POST Error:", error);
    throw error;
  }
};
