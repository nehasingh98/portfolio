import React from 'react';

import './Experience.css';
import Square from '../../components/Square/Square';

import oracle_logo from '../../assets/oracle.jpg';
import uppcl_logo from '../../assets/uppcl.jpg';

const Experience = () => (
  <div className='cv__experience'>
    <div className='cv__experience-heading'>
      <Square className='cv__experience-heading_square' height={18} width={18} color={{ r: 133, g: 29, b: 252 }} />
      <h1>Experience</h1>
    </div>

    <p className='cv__experience-summary'>Cloud Analyst with 3+ years of experience at Oracle, delivering HCM Cloud solutions for Fortune 500 clients like Kroger and Ford. Specialized in integrations, reports, and HR process optimization. Gained early field exposure through an internship at UPPCL.</p>

    <div className='cv__experience-oracle cv__experience-comp'>
      <div className='cv__experience-oracle_rect cv__experience-comp_rect'></div>
      <div className='cv__experience-comp_description'>
        <h2>Oracle</h2>
        <h3>Cloud Analyst</h3>
        <ul>
          <li>Worked as a Cloud Analyst delivering HCM integrations and reports for Fortune 500 clients like Kroger and Ford.</li>
          <li>Developed 15+ reports, extracts, and formulas for Kroger, improving HR data accuracy and operational efficiency.</li>
          <li>Integrated Core HR, Payroll, and Compensation modules for Ford’s unified HCM Cloud Suite rollout, ensuring smooth implementation.</li>
          <li>Independently handled Tristates shadow project, owning 2 major extracts under tight timelines, showing initiative and adaptability.</li>
          <li>Recognized for consistently delivering bug fixes and enhancements ahead of deadlines.</li>
          <li>Mentored junior team members during onboarding and training, enhancing team productivity.</li>
        </ul>
      </div>
      <div className='cv__experience-comp_img-oracle'>
        <img src={oracle_logo} alt="oracle-logo" />
      </div>
    </div>

    <div className='cv__experience-uppcl cv__experience-comp'>
      <div className='cv__experience-uppcl_rect cv__experience-comp_rect'></div>
      <div className='cv__experience-comp_description'>
        <h2>UPPCL</h2>
        <h3>Intern</h3>
        <ul>
          <li>Visited substations to observe transformers, switchgear, and distribution panels in operation.</li>
          <li>Collected operational data and prepared short summaries for the technical team.</li>
          <li>Gained understanding of transformer operations, load distribution, and maintenance.</li>
          <li>Submitted report with key observations and safety recommendations.</li>
        </ul>
      </div>
      <div className='cv__experience-comp_img-uppcl'>
        <img src={uppcl_logo} alt="uppcl-logo" />
      </div>
    </div>
  </div>
);

export default Experience;
