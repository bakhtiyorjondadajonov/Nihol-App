

import { Spin } from 'antd';
import { Wrapper } from './style';
import { Title } from '../../../Generic/Style/style';


import Mapping from './Mapping';
import { useQueryHandler } from '../../../hooks/useQuery';
function FifthBuilding() {
    
    const {isLoading}=useQueryHandler({queryKey:"accomodation/5",queryLink:"/accomodation/5/room"})
 
    
   
   
 
  return (
    <Wrapper>
        <Title>5 Building</Title>
  {isLoading?<Spin/>:<Mapping/>}
    </Wrapper>
  )
}

export default FifthBuilding
