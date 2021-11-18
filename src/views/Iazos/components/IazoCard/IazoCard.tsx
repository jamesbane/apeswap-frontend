import React from 'react'
import styled from 'styled-components'
import { Text } from '@apeswapfinance/uikit'
import { Iazo } from 'state/types'
import { getBalanceNumber } from 'utils/formatBalance'
import BigNumber from 'bignumber.js'
import Timer from './Timer'

interface iazoCardProps {
  iazo: Iazo
}

const IazoCardWrapper = styled.div`
  position: relative;
  height: 286px;
  width: 796px;
  border-radius: 10px;
  margin-top: 12.5px;
  margin-bottom: 12.5px;
  background: ${(props) => (props.theme.isDark ? '#333333' : 'rgba(240, 240, 240, 1)')};
  cursor: pointer;
`

const CardMonkey = styled.div`
  position: absolute;
  height: 286px;
  width: 796px;
  overflow: hidden;
  background: ${(props) =>
    props.theme.isDark
      ? 'url(images/card-ape.svg) no-repeat 425px 110px'
      : 'url(images/card-ape-light.svg) no-repeat 425px 110px'};
  opacity: 0.2;
`

const CardWrapperTemplate = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 35px;
  padding-right: 35px;
`

const HeadingWrapper = styled(CardWrapperTemplate)`
  height: 110px;
  width: 796px;
  border-radius: 10px 10px 0px 0px;
  background: ${(props) => (props.theme.isDark ? '#414141' : 'rgba(161, 101, 82, 1)')};
`

const TopBodyWrapper = styled(CardWrapperTemplate)`
  width: 796px;
  height: 80px;
`

const BottomBodyWrapper = styled(CardWrapperTemplate)`
  width: 796px;
  height: 96px;
  flex-direction: column;
  justify-content: center;
  border-radius: 0px 0px 10px 10px;
`

const TokenHeaderInformationWrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`

const TextBoxWrapper = styled.div<{ align?: string; justify?: string; padding?: string }>`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: ${(props) => props.justify || 'center'};
  align-items: ${(props) => props.align || 'center'};
  padding-bottom: ${(props) => props.padding};
`

const TokenImage = styled.img`
  border-radius: 50%;
  width: 35px;
  height: 35px;
`

const TokenName = styled(Text)`
  font-size: 24px;
  padding-left: 15px;
  font-family: Poppins;
  font-weight: 700;
`

const BoldAfterText = styled(Text)<{ boldContent?: string }>`
  font-family: poppins;
  font-weight: 400;
  &:after {
    font-weight: 700;
    font-size: 17px;
    content: '${(props) => props.boldContent}';
  }
`

const ProgressBar = styled.div`
  height: 8px;
  width: 100%;
  border-radius: 20px;
  background: #c4c4c4;
  margin-bottom: 15px;
`

const Progress = styled(ProgressBar)<{ percentComplete: string }>`
  width: ${(props) => props.percentComplete};
  background: linear-gradient(53.53deg, #a16552 15.88%, #e1b242 92.56%);
`

const IazoCard: React.FC<iazoCardProps> = ({ iazo }) => {
  const { maxSpendPerBuyer, baseToken, iazoToken, timeInfo, status, hardcap, softcap, liquidityPercent } = iazo
  const maxSpend = getBalanceNumber(new BigNumber(maxSpendPerBuyer)).toString()
  const totalRaiseFormated = getBalanceNumber(new BigNumber(status.totalBaseCollected), parseInt(baseToken.decimals))
  const hardcapFormated = getBalanceNumber(new BigNumber(hardcap), parseInt(baseToken.decimals))
  const softcapFormated = getBalanceNumber(new BigNumber(softcap), parseInt(baseToken.decimals))
  const percentRaised = (totalRaiseFormated / hardcapFormated) * 100
  const liqudiityLock = parseInt(liquidityPercent) / 10

  return (
    <IazoCardWrapper>
      <CardMonkey />
      <HeadingWrapper>
        <TokenHeaderInformationWrapper>
          <TokenImage src="images/tokens/BANANA.svg" />
          <TokenName color="white"> {iazoToken.symbol}</TokenName>
        </TokenHeaderInformationWrapper>
        <TextBoxWrapper align="flex-end">
          <Timer timeInfo={timeInfo} />
          <BoldAfterText color="white">Duration 5d</BoldAfterText>
        </TextBoxWrapper>
      </HeadingWrapper>
      <TopBodyWrapper>
        <TextBoxWrapper align="flex-start">
          <BoldAfterText boldContent={`${baseToken.symbol} / ${iazoToken.symbol}`} />
          <BoldAfterText boldContent={`${liqudiityLock}%`}>Liquidity Lock: </BoldAfterText>
        </TextBoxWrapper>
        <TextBoxWrapper justify="flex-end" padding="15px">
          <BoldAfterText boldContent={`${maxSpend} ${baseToken.symbol}`}>Max Spend </BoldAfterText>
        </TextBoxWrapper>
        <TextBoxWrapper align="flex-end">
          <BoldAfterText>11 Months Lock</BoldAfterText>
          <BoldAfterText boldContent={`${softcapFormated} ${baseToken.symbol}`}>Soft Cap: </BoldAfterText>
        </TextBoxWrapper>
      </TopBodyWrapper>
      <BottomBodyWrapper>
        <ProgressBar>
          <Progress percentComplete={`${percentRaised}%`} />
        </ProgressBar>
        <BoldAfterText boldContent={`${totalRaiseFormated} / ${hardcapFormated} ${baseToken.symbol}`} />
      </BottomBodyWrapper>
    </IazoCardWrapper>
  )
}

export default IazoCard