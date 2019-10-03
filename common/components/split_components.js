function SplitComponents(props) {
    var splitClass = "split-components flex";

    if (props.rightOnTop) {
        splitClass += " flex-wrap-reverse";
    } else {
        splitClass += " flex-wrap";
    }

    var classNamesLeft = "w-100 w-50-ns " + props.classNamesLeft
    var classNamesRight = "w-100 w-50-ns " + props.classNamesRight

    return (
        <div class={splitClass}> 
            <div class={classNamesLeft}>
                {props.left}
            </div>
            <div class={classNamesRight}>
                {props.right}
            </div>
        </div>
    );
}