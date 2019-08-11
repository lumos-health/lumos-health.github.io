function Vision(props) {
    var headerStyles = {
        position: "relative",
        left: "50%"
    };

    return (
        <div
            class="vh-100 mt-5 center contain container">
            <div class="mw5 mw6-m mw8-l center flex flex-column">
                <h1
                    class="pt7 f2 f1-l tracked"
                    style={headerStyles}
                >
                    Our Vision
                </h1>
                <h2 class="f4 f4-m f3-l fw4 center">To help people live healthier lives through technology and design</h2>
            </div>
        </div>
        
    );
}