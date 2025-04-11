import { useState } from "react";

const Team = () => {

    const [team, setTeam] = useState(
        [
            {
                name: "A",
                team: "Tech Team",
                linkedin: "linkedin.com/A",
            },
            {
                name: "B",
                team: "Design Team",
                linkedin: "linkedin.com/B"
            },
            {
                name: "C",
                team: "Events Team",
                linkedin: "linkedin.com/C",
            },
            {
                name: "D",
                team: "Spons Team",
                linkedin: "linkedin.com/D"
            }
        ]
    )

    return ( 
        <div className="team">
            <div className="members-grid">
                {
                    team.map((member) => (
                        <div className="member">
                            <p>{member.name}</p>
                            <p>{member.team}</p>
                            <p>{member.linkedin}</p>
                        </div>
                    ))
                }
            </div>
        </div>
     );
}
 
export default Team;