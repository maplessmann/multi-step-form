import styled from 'styled-components'

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column-reverse;

  :not(:first-child) {
    padding-top: 24px;
  }
`

export const Label = styled.label`
  padding-bottom: 8px;
  display: inline-block;
  font-size: var(--font-size-small);
`

export const Input = styled.input`
  display: block;
  width: 100%;
  height: 48px;
  padding-left: 16px;
  background-color: var(--color-bg-secondary);
  border: 1px solid var(--color-bg-secondary);
  border-radius: 10px;
  color: var(--color-text);
  font-size: 1rem;
  caret-color: var(--color-text);

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 1px var(--color-primary);

    + ${Label} {
      color: var(--color-primary);
    }
  }
`
