import axios from "../../api/Axiosconfig";
import { loadusers } from "../reducers/userSlice";

export const asynccurrentuser = () => async (dispatch, getState) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    dispatch(loadusers(user));
  } else console.log("User not logged in!");
};

export const asynclogoutuser = () => async (dispatch, getState) => {
  try {
    localStorage.removeItem("user");
  } catch (error) {
    alert(error);
  }
};

export const asyncloginuser = (user) => async (dispatch, getState) => {
  try {
    const res = await axios.get(
      `/users?username=${user.username}&password=${user.password}`,
    );
    console.log(res);

    localStorage.setItem("user", JSON.stringify(res.data[0]));
  } catch (error) {
    alert(error);
  }
};

export const asyncregisteruser = (user) => async (dispatch, getState) => {
  try {
    const res = await axios.post("/users", user);

    console.log(res);
  } catch (error) {
    alert(error);
  }
};
