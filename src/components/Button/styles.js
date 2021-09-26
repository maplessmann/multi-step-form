import styled from 'styled-components'

export const ButtonRoot = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 48px;
  padding: 10px 16px;
  background: var(--color-button-bg);
  border: 1px solid var(--color-primary);
  border-radius: 10px;
  color: var(--color-primary);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
  transition: background 0.3s ease;
  appearance: none;

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

  &.secondary {
    background: var(--color-bg-secondary);
    border: 1px solid var(--color-text-secondary);
    color: var(--color-text-secondary);

    &:hover {
      background: var(--color-bg-secondary);

      > .icon {
        transform: none;
      }
    }
  }
`
