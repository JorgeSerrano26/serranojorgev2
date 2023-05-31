import dataExperience from './data/experience.json';

export interface Experience {
    title:       string;
    description: string;
    type:        "work" | "school";
    from:        string;
    to:          string;
}

class ExperienceService {
    public static async getExperience(): Promise<Experience[]> {
        return dataExperience as Experience[];
    }
}

export default ExperienceService;