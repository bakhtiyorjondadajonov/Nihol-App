

import { Spin } from 'antd';
import { Wrapper } from './style';
import { Title } from '../../../Generic/Style/style';


import Mapping from './Mapping';
import { useQueryHandler } from '../../../hooks/useQuery';
function FourthBuilding() {
    
    const {isLoading}=useQueryHandler({queryKey:"accomodation/4",queryLink:"/accomodation/4/room"})
 
    
   
   
 
  return (
    <Wrapper>
        <Title>4 Building</Title>
  {isLoading?<Spin/>:<Mapping/>}
    </Wrapper>
  )
}

export default FourthBuilding
