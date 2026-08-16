import type { ImageMetadata } from "astro";

import inventoryOrderTracker from "../assets/inventory-order-tracker.png";
import seoAuditDashboard from "../assets/seo-audit-dashboard.png";
import emailKpi from "../assets/project5.png";
import itsAnArtPartyNextjs from "../assets/its-an-art-party-nextjs.png";
import scaleVisibility from "../assets/scale-visibility.png";
import milesSteps from "../assets/project4.png";
import astroHeadlessWp from "../assets/its_an_art_party.png";
import itsAnArtPartyWp from "../assets/its-an-art-party-wp.png";
import rectangleCalculator from "../assets/project1.png";
import feetInchesConverter from "../assets/project2.png";
import littleLemon from "../assets/project3.png";

/** Filter category used by the Work section chips. */
export type ProjectCategory =
	| "Full-Stack"
	| "Next.js"
	| "React"
	| "Astro"
	| "SEO"
	| "Python";

export interface Project {
	title: string;
	/** Short eyebrow label, e.g. "Full-Stack · AWS". */
	tag: string;
	/** Single category the filter chips match against. */
	cat: ProjectCategory;
	/** Top flagship projects — get the "Featured" treatment. */
	featured?: boolean;
	/** Learning builds — demoted to the quiet Foundations list (no screenshot). */
	foundation?: boolean;
	blurb: string;
	/** Concrete ownership and implementation evidence for featured case studies. */
	highlights?: string[];
	tech: string[];
	/** Screenshot. Omitted for foundation projects (rendered text-only). */
	image?: ImageMetadata;
	github: string;
	live: string;
}

/**
 * Order matters: the three flagship projects come first (they fill the
 * featured rows), the rest of the substantial work follows, and the three
 * learning builds (foundation: true) come last.
 */
export const projects: Project[] = [
	{
		title: "Scale Visibility — AI Search Readiness Platform",
		tag: "Next.js · SaaS",
		cat: "Next.js",
		featured: true,
		blurb:
			"An authenticated AI-search audit platform I built and operate, combining saved reports, citation testing, technical analysis, competitor benchmarking and six public readiness tools.",
		highlights: [
			"Own product design, full-stack implementation, deployment and ongoing production operations.",
			"Built saved audits, AI citation matrices, competitor comparisons and paste-ready technical fixes.",
			"Extended the product with six public tools for schema, crawler access, entity readiness and performance.",
		],
		tech: ["Next.js", "TypeScript", "PostgreSQL", "Vercel"],
		image: scaleVisibility,
		github: "https://github.com/joshuawinningham/scale-visibility",
		live: "https://www.scalevisibility.com/",
	},
	{
		title: "It's an Art Party — Multi-City Provider Directory",
		tag: "Next.js · Marketplace",
		cat: "Next.js",
		featured: true,
		blurb:
			"A production marketplace that lets providers manage free listings and sponsored placements across three live city directories.",
		highlights: [
			"Built authenticated provider self-service for listing management and sponsored upgrades.",
			"Implemented Clerk and Stripe billing, webhooks, PostgreSQL persistence with Drizzle, uploads, waitlists and lifecycle email.",
			"Added ISR, dynamic metadata, JSON-LD, sitemaps and llms.txt for search and AI-crawler visibility.",
		],
		tech: ["Next.js", "TypeScript", "Clerk", "Stripe", "PostgreSQL"],
		image: itsAnArtPartyNextjs,
		github: "https://github.com/joshuawinningham/its-an-art-party-nextjs",
		live: "https://www.itsanartparty.com/",
	},
	{
		title: "Inventory & Order Tracker",
		tag: "Full-Stack · AWS",
		cat: "Full-Stack",
		featured: true,
		blurb:
			"A B2B inventory and order-fulfillment system with SKU tracking, enforced order workflows, automatic stock deduction and a complete audit trail.",
		highlights: [
			"Built product, order and inventory workflows with strict status transitions and automatic stock deduction.",
			"Designed low-stock alerts and an audit trail around real operational requirements.",
			"Deployed the React and ASP.NET Core application on AWS App Runner, RDS and CloudFront.",
		],
		tech: ["C#", "ASP.NET Core", "React", "AWS"],
		image: inventoryOrderTracker,
		github: "https://github.com/joshuawinningham/inventory-order-tracker",
		live: "https://d1t1jyx1chuvoh.cloudfront.net",
	},
	{
		title: "SEO Audit Dashboard",
		tag: "Next.js · SEO",
		cat: "SEO",
		blurb:
			"Audits any URL across nine SEO dimensions with weighted scoring, readability analysis and actionable fixes — progressive loading via React Suspense.",
		tech: ["Next.js", "TypeScript", "Cheerio"],
		image: seoAuditDashboard,
		github: "https://github.com/joshuawinningham/seo-audit-dashboard",
		live: "https://seo-audit-dashboard-pi.vercel.app/",
	},
	{
		title: "Email KPI Dashboard",
		tag: "React · Analytics",
		cat: "Full-Stack",
		blurb:
			"An email client and analytics dashboard with real-time open tracking, event history and KPI monitoring on a Fastify + Supabase backend.",
		tech: ["React", "Chart.js", "Fastify", "Supabase"],
		image: emailKpi,
		github: "https://github.com/joshuawinningham/email-kpi",
		live: "https://www.10xinbox.com/",
	},
	{
		title: "Miles & Steps Tracker",
		tag: "Astro · Firebase",
		cat: "Astro",
		blurb:
			"A daily walking and running tracker for steps, calories and weight, synced across devices with Firebase and visualized with Chart.js.",
		tech: ["Astro", "Chart.js", "Firebase"],
		image: milesSteps,
		github: "https://github.com/joshuawinningham/miles-steps-tracker",
		live: "https://miles-steps-tracker.vercel.app",
	},
	{
		title: "Astro + Headless WordPress",
		tag: "Astro · Headless CMS",
		cat: "Astro",
		blurb:
			"A high-performance site using WordPress as a headless CMS, content fetched via REST and rendered statically with Astro.",
		tech: ["Astro", "WordPress", "REST"],
		image: astroHeadlessWp,
		github: "https://github.com/joshuawinningham/its-an-art-party",
		live: "https://its-an-art-party.vercel.app/",
	},
	{
		title: "It's an Art Party — WP Theme",
		tag: "WordPress · PHP",
		cat: "Full-Stack",
		blurb:
			"A custom WordPress theme for a Charlotte art-party business with client-editable fields and a REST-powered contact form.",
		tech: ["WordPress", "PHP", "MySQL"],
		image: itsAnArtPartyWp,
		github: "https://github.com/joshuawinningham/its-an-art-party-wp",
		live: "https://wordpress-961579-6230581.cloudwaysapps.com/",
	},
	{
		title: "Rectangle Area Calculator",
		tag: "Python · Flask",
		cat: "Python",
		foundation: true,
		blurb:
			"A Python/Flask web app that calculates rectangle area through a clean, responsive interface.",
		tech: ["Python", "Flask", "Tailwind"],
		image: rectangleCalculator,
		github: "https://github.com/joshuawinningham/rectangle-area-calculator",
		live: "https://rectangle-area-calculator.vercel.app",
	},
	{
		title: "Feet & Inches Converter",
		tag: "Python · Flask",
		cat: "Python",
		foundation: true,
		blurb:
			"Converts feet and inches to total inches with a visual block representation, built in Python and Flask.",
		tech: ["Python", "Flask", "Tailwind"],
		image: feetInchesConverter,
		github:
			"https://github.com/joshuawinningham/feet-inches-to-inches-converter",
		live: "https://feet-inches-to-inches-converter.vercel.app",
	},
	{
		title: "Little Lemon Restaurant",
		tag: "React · Capstone",
		cat: "React",
		foundation: true,
		blurb:
			"A responsive restaurant site with online table reservations, menu specials and testimonials, built in React.",
		tech: ["React", "JavaScript", "CSS3"],
		image: littleLemon,
		github: "https://github.com/joshuawinningham/react-capstone",
		live: "https://react-capstone-swart.vercel.app",
	},
];

/** Filter chip labels, in display order. "All" is the default. */
export const categories: Array<"All" | ProjectCategory> = [
	"All",
	"Full-Stack",
	"Next.js",
	"React",
	"Astro",
	"SEO",
	"Python",
];

/** Skill chips for the About section. */
export const frontendSkills = [
	"React",
	"Next.js",
	"TypeScript",
	"Astro",
	"Tailwind",
	"Chart.js",
	"HTML/CSS",
];

export const backendSkills = [
	"C#",
	"ASP.NET Core",
	"Node.js",
	"Python",
	"Flask",
	"PostgreSQL",
	"Supabase",
	"AWS",
	"WordPress",
];
