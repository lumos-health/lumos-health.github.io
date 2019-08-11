function SplitComponents(props) {
    var splitClass = "split-components flex";

    if (props.rightOnTop) {
        splitClass += " flex-wrap-reverse";
    } else {
        splitClass += " flex-wrap";
    }

    return (
        <div class={splitClass}> 
            <div class="w-100 w-50-ns">
                {props.left}
            </div>
            <div class="w-100 w-50-ns">
                {props.right}
            </div>
        </div>
    );
}