import styled from 'styled-components';

const GroupContainer = styled.div`
  border: 1px solid #ededed;
  border-radius: 0.5rem;
  padding: 3rem 1rem 1rem;
  position: relative;
`;

export const Legend = styled.div`
  display: block;
  position: absolute;
  top: 1rem;
`;

const CbContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Group1 = () => {
  return (
    <GroupContainer>
      <Legend>Välj din favorit</Legend>
      <CbContainer>
        <input type="radio" />
        <label>Old Fashioned</label>
      </CbContainer>
      <CbContainer>
        <input type="radio" />
        <label>Aviation</label>
      </CbContainer>
      <CbContainer>
        <input type="radio" />
        <label>Mai Tai</label>
      </CbContainer>
      <CbContainer>
        <input type="radio" />
        <label>Last Word</label>
      </CbContainer>
    </GroupContainer>
  );
};
