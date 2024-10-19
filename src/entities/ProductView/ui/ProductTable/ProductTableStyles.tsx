import { Link } from "react-router-dom";
import styled from "styled-components";

export const WrapperProduct = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 10px;
  grid-area: auto;
  justify-content: center;
  background-color: #0000001a;
  padding: 15px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  width: 100%;
`;