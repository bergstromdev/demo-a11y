import styled from 'styled-components';

export const GroupContainer = styled.fieldset`
  border: 1px solid #ededed;
  border-radius: 0.5rem;
  padding: 3rem 1rem 1rem;
  position: relative;
  label {
    display: block;
  }
  input {
    margin-right: 1rem;
  }
`;

export const Legend = styled.legend`
  position: absolute;
  top: 1rem;
`;

export const Group2 = () => {
  return (
    <form>
      <GroupContainer>
        <Legend>Välj dina favoriter</Legend>
        <label>
          <input type="checkbox" />
          Old Fashioned
        </label>
        <label>
          <input type="checkbox" />
          Aviation
        </label>
        <label>
          <input type="checkbox" />
          Mai Tai
        </label>
        <label>
          <input type="checkbox" />
          Last Word
        </label>
      </GroupContainer>
    </form>
  );
};
