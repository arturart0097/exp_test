import styled from "styled-components";

export const InfoStyle = styled.div`
  max-width: 30%;
  min-width: 330px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ProductInfoStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 15px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;
  color: #ddd6cb;
  background: linear-gradient(90deg, #1f1d1d, #151515);
  padding: 10px;

  img {
    max-width: 100%;
    height: auto;
  }
`;

export const BackStyle = styled.div`
  display: flex;
  justify-content: space-between;
`;
