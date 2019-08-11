function Vision(props) {
    var visionDiv = (
        <div class="mw5 mw6-m mw8-l center flex flex-column tr">
            <h1
                class="pt7 f2 f1-l normal"
            >
                Our Vision
                </h1>
            <h2 class="f4 f4-m f3-l fw4 lh-copy">To help people live healthier lives through technology and design</h2>
        </div>
    );

    return (
        <div
            class="vh-100 mt-5 center contain container pa3 pa5-ns">
            <SplitComponents
                right={visionDiv}
            />

        </div>
        
    );
}