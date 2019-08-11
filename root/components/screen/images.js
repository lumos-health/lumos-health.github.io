function ImageCol(props) {
    var imageStyle = {
        display: "block",
        maxWidth: "50%",
        maxHeight: "50%",
        width: "auto",
        height: "auto",
        borderRadius: "5%",
        zIndex: "0"
    };

    var textStyle = {
        textAlign: "left",
        marginLeft: "20%",
        marginRight: "20%"
    };

    return (
        <div class="mt-5 center justify-center flex flex-column contain container pt7">
            <h1
                class="f2 f1-l normal center pt5"
            >
                Our Product
            </h1>  
            <p 
                class="black-90 f4 f4-m f3-l fw4 lh-copy"
                style={textStyle}
            >
                Using innovative design and state of the art technology, our product, Lumos glasses, aims to solve these problems by being the most fashionable, and competitive light therapy glasses on the market.
            </p>
            <div class="flex flex-column pv5">
                <img
                    class="center"
                    style={imageStyle}
                    src="common/images/lumos-glasses.jpg"
                />
            </div>
        </div>
    );
}