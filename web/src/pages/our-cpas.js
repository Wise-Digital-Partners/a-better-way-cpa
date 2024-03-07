import React, { Fragment, useEffect, useRef, useState } from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import GraphQLErrorList from "../components/Blog/graphql-error-list";
import { mapEdgesToNodes } from "../lib/helpers";
import CallToAction from "../components/Repeating/CTA";
import { imageUrlFor } from "../lib/image-url";
import { Listbox, Transition } from "@headlessui/react";
import phoneIcon from "../images/TeamPopup/phone-icon.svg";
import mailIcon from "../images/TeamPopup/mail-icon.svg";
import linkedinIcon from "../images/TeamPopup/linkedin-icon.svg";
import closeIcon from "../images/TeamPopup/close-icon.svg";

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/Our CPAs.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Our CPAs.jpg" }
    ) {
      publicURL
    }
  }
`;

const ArchivePage = (props) => {
  const { data, errors } = props;
  const [teamMembersNodes, setTeamMembersNodes] = useState([]);
  const [serviceTypeNodes, setServiceTypeNodes] = useState([]);
  const [taxSpecialtyNodes, setTaxSpecialtyNodes] = useState([]);
  const [industryNodes, setIndustryNodes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMemberId, setSelectedMemberId] = useState("");
  const [bookkeepingSpecialtyNodes, setBookkeepingSpecialtyNodes] = useState(
    []
  );
  const [fractionalCFOSpecialtyNodes, setFractionalCFOSpecialtyNodes] =
    useState([]);
  useEffect(() => {
    fetch(
      `https://ortk2jhp.api.sanity.io/v2021-06-07/data/query/production?query=
      *[_type == "teamMember"]{
        title,
        name,
        emailAddress,
        biography,
        linkedinProfile,
        _id,
        cpa,
        teamMemberOrder,
        directPhoneNumber,
        "bookkeepingSpecialties": bookkeepingSpecialties[]->{title},
        "fractionalCFOSpecialties": fractionalCFOSpecialties[]->{title},
        "taxSpecialties": taxSpecialties[]->{title},
        "industriesFilter": industriesFilter[]->{title},
        "headshotUrl":headshot.asset->url, 
        "category":category->{title},
        "serviceTypes":serviceTypes[]->{title}
      } | order(teamMemberOrder asc)`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTeamMembersNodes(data.result);
        setFilteredArray(data.result);
      });

    fetch(
      `https://ortk2jhp.api.sanity.io/v2021-06-07/data/query/production?query=
        *[_type == "teamMemberServiceType"]{
          title
        }| order(order asc)`
    )
      .then((response) => response.json())
      .then((data) => {
        setServiceTypeNodes([{ title: "All" }, ...data.result]);
        setSelectedServiceType({ title: "All" });
      });

    fetch(
      `https://ortk2jhp.api.sanity.io/v2021-06-07/data/query/production?query=
          *[_type == "teamMemberTaxSpecialty"]{
            title
          }| order(order asc)`
    )
      .then((response) => response.json())
      .then((data) => {
        let withCategory = data.result.map((e) => ({
          ...e,
          category: "Taxes",
        }));
        setTaxSpecialtyNodes([
          { title: "All" },
          { title: "Tax", unavailable: true },
          ...withCategory,
        ]);
        setSelectedSpecialty({ title: "All" });
      });

    fetch(
      `https://ortk2jhp.api.sanity.io/v2021-06-07/data/query/production?query=
      *[_type == "teamMemberBookkeepingSpecialty"]{
          title
        }| order(order asc)`
    )
      .then((response) => response.json())
      .then((data) => {
        let withCategory = data.result.map((e) => ({
          ...e,
          category: "Bookkeeping",
        }));
        setBookkeepingSpecialtyNodes([
          { title: "Bookkeeping", unavailable: true },
          ...withCategory,
        ]);
      });

    fetch(
      `https://ortk2jhp.api.sanity.io/v2021-06-07/data/query/production?query=
      *[_type == "teamMemberFractionalCFOSpecialty"]{
        title
      }| order(order asc)`
    )
      .then((response) => response.json())
      .then((data) => {
        let withCategory = data.result.map((e) => ({
          ...e,
          category: "Fractional CFO",
        }));
        setFractionalCFOSpecialtyNodes([
          {
            title: "Fractional CFO",
            unavailable: true,
          },
          ...withCategory,
        ]);
      });

    fetch(
      `https://ortk2jhp.api.sanity.io/v2021-06-07/data/query/production?query=
      *[_type == "teamMemberIndustry"]{
        title
      }| order(order asc)`
    )
      .then((response) => response.json())
      .then((data) => {
        setIndustryNodes([{ title: "All" }, ...data.result]);
        setSelectedIndustry({ title: "All" });
      });
  }, []);

  // Combine Specialty Arrays
  const specialtyNodes = [
    ...taxSpecialtyNodes,
    ...bookkeepingSpecialtyNodes,
    ...fractionalCFOSpecialtyNodes,
  ];

  const [selectedServiceType, setSelectedServiceType] = useState(
    serviceTypeNodes[0]
  );
  const [selectedSpecialty, setSelectedSpecialty] = useState(specialtyNodes[0]);
  const [selectedIndustry, setSelectedIndustry] = useState(industryNodes[0]);
  const [filteredArray, setFilteredArray] = useState(teamMembersNodes);

  let savedSpecialty = "";
  if (typeof window !== `undefined`) {
    savedSpecialty = localStorage.getItem("specialty");
  }

  const isTeamMembersNodesValid = () => {
    return teamMembersNodes && teamMembersNodes.length > 0;
  };

  const isServiceTypeValid = (item) => {
    return item && item.serviceTypes;
  };

  const isTaxSpecialtiesValid = (item) => {
    return item && item.taxSpecialties;
  };

  const isBookkeepingSpecialtiesValid = (item) => {
    return item && item.BookkeepingSpecialties;
  };

  const isFractionalCFOSpecialtiesValid = (item) => {
    return item && item.fractionalCFOSpecialties;
  };

  const isIndustriesFilterValid = (item) => {
    return item && item.industriesFilter;
  };

  useEffect(() => {
    if (typeof window !== `undefined`) {
      if (savedSpecialty) {
        setSelectedSpecialty(JSON.parse(savedSpecialty));
        localStorage.removeItem("specialty");
      }
    }

    // Conditional filters
    if (
      selectedServiceType &&
      selectedServiceType.title !== serviceTypeNodes[0].title &&
      selectedSpecialty &&
      selectedSpecialty.title !== specialtyNodes[0].title &&
      selectedIndustry &&
      selectedIndustry.title !== industryNodes[0].title
    ) {
      setFilteredArray(() => {
        const newArray =
          isTeamMembersNodesValid() &&
          teamMembersNodes
            .filter(
              (items) =>
                isServiceTypeValid(items) &&
                items.serviceTypes.find(
                  (item) => item.title === selectedServiceType.title
                )
            )
            .filter((items) =>
              selectedSpecialty.category === "Taxes"
                ? isTaxSpecialtiesValid(items) &&
                  items.taxSpecialties.find(
                    (item) => item.title === selectedSpecialty.title
                  )
                : selectedSpecialty.category === "Bookkeeping"
                ? isBookkeepingSpecialtiesValid(items) &&
                  items.bookkeepingSpecialties.find(
                    (item) => item.title === selectedSpecialty.title
                  )
                : selectedSpecialty.category === "Fractional CFO"
                ? isFractionalCFOSpecialtiesValid(items) &&
                  items.fractionalCFOSpecialties.find(
                    (item) => item.title === selectedSpecialty.title
                  )
                : null
            )
            .filter(
              (items) =>
                isIndustriesFilterValid(items) &&
                items.industriesFilter.find(
                  (item) => item.title === selectedIndustry.title
                )
            );
        return newArray;
      });
    } else if (
      selectedServiceType &&
      selectedServiceType.title !== serviceTypeNodes[0].title &&
      selectedSpecialty &&
      selectedSpecialty.title !== specialtyNodes[0].title &&
      selectedIndustry &&
      selectedIndustry.title === industryNodes[0].title
    ) {
      setFilteredArray(() => {
        const newArray =
          isTeamMembersNodesValid() &&
          teamMembersNodes
            .filter(
              (items) =>
                isServiceTypeValid(items) &&
                items.serviceTypes.find(
                  (item) => item.title === selectedServiceType.title
                )
            )
            .filter((items) =>
              selectedSpecialty.category === "Taxes"
                ? isTaxSpecialtiesValid(items) &&
                  items.taxSpecialties.find(
                    (item) => item.title === selectedSpecialty.title
                  )
                : selectedSpecialty.category === "Bookkeeping"
                ? isBookkeepingSpecialtiesValid(items) &&
                  items.bookkeepingSpecialties.find(
                    (item) => item.title === selectedSpecialty.title
                  )
                : selectedSpecialty.category === "Fractional CFO"
                ? isFractionalCFOSpecialtiesValid(items) &&
                  items.fractionalCFOSpecialties.find(
                    (item) => item.title === selectedSpecialty.title
                  )
                : null
            );
        return newArray;
      });
    } else if (
      selectedServiceType &&
      selectedServiceType.title === serviceTypeNodes[0].title &&
      selectedSpecialty &&
      selectedSpecialty.title !== specialtyNodes[0].title &&
      selectedIndustry &&
      selectedIndustry.title !== industryNodes[0].title
    ) {
      setFilteredArray(() => {
        const newArray =
          isTeamMembersNodesValid() &&
          teamMembersNodes
            .filter((items) =>
              selectedSpecialty.category === "Taxes"
                ? isTaxSpecialtiesValid(items) &&
                  items.taxSpecialties.find(
                    (item) => item.title === selectedSpecialty.title
                  )
                : selectedSpecialty.category === "Bookkeeping"
                ? isBookkeepingSpecialtiesValid(items) &&
                  items.bookkeepingSpecialties.find(
                    (item) => item.title === selectedSpecialty.title
                  )
                : selectedSpecialty.category === "Fractional CFO"
                ? isFractionalCFOSpecialtiesValid(items) &&
                  items.fractionalCFOSpecialties.find(
                    (item) => item.title === selectedSpecialty.title
                  )
                : null
            )
            .filter(
              (items) =>
                isIndustriesFilterValid(items) &&
                items.industriesFilter.find(
                  (item) => item.title === selectedIndustry.title
                )
            );
        return newArray;
      });
    } else if (
      selectedServiceType &&
      selectedServiceType.title !== serviceTypeNodes[0].title &&
      selectedSpecialty &&
      selectedSpecialty.title === specialtyNodes[0].title &&
      selectedIndustry &&
      selectedIndustry.title !== industryNodes[0].title
    ) {
      setFilteredArray(() => {
        const newArray =
          isTeamMembersNodesValid() &&
          teamMembersNodes
            .filter(
              (items) =>
                isServiceTypeValid(items) &&
                items.serviceTypes.find(
                  (item) => item.title === selectedServiceType.title
                )
            )
            .filter(
              (items) =>
                isIndustriesFilterValid(items) &&
                items.industriesFilter.find(
                  (item) => item.title === selectedIndustry.title
                )
            );
        return newArray;
      });
    } else if (
      selectedServiceType &&
      selectedServiceType.title !== serviceTypeNodes[0].title &&
      selectedSpecialty &&
      selectedSpecialty.title === specialtyNodes[0].title &&
      selectedIndustry &&
      selectedIndustry.title === industryNodes[0].title
    ) {
      setFilteredArray(() => {
        const newArray =
          isTeamMembersNodesValid() &&
          teamMembersNodes.filter(
            (items) =>
              isServiceTypeValid(items) &&
              items.serviceTypes.find(
                (item) => item.title === selectedServiceType.title
              )
          );
        return newArray;
      });
    } else if (
      selectedServiceType &&
      selectedServiceType.title === serviceTypeNodes[0].title &&
      selectedSpecialty &&
      selectedSpecialty.title !== specialtyNodes[0].title &&
      selectedIndustry &&
      selectedIndustry.title === industryNodes[0].title
    ) {
      setFilteredArray(() => {
        const newArray =
          isTeamMembersNodesValid() &&
          teamMembersNodes.filter((items) =>
            selectedSpecialty.category === "Taxes"
              ? isTaxSpecialtiesValid(items) &&
                items.taxSpecialties.find(
                  (item) => item.title === selectedSpecialty.title
                )
              : selectedSpecialty.category === "Bookkeeping"
              ? isBookkeepingSpecialtiesValid(items) &&
                items.bookkeepingSpecialties.find(
                  (item) => item.title === selectedSpecialty.title
                )
              : selectedSpecialty.category === "Fractional CFO"
              ? isFractionalCFOSpecialtiesValid(items) &&
                items.fractionalCFOSpecialties.find(
                  (item) => item.title === selectedSpecialty.title
                )
              : null
          );
        return newArray;
      });
    } else if (
      selectedServiceType &&
      selectedServiceType.title === serviceTypeNodes[0].title &&
      selectedSpecialty &&
      selectedSpecialty.title === specialtyNodes[0].title &&
      selectedIndustry &&
      selectedIndustry.title !== industryNodes[0].title
    ) {
      setFilteredArray(() => {
        const newArray =
          isTeamMembersNodesValid() &&
          teamMembersNodes.filter(
            (items) =>
              isIndustriesFilterValid(items) &&
              items.industriesFilter.find(
                (item) => item.title === selectedIndustry.title
              )
          );
        return newArray;
      });
    } else {
      setFilteredArray(() => {
        const newArray = teamMembersNodes && teamMembersNodes;
        return newArray;
      });
    }
  }, [
    selectedServiceType,
    selectedSpecialty,
    selectedIndustry,
    savedSpecialty,
  ]);

  const principalTeamMembers = filteredArray
    .filter((items) => items.category?.title === "Principals")
    .map((item, i) => (
      <TeamMemberCard
        key={i}
        item={item}
        setIsModalOpen={setIsModalOpen}
        setSelectedMemberId={setSelectedMemberId}
      />
    ));

  const accelerators = filteredArray
    .filter((items) => items.category?.title === "Accelerators")
    .map((item, i) => (
      <TeamMemberCard
        key={i}
        item={item}
        setIsModalOpen={setIsModalOpen}
        setSelectedMemberId={setSelectedMemberId}
      />
    ));

  const leadershipTeamMembers = filteredArray
    .filter((items) => items.category?.title === "Leadership Team")
    .map((item, i) => (
      <TeamMemberCard
        key={i}
        item={item}
        setIsModalOpen={setIsModalOpen}
        setSelectedMemberId={setSelectedMemberId}
      />
    ));

  const privateWealthTeamMembers = filteredArray
    .filter((items) => items.category?.title === "Private Wealth Team")
    .sort((items) => (items.name === "Matt Poole" ? -1 : 1))
    .map((item, i) => (
      <TeamMemberCard
        key={i}
        item={item}
        setIsModalOpen={setIsModalOpen}
        setSelectedMemberId={setSelectedMemberId}
      />
    ));

  const managers = filteredArray
    .filter((items) => items.category?.title === "Managers")
    .map((item, i) => (
      <TeamMemberCard
        key={i}
        item={item}
        setIsModalOpen={setIsModalOpen}
        setSelectedMemberId={setSelectedMemberId}
      />
    ));

  const seniorAccountants = filteredArray
    .filter((items) => items.category?.title === "Senior Accountants")
    .map((item, i) => (
      <TeamMemberCard
        key={i}
        item={item}
        setIsModalOpen={setIsModalOpen}
        setSelectedMemberId={setSelectedMemberId}
      />
    ));

  const accountants = filteredArray
    .filter((items) => items.category?.title === "Accountants")
    .map((item, i) => (
      <TeamMemberCard
        key={i}
        item={item}
        setIsModalOpen={setIsModalOpen}
        setSelectedMemberId={setSelectedMemberId}
      />
    ));

  const operationsMembers = filteredArray
    .filter((items) => items.category?.title === "Operations")
    .map((item, i) => (
      <TeamMemberCard
        key={i}
        item={item}
        setIsModalOpen={setIsModalOpen}
        setSelectedMemberId={setSelectedMemberId}
      />
    ));

  const supportTeamMembers = filteredArray
    .filter((items) => items.category?.title === "Supporting Staff")
    .map((item, i) => (
      <TeamMemberCard
        key={i}
        item={item}
        setIsModalOpen={setIsModalOpen}
        setSelectedMemberId={setSelectedMemberId}
      />
    ));

  return (
    <Layout headerHasBorder={true}>
      <SearchEngineOptimization
        title="Our Dark Horse CPAs | A Better Way CPA"
        description="Discover and join the ranks of those who have found a better way to CPA. Become the newest member of the Dark Horse dream team."
      />
      <section className="mb-20 pt-8 md:mb-32 md:pt-14">
        <div className="container">
          <header className="mb-10 max-w-3xl md:mb-14">
            <h1>Meet the Team</h1>
            <p>
              When you work with Dark Horse, you work with a team of motivated
              and supportive people. Everyone's story is a little different,
              which is why we believe it is important to share!
            </p>
          </header>

          <div className="mb-12 grid gap-y-4 md:mb-16 md:flex md:gap-y-0 md:space-x-6">
            <Listbox
              value={selectedServiceType}
              onChange={setSelectedServiceType}
            >
              <div className="relative inline-block">
                <Listbox.Label className="tracking-widet mb-1 block text-xs font-bold uppercase text-primary-900/50">
                  Service Type
                </Listbox.Label>
                <Listbox.Button
                  className={({ open }) =>
                    `relative flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-transparent px-4 py-2.5 text-left text-base font-semibold text-primary-900 no-underline focus:outline-none md:w-[173px] md:py-3 ${
                      open && "shadow-7xl"
                    }`
                  }
                >
                  <span className="block truncate">
                    {selectedServiceType && selectedServiceType.title}
                  </span>
                  <i className="fas fa-chevron-down ml-2"></i>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-2 max-h-40 w-full overflow-auto rounded-lg border border-gray-200 bg-[#495D6E] py-1.5 text-sm shadow-7xl focus:outline-none">
                    {serviceTypeNodes &&
                      serviceTypeNodes.map((service, i) => (
                        <Listbox.Option
                          key={i}
                          className={({ active }) =>
                            `relative cursor-default select-none px-4 py-1.5 font-semibold text-white ${
                              active && "bg-primary-500 !text-gray-900"
                            }`
                          }
                          value={service}
                        >
                          {({ selected }) => (
                            <div className="flex items-center justify-between">
                              <span
                                className={`block ${
                                  selected && "font-semibold"
                                }`}
                              >
                                {service.title}
                              </span>
                              {selected ? (
                                <i className="fa-solid fa-check text-lg text-primary-500"></i>
                              ) : null}
                            </div>
                          )}
                        </Listbox.Option>
                      ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>

            <Listbox value={selectedSpecialty} onChange={setSelectedSpecialty}>
              <div className="relative inline-block">
                <Listbox.Label className="tracking-widet mb-1 block text-xs font-bold uppercase text-primary-900/50">
                  Specialty
                </Listbox.Label>
                <Listbox.Button
                  className={({ open }) =>
                    `relative flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-transparent px-4 py-2.5 text-left text-base font-semibold text-primary-900 no-underline focus:outline-none md:w-[173px] md:py-3 ${
                      open && "shadow-7xl"
                    }`
                  }
                >
                  <span className="block truncate">
                    {selectedSpecialty && selectedSpecialty.title}
                  </span>
                  <i className="fas fa-chevron-down ml-2"></i>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-2 max-h-40 w-full overflow-auto rounded-lg border border-gray-200 bg-[#495D6E] py-1.5 text-sm shadow-3xl focus:outline-none">
                    {specialtyNodes.map((service, i) => (
                      <Listbox.Option
                        key={i}
                        className={({ active }) =>
                          `relative cursor-default select-none px-4 py-1.5 font-semibold text-white ${
                            active && "bg-primary-500 !text-gray-900"
                          } ${
                            service.unavailable &&
                            "bg-white font-semibold !text-[#495D6E]"
                          } ${JSON.stringify(service)}`
                        }
                        value={service}
                        disabled={service.unavailable}
                      >
                        {({ selected }) => (
                          <div className="flex items-center justify-between">
                            <span
                              className={`block ${selected && "font-semibold"}`}
                            >
                              {service.title}
                            </span>
                            {selected ? (
                              <i className="fa-solid fa-check text-lg text-primary-500"></i>
                            ) : null}
                          </div>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>

            <Listbox value={selectedIndustry} onChange={setSelectedIndustry}>
              <div className="relative inline-block">
                <Listbox.Label className="tracking-widet mb-1 block text-xs font-bold uppercase text-primary-900/50">
                  Industry
                </Listbox.Label>
                <Listbox.Button
                  className={({ open }) =>
                    `relative flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-transparent px-4 py-2.5 text-left text-base font-semibold text-primary-900 no-underline focus:outline-none md:w-[173px] md:py-3 ${
                      open && "shadow-7xl"
                    }`
                  }
                >
                  <span className="block truncate">
                    {selectedIndustry && selectedIndustry.title}
                  </span>
                  <i className="fas fa-chevron-down ml-2"></i>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-2 max-h-40 w-full overflow-auto rounded-lg border border-gray-200 bg-[#495D6E] py-1.5 text-sm shadow-3xl focus:outline-none">
                    {industryNodes.map((service, i) => (
                      <Listbox.Option
                        key={i}
                        className={({ active }) =>
                          `relative cursor-default select-none px-4 py-1.5 font-semibold text-white ${
                            active && "bg-primary-500 !text-gray-900"
                          }`
                        }
                        value={service}
                      >
                        {({ selected }) => (
                          <div className="flex items-center justify-between">
                            <span
                              className={`block ${selected && "font-semibold"}`}
                            >
                              {service.title}
                            </span>
                            {selected ? (
                              <i className="fa-solid fa-check text-lg text-primary-500"></i>
                            ) : null}
                          </div>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>

          {filteredArray.length > 0 ? (
            <>
              {principalTeamMembers.length > 0 && (
                <TeamMemberGroup
                  title="Principals"
                  items={principalTeamMembers}
                />
              )}

              {accelerators.length > 0 && (
                <TeamMemberGroup title="Accelerators" items={accelerators} />
              )}

              {leadershipTeamMembers.length > 0 && (
                <TeamMemberGroup
                  title="Leadership Team"
                  items={leadershipTeamMembers}
                />
              )}

              {privateWealthTeamMembers.length > 0 && (
                <TeamMemberGroup
                  title="Dark Horse Private Wealth"
                  items={privateWealthTeamMembers}
                />
              )}

              {managers.length > 0 && (
                <TeamMemberGroup title="Managers" items={managers} />
              )}

              {seniorAccountants.length > 0 && (
                <TeamMemberGroup
                  title="Senior Accountants"
                  items={seniorAccountants}
                />
              )}

              {accountants.length > 0 && (
                <TeamMemberGroup title="Accountants" items={accountants} />
              )}

              {operationsMembers.length > 0 && (
                <TeamMemberGroup title="Operations" items={operationsMembers} />
              )}

              {supportTeamMembers.length > 0 && (
                <>
                  <header className="mb-8">
                    <div className="heading-three">Supporting Staff</div>
                  </header>
                  <div className="mb-16 grid grid-cols-2 gap-x-4 gap-y-6 md:mb-20 md:grid-cols-3 md:gap-x-6 md:gap-y-12 lg:grid-cols-4">
                    {supportTeamMembers}
                    <div>
                      <div className="group font-normal no-underline">
                        <div className="mb-3.5 overflow-hidden rounded-4xl">
                          <GatsbyImage
                            image={
                              data.teamPlaceholder.childImageSharp
                                .gatsbyImageData
                            }
                            className="over w-full scale-100 transform blur-none filter transition-all duration-500 ease-linear md:group-hover:scale-105"
                          />
                        </div>
                        <div className="mb-1 text-lg font-bold text-black md:text-xl">
                          You?
                        </div>
                        <div className="mb-0 text-sm text-gray-500">
                          Join the Team
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </>
          ) : (
            <p> No results found.</p>
          )}
        </div>
      </section>
      <MemberModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        hasCloseBtn={true}
        onClose={null}
        filteredArray={filteredArray}
        selectedMemberId={selectedMemberId}
      ></MemberModal>
    </Layout>
  );
};

export const MemberModal = ({
  isModalOpen,
  setIsModalOpen,
  hasCloseBtn,
  onClose,
  children,
  filteredArray,
  selectedMemberId,
}) => {
  //const [isModalOpen, setModalOpen] = useState(isOpen);
  const modalRef = useRef(null);
  const bioRef = useRef(null);
  const [member, setMember] = useState(null);

  useEffect(() => {
    const member =
      filteredArray &&
      filteredArray.find((item) => item._id == selectedMemberId);
    member && setMember(member);
    console.log(member);
  }, [selectedMemberId]);

  useEffect(() => {
    const modalElement = modalRef.current;
    if (modalElement) {
      if (isModalOpen) {
        modalElement.showModal();
        document.body.style.overflow = "hidden";
      } else {
        modalElement.close();
        document.body.style.overflow = "unset";
      }
    }
  }, [isModalOpen]);

  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }
    setIsModalOpen(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      handleCloseModal();
    }
  };

  return (
    <dialog
      ref={modalRef}
      className="relative p-2 border-0 backdrop:bg-black/60 w-full bg-transparent"
      onKeyDown={handleKeyDown}
    >
      <div className="bg-[#314251] w-full 2xl:max-w-[1500px] mx-auto pb-[65px]">
        <div className="flex items-end justify-end mb-[65px]">
          {hasCloseBtn && (
            <button
              className="modal-close-btn text-white mr-9 mt-9"
              onClick={handleCloseModal}
            >
              <img
                src={closeIcon}
                alt="close icon"
                className="opacity-70 group-hover:opacity-100 transition-all duration-300 ease-linear"
              />
            </button>
          )}
        </div>
        <div className="mb-[65px]">
          {member && (
            <div className="w-full grid grid-cols-1 lg:grid-cols-[345px_auto] mx-auto text-black px-[120px] gap-x-12">
              <div className="text-white no-underline flex flex-col gap-y-6">
                <img
                  src={member.headshotUrl}
                  className="z-0 w-full scale-100 transform rounded-4xl blur-none filter transition-all duration-500 ease-linear md:group-hover:scale-105"
                />
                <div className="flex flex-col gap-y-3">
                  {member.directPhoneNumber && (
                    <a
                      href={`tel:${member.directPhoneNumber}`}
                      className="no-underline flex gap-x-4"
                    >
                      <img
                        src={phoneIcon}
                        alt="phone icon"
                        className="opacity-70 group-hover:opacity-100 transition-all duration-300 ease-linear"
                      />
                      <div>{member.directPhoneNumber}</div>
                    </a>
                  )}
                  {member.emailAddress && (
                    <a
                      href={`mailto:${member.emailAddress}`}
                      className="no-underline flex gap-x-4"
                    >
                      <img
                        src={mailIcon}
                        alt="mail icon"
                        className="opacity-70 group-hover:opacity-100 transition-all duration-300 ease-linear"
                      />
                      <div>{member.emailAddress}</div>
                    </a>
                  )}
                  {member.linkedinProfile && (
                    <a
                      href={`${member.linkedinProfile}`}
                      className="no-underline flex gap-x-4"
                      target="_blank"
                    >
                      <img
                        src={linkedinIcon}
                        alt="linkedin icon"
                        className="opacity-70 group-hover:opacity-100 transition-all duration-300 ease-linear"
                      />
                      <div>LinkedIn</div>
                    </a>
                  )}
                </div>
              </div>
              <div className="text-white">
                <div className="text-heading font-bold text-[48px] leading-[58px]">
                  {member.name}
                </div>
                <div className="font-body text-sm leading-[18px] opacity-40 uppercase mt-3">
                  {member.title} {member.cpa && ", CPA"}
                </div>
                <div
                  className="font-body leading-[24px] text-[#E7F1F3] mt-8 whitespace-pre-wrap"
                  // ref={bioRef}
                >
                  {member.biography && member.biography[0].children[0].text}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </dialog>
  );
};

const TeamMemberGroup = ({ title, items }) => {
  return (
    <>
      <header className="mb-8">
        <div className="heading-three">{title}</div>
      </header>
      <div className="mb-16 grid grid-cols-2 gap-x-4 gap-y-6 md:mb-20 md:grid-cols-3 md:gap-x-6 md:gap-y-12 lg:grid-cols-4">
        {items}
      </div>
    </>
  );
};
const TeamMemberCard = ({ item, setIsModalOpen, setSelectedMemberId }) => {
  const handleClick = () => {
    setIsModalOpen(true);
    setSelectedMemberId(item._id);
    console.log(item._id);
  };
  return (
    <div className="cursor-pointer" onClick={handleClick}>
      <div className="group font-normal no-underline">
        <div className="mb-3.5 overflow-hidden rounded-4xl">
          <img
            src={item.headshotUrl}
            className="z-0 w-full scale-100 transform rounded-4xl blur-none filter transition-all duration-500 ease-linear md:group-hover:scale-105"
          />
        </div>
        <div className="mb-1 text-lg font-bold text-white md:text-xl">
          {item.name}
          {item.cpa && ", CPA"}
        </div>
        <div className="mb-0 text-sm text-gray-50">{item.title}</div>
      </div>
    </div>
  );
};

export default ArchivePage;
