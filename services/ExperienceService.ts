import { TimelineProps } from '@components/Timeline/Timeline';
import dataExperience from './data/experience.json';

class ExperienceService {
    public static async getExperience(): Promise<TimelineProps['list']> {
        return dataExperience as TimelineProps['list'];
    }
}

export default ExperienceService;