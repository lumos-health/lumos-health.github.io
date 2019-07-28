var tempJson = [
    { 
        name: "Harold",
        title: "Harold",
        photo_url: "https://photofeeler-blog.s3.amazonaws.com/pained-fake-forced-smile.jpg"
    },
    {
        name: "Trump",
        title: "Trump",
        photo_url: "https://www.snopes.com/tachyon/2017/10/vic-berger-trump.jpg"
    },
]

function Body(props) {
    return (
        <header class="body">
            <div class="flex flex-wrap justify-center items-center pt6">
                {tempJson.map(member => (
                        <div class="w-80 w-40-m w-30-l ma3 ma5-l">
                        <Member
                            name={member.name}
                            title={member.title}
                            photo_url={member.photo_url}
                        />
                        </div>
                    )
                )}
            </div>
        </header>
    );
}