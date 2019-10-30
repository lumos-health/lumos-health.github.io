function Description(props) {
    var descriptionStyle = {
        backgroundImage: "linear-gradient(ghostwhite, white)"
    };

    var imageStyle = {
        display: "block",
        maxWidth: "25%",
        width: "auto",
        height: "auto",
        borderRadius: "20%",
        zIndex: "0"
    };


    var descDiv = (
        <div class="description flex flex-wrap h-100 pt5 pt3-ns mw5 mw7-ns">
            <div>
                <p class="pt4-m pt5-l f4 f4-m f3-l fw4 lh-copy"
                >
                    Using light that mimics the brightness of the natural outdoors, light therapy can <b>help treat the winter blues</b> as well as <b>improve sleep quality for people with sleep schedule problems.</b>
                </p>
                <p class="pt4-m pt5-l f4 f4-m f3-l fw4 lh-copy">
                    However, many people are unaware of light therapy, and existing products on the market do not offer a <b>portable</b> and <b>discreet</b> method of treatment. 
                </p>
                <p class="pv4-m pv5-l black-90 f4 f4-m f3-l fw4 lh-copy"
                >
                    Using innovative design and state of the art technology, our product, <b>Lumos glasses</b>, aims to solve these problems by being the most <b>fashionable</b> and <b>competitive</b> light therapy glasses on the market.
                </p>
            </div>
        </div>
    );

    return (
        <div
            style={descriptionStyle}
            class=" center contain container pa3 ph5-ns flex flex-wrap justify-center">
                {descDiv}
            <div class="pb4-m pb5-l flex-row justify-center pv3">
                {proto_image_files.map(path =>
                    (<img
                        class="fl w-third ph4"
                        style={imageStyle}
                        src={path}
                    />)
                )}
            </div>
        </div>
    );
}

/*
<p class="ph5 f4 f4-m f3-l fw4 lh-copy">
                    Our product, Lumos glasses, is a pair of light therapy glasses that aims to solve these problems with innovative technology. Through creative design, we have made Lumos glasses to be the most effective, fashionable, and affordable light therapy glasses on the market.
                </p>
*/
