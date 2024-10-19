import styled from "styled-components";

export const FilterWrapper = styled.div`
  width: 90%;
  min-height: 100px;
  background-color: #00000031;
  margin: 0 auto;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 15px;
`;

export const Wrap = styled.div`
  display: flex;
  gap: 15px;
`

export const SelectStyle = styled.select`
  width: 150px;
  padding: 7px;
  background: linear-gradient(90deg, #1f1d1d, #151515);
  border: 1px solid #ddd6cb;
  border-radius: 5px;
  color: #ddd6cb;
  cursor: pointer;

  &:focus {
    border: none;
  }

  option {
    background: #1f1d1d;
    color: #ddd6cb;
  }
`;

export const ButtonWrapperStyle = styled.div`
  display: flex;
  gap: 10px;
`;

export const InputStyle = styled.input`
  width: 150px;
  padding: 7px;
  background: linear-gradient(90deg, #1f1d1d, #151515);
  border: 1px solid #ddd6cb;
  border-radius: 5px;
  color: #ddd6cb;
  cursor: pointer;
`;
