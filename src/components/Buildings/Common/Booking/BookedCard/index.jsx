import { Card, Descriptions, Dropdown } from "antd";
import React from "react";
import { EllipsisOutlined } from "@ant-design/icons";
import { ButtonMore } from "./style";
import useDropDownAPI from "../../../../../Generic/DropDownAPI";

import { useQueryHandler } from "../../../../../hooks/useQuery";
import dayjs from "dayjs";

function BookedCard({ id }) {
  const { data, isLoading } = useQueryHandler({
    queryKey: `bookeduser/${id}`,
    queryLink: `/accomodation/2/booked-user?_id=${id}`,
  });
  console.log("data", data);
  const { bookingDropDown } = useDropDownAPI();
  const items = bookingDropDown();

  return (
    <Card
      loading={isLoading}
      style={{ marginTop: "20px" }}
      title={data?.fullName}
      extra={
        <ButtonMore>
          <Dropdown trigger={["click"]} menu={{ items }}>
            <EllipsisOutlined />
          </Dropdown>
        </ButtonMore>
      }
    >
      <Descriptions layout="vertical" column={2}>
        <Descriptions.Item label="Start date">
          {dayjs(data?.arrivalDate * 1).format("YYYY-MM-DD")}
        </Descriptions.Item>
        <Descriptions.Item label="End date">
          {dayjs(data?.endDate * 1).format("YYYY-MM-DD")}
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
}

export default BookedCard;
