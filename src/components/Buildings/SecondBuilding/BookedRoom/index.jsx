import React from "react";
import { Room } from "../../../../Generic/Style/style";
import { useDispatch, useSelector } from "react-redux";
import { switchUserModalVisibility } from "../../../../redux/modalSlice";
import { setIsRoomBooked } from "../../../../redux/userSlice";

function BookedRoom({ isBooked }) {
  const dispatch = useDispatch();

  const modalHandler = () => {
    dispatch(setIsRoomBooked(true));
    dispatch(switchUserModalVisibility());
  };
  return (
    <Room onClick={modalHandler} color="processing">
      BR
    </Room>
  );
}

export default BookedRoom;
