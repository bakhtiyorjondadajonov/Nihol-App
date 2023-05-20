

import { Spin } from 'antd';
import { Wrapper } from './style';
import { Title } from '../../../Generic/Style/style';


import Mapping from './Mapping';
import { useQueryHandler } from '../../../hooks/useQuery';
function SecondBuilding() {
    
    const {isLoading}=useQueryHandler({queryKey:"accomodation/2",queryLink:"/accomodation/2/room"})
 
    
   
   
 
  return (
    <Wrapper>
        <Title>2 Building</Title>
  {isLoading?<Spin/>:<Mapping/>}
    </Wrapper>
  )
}

export default SecondBuilding
