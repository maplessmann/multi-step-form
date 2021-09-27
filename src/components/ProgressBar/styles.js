import styled from 'styled-components'

export const Bar = styled.div`
  width: 100%;
  height: 8px;
  background: var(--color-bg-secondary);
  position: relative;
  overflow-x: hidden;
  border-radius: 10px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: var(--color-primary);
    border-radius: 0 10px 10px 0;
    transition: transform 0.3s ease;
    transform: ${(props) => `translateX(-${100 - ~~props.filled}%)`};
    transform-origin: left;
  }
`
