import React from 'react'
import Base from './Base';
import Invest from './Invest';
import MarketSectors from './MarketSectors';
import MutualFunds from './MutualFunds';
import Stock from './Stocks';

import Basement from './Basement';

const HomePage = () => {
  return (
    <div className=''>
      <Base/>
      <MarketSectors/>
      <MutualFunds/>
      <Invest/>
      <Stock/>
      <Basement />
    </div>
  )
}

export default HomePage;
