function Body(props) {
    return (
        <header class="body">
            <div class="flex flex-wrap justify-center items-center pt6">
                {teamMembers.map(member => (
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