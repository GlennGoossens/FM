"use client";

import { useState } from "react";
import FaqTab from "./faq-tab.component";
import FaqItem from "./faq-item.component";

export default function FaqComponent() {
    const [activeTab, setActiveTab] = useState("general");

    const faqTabs = [
      {
        id: "general",
        icon: "bi bi-question-circle",
        label: "General",
        isActive: activeTab === "general"
      },
      {
        id: "pricing",
        icon: "bi bi-credit-card",
        label: "Pricing",
        isActive: activeTab === "pricing"
      },
      {
        id: "support",
        icon: "bi bi-headset",
        label: "Support",
        isActive: activeTab === "support"
      }
    ];

    const faqData = {
      general: [
        {
          number: 1,
          question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
          answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
          delay: 200
        },
        {
          number: 2,
          question: "Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?",
          answer: [
            "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim.",
            "Mauris ultrices eros in cursus turpis massa tincidunt dui. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus et netus et malesuada."
          ],
          delay: 300
        },
        {
          number: 3,
          question: "Dolor sit amet consectetur adipiscing elit pellentesque?",
          answer: [
            "Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus.",
            "Mauris ultrices eros in cursus turpis massa tincidunt dui. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus et netus et malesuada."
          ],
          delay: 400
        }
      ],
      pricing: [
        {
          number: 1,
          question: "Ac odio tempor orci dapibus ultrices in iaculis?",
          answer: "Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in.",
          delay: 200
        },
        {
          number: 2,
          question: "Tempus quam pellentesque nec nam aliquam sem et tortor consequat?",
          answer: [
            "Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque.",
            "Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan."
          ],
          delay: 300
        },
        {
          number: 3,
          question: "Varius vel pharetra vel turpis nunc eget lorem dolor?",
          answer: "Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque.",
          delay: 400
        }
      ],
      support: [
        {
          number: 1,
          question: "Tortor vitae purus faucibus ornare suspendisse sed nisi lacus?",
          answer: [
            "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
            "Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est."
          ],
          delay: 200
        },
        {
          number: 2,
          question: "Tortor dignissim convallis aenean et tortor at risus viverra?",
          answer: "In hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit.",
          delay: 300
        },
        {
          number: 3,
          question: "Venenatis urna cursus eget nunc scelerisque viverra mauris in?",
          answer: [
            "Mauris ultrices eros in cursus turpis massa tincidunt dui. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus et netus et malesuada.",
            "Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit."
          ],
          delay: 400
        }
      ]
    };

    const handleTabClick = (tabId: string) => {
      setActiveTab(tabId);
    };

    const renderFaqItems = () => {
      const currentData = faqData[activeTab as keyof typeof faqData];
      return currentData.map((item, index) => (
        <FaqItem
          key={index}
          number={item.number}
          question={item.question}
          answer={item.answer}
          delay={item.delay}
        />
      ));
    };

    return (
        <section id="faq" className="faq section">

      <div className="container section-title" data-aos="fade-up">
        <h2>Frequently Asked Questions</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
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
                    icon={tab.icon}
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
              <p>Still have questions? We&apos;re here to help!</p>
              <a href="#" className="btn btn-primary">Contact Support</a>
            </div>

          </div>
        </div>

      </div>

    </section>
    )
}