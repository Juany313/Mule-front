import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  getAllEnlistments,
  setEnlistments,
  createOrder,
} from "../redux/actions/index";

const useEnlistment = () => {
  const allEnlistments = useSelector((state) => state.allEnlistments);

  useEffect(() => {
    getAllEnlistments();
  }, []);

  return { allEnlistments, setEnlistments, createOrder };
};

export default useEnlistment;
