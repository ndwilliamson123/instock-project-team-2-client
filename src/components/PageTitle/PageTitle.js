import React from "react";

import './PageTitle.scss';


const PageTitle = props => {

    return(
        <>
            <div className='pagetitle'>
                <div className='pagetitle__item'>
                    <h1>{props.pgtitle}</h1>
                </div>

                <div className='pagetitle__item'>
                    <div className='pagetitle__subitem'>
                        <input type="text" 
                            className='inputText'
                            placeholder="Placeholder..." />
                    </div>

                    <div className='pagetitle__subitem'>
                        <button>Upload</button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default PageTitle;