import React from 'react';

import './Resume.css';
import Square from '../../components/Square/Square';
import Button from '../../components/Button/Button';
import resume from '../../assets/resume.pdf';

function Resume() {
  return (
    <div className='cv__resume'>
      <div className='cv__resume-heading'>
        <Square className='cv__resume-heading_square' height={18} width={18} color={{ r: 133, g: 29, b: 252 }} />
        <h1>Resume</h1>
      </div>

      <div className='cv__resume-summary'>
        <div className='cv__resume-summary_heading'>
          <h2>Summary</h2>
          <a href="https://drive.google.com/uc?export=download&id=1j6iS5iPd1hVKnoSjGDpcJ9aD4PkduiDO" target="_blank" rel="noopener noreferrer">
            <Button
              name='DOWNLOAD CV'
              className='downloadCV'
              textColor='#ffffff'
              backgroundColor='#8a2be2'
              borderColor='#725AC1'
              boxShadowColor='#725AC1'
              hoverTextColor='#725AC1'
              hoverBoxShadowColor='#ffffff00'
            />
          </a>
        </div>
        <div className='cv__resume-summary_description'>
          <p>Cloud Analyst with 3+ years at Oracle delivering HR tech solutions for Fortune 500 clients. Skilled in HCM integrations, reporting, and cross-functional collaboration. Currently pursuing PGDM in Marketing from GIM with a focus on digital campaigns, branding, and business strategy. Winner of national marketing competition with a ₹5 crore campaign plan. Combines technical background with creative problem-solving for business impact.</p>
        </div>
      </div>

      <div className='cv__resume-education'>
        <h2>Education</h2>
        <div className='cv__resume-education_description'>
          <div className='cv__resume-education_description-college'>
            <h3>2025 - 2027</h3>
            <div className='cv__resume-education_description-college_right'>
              <h3>Goa Institute of Management</h3>
              <p>PGDM (Marketing)</p>
              <p>Pursuing</p>
            </div>
          </div>
          <div className='cv__resume-education_description-college'>
            <h3>2017 - 2021</h3>
            <div className='cv__resume-education_description-college_right'>
              <h3>Vellore Institute of Technology</h3>
              <p>B. Tech (Electrical & Electronics Engineering)</p>
              <p>8.06 / 10</p>
            </div>
          </div>
          <div className='cv__resume-education_description-college'>
            <h3>2015 - 2016</h3>
            <div className='cv__resume-education_description-college_right'>
              <h3>Rani Laxmi Bai Memorial School, Lucknow</h3>
              <p>Higher Senior Secondary</p>
              <p>79.8%</p>
            </div>
          </div>
        </div>
      </div>

      <div className='cv__resume-skills_language'>
        <h2>Skillset</h2>
        <ul className='cv__resume-skills_language-list'>
          <li>Oracle HCM Cloud</li>
          <li>BIP Reports</li>
          <li>HCM Extracts</li>
          <li>Fast Formula</li>
          <li>SQL</li>
          <li>Python</li>
          <li>Tableau</li>
          <li>Marketing Strategy</li>
          <li>Digital Campaigning</li>
          <li>Brand Management</li>
          <li>Data Analytics</li>
        </ul>

        <h2>Language</h2>
        <ul className='cv__resume-skills_language-list'>
          <li>Hindi (native)</li>
          <li>English (fluent)</li>
        </ul>
      </div>

      <div className='cv__resume-skills_language'>
        <h2>Certifications</h2>
        <ul className='cv__resume-skills_certifications-list'>
          <li>Oracle Global Human Resources Cloud 2021 Implementation Specialist, 2022</li>
          <li>Oracle Recruiting Cloud 2022 Implementation Professional, 2022</li>
          <li>Oracle Payroll Cloud 2022 Implementation Professional, 2023</li>
          <li>Scrum Fundamentals Certified (SFC), SCRUMstudy, 2025</li>
          <li>SQL (Basic, Intermediate, Advanced) – HackerRank, 2025</li>
          <li>Google Fundamentals of Digital Marketing, 2025</li>
          <li>HubSpot Inbound Marketing, 2025</li>
          <li>AI For Everyone – Coursera, 2025 (planned)</li>
        </ul>
      </div>

      <div className='cv__resume-skills_language'>
        <h2>Achievements</h2>
        <ul className='cv__resume-skills_language-list'>
          <li>Winner – Marketer’s Masterpiece Challenge by Wooble, 2025 (₹5 Cr marketing campaign)</li>
          <li>Best Paper Award – IEEE Conference, 2022 (“Comparison Analysis of Different Face Detecting Techniques”)</li>
          <li>Winner – Smart India Hackathon 2020 Hardware Edition for PMS Pain Relief Belt Prototype</li>
        </ul>
      </div>

      <div className='cv__resume-skills_language'>
        <h2>Projects</h2>
        <ul className='cv__resume-skills_language-list'>
          <li>Cursor Control Using Face Detection – Built hands-free computer interaction using Python and OpenCV</li>
          <li>Comparison Analysis of Face Detecting Techniques – Published in IEEE and won Best Paper Award</li>
          <li>PMS Pain Relief Belt – Designed wearable device, winner at Smart India Hackathon 2020</li>
        </ul>
      </div>

    </div>
  );
}

export default Resume;
