import axios from "axios";
import { LoginPages } from "../api/apiUrls";

class auth {
  async LoginPages(dataLogin) {
    console.log("masuk ke fungsi LoginPages");
    try {
      const header = {
        "Content-type": "application/json",
      };

      const bodyReq = {
        username: dataLogin.email,
        password: dataLogin.password
      }
       
      // const result= axios.post('https://dummyjson.com/auth/login', bodyReq , {header})
      // return result
      console.log("Data dari user:", bodyReq);
    } catch (error) {
      console.error("Error:", error.response?.data || error.massage);

    }
  }
}

export default new auth();
