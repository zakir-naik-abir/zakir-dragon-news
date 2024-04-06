import { useContext } from "react"
import { AuthContext } from "../Providers/AuthProvider"
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  const location = useLocation();
  console.log(location)

  if(loading){
    return <span className="loading loading-bars loading-lg flex justify-center items-center h-screen mx-auto"></span>;
  }
  if(user){
    return children;
  }
  return <Navigate to="/login" state={location.pathname}></Navigate>;
}

export default PrivateRoute;