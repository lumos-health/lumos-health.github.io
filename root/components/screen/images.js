function ImageCol(props) {
    var imageStyle = {
        display: "block",
        maxWidth: "25%",
        maxHeight: "25%",
        width: "auto",
        height: "auto",
        borderRadius: "20%",
        zIndex: "0"
    };

    var textStyle = {
        textAlign: "center",
        marginLeft: "20%",
        marginRight: "20%"
    };

    return (
        <div class="center justify-center flex flex-column contain container pb6">
            <h1
                class="f2 f1-l normal center pt5"
            >
                Our Product
            </h1>  
            <p 
                class="black-90 f4 f4-m f3-l fw4 lh-copy"
                style={textStyle}
            >
                Using innovative design and state of the art technology, our product, Lumos glasses, aims to solve these problems by being the most fashionable and competitive light therapy glasses on the market.
            </p>
            <div class="flex flex-row justify-center pv3">
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