import React from 'react'


import StockScreener from './StockScreener'
import FilterCards from './FilterCards'
import SavedScreens from './SavedScreens'
import PopularScreens from './PopularScreens'
import FundamentalScreens from './FundamentalScreens'
import TechnicalMomentumScreens from './TechnicalMomentumScreens'
import FuturesOptionsScreens from './FuturesOptionsScreens'


function ScreenerPage() {
    return (
        <div>
            <StockScreener />
            <FilterCards />
            <SavedScreens />
            <PopularScreens />
            <FundamentalScreens />
            <TechnicalMomentumScreens />
            <FuturesOptionsScreens />
        </div>
    )
}

export default ScreenerPage
