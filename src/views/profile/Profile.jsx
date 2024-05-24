import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserDetail } from "../../redux/actions/index";
import UserLayout from "./UserLayout";

const Profile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const userDetail = useSelector((state) => state.userDetail);

  useEffect(() => {
    dispatch(getUserDetail(id));
  }, [dispatch, id]);

  return (
    <UserLayout className=" relative top-0">
      <div className="flex h-screen absolute top-0">
        <div className="flex-1 bg-white pt-28 px-10 border border-gray-200 mb-4 lg:mb-0 shadow-md overflow-y-auto">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
            similique, exercitationem numquam recusandae, libero repellendus
            modi hic beatae necessitatibus velit minima soluta iure debitis
            dolorem id et! Ratione, error quae.
          </p>
        </div>
      </div>
    </UserLayout>
  );
};

export default Profile;