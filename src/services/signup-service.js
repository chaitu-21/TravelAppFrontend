import axios from "axios";

export const signupHandler = async (username, number, email, password, setAlert) => {
  try {
    const data = await axios.post(
      "https://travelappbackend-bb0q.onrender.com/api/auth/register",
      {
        username: username,
        number: number,
        email: email,
        password: password,
      }
    );
    console.log("Signed Up");
    console.log(data);
    setAlert({
      open: true,
      message: `Account Created:: username - ${username}`,//9146127248
      type: "success"
    })
  } catch (err) {
    console.log("error adding user to database");
  }
};
