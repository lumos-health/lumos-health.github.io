function Vision(props) {
    var divStyle = {
        zIndex: "-2"
    };
    
    var backgroundStyle = {
        background: "url(https://drive.google.com/uc?export=view&id=1U7iNM4JUWZ00lObFd2_gzt5Kk6wLQQ4u) no-repeat",
        backgroundPosition: "center center",
        filter: "blur(7px) opacity(20%) ",
        transform: "scaleX(-1)",
        zIndex: "0"
    };

    var textStyle = {
        zIndex: "1"
    };

    var fontStyle = {
        fontFamily: "\'Montserrat\', sans-serif",
        fontWeight: "600"
    };

    var visionDiv = (
        <div class="w-100 vh-100 flex items-center">
            <div class="mw5 mw6-m mw8-l center flex flex-column tr">
                <h1
                    class="f1 f1-l normal white center"
                    style={fontStyle}
                >
                    Lumos Health Inc.
                </h1>
                <h2 class="f4 f4-m f3-l fw4 w-70 pv3 center light-gray tc">
                    To help people live happier, healthier lives through technology and design
                </h2>
                <img
                    class="logo center"
                    src="favicon.ico/android-chrome-384x384.png"
                />
            </div>
        </div>
    );

    return (
        <div
            class="vision vh-100 pv3"
            style={divStyle}>
            <div
                class="w-100 mt-5 center contain container pa3 pa5-ns absolute"
                style={textStyle}>
                {visionDiv}
            </div>
            <div
                style={backgroundStyle}
                class="vh-100 mw-100 mh-100 cover "
            ></div>
        </div>
        
    );
}