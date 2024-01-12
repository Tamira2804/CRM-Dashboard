import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  margin: auto;
  border-radius: 12px;

  background-color: white;
  padding: 20px;
  z-index: 1000;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

export const Table = styled.table`
  display: flex;

  th {
    display: block;
    text-align: left;
    padding: 12px 8px;
  }

  td {
    display: block;
    text-align: left;
    padding: 12px 8px;
  }
`;

export const TableHeader = styled.th`
  color: var(--text-th);
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.14px;
`;

export const TableColumn = styled.td`
  width: inherit;
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.14px;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 84px;
    height: 29px;
    padding: 4px 12px;

    border-radius: 4px;
    border: 1px solid
      ${(props) =>
        props.$status ? "var(--text-active)" : "var(--text-inactive)"};
    color: ${(props) =>
      props.$status ? "var(--text-active)" : "var(--text-inactive)"};
    background-color: ${(props) =>
      props.$status ? "var(--bg-active)" : "var(--bg-inactive)"};
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.14px;
  }
`;
