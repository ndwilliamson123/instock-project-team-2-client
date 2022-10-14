import React from 'react';


const Modal = props => {

    return(
        <>
            <div className='modalContainer' id='modalMsg'>
                <div className='modal'>
                    <div className='modal__titlebar'>
                        <a href="#close" className="anchorModalClose">X</a>
                    </div>

                    <div className='modal__title'>
                        <h1>Modal Title</h1>
                    </div>

                    <div className='modal__body'>
                        <p>Duis sed dapibus sem. Aliquam eu ligula porttitor, scelerisque tellus euismod, efficitur orci. Sed pellentesque arcu libero, eu porta ipsum iaculis eu. Pellentesque orci dui, condimentum id rutrum quis, dapibus lacinia augue. Vivamus nec tincidunt ipsum. Praesent convallis mauris non ex posuere, a porta augue tincidunt. Sed vel sem dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum ac facilisis purus.</p>
                    </div>

                    <div className='modal__buttonbar'>
                        <a href="#cancel" className="anchorModalButton">Cancel</a>
                        <a href="#delete" className="anchorModalButton">Delete</a>
                    </div>
                    
                </div>
            </div>
        </>
    )
}


export default Modal;