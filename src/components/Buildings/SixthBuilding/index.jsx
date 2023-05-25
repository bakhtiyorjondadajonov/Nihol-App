

import { Spin } from 'antd';
import { Wrapper } from './style';
import { Title } from '../../../Generic/Style/style';


import Mapping from './Mapping';
import { useQueryHandler } from '../../../hooks/useQuery';
function SixthBuilding() {
    
    const {isLoading}=useQueryHandler({queryKey:"accomodation/6",queryLink:"/accomodation/6/room"})
 
    
   
   
 
  return (
    <Wrapper>
        <Title>6 Building</Title>
  {isLoading?<Spin/>:<Mapping/>}
    </Wrapper>
  )
}

export default SixthBuilding
