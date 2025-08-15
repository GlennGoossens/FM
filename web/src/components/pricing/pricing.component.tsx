import { PricingBlock } from "@/lib/types";
import PricingGroupComponent from "./pricing-group.component";

export default function PricingComponent(props: PricingBlock) {
    const { title, subtitle, groups } = props;
    return (
        <section id="prijzen" className="pricing section-bg">
      <div className="container">

        <div className="section-title">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>

        {groups.map((group, groupIdx) => (
          <PricingGroupComponent key={groupIdx} {...group} />
        ))}

      </div>
    </section>
    )
}