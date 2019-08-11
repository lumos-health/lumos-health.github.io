function ImageCol(props) {
    var imageStyle = {
        backgroundPosition: "center center",
        display: "block",
        maxWidth: "80%",
        maxHeight: "80%",
        width: "auto",
        height: "auto",
        zIndex: "0"
    };
    
    return (
        <div class="vh-100 mt-5 center contain container pt5">
            <img
                class="col-xs-12 col-sm-6 col-md-6 col-lg-6 center"
                style={imageStyle}
                src="common/images/lumos-glasses.jpg"
            />
        </div>
    );
}