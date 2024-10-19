import styled from "styled-components";

export const ProductStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 15px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;
  color: #ddd6cb;
  background: linear-gradient(90deg, #1f1d1d, #151515);
  padding: 10px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    transform: translateY(-5px);
    background: linear-gradient(90deg, #2f2d2d, #252525);
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;
