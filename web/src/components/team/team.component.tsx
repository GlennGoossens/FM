import { getStrapiMedia } from "@/lib/utils";
import TeamMember from "./team-member.component";
import { TeamBlock } from "@/lib/types";

export default function TeamComponent(props: TeamBlock) {
    const { teamMembers } = props;

    return (
        <section id="team" className="team">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>{props.title}</h2>
          <p>{props.subtitle}</p>
        </div>

        <div className="row">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              image={member.image}
              name={member.name}
              jobTitle={member.jobTitle}
              description={member.description ?? ""}
              delay={index * 100}
            />
          ))}
        </div>

      </div>
    </section>
    )
}