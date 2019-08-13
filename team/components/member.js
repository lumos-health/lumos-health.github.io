function Member(props) {
    if (props.photo_url == "") {
        props.photo_url = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC";
    }

    return (
        <article 
        class="member center mw5 ba b--black-05 br3">
            <div class="tc ph3 pv4 flex flex-wrap justify-center">
                <img src={props.photo_url} class="br-100 h4 w4 dib ba b--black-05 pa2 img"/>
                <h1 class="f3 mb2 w-100">{props.name}</h1>
                <h2 class="f5 fw4 gray mt0 normal w-100">{props.description}</h2>
                <a
                    class="link dim dib black-70"
                    href={props.linked_in_url}>
                <svg class="db w2 h2" x="0px" y="0px" viewBox="0 0 48 48" >
                    <linearGradient gradientUnits="userSpaceOnUse" x1="23.9995"
                        y1="0" x2="23.9995" y2="48.0005" >
                        <stop offset="0" ></stop>
                        <stop offset="1" ></stop>
                    </linearGradient>
                    <path fill="currentColor" d="M48,42c0,3.313-2.687,6-6,6H6c-3.313,0-6-2.687-6-6V6 c0-3.313,2.687-6,6-6h36c3.313,0,6,2.687,6,6V42z"
                    ></path>
                    <g >
                        <g >
                            <path fill="#FFFFFF" d="M15.731,11.633c-1.608,0-2.658,1.083-2.625,2.527c-0.033,1.378,1.018,2.494,2.593,2.494 c1.641,0,2.691-1.116,2.691-2.494C18.357,12.716,17.339,11.633,15.731,11.633z M13.237,35.557h4.988V18.508h-4.988V35.557z M31.712,18.748c-1.595,0-3.222-0.329-4.956,2.36h-0.099l-0.087-2.599h-4.417c0.065,1.411,0.074,3.518,0.074,5.52v11.529h4.988 v-9.854c0-0.46,0.065-0.919,0.196-1.248c0.328-0.919,1.149-1.871,2.527-1.871c1.805,0,2.527,1.411,2.527,3.479v9.494h4.988V25.439 C37.455,20.713,34.993,18.748,31.712,18.748z"
                            ></path>
                        </g>
                    </g>
                    </svg>
                </a>
            </div>
        </article>
    );
}