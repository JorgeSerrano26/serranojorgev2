import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import Icons from './icons';

const colors = {
    WHITE: '#f2f2f2',
    BLACK: '#212529',
};

export type TimeLineItem = {
    title: string;
    location?: string;
    description?: string;
    from: string;
    to: string;
    technologies?: string[];
    type: keyof typeof Icons;
};

export type TimelineProps = {
    list?: TimeLineItem[];
};

const TimeLineItemComponent = ({
    from,
    to,
    type,
    title,
    description,
    location,
}: TimeLineItem): JSX.Element => {
    const contentStlye = {
        background: colors.BLACK,
        color: colors.WHITE,
    };

    const contentArrowStyle = {
        borderRight: `7px solid ${colors.BLACK}`,
    };

    const date = `${from} - ${to}`;

    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={contentStlye}
            contentArrowStyle={contentArrowStyle}
            date={date}
            iconStyle={{ background: '#212529' }}
            icon={Icons[type]}
        >
            <h3 className="vertical-timeline-element-title">{title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{location}</h4>
            <p>{description}</p>
        </VerticalTimelineElement>
    );
};

const Timeline = ({ list = [] }: TimelineProps): JSX.Element => {
    return (
        <VerticalTimeline lineColor="#f2f2f2" layout="1-column-left">
            {list.map((item, index) => (
                <TimeLineItemComponent
                    key={`timeline-item-${Date.now()}-${index}`}
                    {...item}
                />
            ))}
        </VerticalTimeline>
    );
};

export default Timeline;
