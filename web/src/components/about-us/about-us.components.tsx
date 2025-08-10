import FeatureBox from "./feature-box.component";
import ContentSection from "./content-section.component";
import { AboutUsBlock } from "@/lib/types";

export default function AboutUsComponent(props: Readonly<AboutUsBlock>) {
    
    return (
        <section id="overons" className="why-us">
      <div className="container">

        <div className="section-title">
          <h2>{props.title}</h2>
        </div>

        <div className="container">
          <ContentSection
            title={props.featureTitle}
            content={props.content}
            image={props.image}
          />

          <div className="row justify-content-around">
            <div className="col-12">
              <p className="text-center my-4 more-pt">{props.featureTitle}</p>
            </div>
            
            {props.features.map((feature, index) => (
              <FeatureBox
                key={index}
                number={index + 1}
                title={feature.title}
                text={feature.text}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
    )
}