import {
    faBriefcase,
    faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const WorkIcon = () => null;
const StarIcon = () => null;
const SchoolIcon = () => (
    <FontAwesomeIcon icon={faGraduationCap} style={{ color: '#f2f2f2' }} />
);

// #f2f2f2 blanco
// Icon background - #212529

const Timeline = () => {
    return (
        <VerticalTimeline lineColor="#f2f2f2" layout="1-column-left">
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                    background: '#212529',
                    color: '#f2f2f2',
                }}
                contentArrowStyle={{
                    borderRight: '7px solid #212529',
                }}
                date="2011 - present"
                iconStyle={{ background: '#212529' }}
                icon={
                    <FontAwesomeIcon
                        icon={faBriefcase}
                        style={{ color: '#f2f2f2' }}
                    />
                }
            >
                <h3 className="vertical-timeline-element-title">
                    Creative Director
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                    Miami, FL
                </h4>
                <p>
                    Creative Direction, User Experience, Visual Design, Project
                    Management, Team Leading
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2010 - 2011"
                contentStyle={{
                    background: '#212529',
                    color: '#f2f2f2',
                }}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">
                    Art Director
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                    San Francisco, CA
                </h4>
                <p>
                    Creative Direction, User Experience, Visual Design, SEO,
                    Online Marketing
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2008 - 2010"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<WorkIcon />}
                contentStyle={{
                    background: '#212529',
                    color: '#f2f2f2',
                }}
            >
                <h3 className="vertical-timeline-element-title">
                    Web Designer
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                    Los Angeles, CA
                </h4>
                <p>User Experience, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2006 - 2008"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<WorkIcon />}
                contentStyle={{
                    background: '#212529',
                    color: '#f2f2f2',
                }}
            >
                <h3 className="vertical-timeline-element-title">
                    Web Designer
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                    San Francisco, CA
                </h4>
                <p>User Experience, Visual Design</p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    );
};

export default Timeline;
