import axios from "axios";
// import { RegisterPage } from "../api/apiUrls";

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


      console.log("Data yang dikirim ke server:", bodyreq); // <- Ini harus muncul

    //   const result = await axios.post(RegisterPage, bodyreq, { headers: header }); // <- pakai await
    //   return result;
    } catch (error) {
      console.error("❌ Gagal Register:", error.response?.data || error.message);
    }
  }
}

export default new auth();

