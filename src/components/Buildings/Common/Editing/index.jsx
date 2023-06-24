import React, { useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import EmptyUI from "../Booking/EmptyUI";
import useAxios from "../../../../hooks/useAxios";
import { useUpdateUser } from "../../../../hooks/useQuery/useQueryActions";
import { switchUserModalVisibility } from "../../../../redux/modalSlice";
import { useQueryClient } from "react-query";
const { RangePicker } = DatePicker;
function Editing() {
  const queryClient = useQueryClient();

  const dispatch = useDispatch();
  const { mutate } = useUpdateUser();
  const axios = useAxios();
  const { selectedUser, isRoomBooked } = useSelector((state) => state.userData);
  const userData = queryClient.getQueryData(`user/${selectedUser._id}`);
  const hideModal = () => {
    dispatch(switchUserModalVisibility());
  };
  const submitHandler = (e) => {
    const updatedUser = {
      ...selectedUser,
      fullName: e.fullName,
      phoneNumber: e.phoneNumber,
      address: e.address,
      passportID: e?.passportID,
      birthDate: new Date(e.birthDate).getTime(),
      dayCost: 100,

      rangePicker: [dayjs(e.arrivalDate), dayjs(e.endDate)],
      paidByCash: e?.paidByCash,
      paidByPlasticCard: e?.paidByPlasticCard,
    };
    delete updatedUser.rangePicker;

    mutate({ body: updatedUser });
    // dispatch(switchUserModalVisibility());
  };
  return !isRoomBooked ? (
    <Form
      onFinish={submitHandler}
      initialValues={{
        fullName: userData.fullName,
        phoneNumber: userData.phoneNumber,
        address: userData.address,
        passportID: userData?.passportID,
        birthDate: dayjs(userData.birthDate),
        dayCost: 100,
        rangePicker: [dayjs(userData.arrivalDate), dayjs(userData.endDate)],
        paidByCash: userData?.paidByCash,
        paidByPlasticCard: userData?.paidByPlasticCard,
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
        name="paidByCash"
        rules={[
          {
            required: true,
            message: "This field is required",
          },
        ]}
        label="Pay by Cash"
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="paidByPlasticCard"
        rules={[
          {
            required: true,
            message: "This field is required",
          },
        ]}
        label="Pay by Card"
      >
        <Input />
      </Form.Item>
      <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}>
        <Button onClick={hideModal} type="default">
          Cancel
        </Button>
        <Button htmlType="submit" type="primary">
          Edit
        </Button>
      </div>
    </Form>
  ) : (
    <EmptyUI />
  );
}

export default Editing;
