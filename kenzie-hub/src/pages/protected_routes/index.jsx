import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { userContext } from "../../contexts/userContexs";

export const ProtectedRoutes = () => {
  const navigate = useNavigate();
  const { user } = useContext(userContext);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  });

  return <>{user ? <Outlet /> : null}</>;
};
