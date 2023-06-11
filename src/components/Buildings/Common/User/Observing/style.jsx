import styled from "styled-components";

const Wrapper=styled.div`
    margin-top: 20px;
`
 Wrapper.InfoWrap=styled.div`
 display: flex;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    -webkit-box-pack: justify;
    justify-content: space-between;
    border-bottom: 1px solid rgb(245, 245, 245);

`
 Wrapper.InfoWrap.Key=styled.div`
 padding: 8px;
    flex: 1 1 0%;
    text-align: start;
    font-size: 14px;
    line-height: 1.5714285714285714;
    word-wrap: break-word;
`
 Wrapper.InfoWrap.Value=styled.div`
 padding: 8px;
    flex: 1 1 0%;
    text-align: start;
    font-size: 14px;
    line-height: 1.5714285714285714;
    word-wrap: break-word;
`
export default Wrapper