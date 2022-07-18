import ProjectItem from './ProjectItem';
import styles from '../styles/social.module.scss';
import { Slide } from 'react-awesome-reveal';

const Projects = () => {
  return (
    <>
      <h1 className={styles.h1} dataShadow='Projects'>Projects</h1>
      <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 pb-16'>
          <h2 className='py-4'>What I&apos;ve Built</h2>
          <div className='grid md:grid-cols-2 gap-8'>
            <Slide style={{ justifySelf: 'center' }} triggerOnce direction='up' fraction={0.5} delay={0}>
              <ProjectItem
                title="VORTEX MANAGERS' WEBSITES CONVERSION"
                description='A system of more than 700 vacation rental websites operated by single code-base.'
                projectUrl='https://rightaboutnow.com/'
                tech='NextJS | Redux | Bootstrap | ASP.NET | MS SQL Server'
                type='Associated with Magical Digits.'
              />
            </Slide>
            <Slide style={{ justifySelf: 'center' }} triggerOnce direction='up' fraction={0.5} delay={50}>
              <ProjectItem
                title='MAGICAL DIGITS COMPANY WEBSITE'
                description='Portfolio website of the software company Magical Digits.'
                projectUrl='https://magicaldigits.com/'
                tech='NextJS | Redux | MUI | Firebase'
                type='Associated with Magical Digits.'
              />
            </Slide>
            <Slide style={{ justifySelf: 'center' }} triggerOnce direction='up' fraction={0.5} delay={100}>
              <ProjectItem
                title='OPTICOFY'
                description='A sales and customer management website for optical shops.'
                projectUrl='https://opticofy.com/'
                tech='Node.js | Express | MongoDB | EJS | Bootstrap | JQuery | AWS'
                type='Associated with Magical Digits.'
              />
            </Slide>
            <Slide style={{ justifySelf: 'center' }} triggerOnce direction='up' fraction={0.5} delay={150}>
              <ProjectItem
                title='TWIN BRAIN (PSYCHASSESSMENT)'
                description='A psychological assessment website for UK based healthcare social enterprise in London supporting family’s psychological, physical, financial, legal, and housing well-being.'
                projectUrl='https://twin-brain.vercel.app/'
                tech='NextJS | Ant-Design | Firebase'
                type='Associated with Upwork (Health City).'
              />
            </Slide>
            <Slide style={{ justifySelf: 'center' }} triggerOnce direction='up' fraction={0.5} delay={200}>
              <ProjectItem
                title='NED EXPRESS'
                description='A delivery system that includes a mobile application for students and staff of NED University campus and a vendor web app. where orders placed through the mobile applications can be viewed in real-time by vendors (canteen owners). '
                projectUrl='https://play.google.com/store/apps/details?id=com.nedexpress'
                tech='React Native | Firebase | HTML/CSS/JS'
                type='Personal Project.'

              />
            </Slide>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
