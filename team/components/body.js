function Body(props) {
    return (
        <header class="body">
            <div class="flex flex-wrap pt5 justify-center mb5">
                {teamMembers.map(member => (
                        <div class="mh4 mt5">
                        <Member
                            name={member.name}
                            photo_url={member.photo_url}
                            linked_in_url={member.linked_in_url}
                            description={member.description}
                        />
                        </div>
                    )
                )}
            </div>
        </header>
    );
}