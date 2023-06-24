import React from "react";
import {
  MainRoomWrapper,
  Room,
  RoomContainer,
  RoomTitle,
  RoomWrapper,
  RoomsContainer,
  Title,
} from "../../../../Generic/Style/style";
import OccupiedRoom from "../OccupiedRooms";
import { useQueryClient } from "react-query";
import BookedRoom from "../BookedRoom";
import EmptyRoom from "../EmptyRoom";
import UserModal from "../../Common/UserModal";
import AddModal from "../EmptyRoom/Add";
import AddBooking from "../BookedRoom/AddBooking";

const StatusChecker = (clienteValue, roomValue) => {
  if (clienteValue.userID || (clienteValue.userID && clienteValue.isBooked)) {
    return (
      <OccupiedRoom
        key={clienteValue.clienteID + 1234}
        userID={clienteValue.userID}
        clienteValue={clienteValue}
        roomValue={roomValue}
      />
    );
  } else if (clienteValue.isBooked) {
    return (
      <BookedRoom
        isBooked={clienteValue.isBooked}
        clienteValue={clienteValue}
        key={clienteValue.clienteID}
        roomValue={roomValue}
      />
    );
  } else {
    return (
      <EmptyRoom
        roomValue={roomValue}
        clienteValue={clienteValue}
        key={clienteValue.clienteID + 5}
      />
    );
  }
};
function Mapping() {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData("accomodation/2");

  return (
    <MainRoomWrapper>
      <AddBooking />
      <AddModal />
      <UserModal content="Hiii" />
      <RoomsContainer>
        {data.map((roomValue) => (
          <RoomWrapper key={roomValue._id}>
            <RoomTitle>Room {roomValue.roomNumber}</RoomTitle>

            <RoomContainer>
              {roomValue.cliente?.map((clienteValue) =>
                StatusChecker(clienteValue, roomValue)
              )}
            </RoomContainer>
          </RoomWrapper>
        ))}
      </RoomsContainer>
    </MainRoomWrapper>
  );
}

export default Mapping;
