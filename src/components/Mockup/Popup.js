import React from "react";


const Popup = props => {

    return(
        <>
            <div className="main">
                <div className="main__copy">
                    <h2>This page displays the pop-up message.</h2>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique velit eu vulputate convallis. Etiam dictum elit hendrerit, aliquet ligula at, condimentum mauris. Aenean lectus arcu, tristique at tempor sit amet, accumsan eu turpis. Nam vel consectetur lacus. Nam porttitor metus leo, id fringilla ex porta a. Proin orci lorem, rutrum ut tincidunt sed, bibendum porta augue. Nunc mattis ante vitae ex mattis, ac porta sapien ultricies. Maecenas egestas, leo feugiat facilisis euismod, purus sapien fringilla mauris, in rhoncus turpis erat non odio. Nunc quam est, cursus eget elementum id, hendrerit at purus. Aliquam erat volutpat. Curabitur ultrices interdum ipsum sit amet dapibus. Praesent nec nunc ut magna porttitor molestie. Vivamus a maximus felis, non laoreet lacus. Phasellus convallis quam ac nisl imperdiet gravida. Sed euismod odio quis sollicitudin vehicula.</p>

                    <p><a href="#modalMsg" className="anchorButton">Pop Up Message</a></p>

                </div>                
            </div>
        </>
    )
}

export default Popup;