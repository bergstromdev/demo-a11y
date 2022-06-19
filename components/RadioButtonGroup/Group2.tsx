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
    <GroupContainer>
      <Legend>Välj din favorit</Legend>
      <label>
        <input name="favourite_cocktail" type="radio" />
        Old Fashioned
      </label>
      <label>
        <input name="favourite_cocktail" type="radio" />
        Aviation
      </label>
      <label>
        <input name="favourite_cocktail" type="radio" />
        Mai Tai
      </label>
      <label>
        <input name="favourite_cocktail" type="radio" />
        Last Word
      </label>
    </GroupContainer>
  );
};
