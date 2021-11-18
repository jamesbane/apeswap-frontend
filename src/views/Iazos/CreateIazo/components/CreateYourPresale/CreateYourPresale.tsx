import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { Text } from '@apeswapfinance/uikit'
import { PresaleData } from './types'
import PairCreation from './PairCreation/PairCreation'
import DateSelection from './DateSelection/DateSelection'
import PresaleDetails from './PresaleDetails/PresaleDetails'
import PostSaleDetails from './PostSaleDetails/PostSaleDetails'
import SaleReview from './SaleReview/SaleReview'
import Information from './Information/Information'
import Actions from './Actions'

interface Stepper {
  pairCreated: boolean
  datesSelected: boolean
  presaleDetailsSet: boolean
  postsaleDetailsSet: boolean
}

const LaunchPadInfoWrapper = styled.div`
  width: 796px;
  border-radius: 10px;
  background: ${(props) => (props.theme.isDark ? '#333333' : '#E5E5E5')};
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
`
const StyledHeader = styled(Text)`
  font-family: Poppins;
  font-size: 24px;
  font-weight: 700;
  font-style: normal;
  line-height: 27px;
  padding-top: 25px;
`

export default function CreateYourPresale(): JSX.Element {
  const [presaleData, setPresaleData] = useState<PresaleData>()
  const [stepper, setStepper] = useState<Stepper>({
    pairCreated: false,
    datesSelected: false,
    presaleDetailsSet: false,
    postsaleDetailsSet: false,
  })

  const presaleStepsCompleted =
    stepper.pairCreated && stepper.datesSelected && stepper.presaleDetailsSet && stepper.postsaleDetailsSet

  const onPairCreation = useCallback((val) => {
    setPresaleData((prevState) => ({ ...prevState, pairCreation: val }))
    setStepper((prevState) => ({ ...prevState, pairCreated: val && true }))
  }, [])

  const onDateSelection = useCallback((val) => {
    setPresaleData((prevState) => ({ ...prevState, datesSelected: val }))
    setStepper((prevState) => ({ ...prevState, datesSelected: val && true }))
  }, [])

  const onPresaleDetails = useCallback((val) => {
    setPresaleData((prevState) => ({ ...prevState, presaleTokenDetails: val }))
    setStepper((prevState) => ({ ...prevState, presaleDetailsSet: val && true }))
  }, [])

  const onPostsaleDetails = useCallback((val) => {
    setPresaleData((prevState) => ({ ...prevState, postsaleDetails: val }))
    setStepper((prevState) => ({ ...prevState, postsaleDetailsSet: val && true }))
  }, [])

  const onInformation = useCallback((val) => {
    setPresaleData((prevState) => ({ ...prevState, information: val }))
  }, [])

  console.log(presaleData)
  console.log(presaleData?.presaleTokenDetails)

  return (
    <LaunchPadInfoWrapper>
      <StyledHeader>Create Your Presale</StyledHeader>
      <PairCreation onChange={onPairCreation} />
      {stepper.pairCreated && (
        <>
          <PresaleDetails onChange={onPresaleDetails} pairTokenDetails={presaleData.pairCreation} />
          <DateSelection onChange={onDateSelection} />
          <PostSaleDetails onChange={onPostsaleDetails} quoteTokenSymbol={presaleData.pairCreation.quoteToken} />
        </>
      )}
      {presaleStepsCompleted && (
        <>
          <SaleReview
            presaleDetails={presaleData.presaleTokenDetails}
            postsaleDetails={presaleData.postsaleDetails}
            pairDetails={presaleData.pairCreation}
          />
          <Information onChange={onInformation} />
          <Actions presaleData={presaleData} />
        </>
      )}
    </LaunchPadInfoWrapper>
  )
}