function Description(props) {
    var descDiv = (
        <div class="flex flex-wrap items-center h-100 pt5 pt3-ns">
            <div>
                <p class="black-50 f4 f4-m f3-l fw4 lh-copy">
                    Using light that mimics the brightness of the natural outdoors, light therapy can help treat the winter blues as well as improve sleep quality for people with sleep schedule problems.
                </p>

                <p class="black-70 pt4-m pt6-l f4 f4-m f3-l fw4 lh-copy">
                    However, many people are unaware of light therapy, and existing products on the market do not offer a portable and discreet method of treatment.
                </p>
            </div>
        </div>
    );

    var imageDiv = (
        <div class="w-100 pt6-ns flex flex-wrap justify-center">
            {competitors.map(competitor => (
                <img src={competitor} class="mw3 mw4-m mw5-l ph3 ph3 pb3 pv4-m pv3-l">
                </img>
            ))}
        </div>
    );

    return (
        <div
            class="vh-100 center contain container pa3 ph5-ns flex flex-wrap justify-center">
            <SplitComponents
                left={descDiv}
                right={imageDiv}
            />

        </div>
    );
}

/*
<p class="ph5 f4 f4-m f3-l fw4 lh-copy">
                    Our product, Lumos glasses, is a pair of light therapy glasses that aims to solve these problems with innovative technology. Through creative design, we have made Lumos glasses to be the most effective, fashionable, and affordable light therapy glasses on the market.
                </p>
<<<<<<< HEAD
*/
=======
*/
>>>>>>> update design of front page (#6)
