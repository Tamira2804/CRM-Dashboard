import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 812px;
  background-color: var(--bg-primary);
  border-radius: 20px;
  padding: 30px 44px 40px 38px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const Title = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.22px;
`;

export const SubTitle = styled.p`
  color: #16c098;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.14px;
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  width: 216px;
  height: 38px;
  padding: 8px;
  border-radius: 10px;
  background-color: var(--bg-input);
  margin-right: 9px;
`;

export const Input = styled.input`
  width: 100%;
  background-color: inherit;
  border: none;
  outline: none;

  &::placeholder {
    color: var(--text-secondary);
  }
`;

export const Icon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: var(--text-secondary);
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th {
    padding: 12px 8px;
    text-align: left;
    border-bottom: 1px solid var(--gray);
  }

  td {
    padding: 24px 8px;
    text-align: left;
    border-bottom: 1px solid var(--gray);
  }
`;

export const TableColumn = styled.td`
  width: inherit;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
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

export const TableHeader = styled.th`
  color: var(--text-th);
  font-family: "Poppins", sans-serif;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

export const CounterText = styled.p`
  color: var(--text-secondary);

  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.14px;
`;
