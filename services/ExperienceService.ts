import dataExperience from "./data/experience.json";
import dataProjects from "./data/projects.json";

export type Experience = {
	title: string;
	description: string;
	type: "work" | "school";
	from: string;
	to: string | "today";
	position?: string;
};

export type Project = {
	title: string;
	image: string;
	description: string;
	productive: boolean;
	altImg: string;
};

class ExperienceService {
	public static async getExperience(): Promise<Experience[]> {
		return dataExperience as Experience[];
	}
	public static async getProjects(): Promise<Project[]> {
		return dataProjects as Project[];
	}
}

export default ExperienceService;
