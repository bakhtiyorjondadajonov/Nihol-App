import React from "react";
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
  notification,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { switchAddModalVisibility } from "../../../../../../redux/modalSlice";
import { useAddUser } from "../../../../../../hooks/useQuery/useQueryActions";
const { RangePicker } = DatePicker;
function Vaucher() {
  const { buildingMutation } = useSelector((state) => state.userData);
  const { mutate } = useAddUser();
  const dispatch = useDispatch();
  const hideModal = () => {
    dispatch(switchAddModalVisibility());
  };
  const submitHandler = (e) => {
    const newUser = {
      ...e,
      birthDate: new Date(e.birthDate.$d).getTime(),
      arrivalDate: new Date(e.rangePicker[0].$d).getTime(),
      endDate: new Date(e.rangePicker[1].$d).getTime(),
      clienteID: buildingMutation.clienteValue.clienteID,
      hasVoucher: true,
      roomID: buildingMutation.roomValue._id,
      roomNumber: buildingMutation.roomValue.roomNumber,
      buildingNumber: buildingMutation.buildingNumber,
    };
    delete newUser.rangePicker;
    mutate({ body: newUser });
    notification.success({
      message: "Succesfully added",
    });
    hideModal();
  };
  return (
    <Form
      initialValues={{
        roomNumber: buildingMutation.roomValue.roomNumber,
        buildingNumber: buildingMutation.buildingNumber,
      }}
      onFinish={submitHandler}
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
        name="passportID"
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
        name="dayCost"
        rules={[
          {
            required: true,
            message: "This field is required",
          },
        ]}
        label="Daily Price"
      >
        <Input />
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
        name="vaucherCost"
        rules={[
          {
            required: true,
            message: "This field is required",
          },
        ]}
        label="Vaucher Cost"
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="vaucherNumber"
        rules={[
          {
            required: true,
            message: "This field is required",
          },
        ]}
        label="Vaucher Number"
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="workPlace"
        rules={[
          {
            required: true,
            message: "This field is required",
          },
        ]}
        label="Work place and position"
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="vaucherOrganization"
        rules={[
          {
            required: true,
            message: "This field is required",
          },
        ]}
        label="Vaucher given by (Organization...)"
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
      <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}>
        <Button onClick={hideModal} type="default">
          Cancel
        </Button>
        <Button htmlType="submit" type="primary">
          Add
        </Button>
      </div>
    </Form>
  );
}

export default Vaucher;
