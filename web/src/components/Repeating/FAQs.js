import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

const FAQs = ({ className, uniqueFaqs }) => {
  let faqs = "";

  uniqueFaqs
    ? (faqs = uniqueFaqs)
    : (faqs = [
        {
          question:
            "How long does the transition process take if I decide to join the Dark Horse Team as a Principal? ",
          answer: (
            <>
              <p className="text-secondary-800 mb-0">
                We target a 6-week transition process. However, this is unique
                to your situation, the software you currently use, and how you
                operate your current practice. We create a customized transition
                plan for every incoming Principal to ensure everything is
                accounted for.
              </p>
            </>
          ),
        },
        {
          question: "Is Dark Horse acquiring my client base?",
          answer: (
            <>
              <p className="text-secondary-800 mb-0">
                No, all your clients remain your clients. There is no
                non-compete with Dark Horse, and we like it that way. We know
                that the best person to serve your clients is you!
              </p>
            </>
          ),
        },
        {
          question:
            "How do I know that this is a financially beneficial move for me?",
          answer: (
            <>
              <p className="text-secondary-800 mb-0">
                As an incoming <b>Principal</b>, we take the last 12 months of
                your P&L and compare them to what the same financials would look
                like under the Dark Horse model. Transparency in this process is
                extremely important to us, and we want to make sure you have all
                the information you need to make the right decision.
              </p>
            </>
          ),
        },
        {
          question:
            "What happens if I am using software that is not part of Dark Horse's tech stack?",
          answer: (
            <>
              <p className="text-secondary-800">
                There are a number of apps we consider to be part of our core
                tech stack. For those apps, we'll assist you in migrating your
                data but will require that you incorporate it within your
                practice. This helps us ensure we can serve everyone
                effectively, that staff can be trained in universal ways and get
                assistance from other teams, that we have visibility and
                transferability should something happen to you, and that all of
                the improvements we are continually making benefit your
                practice.
              </p>
              <p className="text-secondary-800 mb-0">
                If it's not part of our core tech stack and helps your practice,
                you're more than free to use it at Dark Horse so long as it
                doesn't create security concerns. It will, however, be an
                expense charged to your P&L if it's not part of the core stack
                that we provide to all Principals.
              </p>
            </>
          ),
        },
        {
          question:
            "How do you ensure that client relationships are maintained and transferred appropriately?",
          answer: (
            <>
              <p className="text-secondary-800">
                We believe in communication “early and often” during the
                transition. This is meant to be a celebration and not a
                headache, especially for your clients. Once we have all client
                information ported into our systems, we draft communications out
                of our systems (but coming from you) announcing the change, the
                steps (if any) the client needs to go through, and any other
                changes relevant to your relationship. We send these out a
                couple of times to ensure everyone is up to speed on the
                transition without overwhelming them with any irrelevant
                information.
              </p>
              <p className="text-secondary-800 mb-0">
                Dark Horse also provides onboarding support for you if a client
                has an issue or concern.
              </p>
            </>
          ),
        },
      ]);

  return (
    <section className={`pb-20 md:pb-30 ${className}`}>
      <div className="container">
        <header className="mb-10 md:mb-14">
          <h2>Tough questions, answered.</h2>
        </header>

        <Accordion allowZeroExpanded={true}>
          {faqs.map((faq, i) => {
            return (
              <div key={i}>
                <AccordionItem
                  className="bg-secondary-50 py-6 px-8 md:px-12 rounded-[60px] border-b border-secondary-800"
                  uuid={i}
                >
                  <AccordionItemButton className="flex items-center justify-between hover:outline-none">
                    <AccordionItemState>
                      {(state) => {
                        return (
                          <>
                            <p className="heading-five text-secondary-800 font-bold mb-0">
                              {faq.question}
                            </p>

                            <i
                              className={`fal ${
                                state.expanded ? "fa-minus" : "fa-plus"
                              } text-4xl text-primary-500`}
                            ></i>
                          </>
                        );
                      }}
                    </AccordionItemState>
                  </AccordionItemButton>
                  <AccordionItemPanel className="pt-7 pb-2.5 animate-fadeIn">
                    {faq.answer}
                  </AccordionItemPanel>
                </AccordionItem>
              </div>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQs;
