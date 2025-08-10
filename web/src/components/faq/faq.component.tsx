"use client";

import { useState } from "react";
import FaqTab from "./faq-tab.component";
import FaqItem from "./faq-item.component";
import { FaqBlock } from "@/lib/types";

export default function FaqComponent(props: FaqBlock) {
  console.log(props);
    const [activeTab, setActiveTab] = useState("algemeen");

    const faqTabs = [
      {
        id: "algemeen",
        label: "Algemeen",
        isActive: activeTab === "algemeen"
      },
      {
        id: "personaltraining",
        label: "Personal Training",
        isActive: activeTab === "personaltraining"
      },
      {
        id: "wod",
        label: "WOD",
        isActive: activeTab === "wod"
      }
    ];

    const handleTabClick = (tabId: string) => {
      setActiveTab(tabId);
    };

    const renderFaqItems = () => {
      const currentData = props.items.filter((item) => item.category.replace(/\s+/g, '').toLowerCase() === activeTab.replace(/\s+/g, '').toLowerCase());
      return currentData.map((item, index) => (
        <FaqItem
          key={index}
          number={item.number}
          question={item.question}
          answer={item.answer}
          category={item.category}
          delay={item.delay}
        />
      ));
    };

    return (
        <section id="faq" className="faq section">

      <div className="container section-title" data-aos="fade-up">
        <h2>{props.title}</h2>
        <p>{props.subtitle}</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row justify-content-center">
          <div className="col-lg-10">

            <div className="faq-tabs mb-5">
              <ul className="nav nav-pills justify-content-center" id="faqTab" role="tablist">
                {faqTabs.map((tab, index) => (
                  <FaqTab
                    key={index}
                    id={tab.id}
                    label={tab.label}
                    isActive={tab.isActive}
                    onClick={() => handleTabClick(tab.id)}
                  />
                ))}
              </ul>
            </div>

            <div className="tab-content" id="faqTabContent">
              <div className="tab-pane fade show active" role="tabpanel">
                <div className="faq-list">
                  {renderFaqItems()}
                </div>
              </div>
            </div>

            <div className="faq-cta text-center mt-5" data-aos="fade-up" data-aos-delay="300">
              <p>{props.contactText}</p>
              <a href={props.contactButton.url} className="btn btn-primary">{props.contactButton.text}</a>
            </div>

          </div>
        </div>

      </div>

    </section>
    )
}