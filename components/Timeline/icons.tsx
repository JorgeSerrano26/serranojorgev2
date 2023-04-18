import {
    faBriefcase,
    faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default {
    work: <FontAwesomeIcon icon={faBriefcase} style={{ color: '#f2f2f2' }} />,
    school: (
        <FontAwesomeIcon icon={faGraduationCap} style={{ color: '#f2f2f2' }} />
    ),
} as const;
