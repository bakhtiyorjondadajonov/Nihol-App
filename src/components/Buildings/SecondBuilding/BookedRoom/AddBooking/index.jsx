import { Modal } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchAddBookingModalVisibility } from "../../../../../redux/modalSlice";
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
  message,
} from "antd";
const { RangePicker } = DatePicker;

function AddBooking() {
  const { buildingMutation } = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  const hideModal = () => {
    dispatch(switchAddBookingModalVisibility());
  };
  const { addBookingModalVisibility } = useSelector((state) => state.modal);
  const submitHandeler = (e) => {
    const bookedUser = {
      ...e,
      birthDate: new Date(e.birthDate.$d).getTime(),
      arrivalDate: new Date(e.rangePicker[0].$d).getTime(),
      endDate: new Date(e.rangePicker[1].$d).getTime(),
      clienteID: buildingMutation?.clienteValue?.clienteID,
      roomID: buildingMutation?.roomValue?._id,
      roomNumber: buildingMutation?.roomValue?.roomNumber,
      buildingNumber: buildingMutation?.buildingNumber,
    };
    delete bookedUser.rangePicker;
    console.log(bookedUser);
  };
  return (
    <Modal
      footer={null}
      title="Add Booking"
      onCancel={hideModal}
      open={addBookingModalVisibility}
    >
      <Form
        onFinish={submitHandeler}
        initialValues={{
          roomNumber: buildingMutation?.roomValue?.roomNumber,
          buildingNumber: buildingMutation?.buildingNumber,
        }}
        size="small"
        labelCol={{
          span: 15,
        }}
        wrapperCol={{
          span: 25,
        }}
        layout="vertical"
        style={{
          maxWidth: 1000,
        }}
      >
        <Form.Item
          name="fullName"
          rules={[
            {
              required: true,
              message: "This field is required",
            },
          ]}
          style={{ marginTop: "20px" }}
          label="Full Name"
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="address"
          rules={[
            {
              required: true,
              message: "This field is required",
            },
          ]}
          label="Address"
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="passportNumber"
          rules={[
            {
              required: true,
              message: "This field is required",
            },
          ]}
          label="Passport Number"
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="birthDate"
          rules={[
            {
              required: true,
              message: "This field is required",
            },
          ]}
          label="Birth date"
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          name="phoneNumber"
          rules={[
            {
              required: true,
              message: "This field is required",
            },
          ]}
          label="Phone Number"
        >
          <Input addonBefore="+998" />
        </Form.Item>

        <Form.Item
          name="rangePicker"
          rules={[
            {
              required: true,
              message: "This field is required",
            },
          ]}
          label="Date Range"
        >
          <RangePicker />
        </Form.Item>
        <Form.Item
          name="prePaid"
          rules={[
            {
              required: true,
              message: "This field is required",
            },
          ]}
          label="Pre Paid"
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="buildingNumber"
          rules={[
            {
              required: true,
              message: "This field is required",
            },
          ]}
          label="Building Number"
        >
          <Input disabled />
        </Form.Item>
        <Form.Item
          name="roomNumber"
          rules={[
            {
              required: true,
              message: "This field is required",
            },
          ]}
          label="Room Number"
        >
          <Input disabled />
        </Form.Item>
        <div
          style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}
        >
          <Button onClick={hideModal} type="default">
            Cancel
          </Button>
          <Button htmlType="submit" type="primary">
            Book
          </Button>
        </div>
      </Form>
    </Modal>
  );
}

export default AddBooking;
