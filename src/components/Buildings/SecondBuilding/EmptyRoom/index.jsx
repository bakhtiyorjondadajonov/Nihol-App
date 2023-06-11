import React from "react";
import { Room } from "../../../../Generic/Style/style";
import { Modal } from "antd";
import AddModal from "./Add";
import { useDispatch } from "react-redux";
import {
  switchAddBookingModalVisibility,
  switchAddModalVisibility,
} from "../../../../redux/modalSlice";

const { confirm } = Modal;
function EmptyRoom() {
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
      closable: true,
      onOk: openAddModal,
      onCancel: openAddBookingModal,
    });
  };

  return (
    <>
      {" "}
      <Room onClick={onWarning} color="green">
        ER
      </Room>
    </>
  );
}

export default EmptyRoom;
