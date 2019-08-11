function Description(props) {
    
    var descDiv = (
        <div class="flex flex-wrap items-center h-100">
            <div>
                <p class="black-50 f4 f4-m f3-l fw4 lh-copy">
                    Using light that mimics the brightness of the natural outdoors, light therapy can help treat the winter blues as well as improve sleep quality for people with sleep schedule problems.
                </p>

                <p class="pt3 pt4-m pt6-l  f4 f4-m f3-l fw4 lh-copy">
                    However, many people are unaware of light therapy, and existing products on the market do not offer a portable and discreet method of treatment.
                </p>
            </div>
            
        </div>
    );

    var imageDiv = (
        <div class="w-100 pt3-ns flex flex-wrap justify-center">
            {competitors.map(competitor => (
                <img src={competitor} class="mw5 ph3 pv1 ph3 pv3">
                </img>
            ))}
        </div>
    );

    return (
        <div
            class="description mt-5 center contain container pa3 ph5-ns flex flex-wrap justify-center">
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
*/