import { Button, Modal, Segmented } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Ordnary from "./Ordinary";
import Vaucher from "./Vaucher";
import { switchAddModalVisibility } from "../../../../../redux/modalSlice";
const contentGenerator = (value) => {
  switch (value) {
    case "Ordinary":
      return <Ordnary />;
    case "Vaucher":
      return <Vaucher />;
    default:
      return <Ordnary />;
  }
};
function AddModal() {
  const dispatch = useDispatch();
  const [segmentedValue, setSegmentedValue] = useState("Ordinary");
  const { addModalVisibility } = useSelector((state) => state.modal);
  const hideModal = () => {
    dispatch(switchAddModalVisibility());
  };
  return (
    <Modal
      onOk={hideModal}
      onCancel={hideModal}
      title="Add User"
      open={addModalVisibility}
      footer={null}
    >
      <Segmented
        onChange={(e) => setSegmentedValue(e)}
        block
        options={["Ordinary", "Vaucher"]}
      ></Segmented>
      {contentGenerator(segmentedValue)}
    </Modal>
  );
}

export default AddModal;
