import React from "react";


const Header = () => {

    return (
        <>
            <div className='header'>
                <div className='header__item'>
                    <div className='header__logo'>
                        <a href="/"><img src={require('../../assets/logos/InStock-Logo.svg').default} alt="InStock" /></a>
                    </div>
                </div>

                <div className='header__item'>
                    <div className='header__subitem'>
                        <a href='/warehouses' className='headerButton'>Warehouses</a>
                        <a href='/inventory' className='headerButton active'>Inventory</a>
                    </div>                    
                </div>
            </div>
        </>
    )
}

export default Header;