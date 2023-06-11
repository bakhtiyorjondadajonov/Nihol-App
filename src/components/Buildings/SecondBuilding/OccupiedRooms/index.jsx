import React, { useEffect, useState } from "react";
import { Room } from "../../../../Generic/Style/style";
import useAxios from "../../../../hooks/useAxios";
import { LoadingOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { useQuery } from "react-query";
import { useQueryHandler } from "../../../../hooks/useQuery";
import { useDispatch } from "react-redux";
import { switchUserModalVisibility } from "../../../../redux/modalSlice";
import UserModal from "../../Common/UserModal";
import { getUserData, setIsRoomBooked } from "../../../../redux/userSlice";

function OccupiedRoom({ userID }) {
  const dispatch = useDispatch();
  const { isLoading, data } = useQueryHandler({
    queryKey: `user/${userID}`,
    queryLink: `/accomodation/2/user?_id=${userID}`,
  });

  const roomClickDetector = () => {
    if (!isLoading) {
      dispatch(setIsRoomBooked(false));
      dispatch(getUserData(data));
      dispatch(switchUserModalVisibility());
    }
  };

  const diffrence = dayjs(data?.endDate * 1).diff(new Date(new Date()), "d");
  return (
    <>
      <Room onClick={roomClickDetector} color="red">
        {isLoading ? <LoadingOutlined /> : diffrence}
      </Room>
    </>
  );
}
export default OccupiedRoom;
