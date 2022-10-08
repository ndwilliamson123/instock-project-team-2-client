import "./Footer.scss";

export default function Footer() {
    const copyrightMessage = "InStock Inc. All Rights Reserved.";

    return (
        <>
            <footer className="footer">
                <div className="footer__container">
                    <label className="footer__message">
                        {copyrightMessage}
                    </label>
                </div>
            </footer>
        </>
    );
}
