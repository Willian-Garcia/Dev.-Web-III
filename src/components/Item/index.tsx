import styled from "styled-components";

export default function Item({get, children}:any){
    return <ItemSld onClick={get}>{children}</ItemSld>;
}

const ItemSld = styled.div`
    display:flex;
    cursor:pointer;
    font-size: 15px;
    margin: 5px 0px;

    &:hover{
        font-weight: bold;
    }
`;