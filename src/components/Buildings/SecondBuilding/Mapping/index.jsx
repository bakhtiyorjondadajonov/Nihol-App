import React from 'react'
import { MainRoomWrapper, Room, RoomContainer, RoomTitle, RoomWrapper, RoomsContainer } from '../../../../Generic/Style/style'
import OccupiedRoom from '../OccupiedRooms'
import { useQueryClient } from 'react-query'
import BookedRoom from '../BookedRoom';
import EmptyRoom from '../EmptyRoom';

function Mapping() {
    const queryClient=useQueryClient();
    const data=queryClient.getQueryData("accomodation/2");
   
  return (
    <MainRoomWrapper>
    <RoomsContainer>
   {data.data.data.map(({_id,roomNumber,cliente})=>(
    <RoomWrapper key={_id}>
        <RoomTitle>Room {roomNumber}</RoomTitle>
        
        <RoomContainer>
     {cliente?.map(({clienteID,isBooked,userID})=>(
       isBooked? <BookedRoom key={clienteID}/> :(userID? <OccupiedRoom key={clienteID+1234} userID={userID} />: <EmptyRoom key={clienteID+5}/>)
     ))}
   
        </RoomContainer>
    </RoomWrapper>

   ))}
    </RoomsContainer>
    </MainRoomWrapper>
  )
}

export default Mapping
