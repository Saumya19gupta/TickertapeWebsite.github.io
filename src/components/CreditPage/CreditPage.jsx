import React from 'react'

import Credit from './Credit'
import LoanInfo from './LoanInfo'
import LoanSteps from './LoanSteps'
import LoanInfoSection from './LoanInfoSection'
import FAQSection1 from './FAQSection1'

function CreditPage() {
    return (
        <div>
           <Credit/>
           <LoanInfo />
           <LoanSteps />
           <LoanInfoSection />
           <FAQSection1 />
           {/* <h1>Hello</h1> */}
        </div>
    )
}

export default CreditPage


