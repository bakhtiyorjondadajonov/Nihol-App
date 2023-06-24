import React from "react";
import { Room } from "../../../../Generic/Style/style";
import { useDispatch, useSelector } from "react-redux";
import { switchUserModalVisibility } from "../../../../redux/modalSlice";
import {
  setBuildingMutation,
  setIsRoomBooked,
} from "../../../../redux/userSlice";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
function BookedRoom({ isBooked, clienteValue, roomValue }) {
  const dispatch = useDispatch();

  const modalHandler = () => {
    dispatch(setIsRoomBooked(true));
    dispatch(
      setBuildingMutation({ clienteValue, roomValue, buildingNumber: 2 })
    );
    dispatch(switchUserModalVisibility());
  };
  return (
    <Room onClick={modalHandler} color="processing">
      <Tooltip title={"This"} />
      <Room.Info color="orange">
        <InfoCircleOutlined />
      </Room.Info>
    </Room>
  );
}

export default BookedRoom;
