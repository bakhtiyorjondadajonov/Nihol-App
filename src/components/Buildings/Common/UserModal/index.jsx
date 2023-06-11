import React, { useState } from "react";
import { Button, Modal, Segmented } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { switchUserModalVisibility } from "../../../../redux/modalSlice";
import Observing from "../User/Observing";
import Booking from "../Booking";
import Editing from "../Editing";
const contentGenerator = (value) => {
  switch (value) {
    case "Observing":
      return <Observing />;
    case "Booked Places":
      return <Booking />;
    case "Edit":
      return <Editing />;
    default:
      <Observing />;
  }
};
function UserModal({ content }) {
  const [segmentedValue, setSegmentedValue] = useState("Observing");
  const dispatch = useDispatch();
  const { userModalVisibility } = useSelector((state) => state.modal);
  const changeModalState = () => {
    dispatch(switchUserModalVisibility());
  };
  return (
    <Modal
      footer={null}
      open={userModalVisibility}
      onCancel={changeModalState}
      title="Information About User"
    >
      <Segmented
        onChange={(e) => setSegmentedValue(e)}
        default="Observing"
        block
        options={["Observing", "Booked Places", "Edit"]}
      />
      {contentGenerator(segmentedValue)}
    </Modal>
  );
}

export default UserModal;
