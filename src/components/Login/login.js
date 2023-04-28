import { notification } from "antd";
import axios from "axios";
export const LoginFn = async (logData, setLoading) => {
  try {
    const response = await axios({
      url: `${process.env.REACT_APP_MAIN_URL}/user/sign-in`,
      method: "POST",
      data: {
        phoneNumber: `+998${logData.phoneNumber}`,
        password: logData.password,
      },
    });
    notification.success({ message: "Succesfully logged in" });
    // ------- Now we got response from the API and we need to get the token and save it to local storage --------------
    const token = response.data.data.token;
    console.log(token);
    localStorage.setItem("token", token);
    setLoading(false);
  } catch (error) {
    setLoading(false);
    notification.error({
      message: "User not found!!",
      description: "the Phone number or the Password is wrong!",
    });
  }
};
