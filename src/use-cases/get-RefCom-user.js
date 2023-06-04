import server from "../config/server";

export const getRefComUser = (userId) =>
  server.get(
    process.env.REACT_APP_API_BASE_URL + "/Assets/RefCom/" + userId
  );
