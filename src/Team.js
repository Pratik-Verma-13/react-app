import { useState } from "react";
import boy from "./images/boy.jpg";
import fb from "./images/facebook.png";
import linkedin from "./images/linkedin.png";
import email from "./images/email.png";

const Team = () => {

    const [members, setmember] = useState(
        [
            {
                name: "Raman",
                team: "Tech Team",
                linkedin: "linkedin.com/A",
                image: boy,
                fb: "fb.com/A",
                email: "abc@email.com"
            },
            {
                name: "Shyam",
                team: "Design Team",
                linkedin: "linkedin.com/B",
                image: boy,
                fb: "fb.com/B",
                email: "abc@email.com"
            },
            {
                name: "Dhiraj",
                team: "Events Team",
                linkedin: "linkedin.com/C",
                image: boy,
                fb: "fb.com/C",
                email: "abc@email.com"
            },
            {
                name: "Keshav",
                team: "Sponsorship Team",
                linkedin: "linkedin.com/D",
                image: boy,
                fb: "fb.com/D",
                email: "abc@email.com"
            },
            {
                name: "Raman",
                team: "Tech Team",
                linkedin: "linkedin.com/A",
                image: boy,
                fb: "fb.com/A",
                email: "abc@email.com"
            },
            {
                name: "Shyam",
                team: "Design Team",
                linkedin: "linkedin.com/B",
                image: boy,
                fb: "fb.com/B",
                email: "abc@email.com"
            },
            {
                name: "Dhiraj",
                team: "Events Team",
                linkedin: "linkedin.com/C",
                image: boy,
                fb: "fb.com/C",
                email: "abc@email.com"
            },
            {
                name: "Keshav",
                team: "Sponsorship Team",
                linkedin: "linkedin.com/D",
                image: boy,
                fb: "fb.com/D",
                email: "abc@email.com"
            },
            {
                name: "Raman",
                team: "Tech Team",
                linkedin: "linkedin.com/A",
                image: boy,
                fb: "fb.com/A",
                email: "abc@email.com"
            },
            {
                name: "Shyam",
                team: "Design Team",
                linkedin: "linkedin.com/B",
                image: boy,
                fb: "fb.com/B",
                email: "abc@email.com"
            },
            {
                name: "Dhiraj",
                team: "Events Team",
                linkedin: "linkedin.com/C",
                image: boy,
                fb: "fb.com/C",
                email: "abc@email.com"
            },
            {
                name: "Keshav",
                team: "Sponsorship Team",
                linkedin: "linkedin.com/D",
                image: boy,
                fb: "fb.com/D",
                email: "abc@email.com"
            }
        ]
    )

    const [teams, setTeams] = useState(
        ["Tech Team", "Events Team", "Sponsorship Team", "Design Team"]
    )

    return ( 
        <div className="team">
            <h1>Our Team</h1>
            
                {
                    teams.map(team => {
                        const filteredTeam = members.filter((member) => member.team === team);
                        return (
                            <div key={team} className="team-block">
                                <h2 className="event-heading">{team}</h2>
                                <div className="members-grid">
                                {filteredTeam.map((member) => (
                                    <div className="member" key={member.name}>
                                        <div className="member-image-div">
                                            <img src={member.image} alt="image" />
                                        </div>
                                        <p className="member-name">{member.name}</p>
                                        <div className="member-contact">
                                            <a href={member.fb}>
                                                <img src={fb} alt="" />
                                            </a>
                                            <a href={`mailto:${member.email}`}>
                                                <img src={email} alt="" />
                                            </a>
                                            <a href={member.linkedin}>
                                                <img src={linkedin} alt="" />
                                            </a>
                                        </div>
                                    </div>                              
                                ))}
                                </div>
                            </div>
                        );
                    })
                }
        </div>
     );
}
 
export default Team;