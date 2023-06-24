import React from "react";
import EmptyUI from "./EmptyUI";
import { useSelector } from "react-redux";
import BookedCard from "./BookedCard";

function Booking() {
  const { selectedUser, isRoomBooked, buildingMutation } = useSelector(
    (state) => state.userData
  );
  const cellID = buildingMutation.clienteValue?.clienteID;
  const foundData = buildingMutation.roomValue?.bookedCliente?.find((value) => {
    return value.bookedClienteID === cellID;
  });
  console.log(cellID, "foundData", foundData);
  // console.log(selectedUser, isRoomBooked, buildingMutation);
  return (
    <div>
      {isRoomBooked ? (
        foundData.bookedClienteList.map((id) => {
          return <BookedCard id={id} key={id} />;
        })
      ) : (
        <EmptyUI />
      )}
    </div>
  );
}

export default Booking;
