import React from 'react'
import ComparisonTable from './ComparisonTable'
import DigitalGold from './DigitalGold'
import DigitalGoldInvestment from './DigitalGoldInvestment'
import FAQSection from './FAQSection'
import GoldInvestment from './GoldInvestment';
import InvestmentSection from './InvestmentSection'
import PerformanceChart from './PerformanceChart'

function GoldPage() {
    return (
        <div>
            <DigitalGold/>
            <PerformanceChart/>
            <GoldInvestment/>
            <InvestmentSection />
            <DigitalGoldInvestment/>
            <ComparisonTable/>
            <FAQSection/>
        </div>
    )
}

export default GoldPage;
