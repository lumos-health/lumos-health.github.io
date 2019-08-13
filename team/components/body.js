function Body(props) {
    return (
        <header class="body">
            <div class="flex flex-wrap  pt6">
                {teamMembers.map(member => (
                        <div class="w-100 w-50-m w-third-l mv5">
                        <Member
                            name={member.name}
                            photo_url={member.photo_url}
                            linked_in_url={member.linked_in_url}
                        />
                        </div>
                    )
                )}
            </div>
        </header>
    );
}