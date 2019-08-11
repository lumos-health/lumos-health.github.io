function Description(props) {
    var descriptionStyle = {
        backgroundImage: "linear-gradient(ghostwhite, white)"
    };


    var descDiv = (
        <div class="flex flex-wrap items-center h-100 pt5 pt3-ns mw5 mw6-ns tc">
            <div>
                <p 
                    class="f4 f4-m f3-l fw4 lh-copy">
                    Using light that mimics the brightness of the natural outdoors, light therapy can <b>help treat the winter blues</b> as well as <b>improve sleep quality for people with sleep schedule problems.</b>
                </p>

                <p class="pt4-m pt6-l f4 f4-m f3-l fw4 lh-copy">
                    However, many people are unaware of light therapy, and existing products on the market do not offer a <b>portable</b> and <b>discreet</b> method of treatment. 
                </p>
            </div>
        </div>
    );

    return (
        <div
            style={descriptionStyle}
            class="vh-100 center contain container pa3 ph5-ns flex flex-wrap justify-center">
                {descDiv}
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
