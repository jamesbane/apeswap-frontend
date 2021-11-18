import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Text, Button } from '@apeswapfinance/uikit'

interface IazoSymbolProps {
  iconImage: 'monkey' | 'lock' | 'dollar' | 'twitter' | 'medium' | 'website' | 'whitepaper' | 'telegram'
}

const icons = {
  monkey: 'url(/images/monkey-icon.svg)',
  lock: 'url(/images/lock.svg)',
  dollar: 'url(/images/dollar.svg)',
  twitter: 'url(/images/twitter.svg)',
  medium: 'url(/images/medium.svg)',
  website: 'url(/images/website.svg)',
  whitepaper: 'url(/images/whitepaper.svg)',
  telegram: 'url(/images/telegram.svg)',
}

const circleAnimation = keyframes`
    0%{stroke-dasharray: 0, 100}
`

const OuterCircle = styled.circle`
  animation: ${circleAnimation} 2s;
`

const IazoSymbolSvg = styled.svg`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`

const SvgContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`

const Icon = styled.div<{ iconImage: string }>`
  position: absolute;
  background-image: ${(props) => icons[props.iconImage]};
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 45px;
  width: 45px;
  z-index: 2;
`

const IazoSymbols: React.FC<IazoSymbolProps> = ({ iconImage }) => {
  const strokeWidth = 1
  const cx = 7.5
  const cy = 7.5
  const r = 6
  return (
    <SvgContainer>
      <Icon iconImage={iconImage} />
      <IazoSymbolSvg viewBox="0 0 15 15">
        <circle cx={cx} cy={cy} r={r} fill="transparent" stroke="rgba(96, 96, 96, 1)" strokeWidth={strokeWidth} />
        <OuterCircle
          cx={cx}
          cy={cy}
          r={r}
          fill="transparent"
          stroke="rgba(255, 179, 0, 1)"
          strokeDasharray="38, 100"
          strokeWidth={strokeWidth}
          transform={`rotate(-90, ${cx}, ${cy})`}
        />
      </IazoSymbolSvg>
    </SvgContainer>
  )
}

export default IazoSymbols