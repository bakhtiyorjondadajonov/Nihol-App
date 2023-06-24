import React, { useEffect, useState } from "react";
import { Room } from "../../../../Generic/Style/style";
import useAxios from "../../../../hooks/useAxios";
import { LoadingOutlined, InfoCircleOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { useQuery } from "react-query";
import { useQueryHandler } from "../../../../hooks/useQuery";
import { useDispatch } from "react-redux";
import { switchUserModalVisibility } from "../../../../redux/modalSlice";
import UserModal from "../../Common/UserModal";
import {
  getUserData,
  setBuildingMutation,
  setIsRoomBooked,
} from "../../../../redux/userSlice";
import { Tooltip } from "antd";

function OccupiedRoom({ userID, clienteValue, roomValue }) {
  const dispatch = useDispatch();

  const { isLoading, data } = useQueryHandler({
    queryKey: `user/${userID}`,
    queryLink: `/accomodation/2/user?_id=${userID}`,
  });

  const roomClickDetector = () => {
    if (!isLoading) {
      dispatch(setIsRoomBooked(false));
      dispatch(getUserData(data));
      dispatch(
        setBuildingMutation({ clienteValue, roomValue, buildingNumber: 2 })
      );
      dispatch(switchUserModalVisibility());
    }
  };

  const diffrence = dayjs(data?.endDate * 1).diff(new Date(new Date()), "d");
  return (
    <>
      <Room onClick={roomClickDetector} color="red">
        {isLoading ? <LoadingOutlined /> : diffrence}
        {clienteValue?.isBooked && (
          <Room.Info color="orange">
            <InfoCircleOutlined />
          </Room.Info>
        )}
        <Tooltip title="This place is booked" />
      </Room>
    </>
  );
}
export default OccupiedRoom;
