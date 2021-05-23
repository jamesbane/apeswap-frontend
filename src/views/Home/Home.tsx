import React from 'react'
import styled from 'styled-components'
import { BaseLayout } from '@apeswapfinance/uikit'
import Page from 'components/layout/Page'
import FarmStakingCard from 'views/Home/components/FarmStakingCard'
import BananaStats from 'views/Home/components/BananaStats'
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
import EarnAPYCard from 'views/Home/components/EarnAPYCard'
import Iframe from 'react-iframe'
import PromoCard from './components/PromoCard'
import WelcomeCard from './components/WelcomeCard'

const StyledIframe = styled(Iframe)`
  width: 100%;
  height: 860px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      height: 1200px;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      height: 860px;
    }
  }
`

export interface GridWidth {
  spanFirst?: number
  spanLast?: number
}

const Cards = styled(BaseLayout)<GridWidth>`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
      width: 100%;
    }
  }

  ${({ theme }) => theme.mediaQueries.md} {
    & > div {
      grid-column: span 12;
      width: 100%;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 7;
    }

    & > div:first-child {
      grid-column: ${({ spanFirst }) => (spanFirst ? `span ${spanFirst}` : 'span 5')};
    }

    & > div:last-child {
      grid-column: ${({ spanLast }) => (spanLast === 7 ? `span ${spanLast}` : 'span 12')};
    }
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    & > div {
      grid-column: span 4;
    }

    & > div:first-child {
      grid-column: ${({ spanFirst }) => (spanFirst ? `span ${spanFirst}` : 'span 5')};
    }

    & > div:last-child {
      grid-column: ${({ spanLast }) => (spanLast ? `span ${spanLast}` : 'span 6')};
    }
  }
`

const FlexColumn = styled(Cards)`
  ${({ theme }) => theme.mediaQueries.lg} {
    display: grid;

    & > div:first-child {
      grid-column: span 5;
    }

    & > div:last-child {
      grid-column: span 7 !important;
    }
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    display: flex;
    flex-direction: column;
    grid-gap: 0px;
    margin-bottom: 0px;
  }
`

const Home: React.FC = () => {
  return (
    <Page width="1200px">
      <Cards spanLast={7}>
        <WelcomeCard />
        <PromoCard />
      </Cards>
      <Cards spanLast={3}>
        <FarmStakingCard />
        <BananaStats />
        <FlexColumn>
          <EarnAPYCard />
          <TotalValueLockedCard />
        </FlexColumn>
      </Cards>
      <StyledIframe url="http://localhost:3000/?embed=1#/swap?outputCurrency=0xa4f93159ce0a4b533b443c74b89967c60a5969f8" />
    </Page>
  )
}

export default Home
