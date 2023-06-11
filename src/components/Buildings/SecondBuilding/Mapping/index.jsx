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

const StatusChecker = ({ isBooked, clienteID, userID }) => {
  if (isBooked) {
    return <BookedRoom isBooked={isBooked} key={clienteID} />;
  } else if (userID) {
    return <OccupiedRoom key={clienteID + 1234} userID={userID} />;
  } else {
    return <EmptyRoom key={clienteID + 5} />;
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
        {data.map(({ _id, roomNumber, cliente }) => (
          <RoomWrapper key={_id}>
            <RoomTitle>Room {roomNumber}</RoomTitle>

            <RoomContainer>
              {cliente?.map(({ clienteID, isBooked, userID }) =>
                StatusChecker({ clienteID, isBooked, userID })
              )}
            </RoomContainer>
          </RoomWrapper>
        ))}
      </RoomsContainer>
    </MainRoomWrapper>
  );
}

export default Mapping;
