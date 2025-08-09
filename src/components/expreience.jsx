'use client';
import React from 'react';
import { MdStarOutline, MdWorkOutline } from 'react-icons/md';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import PropTypes from 'prop-types';

const timelineElementStyle = {
  background: 'rgb(255, 255, 255)',
  border: "1px solid rgba(0, 0, 0, 0.05)",
  textAlign: "left",
  boxShadow: "10px 5px 5px lightgrey"
};

const experienceData = [
  {
    title: "DevOps Engineer",
    company: "7Solutions Co.,Ltd.",
    location: "Bangkok, TH",
    period: "Jun 2025 - Present",
    description: "Managed Google Cloud Platform and Gitlab DevSeOps CI/CD pipelines with ArgoCD"
  },
  {
    title: "Cloud Engineer",
    company: "RIS Co.,Ltd.",
    location: "Bangkok, TH",
    period: "Mar 2023 - Jun 2025",
    description: "Managed hybrid cloud infrastructure on Azure integrated with on-premises VMware, and deployed and managed applications on AKS clusters."
  },
  {
    title: "DevOps Engineer",
    company: "Leap Solutions Asia Co.,Ltd.",
    location: "Bangkok, TH",
    period: "May 2022 - Mar 2023",
    description: "Managed K8s clusters and Middle-ware Applications in On-Prem Environment."
  },
  {
    title: "Cloud Engineer",
    company: "Leap Solutions Asia Co.,Ltd.",
    location: "Bangkok, TH",
    period: "Feb 2022 - May 2022",
    description: "Managed and Monitoring VPS and Priviate Cloud based on VMWare Product."
  },
  {
    title: "Delivery Engineer",
    company: "Noventiq (Thailand) Co,.Ltd.",
    location: "Bangkok, TH",
    period: "Feb 2021 - Feb 2022",
    description: "Imprement and Support Microsoft 365 Product."
  }
];

const TimelineElement = ({ title, company, location, period, description }) => (
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={timelineElementStyle}
    contentArrowStyle={{
      borderRight: '7px solid rgb(255,255,255)',
    }}
    date={period}
    iconStyle={{ background: 'rgb(255, 255, 255)' }}
    icon={<MdWorkOutline />}
  >
    <h3 className="vertical-timeline-element-title text-xl">{title}</h3>
    <h4 className="vertical-timeline-element-subtitle">{company}</h4>
    <h4 className="vertical-timeline-element-subtitle">{location}</h4>
    <p>{description}</p>
  </VerticalTimelineElement>
);

TimelineElement.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const Experience = () => {
  return (
    <section className="mb-25 text-center sm:mb-25 text-black">
      <h2 className="text-3xl mb-10 text-center font-mono">Work Experience</h2>
      <div className="flex flex-col items-center justify-center font-mono">
        <VerticalTimeline lineColor='darkgrey'>
          {experienceData.map((experience, index) => (
            <TimelineElement key={index} {...experience} />
          ))}
          <VerticalTimelineElement
            iconStyle={{ background: 'rgb(255,255,255)' }}
            icon={<MdStarOutline />}
          />
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;