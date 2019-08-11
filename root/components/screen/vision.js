function Vision(props) {
    var divStyle = {
        zIndex: "-2"
    };
    var backgroundStyle = {
        background: "url(https://drive.google.com/uc?export=view&id=1hNbxHoFh5eOTT5IUYNTkMmNH51P26-61) no-repeat",
        backgroundPosition: "center center",
        filter: "blur(7px) opacity(40%)",
        zIndex: "0"
    };

    var textStyle = {
        zIndex: "1"
    };

    var visionDiv = (
        <div class="mw5 mw6-m mw8-l center flex flex-column tr">
            <h1
                class="pt7 f2 f1-l normal white-80 b"
            >
                Lumos Health Inc.
            </h1>
            <h2 class="f4 f4-m f3-l fw4 lh-copy black-80">
                To help people live healthier lives through technology and design
            </h2>
        </div>
    );

    return (
        <div
            class="vision vh-100 "
            style={divStyle}>
            <div
                class="vh-100 w-100 mt-5 center contain container pa3 pa5-ns absolute"
                style={textStyle}>

                <SplitComponents
                    right={visionDiv}
                />
            </div>
            <div
                style={backgroundStyle}
                class="vh-100 mw-100 mh-100 cover "
            ></div>
        </div>
        
    );
}