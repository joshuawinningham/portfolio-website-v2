import { projects, type Project } from "./projects";

export interface ServiceProofItem { project: Project; relevance: string; }

function projectNamed(title: string): Project {
	const project = projects.find((item) => item.title === title);
	if (!project) throw new Error(`Service proof project not found: ${title}`);
	return project;
}

export const marketingProof: ServiceProofItem[] = [
	{
		project: projectNamed("It's an Art Party — Multi-City Provider Directory"),
		relevance: "Connected provider onboarding, listing management, sponsorship billing, and lifecycle email. Account and subscription events drive listing status and customer communication, keeping the workflow connected from signup through paid placement.",
	},
	{
		project: projectNamed("TrueTourney — Youth Sports Tournament Directory"),
		relevance: "Built director submission and claim workflows with notification and receipt emails, plus registration-link tracking and reporting. Automated data refreshes keep event listings current and preserve change history for ongoing operations.",
	},
	{
		project: projectNamed("Scale Visibility — AI Search Readiness Platform"),
		relevance: "Connected audit processing, saved reports, subscription events, and customer notifications. Background workflows handle recurring checks and report-ready emails.",
	},
];

export const developerProof: ServiceProofItem[] = [
	{
		project: projectNamed("It's an Art Party — Multi-City Provider Directory"),
		relevance: "Built self-service listings and sponsorship upgrades with account access, stored listing data, subscription webhooks, and lifecycle email. The work spans the customer interface and the systems that keep listing status and billing events connected.",
	},
	{
		project: projectNamed("TrueTourney — Youth Sports Tournament Directory"),
		relevance: "Built and operate a tournament discovery product with searchable listings, automated data refreshes, director submission emails, and registration-link reporting. The work connects the product interface to data pipelines and integrations that need ongoing maintenance.",
	},
];
