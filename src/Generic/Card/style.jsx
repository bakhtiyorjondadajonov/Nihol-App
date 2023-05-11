import styled from "styled-components";


export const Wrapper=styled.div`
    width: 250px;
    height: 250px;
    cursor: pointer;
    border-radius: 17px;
    background: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    gap: 20px;
    box-shadow: rgba(0, 0, 0, 0.25) 6px 6px 7px;

`
Wrapper.Title=styled.div`
  padding-top: 30px;
   
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: rgb(0, 0, 0);  
`
Wrapper.Image=styled.img`
    width: 133px;
    height: 192px;
    margin-bottom: 30px;

`