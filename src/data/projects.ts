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
		title: "Inventory & Order Tracker",
		tag: "Full-Stack · AWS",
		cat: "Full-Stack",
		featured: true,
		blurb:
			"A B2B inventory and order-fulfillment system with SKU tracking, an enforced order workflow, automatic stock deduction and a full audit trail — deployed on AWS.",
		tech: ["C#", "ASP.NET Core", "React", "AWS"],
		image: inventoryOrderTracker,
		github: "https://github.com/joshuawinningham/inventory-order-tracker",
		live: "https://d1t1jyx1chuvoh.cloudfront.net",
	},
	{
		title: "SEO Audit Dashboard",
		tag: "Next.js · SEO",
		cat: "SEO",
		featured: true,
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
		featured: true,
		blurb:
			"An email client and analytics dashboard with real-time open tracking, event history and KPI monitoring on a Fastify + Supabase backend.",
		tech: ["React", "Chart.js", "Fastify", "Supabase"],
		image: emailKpi,
		github: "https://github.com/joshuawinningham/email-kpi",
		live: "https://www.10xinbox.com/",
	},
	{
		title: "It's an Art Party — Next.js",
		tag: "Next.js · SaaS",
		cat: "Next.js",
		blurb:
			"A full Next.js 16 rebuild with a paid business directory — Clerk auth, Stripe billing and Drizzle ORM on Vercel Postgres.",
		tech: ["Next.js", "Clerk", "Stripe", "PostgreSQL"],
		image: itsAnArtPartyNextjs,
		github: "https://github.com/joshuawinningham/its-an-art-party-nextjs",
		live: "https://www.itsanartparty.com/",
	},
	{
		title: "ScaleVisibility",
		tag: "Astro · Agency",
		cat: "Astro",
		blurb:
			"A web-design agency site in Astro with glass-morphism, animated mesh gradients and a WordPress-vs-Next.js PageSpeed case study.",
		tech: ["Astro", "TypeScript", "Tailwind"],
		image: scaleVisibility,
		github: "https://github.com/joshuawinningham/scale-visibility",
		live: "https://www.scalevisibility.com/",
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
