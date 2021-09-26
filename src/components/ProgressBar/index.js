import { Bar } from './styles'

const ProgressBar = ({ percentage }) => {
  return (
    <Bar
      filled={percentage}
      role="progressbar"
      aria-valuemin={0}
      aria-valuenow={percentage}
      aria-valuemax={100}
      aria-valuetext={`${percentage}% complete`}
    />
  )
}

export default ProgressBar
