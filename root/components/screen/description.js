function Description(props) {
    var textStyles = {
        position: "relative",
        display: "block",
        line_height: "1.2"
    };
    
    return (
        <div
            class="vh-100 mt-5 center contain container">
            <div class="mw5 mw6-m mw8-l center flex flex-column">
                <h1
                    class="pt7 f2 f1-l tracked center"
                >
                    Our Product
                </h1>
                <p class="f4 f4-m f3-l fw4" style={textStyles}>
                    Using light that mimics the brightness of the natural outdoors, light therapy can help treat the winter blues as well as improve sleep quality for people with sleep schedule problems. However, many people are unaware of light therapy and existing products on the market do not offer a portable and discreet method of treatment. Our product, Lumos glasses, is a pair of light therapy glasses that aims to solve these problems with innovative technology. Through creative design, we have made Lumos glasses to be the most effective, fashionable, and affordable light therapy glasses on the market.
                </p>
            </div>
        </div>
    );
}