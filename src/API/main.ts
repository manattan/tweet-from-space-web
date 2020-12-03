import Axios from "axios";
import firebase from "../auth/Firebase";

const baseURL = "http://localhost:8000/api";
const Auth = firebase.auth();

const instance = (token: string) => {
  return Axios.create({
    baseURL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getISSLocation = async () => {
  const res = await Axios.get(`${baseURL}/locations`);
  return res.data;
};

export const sendDirectMessage = async (message: any) => {
  console.log(message)
  const token = await Auth.currentUser?.getIdToken();
  if (token) {
    const res = await instance(token).post('/messages', message);
    return res;
  }
  console.log("tokenがありません");
  return;
};
