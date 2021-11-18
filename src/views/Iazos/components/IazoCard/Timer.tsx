import React from 'react'
import styled from 'styled-components'
import { useCurrentTime } from 'hooks/useTimer'
import getTimePeriods from 'utils/getTimePeriods'
import { Text } from '@apeswapfinance/uikit'
import { IazoTimeInfo } from 'state/types'

const BoldAfterText = styled(Text)<{ boldContent?: string; fontSize?: string }>`
  font-family: poppins;
  font-weight: ${(props) => props.fontSize};
  color: white;
  &:after {
    font-weight: 700;
    font-size: ${(props) => props.fontSize || '17px'};
    content: '${(props) => props.boldContent}';
  }
`
interface TimerProps {
  timeInfo: IazoTimeInfo
  fontSize?: string
}

const formatCountdown = (countdown: any): string => {
  const formatHours = countdown.hours < 10 ? `0${countdown.hours}` : countdown.hours.toString()
  const formatMinutes = countdown.minutes < 10 ? `0${countdown.minutes}` : countdown.minutes.toString()
  const formatSeconds = countdown.seconds < 9 ? `0${countdown.seconds.toFixed(0)}` : countdown.seconds.toFixed(0)
  return `${formatHours}:${formatMinutes}:${formatSeconds}`
}

const Timer: React.FC<TimerProps> = ({ timeInfo, fontSize }) => {
  const { activeTime, startTime } = timeInfo
  const currentTime = useCurrentTime() / 1000
  const endTime = parseInt(activeTime) + parseInt(startTime)
  const timeUntilStart = parseInt(startTime) - currentTime
  const timeUntilEnd = endTime - currentTime
  const timeUntilStartFormatted = formatCountdown(getTimePeriods(timeUntilStart))
  const timeUntilEndFormatted = formatCountdown(getTimePeriods(timeUntilEnd))

  const timeToDisplay = () => {
    if (timeUntilStart > 0) {
      return (
        <BoldAfterText fontSize={fontSize} boldContent={timeUntilStartFormatted}>
          Starts in{' '}
        </BoldAfterText>
      )
    }
    if (timeUntilEnd > 0) {
      return (
        <BoldAfterText fontSize={fontSize} boldContent={timeUntilEndFormatted}>
          Ends in{' '}
        </BoldAfterText>
      )
    }
    return <BoldAfterText fontSize={fontSize} boldContent="Finished" />
  }
  return timeToDisplay()
}

export default Timer