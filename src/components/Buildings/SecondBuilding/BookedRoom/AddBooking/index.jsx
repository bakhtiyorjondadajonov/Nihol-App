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
  const dispatch = useDispatch();
  const hideModal = () => {
    dispatch(switchAddBookingModalVisibility());
  };
  const { addBookingModalVisibility } = useSelector((state) => state.modal);
  return (
    <Modal
      title="Add Booking"
      onCancel={hideModal}
      open={addBookingModalVisibility}
    >
      <Form
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
          name="birthdate"
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
          <Input />
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
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default AddBooking;
