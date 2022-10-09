import React from 'react';

import LendingHeader from './Lending-page/LendingHeader';
import LendingHome from './Lending-page/LendingHome';
import LendingAboutUs from './Lending-page/LendingAboutUs';
import LendingBonus from './Lending-page/LendingBonus';
import LendingTags from './Lending-page/LendingTags';
import LendingPlay from './Lending-page/LendingPlay';
import LendingFooter from './Lending-page/LendingFooter';
import LendingStart from './Lending-page/LendingStart';

function Lending(){
    

    return(
        <div className='wrapper'>
            <div className='lending__content'>
                <LendingHeader/>
                <LendingHome/>
                <LendingAboutUs/>
                <LendingBonus/>
                <LendingTags/>
                <LendingStart/>
                <LendingPlay/>
                <LendingFooter/>
            </div>
        </div>
    )     
}

export default Lending