import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllOrders } from "../redux/actions/index";

const useOrderShipment = () => {
  const allOrders = useSelector((state) => state.allOrders);

  useEffect(() => {
    getAllOrders();
  }, []);

  return { allOrders };
};

export default useOrderShipment;
