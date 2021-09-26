import styled from 'styled-components'

export const ButtonRoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 48px;
  padding: 10px 16px;
  background: var(--color-button-bg);
  border: 1px solid var(--color-primary);
  border-radius: 10px;
  color: var(--color-primary);
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;

  > .icon {
    margin-right: -6px;
    transition: transform 0.3s ease;
  }

  &:hover {
    background: var(--color-button-hover-bg);

    > .icon {
      transform: translateX(4px);
    }
  }
`
