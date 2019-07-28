function Subscribe(props) {
    return (
        <div class="subscribe-screen vh-100">
            <form class=" vh-100">
                <fieldset class="cf bn ma0 pa0">
                    <div class="flex flex-column justify-center items-center tc w-100 vh-100">
                        <h2 class="pa0 ttu tracked f1 mb3 black-80 mb2 mb4-ns">Stay updated</h2>
                        <input class="tc f6 f5-l input-reset bn black-80 bg-white pa3  w-80 w-30-m w-20-l br-pill-ns" placeholder="Your Email Address" type="text" name="email-address" id="email-address" />
                        <input class="f6 f5-l button-reset pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer br-pill-ns w-80 w-30-m w-20-l mt3" type="submit" value="Subscribe" />
                    </div>
                </fieldset>
            </form>
        </div>
    );
}