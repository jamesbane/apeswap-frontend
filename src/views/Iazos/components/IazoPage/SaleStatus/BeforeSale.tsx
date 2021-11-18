import React from 'react'
import styled from 'styled-components'
import { Text } from '@apeswapfinance/uikit'
import { IazoStatus, IazoTimeInfo, IazoTokenInfo } from 'state/types'
import { getBalanceNumber } from 'utils/formatBalance'
import BigNumber from 'bignumber.js'
import Timer from '../../IazoCard/Timer'

interface BeforeSaleProps {
  timeInfo: IazoTimeInfo
  status: IazoStatus
}

const BeforeSaleWrapper = styled.div`
  padding-top: 20px;
  width: 796px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Heading = styled(Text)`
  font-family: Poppins;
  font-weight: 700;
  font-size: 30px;
`

const BeforeSale: React.FC<BeforeSaleProps> = ({ timeInfo, status }) => {
  return (
    <BeforeSaleWrapper>
      <Timer fontSize="24px" timeInfo={timeInfo} />
    </BeforeSaleWrapper>
  )
}

export default BeforeSale