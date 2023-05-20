import styled from 'styled-components';

export const StyledForm = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 800px;
`;

export const StyledFormContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--size-2n);

  @media only screen and (min-width: 600px) {
    button[type='submit'] {
      align-self: flex-start;
    }
  }
`;
export const StyledFormRow = styled.div`
  display: grid;
  gap: var(--size-1);
  grid-template-columns: 1fr 1fr;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: var(--size-2n);
  }
`;

// export const StyledCheckboxContainer = styled.div`
//   display: grid;
//   gap: var(--size-1n);
//   grid-template-columns: 1fr;
//
// `;

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--size-2h);
  width: 100%;
`;

export const StyledInstructions = styled.p`
  text-align: center;
  font-size: 18px !important;
  padding-bottom: 20px;
  /* color: grey !important; */
`;
