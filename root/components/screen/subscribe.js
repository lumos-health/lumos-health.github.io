
function Subscribe(props) {
    var divStyle = {
        zIndex: "-2",
        borderTop: "1em solid white",
    };
    var backgroundStyle = {
        background: "url(https://drive.google.com/uc?export=view&id=1ACQbi_qzbqepa0udtdL-z5v22sCYoJmJ) no-repeat",
        backgroundPosition: "center center",
        filter: "opacity(50%)",
        zIndex: "0"
    };
    var formStyle = {
        zIndex: "1"
    };

    return (
        <div
            class="subscribe-screen vh-100"
            style={divStyle}
        >
            <form
            target="_self"
            class=" vh-100 w-100 absolute"
            style={formStyle}
            action="https://docs.google.com/forms/d/e/1FAIpQLScFxzH4FI1-kxHQXWL0VklqEpb78yG2NvuFYjx_iCPohHO7Ug/formResponse"
            target="_self"
            method="POST"
            id="mG61Hd"
            >
                <fieldset class="cf bn ma0 pa0">
                    <div class="flex flex-column justify-center items-center tc w-100 vh-100">
                        <h2 class="normal pa0 f1 mb3 black-70 mb4-ns">Stay updated!</h2>
                        <input class="tc f6 f5-l input-reset bn black-80 bg-white pa3  w5 br-pill-ns" placeholder="Your Email Address" type="email" name="emailAddress" id="email-address" required />
                        <input class="f6 f5-l button-reset pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer br-pill-ns w5 mt3" type="submit" value="Subscribe" />
                    </div>
                </fieldset>
            </form>
            <div
                style={backgroundStyle}
                class="vh-100 w-100 cover"
            ></div>
        </div>
    );
}