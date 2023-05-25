

import { Spin } from 'antd';
import { Wrapper } from './style';
import { Title } from '../../../Generic/Style/style';


import Mapping from './Mapping';
import { useQueryHandler } from '../../../hooks/useQuery';
function ThirdBuilding() {
    
    const {isLoading}=useQueryHandler({queryKey:"accomodation/3",queryLink:"/accomodation/3/room"})
 
    
   
   
 
  return (
    <Wrapper>
        <Title>3 Building</Title>
  {isLoading?<Spin/>:<Mapping/>}
    </Wrapper>
  )
}

export default ThirdBuilding
