import '../../App.scss';


const PopUpMsg = () => {

    return (
        <>
            <div className='header'>
                <div className='header__item'>
                    <div className='header__logo'>
                        InStock
                    </div>
                </div>

                <div className='header__item'>
                    <div className='header__subitem'>
                        <button className="btnHeader">Button</button>
                        <button className="btnHeader active">Active Button</button>
                    </div>                    
                </div>
            </div>


            <div className='card'>
                <div className='card__title'>
                    <div className='card__item'>
                        <h1>PopUpMsg</h1>
                    </div>

                    <div className='card__item'>
                        <div className='card__subitem'>
                            <input type="text" 
                                className='inputText'
                                placeholder="Placeholder..." />
                        </div>

                        <div className='card__subitem'>
                            <button>Upload</button>
                        </div>
                    </div>
                </div>


                <div className='card__body'>
                    <div className='card__copy'>
                        <h2>Lorem Ipsum</h2>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique velit eu vulputate convallis. Etiam dictum elit hendrerit, aliquet ligula at, condimentum mauris. Aenean lectus arcu, tristique at tempor sit amet, accumsan eu turpis. Nam vel consectetur lacus. Nam porttitor metus leo, id fringilla ex porta a. Proin orci lorem, rutrum ut tincidunt sed, bibendum porta augue. Nunc mattis ante vitae ex mattis, ac porta sapien ultricies. Maecenas egestas, leo feugiat facilisis euismod, purus sapien fringilla mauris, in rhoncus turpis erat non odio. Nunc quam est, cursus eget elementum id, hendrerit at purus. Aliquam erat volutpat. Curabitur ultrices interdum ipsum sit amet dapibus. Praesent nec nunc ut magna porttitor molestie. Vivamus a maximus felis, non laoreet lacus. Phasellus convallis quam ac nisl imperdiet gravida. Sed euismod odio quis sollicitudin vehicula.</p>

                        <p><a href="#popUpMsg" className="anchorButton">Pop Up Message</a></p>

                    </div>
                </div>


                <div className='modalContainer' id='popUpMsg'>
                    <div className='modal'>
                        <div className='modal__titlebar'>
                            <a href="/#" className="anchorModalClose">X</a>
                        </div>

                        <div className='modal__title'>
                            <h1>Modal Title</h1>
                        </div>

                        <div className='modal__body'>
                            <p>Duis sed dapibus sem. Aliquam eu ligula porttitor, scelerisque tellus euismod, efficitur orci. Sed pellentesque arcu libero, eu porta ipsum iaculis eu. Pellentesque orci dui, condimentum id rutrum quis, dapibus lacinia augue. Vivamus nec tincidunt ipsum. Praesent convallis mauris non ex posuere, a porta augue tincidunt. Sed vel sem dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum ac facilisis purus.</p>
                        </div>

                        <div className='modal__buttonbar'>
                            <a href="/#" className="anchorModalButton">Cancel</a>
                            <a href="/#" className="anchorModalButton">Delete</a>
                        </div>
                        
                    </div>
                </div>
                
            </div>


            <div className='card__footer'>
                <p3>© InStock Inc. All Rights Reserved.</p3>
            </div>
            
        </>
    )
}

export default PopUpMsg;
