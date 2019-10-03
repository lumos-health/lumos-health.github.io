function Description(props) {
    var backgroundStyle = {
        background: "url(common/images/winter_blues_bg.jpg) no-repeat",
        backgroundPosition: "center center",
        filter: "blur(7px) opacity(30%)",
        zIndex: "0"
    };

    var divStyle = {
        zIndex: "-2"
    };

    var descDiv = (
        <div class="flex flex-wrap pt5 pt3-ns mw5 mw7-ns white">
            <div>
                <h1 class="f1 f1-l normal tc">
                   Problem Space Title
                </h1>
                <p class="pt4-m pt3-l f4 f4-m f3-l fw4 lh-copy"
                >
                    Using light that mimics the brightness of the natural outdoors, light therapy can <b>help treat the winter blues</b> as well as <b>improve sleep quality for people with sleep schedule problems</b>.
                </p>
                <p class="pt4-m pt3-l f4 f4-m f3-l fw4 lh-copy">
                    However, many people are unaware of light therapy, and existing products on the market do not offer a <b>portable</b> and <b>discreet</b> method of treatment. 
                </p>
            </div>
        </div>
    );

    return (
        <div
            class="description center contain container">
            <div
                style={divStyle}
                class="center pa3 pa5-ns absolute"
            >
                {descDiv}
            </div>
            <div
                style={backgroundStyle}
                class="vh-100 w-100 cover"
            ></div>
        </div>
    );
}
