import React from "react";
import { Room } from "../../../../Generic/Style/style";
import { Modal } from "antd";
import AddModal from "./Add";
import { useDispatch } from "react-redux";
import {
  switchAddBookingModalVisibility,
  switchAddModalVisibility,
} from "../../../../redux/modalSlice";
import { setBuildingMutation } from "../../../../redux/userSlice";

const { confirm } = Modal;
function EmptyRoom({ clienteValue, roomValue }) {
  const dispatch = useDispatch();
  const openAddBookingModal = () => {
    dispatch(switchAddBookingModalVisibility());
  };
  const openAddModal = () => {
    dispatch(switchAddModalVisibility());
  };

  const onWarning = () => {
    return confirm({
      title: "Empty Places",
      content:
        "This place is empty. Click the «Add» button to add a new user. Or click to the «Book» button to book this place.",
      okText: "Add",
      cancelText: "Book",
      onCancel: openAddBookingModal,
      onOk: openAddModal,
      closable: true,
    });
  };
  const roomClickHandler = () => {
    dispatch(
      setBuildingMutation({ clienteValue, roomValue, buildingNumber: 2 })
    );
    onWarning();
  };

  return (
    <>
      {" "}
      <Room onClick={roomClickHandler} color="green"></Room>
    </>
  );
}

export default EmptyRoom;
