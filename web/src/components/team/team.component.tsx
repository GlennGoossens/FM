import TeamMember from "./team-member.component";

export default function TeamComponent() {
    const teamMembers = [
      {
        src: "/assets/img/FM-76-geknipt.jpg",
        name: "Walter White",
        role: "Master Chef",
        description: "Description",
        delay: 100
      },
      {
        src: "/assets/img/FM-76-geknipt.jpg",
        name: "Sarah Jhonson",
        role: "Patissier",
        description: "Description",
        delay: 200
      },
      {
        src: "/assets/img/FM-76-geknipt.jpg",
        name: "William Anderson",
        role: "Cook",
        description: "Description",
        delay: 300
      }
    ];

    return (
        <section id="team" className="team">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Team</h2>
          <p>Our Coaches</p>
        </div>

        <div className="row">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              src={member.src}
              name={member.name}
              role={member.role}
              description={member.description}
              delay={member.delay}
            />
          ))}
        </div>

      </div>
    </section>
    )
}