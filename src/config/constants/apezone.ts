import { Ifo } from './types'
import { ContextApi } from '../../contexts/Localization/types'

const ApeZone: (t: ContextApi['t']) => { ifos: Ifo[] } = (t) => ({
  ifos: [
    {
      id: 'chirpley',
      address: '',
      startBlock: 20983759,
      isActive: true,
      isLinear: true,
      name: t('Chirpley'),
      subTitle: t('The first fully automated, peer-to-peer influencer marketplace'),
      description: t(
        'Chirpley is a decentralized web 3.0 eco-system that instantly automates influencer marketing campaigns by connecting brands with Nano and Micro-influencers using Artificial Intelligence, Machine Learning, and Blockchain technology. Significant Evangelizing and Effective Recommendations. Making both the brand and the influencer game-changers!',
      ),
      launchDate: 'September 6th',
      launchTime: '23:30 UTC',
      saleAmount: '9,523,809.5 CHRP',
      raiseAmount: '$200,000',
      vestingTime: '6 Months',
      projectSiteUrl: 'https://chirpley.ai/',
      currency: 'GNANA',
      currencyAddress: '0xdDb3Bd8645775F59496c821E4F55A7eA6A6dc299',
      offeringCurrency: 'CHRP',
      tokenDecimals: 18,
      releaseBlockNumber: 20983759, // block to start showing contract details
      vesting: true,
    },
    {
      id: 'animalconcerts',
      address: '0x8C32C05243CDBEEa9632eAAa30e9471D7Ab78215', // Leave empty for "Coming Soon!"
      isActive: true,
      isLinear: true,
      name: t('Animal Concerts'),
      subTitle: t(`The Next Generation of Live Events in the Metaverse`),
      description: t(
        `Animal Concerts is streaming interactive metaverse concerts, enabling both established and emerging artists to deliver amazing next-generation fan experiences. The protocol welcomes a new paradigm for music distribution, working closely with artists to design and mint unique NFTs to personalize and enhance the fan experience while generating new and direct revenue for the artists involved.`,
      ),
      launchDate: 'March 29th',
      launchTime: '2:00 UTC',
      saleAmount: '111,111,111 ANML',
      raiseAmount: '$500,000',
      vestingTime: '6 Months',
      projectSiteUrl: 'https://animalconcerts.com/',
      currency: 'GNANA',
      currencyAddress: '0xdDb3Bd8645775F59496c821E4F55A7eA6A6dc299',
      offeringCurrency: 'ANML',
      tokenDecimals: 18,
      releaseBlockNumber: 16465651, // block to start showing contract details
      vesting: true,
      // burnedTxUrl: '',
    },
    {
      id: 'trustnft',
      address: '0x76DfA14DD1295A588eBBE8e03964a98fF15f02E2', // Leave empty for "Coming Soon!"
      isActive: false,
      isLinear: true,
      name: t('Trust NFT'),
      subTitle: `Decentralized NFT Loans & Marketplace`,
      description: t(
        `TrustNFT is using AI and big data to accurately evaluate NFTs and unlock their potential for use as loan collateral. Users can combine DeFi with NFTs to earn yield on selected NFT-backed loans. The project addresses major problems in the NFT ecosystem, including low liquidity, investment risk, and the monetization of assets.`,
      ),
      launchDate: 'February 3rd',
      launchTime: '1:00 UTC',
      saleAmount: '30,000,000 TRUSTNFT',
      raiseAmount: '$525,000',
      vestingTime: '3 Months',
      projectSiteUrl: 'https://trustnft.org/',
      currency: 'GNANA',
      currencyAddress: '0xdDb3Bd8645775F59496c821E4F55A7eA6A6dc299',
      offeringCurrency: 'TRUSTNFT',
      tokenDecimals: 18,
      releaseBlockNumber: 14911408, // block to start showing contract details
      vesting: true,
      // burnedTxUrl: '',
    },
    {
      id: 'stz',
      address: '0x0B3A1f44c51eE2B540F60E48E8E802fDe2473455', // Leave empty for "Coming Soon!"
      isActive: false,
      isLinear: false,
      name: t('99Starz'),
      subTitle: `The World's Largest NFT Yield Ecosystem`,
      description: t(
        `99Starz is creating a results-driven, cross-chain GameFi ecosystem that will allow game studios, gamers, and collectors to participate and win in different ways together. Through their unique GameFi guild model and NFT leasing marketplace, 99Starz will cater to all aspects of the most popular blockchain gaming economies, including Axie Infinity, F1 Delta, and Sorare.`,
      ),
      launchDate: 'December 11th',
      launchTime: '5:00 UTC',
      saleAmount: '500,000 STZ',
      raiseAmount: '$250,000',
      vestingTime: '3 Months',
      projectSiteUrl: 'https://99starz.io/',
      currency: 'GNANA',
      currencyAddress: '0xdDb3Bd8645775F59496c821E4F55A7eA6A6dc299',
      offeringCurrency: 'STZ',
      tokenDecimals: 18,
      releaseBlockNumber: 22364007, // block to start showing contract details
      vesting: true,
      // burnedTxUrl: '',
    },
    {
      id: 'gan',
      address: '0x11D8aB92837085eA0e410EA96eDd8D751894933d', // Leave empty for "Coming Soon!"
      isActive: false,
      isLinear: false,
      name: t('Galactic Arena'),
      subTitle: t('A Play-to-Earn NFT Battleground'),
      description: t(
        `Galactic Arena is creating a democratized NFT gaming battlefield! It doesn't matter where your NFT comes from, in this NFTverse, you can bring your favorite heroes with you! Make wagers on PvP battles in real time to top the leaderboard and earn prizes that include BNB, BUSD, and GAN!`,
      ),
      launchDate: 'November 4th',
      launchTime: '16:00 UTC',
      saleAmount: '80,000,000 GAN',
      raiseAmount: '$400,000',
      vestingTime: '3 Months',
      projectSiteUrl: 'http://galacticarena.io/',
      currency: 'GNANA',
      currencyAddress: '0xdDb3Bd8645775F59496c821E4F55A7eA6A6dc299',
      offeringCurrency: 'GAN',
      tokenDecimals: 18,
      releaseBlockNumber: 12364007, // block to start showing contract details
      vesting: true,
      // burnedTxUrl: '',
    },
    {
      id: 'nfty',
      address: '0xF04c0efc1aBF1c98076a8ecEd2a68009ee55A0A9', // Leave empty for "Coming Soon!"
      isActive: false,
      isLinear: false,
      name: t('NFTY Network'),
      subTitle: t('An NFT Gating Ecosystem'),
      description: t(
        `NFTY Network is building a decentralized NFT ecosystem built to facilitate Access-to-Earn, powering digital asset ownership rewards. Their goal is to unlock the true potential of NFTs through gated experiences that connect Web2 and Web3 infrastructures.`,
      ),
      launchDate: 'September 29th',
      launchTime: '17:00 UTC',
      saleAmount: '30,800,000 NFTY',
      raiseAmount: '$385,000',
      vestingTime: '3 Months',
      projectSiteUrl: 'https://nftynetwork.io/',
      currency: 'GNANA',
      currencyAddress: '0xdDb3Bd8645775F59496c821E4F55A7eA6A6dc299',
      offeringCurrency: 'NFTY',
      tokenDecimals: 18,
      releaseBlockNumber: 11342539, // block to start showing contract details
      vesting: true,
      // burnedTxUrl: '',
    },
    {
      id: 'dragonary',
      address: '0x1D51e7e0cB6f181489c9F24E396e54cb02D1EF0e', // Leave empty for "Coming Soon!"
      isActive: false,
      isLinear: false,
      name: t('Dragonary'),
      subTitle: t('Hatch Your Destiny'),
      description: t(
        `CoinaryTV is developing a brand new game called Dragonary for Desktop, iPhone, and Android, where users can play to earn in-game currency. Users will be able to collect, trade, and breed various dragon NFTs and battle against the game or other players to win!`,
      ),
      launchDate: 'August 7th',
      launchTime: '16:00 UTC',
      saleAmount: '50,000,000 CYT',
      raiseAmount: '$500,000',
      totalAmountRaised: '$10,018,512',
      bananaToBurn: '$500,000',
      vestingTime: '3 Months',
      projectSiteUrl: 'https://dragonary.com/',
      currency: 'GNANA',
      currencyAddress: '0xdDb3Bd8645775F59496c821E4F55A7eA6A6dc299',
      offeringCurrency: 'CYT',
      tokenDecimals: 18,
      releaseBlockNumber: 9828870, // block to start showing contract details
      vesting: true,
      // burnedTxUrl: '',
    },
    {
      id: 'bishares',
      address: '0xf6718973d21F72845300Ee2ded2e4624CF06b06e', // Leave empty for "Coming Soon!"
      isActive: false,
      isLinear: false,
      name: t('BiShares'),
      subTitle: t('Decentralized Index Funds'),
      description: t(
        `BiShares is creating BNB Chain’s first index fund for safely diversifying across multiple crypto assets. Use BNB to purchase a wide basket of assets and gain exposure to the broader crypto market and never miss out on a moon again.`,
      ),
      launchDate: 'July 9th',
      launchTime: '03:00 UTC',
      saleAmount: '71429 BISON',
      raiseAmount: '$250,000',
      totalAmountRaised: '$503,407',
      bananaToBurn: '$250,000',
      projectSiteUrl: 'https://bishares.finance/',
      currency: 'GNANA',
      currencyAddress: '0xddb3bd8645775f59496c821e4f55a7ea6a6dc299',
      offeringCurrency: 'BISON',
      tokenDecimals: 18,
      releaseBlockNumber: 8993971, // block to start showing contract details
      // burnedTxUrl: '',
    },
    {
      id: 'hifi',
      // address: '0x0dEFfe964CbCfBDA31251ADaa8DA6dA0961eba3C', // Leave empty for "Coming Soon!"
      address: '0xe3528182889afEAEADE455841b6CFE9AC1e53a03', // IAO Aux contract
      isActive: false,
      isLinear: false,
      name: t('Hifi'),
      subTitle: t('Decentralized Retro Gaming'),
      description: t(
        'HiFi is developing a decentralized retro gaming ecosystem driven by its community. It uses staking and play-to-earn rewards to create a completely new DeFi gaming experience.',
      ),
      launchDate: 'June 11',
      launchTime: '03:00 UTC',
      saleAmount: '80,000,000 HIFI',
      raiseAmount: '$400,000',
      totalAmountRaised: '$1,086,246',
      bananaToBurn: '$400,000',
      projectSiteUrl: 'https://hifigamingsociety.com/',
      currency: 'GNANA',
      currencyAddress: '0xddb3bd8645775f59496c821e4f55a7ea6a6dc299',
      offeringCurrency: 'HIFI',
      tokenDecimals: 18,
      releaseBlockNumber: 8135430, // block to start showing contract details
      // burnedTxUrl: '',
    },
    {
      id: 'aperocket',
      address: '0xF5413C7033ED5dF58b0F6A942BAEA1548a9AD2F4',
      isActive: false,
      isLinear: false,
      name: t('ApeRocket'),
      subTitle: t('Vaulting Platform'),
      description: t(
        'ApeRocket is building a suite of products that provide automated yield optimization strategies for BNB Chain leveraging ApeSwap liquidity.',
      ),
      launchDate: 'May. 25',
      launchTime: '03:00 UTC',
      saleAmount: '27,778 SPACE',
      raiseAmount: '$250,000',
      totalAmountRaised: '$1,551,374',
      bananaToBurn: '$250,000',
      projectSiteUrl: 'https://aperocket.finance',
      currency: 'GNANA',
      currencyAddress: '0xddb3bd8645775f59496c821e4f55a7ea6a6dc299',
      offeringCurrency: 'SPACE',
      tokenDecimals: 18,
      releaseBlockNumber: 7378325,
      // burnedTxUrl: 'https://bscscan.com/tx/0x938454e722fdef0a2f34b16f16bed50f6deb692b942331a9a6e2cf96977e116b',
    },
    {
      id: 'bitfresh',
      address: '0x0aA255267CBE1cC9366509056A24608385F07617',
      isActive: false,
      isLinear: false,
      name: t('Bitfresh'),
      subTitle: t('Community-Driven iGaming Platform'),
      description: t(
        'Bitfresh is developing a blockchain-based community driven social iGaming experience that pays dividends to players and token holders. The platform will be filled with reward systems to give players many ways to win and earn over time.',
      ),
      launchDate: 'Apr. 24',
      launchTime: '03:00 UTC',
      saleAmount: '10,000,000 BFT',
      raiseAmount: '$100,000',
      totalAmountRaised: '$369,901',
      bananaToBurn: '$50,000',
      projectSiteUrl: 'https://www.bitfresh.win/public-sale',
      offeringCurrency: 'BFT',
      currency: 'GNANA',
      currencyAddress: '0xdDb3Bd8645775F59496c821E4F55A7eA6A6dc299',
      tokenDecimals: 18,
      releaseBlockNumber: 6565331,
    },
  ],
})

export default ApeZone
