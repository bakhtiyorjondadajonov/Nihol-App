import React, { useEffect } from "react";
import Wrapper from "./style";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import EmptyUI from "../../Booking/EmptyUI";
import { useQueryClient } from "react-query";
import { Button } from "antd";

function Observing() {
  const queryClient = useQueryClient();
  const { selectedUser, isRoomBooked } = useSelector((state) => state.userData);
  const userData = queryClient.getQueryData(`user/${selectedUser._id}`);
  return !isRoomBooked ? (
    <Wrapper>
      <Wrapper.InfoWrap>
        <Wrapper.InfoWrap.Key>Full Name</Wrapper.InfoWrap.Key>
        <Wrapper.InfoWrap.Value>{userData?.fullName}</Wrapper.InfoWrap.Value>
      </Wrapper.InfoWrap>
      <Wrapper.InfoWrap>
        <Wrapper.InfoWrap.Key>Birth Date</Wrapper.InfoWrap.Key>
        <Wrapper.InfoWrap.Value>
          {dayjs(userData?.birthday).format("DD/MM/YYYY")}
        </Wrapper.InfoWrap.Value>
      </Wrapper.InfoWrap>
      <Wrapper.InfoWrap>
        <Wrapper.InfoWrap.Key>Passport Number</Wrapper.InfoWrap.Key>
        <Wrapper.InfoWrap.Value>{userData?.passportID}</Wrapper.InfoWrap.Value>
      </Wrapper.InfoWrap>
      <Wrapper.InfoWrap>
        <Wrapper.InfoWrap.Key>Phone Number</Wrapper.InfoWrap.Key>
        <Wrapper.InfoWrap.Value>{userData?.phoneNumber}</Wrapper.InfoWrap.Value>
      </Wrapper.InfoWrap>
      <Wrapper.InfoWrap>
        <Wrapper.InfoWrap.Key>Address</Wrapper.InfoWrap.Key>
        <Wrapper.InfoWrap.Value>{userData?.address}</Wrapper.InfoWrap.Value>
      </Wrapper.InfoWrap>
      <Wrapper.InfoWrap>
        <Wrapper.InfoWrap.Key>Arrival Date</Wrapper.InfoWrap.Key>
        <Wrapper.InfoWrap.Value>
          {dayjs(userData?.arrivalDate).format("DD/MM/YYYY")}
        </Wrapper.InfoWrap.Value>
      </Wrapper.InfoWrap>
      <Wrapper.InfoWrap>
        <Wrapper.InfoWrap.Key>End Date</Wrapper.InfoWrap.Key>
        <Wrapper.InfoWrap.Value>
          {dayjs(userData?.endDate).format("DD/MM/YYYY")}
        </Wrapper.InfoWrap.Value>
      </Wrapper.InfoWrap>
      <Wrapper.InfoWrap>
        <Wrapper.InfoWrap.Key>Remaining Days</Wrapper.InfoWrap.Key>
        <Wrapper.InfoWrap.Value>
          {(userData?.endDate - userData?.arrivalDate) / 1000 / 60 / 60 / 24}
        </Wrapper.InfoWrap.Value>
      </Wrapper.InfoWrap>
      <Wrapper.InfoWrap>
        <Wrapper.InfoWrap.Key>Daily Price</Wrapper.InfoWrap.Key>
        <Wrapper.InfoWrap.Value>100</Wrapper.InfoWrap.Value>
      </Wrapper.InfoWrap>
      <Wrapper.InfoWrap>
        <Wrapper.InfoWrap.Key>Total Price</Wrapper.InfoWrap.Key>
        <Wrapper.InfoWrap.Value>{userData?.total}</Wrapper.InfoWrap.Value>
      </Wrapper.InfoWrap>
      <Wrapper.InfoWrap>
        <Wrapper.InfoWrap.Key>Vaucher Status</Wrapper.InfoWrap.Key>
        <Wrapper.InfoWrap.Value>Without vaucher</Wrapper.InfoWrap.Value>
      </Wrapper.InfoWrap>
      <Wrapper.InfoWrap>
        <Wrapper.InfoWrap.Key>Payment by Cash</Wrapper.InfoWrap.Key>
        <Wrapper.InfoWrap.Value>{userData?.paidByCash}</Wrapper.InfoWrap.Value>
      </Wrapper.InfoWrap>
      <Wrapper.InfoWrap>
        <Wrapper.InfoWrap.Key>Payment by Card</Wrapper.InfoWrap.Key>
        <Wrapper.InfoWrap.Value>
          {userData?.paidByPlasticCard}
        </Wrapper.InfoWrap.Value>
      </Wrapper.InfoWrap>
      <Wrapper.InfoWrap>
        <Wrapper.InfoWrap.Key>Payment diffrence</Wrapper.InfoWrap.Key>
        <Wrapper.InfoWrap.Value>-1000</Wrapper.InfoWrap.Value>
      </Wrapper.InfoWrap>
      <Wrapper.InfoWrap>
        <Wrapper.InfoWrap.Key>Building Number</Wrapper.InfoWrap.Key>
        <Wrapper.InfoWrap.Value>
          {userData?.buildingNumber}
        </Wrapper.InfoWrap.Value>
      </Wrapper.InfoWrap>
      <Wrapper.InfoWrap>
        <Wrapper.InfoWrap.Key>Room Number</Wrapper.InfoWrap.Key>
        <Wrapper.InfoWrap.Value>{userData?.roomNumber}</Wrapper.InfoWrap.Value>
      </Wrapper.InfoWrap>
      <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}>
        <Button type="default">Cancel</Button>
        <Button type="primary">Move</Button>
        <Button danger type="primary">
          Delete
        </Button>
      </div>
    </Wrapper>
  ) : (
    <EmptyUI />
  );
}

export default Observing;
