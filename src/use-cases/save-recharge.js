import server from "../config/server";

export const saveAsset = (user, amount, paymentType) =>
  server.post(
    process.env.REACT_APP_API_BASE_URL +
      "/Assets/" +
      paymentType +
      "/"+
      amount,
      user
  );
