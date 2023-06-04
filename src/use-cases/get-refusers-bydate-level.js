import server from "../config/server";

export const getRefUsersByPrevioudayAndLevel = (level) =>
  server.get(
    process.env.REACT_APP_API_BASE_URL + "/users/getCountUserLevelBydate/"+level);
