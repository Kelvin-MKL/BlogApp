import http from "../services/httpService";

const login = (user) => {
  return http
    .post("http://localhost:5000/auth/login", user)
    .then((response) => {
      if (response.data.Error == null) {
        localStorage.setItem("token", JSON.stringify(response.data));
      }
      //return response.data;
      return (window.location = "/");
    });
};
const logout = () => {
  localStorage.removeItem("token");
  return (window.location = "/");
};
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("token"));
};

const getTokenHeader = () => {
  const token = getCurrentUser().token;
  const authHeader = { headers: { Authorization: `Bearer ${token}` } };
  return authHeader;
};

const AuthService = {
  login,
  logout,
  getCurrentUser,
  getTokenHeader,
};
export default AuthService;
