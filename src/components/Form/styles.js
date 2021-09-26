import styled from 'styled-components'

export const Title = styled.h2`
  margin-top: 32px;
`

export const FieldsWrapper = styled.div`
  padding-top: 24px;
`

export const FormNavigation = styled.div`
  padding-top: 48px;
  display: flex;
  align-items: center;
  gap: 8px;

  > .button.secondary {
    flex-basis: 48px;
    flex-shrink: 0;
    padding-left: 10px;
    padding-right: 10px;

    > .icon {
      transform: rotate(180deg);
    }
  }
`
