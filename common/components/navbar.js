function Navbar(props) {
    var defaultLinkClass = "link dim dark-gray f6 f5-ns dib ph3";
    var currentLinkClass = "link light-silver f6 f5-ns dib ph3";

    var currentLinkStyle = {
        pointerEvents: "none"
    };

    var availableLinks = {
        team : [],
        contact: [],
        root: []
    };

    var nonRootFound = false;

    for (var link in availableLinks) {
        if (document.URL.includes(link)) {
            availableLinks[link][0] = currentLinkClass;
            availableLinks[link][1] = currentLinkStyle;
            nonRootFound = true;
        } else {
            availableLinks[link][0] = defaultLinkClass;
            availableLinks[link][1] = {};
        }
    }

    if (!nonRootFound) {
        availableLinks.root[0] = currentLinkClass;
        availableLinks.root[1] = currentLinkStyle;
    } else {
        availableLinks.root[0] = defaultLinkClass;
        availableLinks.root[1] = {};
    }

    return (
        <nav class="navbar dt w-100 border-box pa3 ph5-ns bb b--black-10 fixed top-0 ">
            <a class="dtc v-mid mid-gray link dim" href="../" title="Home">
                <span class="b bg-black-90 lh-copy white pa1">
                    Lumos Health Inc.
                </span>
            </a>
            <div class="dtc v-mid w-75 tr">
                <a class={availableLinks.root[0]} style={availableLinks.root[1]} href="../" title="About">About Us</a>
                <a class={availableLinks.team[0]} style={availableLinks.team[1]} href="../team/" title="Team">Our Team</a>
                <a class={availableLinks.contact[0]} style={availableLinks.contact[1]} href="../contact/" title="Contact">Contact</a>
            </div>
        </nav>
    );
}