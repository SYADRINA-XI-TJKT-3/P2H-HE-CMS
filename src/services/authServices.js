import axios from "axios";
import { RegisterPage, LoginPages } from "../api/apiUrls.js";

class auth {
  async RegisterPage(dataRegister) {
    console.log("✅ Masuk ke fungsi RegisterPage");

    try {
      const header = {
        "Content-Type": "application/json",
      };

      const bodyreq = {
        email: dataRegister.email,
        password: dataRegister.password,
      };

      console.log("Data yang dikirim ke server:", bodyreq);

      // const result = await axios.post(RegisterPage, bodyreq, { headers: header });
      // return result;
    } catch (error) {
      console.error("❌ Gagal Register:", error.response?.data || error.message);
    }
  }

  async LoginPages(dataLogin) {
    console.log("✅ Masuk ke fungsi LoginPages");

    try {
      const header = {
        "Content-Type": "application/json",
      };

      const bodyReq = {
        username: dataLogin.email,
        password: dataLogin.password,
      };

      // const result = await axios.post(LoginPages, bodyReq, { headers: header });
      // return result;
      console.log("Data dari user:", bodyReq);
    } catch (error) {
      console.error("❌ Gagal Login:", error.response?.data || error.message);
    }
  }
}

export default new auth();

