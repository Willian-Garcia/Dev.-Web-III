import styled from "styled-components";

export default function Title({children}:any){
    return <Sld>{children}</Sld>;
}

const Sld = styled.h4`
    width:100%;
    text-align:center;
`;