import React from 'react'
import { MainRoomWrapper, Room, RoomContainer, RoomTitle, RoomWrapper, RoomsContainer } from '../../../../Generic/Style/style'
import OccupiedRoom from '../OccupiedRooms'
import { useQueryClient } from 'react-query'
import BookedRoom from '../BookedRoom';
import EmptyRoom from '../EmptyRoom';


const StatusChecker=({isBooked,clienteID,userID})=>{
  if(isBooked){
    return <BookedRoom key={clienteID}/>
  }else if(userID){
    return <OccupiedRoom key={clienteID+1234} userID={userID} />
  }else {
    return <EmptyRoom key={clienteID+5}/>
  }

}
function Mapping() {
    const queryClient=useQueryClient();
    const data=queryClient.getQueryData("accomodation/3");
   
  return (
    <MainRoomWrapper>
    <RoomsContainer>
   {data.map(({_id,roomNumber,cliente})=>(
    <RoomWrapper key={_id}>
        <RoomTitle>Room {roomNumber}</RoomTitle>
        
        <RoomContainer>
     {cliente?.map(({clienteID,isBooked,userID})=>(
      StatusChecker({clienteID,isBooked,userID})
     ))}
   
        </RoomContainer>
    </RoomWrapper>

   ))}
    </RoomsContainer>
    </MainRoomWrapper>
  )
}

export default Mapping
