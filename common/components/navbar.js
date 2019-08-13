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
    var logoImgLink = "https://drive.google.com/uc?export=view&id=1H2FET48MCp8n1X85MGaU7J_oh3Z46tIN";
    var logoTextLink = "https://drive.google.com/uc?export=view&id=1zxh17n-FV_tzs0lBnZYLXeJMmZHaVBHx"

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
        <nav class="navbar dt w-100 border-box ph4 pv2 ph2-ns ph5-ns bb b--black-10 fixed top-0 ">
            <a class="w2 dtc v-mid mid-gray link dim flex flex-wrap" href="../" title="Home">
                <img class="w2" src={logoImgLink}/>
            </a>
            <div class="pv3 dtc v-mid w-75 tr">
                <a class={availableLinks.root[0]} style={availableLinks.root[1]} href="../" title="About">About Us</a>
                <a class={availableLinks.team[0]} style={availableLinks.team[1]} href="../team/" title="Team">Our Team</a>
                <a class={availableLinks.contact[0]} style={availableLinks.contact[1]} href="../contact/" title="Contact">Contact</a>
            </div>
        </nav>
    );
}