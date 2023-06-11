import { Modal, Segmented } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Ordnary from "./Ordinary";
import Vaucher from "./Vaucher";
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
  const [segmentedValue, setSegmentedValue] = useState("Ordinary");
  const { addModalVisibility } = useSelector((state) => state.modal);

  return (
    <Modal title="Add User" open={addModalVisibility}>
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
