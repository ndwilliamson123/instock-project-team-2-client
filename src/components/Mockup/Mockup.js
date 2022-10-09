import '../../App.scss';


const Mockup = () => {

    return (
        <>
            <div className='header'>
                <div className='header__item'>
                    <div className='header__logo'>
                        Instock
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
                        <h1>Lorem Ipsum</h1>
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

                <h3>Header 3</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique velit eu vulputate convallis. Etiam dictum elit hendrerit, aliquet ligula at, condimentum mauris. Aenean lectus arcu, tristique at tempor sit amet, accumsan eu turpis. Nam vel consectetur lacus. Nam porttitor metus leo, id fringilla ex porta a. Proin orci lorem, rutrum ut tincidunt sed, bibendum porta augue. Nunc mattis ante vitae ex mattis, ac porta sapien ultricies. Maecenas egestas, leo feugiat facilisis euismod, purus sapien fringilla mauris, in rhoncus turpis erat non odio. Nunc quam est, cursus eget elementum id, hendrerit at purus. Aliquam erat volutpat. Curabitur ultrices interdum ipsum sit amet dapibus. Praesent nec nunc ut magna porttitor molestie. Vivamus a maximus felis, non laoreet lacus. Phasellus convallis quam ac nisl imperdiet gravida. Sed euismod odio quis sollicitudin vehicula.</p>

                <p>Praesent sit amet dui ac tellus convallis pretium. In pretium dui enim. Proin iaculis tortor ut volutpat scelerisque. Phasellus ac libero eleifend, egestas urna a, iaculis nulla. Proin porttitor pulvinar tincidunt. Vivamus enim est, varius in dolor eget, dapibus sodales tellus. Sed lectus mi, fringilla a congue congue, ultrices eget velit. Aenean sit amet nibh purus. Integer blandit nunc sit amet ante commodo, vitae ultrices mi convallis. Aenean et massa mauris. Curabitur et rhoncus diam, nec feugiat augue. Vivamus purus ipsum, sollicitudin non pellentesque eu, gravida id leo. Aliquam egestas dolor vel nulla gravida, vitae dapibus libero iaculis. Sed eget consequat erat. Mauris tristique, urna vitae maximus vulputate, arcu enim dapibus eros, sed mollis diam nunc eget nisi. Pellentesque nisl justo, ultrices eu tellus sit amet, rutrum iaculis felis.</p>

                <p>Sed vitae leo suscipit, fermentum neque vel, cursus risus. Sed eleifend sagittis dolor, et porttitor lectus placerat ut. Aliquam posuere facilisis lacus, in commodo orci dapibus nec. Etiam consectetur, arcu nec elementum faucibus, elit nisl pellentesque ex, sit amet elementum nulla erat id velit. Nullam a luctus ante. Duis viverra auctor erat, vel bibendum lacus molestie sed. Morbi auctor justo est, vel efficitur massa fermentum at. Pellentesque dictum nibh sit amet purus pellentesque imperdiet. Suspendisse pellentesque arcu in ligula pellentesque tincidunt. Suspendisse et elit ac tellus ullamcorper bibendum mattis sit amet neque. Etiam eu turpis sit amet nibh eleifend elementum vel at turpis. Fusce cursus sem risus, nec vestibulum nisi sagittis porttitor. Cras ac turpis in mi pulvinar sollicitudin nec quis turpis. Vivamus eget sodales neque. Duis justo turpis, semper id nunc at, mattis tristique sem. Sed vitae hendrerit sem.</p>
                
                
            </div>

            <p3>Footer</p3>
        </>
    )
}

export default Mockup;
