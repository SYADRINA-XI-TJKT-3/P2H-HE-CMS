import axios from "axios";
import { forgotpassword } from "./api/apiurls";

class Auth {
  async ForgotPassword(dataforgotpassword) {

    try {
      const headers = {
        "Content-Type": "application/json",
      };

      const bodyReq = {
        email: dataforgotpassword.email,
      };
         console.log("Respon dari server dummy:", bodyReq);

      // const result = await axios.post(forgotpassword, bodyReq, { headers });
      // return result.data;
    } catch (error) {
      console.error("Terjadi error saat kirim forgot password:", error.response?.data || error.massage);
    }
  }
}

export default new Auth();
