import React, { useEffect } from 'react'
import { Text } from '@apeswapfinance/uikit'
import { useWeb3React } from '@web3-react/core'
import { useDispatch } from 'react-redux'
import useI18n from 'hooks/useI18n'
import { usePendingUsd } from 'state/hooks'
import { fetchFarmUserDataAsync } from 'state/farms'
import useRefresh from 'hooks/useRefresh'
import CardValue from '../CardValue'

const BananaHarvestUsdBalance = () => {
  const TranslateString = useI18n()
  const { account } = useWeb3React()
  const { pending } = usePendingUsd()
  const { slowRefresh } = useRefresh()
  const dispatch = useDispatch()

  useEffect(() => {
    if (account) {
      dispatch(fetchFarmUserDataAsync(account))
    }
  }, [account, dispatch, slowRefresh])

  if (!account) {
    return (
      <Text color="textDisabled" style={{ lineHeight: '60px', fontWeight: 700 }} fontFamily="poppins">
        {TranslateString(298, 'Locked')}
      </Text>
    )
  }

  return (
    <CardValue
      decimals={2}
      value={pending}
      prefix="~$"
      fontSize="12px"
      color="#38A611"
      text="poppins"
      fontWeight={700}
    />
  )
}

export default BananaHarvestUsdBalance