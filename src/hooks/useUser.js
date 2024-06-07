import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllUsers } from "../redux/actions/index";

const useUser = () => {
  const allUsers = useSelector((state) => state.allUsers);

  useEffect(() => {
    getAllUsers();
  }, []);

  return { allUsers };
};

export default useUser;
