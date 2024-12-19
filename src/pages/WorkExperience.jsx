import styled from 'styled-components';

import Heading from '../ui/Heading';
import HeadingGroup from '../ui/HeadingGroup';
import Pill from '../ui/Pill';

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(auto, 1fr));
  justify-content: center;
  align-items: start;
  row-gap: 6rem;
  column-gap: 2rem;
  margin-bottom: 8rem;

  @media (min-width: 768px) {
    grid-template-columns: 6rem minmax(auto, 60rem);
  }
`;

const Timeline = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    border-right: var(--border-sm);
  }
`;

const GridHeading = styled(Heading)`
  grid-column: 1 / -1;
`;

const Company = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Skills = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-bottom: 1rem;
`;

const StyledHeading = styled(Heading)`
  color: var(--color-primary-light);
`;

function WorkExperience() {
  return (
    <Row>
      <GridHeading as='h1'>Work History</GridHeading>

      <Timeline />
      <Company>
        <HeadingGroup>
          <span>Go2 &middot; Jul 2016 - Oct 2024</span>
          <Heading as='h2'>Project and Team Manager</Heading>
        </HeadingGroup>

        <Skills>
          <Pill variant='neutral-outline-sm'>Leadership</Pill>
          <Pill variant='neutral-outline-sm'>Strategy</Pill>
          <Pill variant='neutral-outline-sm'>Web Dev</Pill>
        </Skills>

        <p>
          Over eight years at Go2, I played a pivotal role in the company’s
          growth, managing and supporting a workforce of 700+ client-facing
          employees and 100+ internal team members.
        </p>
        <p>
          As a strategic thinker, delegator, and hands-on implementer, I
          contributed to the company's leadership initiatives, technical
          execution, and cross-functional success.
        </p>

        <StyledHeading as='h3'>Process Definition</StyledHeading>
        <p>
          Managed cross-departmental projects with clear scopes, timelines,
          deliverables, and success metrics to streamline processes, including
          creating a talent acquisition pipeline, employee attendance and
          time-off protocols, and performance review systems.
        </p>
        <p>
          Translated strategic plans into actionable workflows, configuring
          tools and processes to align with organizational goals, enabling
          seamless team adoption and execution.
        </p>

        <StyledHeading as='h3'>Business Development</StyledHeading>
        <p>
          Designed impactful sales pitch decks, service offering materials, and
          the company’s finance model documentation, directly supporting growth
          initiatives and contributing to securing funding for expansion.
        </p>

        <StyledHeading as='h3'>Website Creation</StyledHeading>
        <p>
          Directed the design, content creation, and analytics strategy for the
          company website, driving measurable SEO results — achieving 600
          keywords in the top 100 organic SERPs and increasing social media
          followers to over 50K.
        </p>

        <StyledHeading as='h3'>Talent Acquisition</StyledHeading>
        <p>
          Built and implemented a recruitment pipeline that processed over 100
          daily job applications, and incorporating KPI dashboards to track team
          success metrics, including reduced time-to-hire and increased
          applicant quality.
        </p>

        <StyledHeading as='h3'>Digital Marketing</StyledHeading>
        <p>
          Spearheaded PPC campaigns and website optimization projects, driving
          measurable visibility improvements for both the company and its
          clients.
        </p>
      </Company>

      <Timeline />
      <Company>
        <HeadingGroup>
          <span>Fountain Property &middot; Sep 2013 - Dec 2015</span>
          <Heading as='h2'>Virtual Assistant</Heading>
        </HeadingGroup>

        <Skills>
          <Pill variant='neutral-outline-sm'>Marketing</Pill>
          <Pill variant='neutral-outline-sm'>Content</Pill>
          <Pill variant='neutral-outline-sm'>Web Design</Pill>
        </Skills>

        <p>
          Supported the client by managing their digital presence and enhancing
          online visibility through comprehensive virtual assistance, including
          social media management, email marketing, and web design.
        </p>

        <StyledHeading as='h3'>Social Media Management</StyledHeading>
        <p>
          Managed client social media profiles and implemented strategies to
          increase online visibility, helping clients establish authority in
          their industry.
        </p>

        <StyledHeading as='h3'>Email Marketing</StyledHeading>
        <p>
          Created and executed email marketing campaigns, managed email contact
          lists, and optimized outreach for client engagement and growth.
        </p>

        <StyledHeading as='h3'>Web Management</StyledHeading>
        <p>
          Handled web management and design tasks, ensuring clients’ websites
          were up-to-date and aligned with their business objectives.
        </p>

        <StyledHeading as='h3'>Client-Specific Tasks</StyledHeading>
        <p>
          Provided comprehensive virtual assistance across various ad-hoc tasks
          as mandated by clients, ensuring seamless support for their evolving
          needs.
        </p>
      </Company>

      <Timeline />
      <Company>
        <HeadingGroup>
          <span>Convergys &middot; Jul 2010 - Aug 2013</span>
          <Heading as='h2'>TSR and Sales</Heading>
        </HeadingGroup>

        <Skills>
          <Pill variant='neutral-outline-sm'>Technical Support</Pill>
          <Pill variant='neutral-outline-sm'>Sales</Pill>
        </Skills>

        <p>
          Provided real-time technical support to customers, resolving issues
          with Time Warner Cable products and services. Assisted customers with
          product inquiries, upselling relevant products, and processing sales
          orders.
        </p>
      </Company>

      <Timeline />
      <Company>
        <HeadingGroup>
          <span>Teleperformance &middot; Dec 2009 - Jun 2010</span>
          <Heading as='h2'>Team Leader</Heading>
        </HeadingGroup>

        <Skills>
          <Pill variant='neutral-outline-sm'>Leadership</Pill>
          <Pill variant='neutral-outline-sm'>Training</Pill>
          <Pill variant='neutral-outline-sm'>Coaching</Pill>
        </Skills>

        <p>
          Served as the point of contact for operations, leading a team of Level
          1 TSRs. Conducted weekly coaching and call monitoring to ensure
          performance standards were met, and participated in weekly calibration
          meetings to align with client policies and CSAT expectations.
        </p>

        <StyledHeading as='h3'>Coaching and Monitoring</StyledHeading>
        <p>
          Conducted weekly one-on-one coaching sessions to monitor team
          performance and identify improvement areas. Performed regular call
          monitoring to assess quality, ensure compliance, and provide
          actionable feedback to agents.
        </p>

        <StyledHeading as='h3'>Client Calibration</StyledHeading>
        <p>
          Attended weekly client calibration meetings to stay updated on policy
          and procedure changes. Participated in quality and CSAT calibration
          sessions to ensure standardized call handling and prioritize customer
          satisfaction on every call.
        </p>

        <StyledHeading as='h3'>Daily Reporting</StyledHeading>
        <p>
          Managed and submitted daily deliverables, including coaching reports,
          call monitoring results, and other performance metrics, as required by
          the client to track team progress and maintain service quality.
        </p>
      </Company>

      <Timeline />
      <Company>
        <HeadingGroup>
          <span>Teleperformance &middot; Sep 2006 - Dec 2009</span>
          <Heading as='h2'>Technical Support Representative</Heading>
        </HeadingGroup>

        <Skills>
          <Pill variant='neutral-outline-sm'>Data Entry</Pill>
          <Pill variant='neutral-outline-sm'>Soft Skills</Pill>
          <Pill variant='neutral-outline-sm'>Problem-Solving</Pill>
        </Skills>

        <p>
          Provided technical assistance to customers as a Tier 1 Representative,
          resolving complex issues, eventually taking on advanced
          responsibilities as a Tier 2 Representative, managing escalations and
          training Level 1 agents.
        </p>

        <StyledHeading as='h3'>Training and Support</StyledHeading>
        <p>
          Provided ongoing assistance to Level 1 agents, helping resolve
          technical challenges and improve their troubleshooting skills.
        </p>

        <StyledHeading as='h3'>Escalations</StyledHeading>
        <p>
          Served as the point of contact for technical escalations from Level 1
          agents, handling complex issues related to Dell products.
        </p>

        <StyledHeading as='h3'>Product Updates</StyledHeading>
        <p>
          Conducted weekly coaching and hands-on training sessions to enhance
          the technical knowledge of Level 1 agents while staying up-to-date on
          the latest Dell product updates through conference calls with onshore
          Tech Leads.
        </p>

        <StyledHeading as='h3'>Inbound Phone Support</StyledHeading>
        <p>
          Provided real-time resolution and assistance to customers facing
          technical issues with Dell products, handling inbound calls and
          ensuring high-quality service delivery.
        </p>
      </Company>
    </Row>
  );
}

export default WorkExperience;
