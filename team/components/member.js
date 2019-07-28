function Member(props) {
    return (
        <article class="member center pa3 pa4-ns mv3 ba b--black-05 br3">
            <div class="tc">
                <img src={props.photo_url} class="br-100 h4 w4 dib ba b--black-05 pa2 img"/>
                <h1 class="f3 mb2">{props.name}</h1>
                <h2 class="f5 fw4 gray mt0">{props.title}</h2>
            </div>
        </article>
    );
}