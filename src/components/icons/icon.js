import {
	IconCSS,
	IconExpressJs,
	IconExternal,
	IconGit,
	IconGitHub,
	IconHtml,
	IconJavaScript,
	IconLinkedIn,
	IconLogo,
	IconMail,
	IconMenuClose,
	IconMenuOpen,
	IconMongoDB,
	IconNextJs,
	IconNodeJs,
	IconPython,
	IconReactJs,
	IconSass,
	IconTailwindCSS
} from "@components/icons";

const Icon = ({ name }) => {
	switch (name.toLowerCase()) {
		case "css":
			return <IconCSS />;
		case "express.js":
		case "express":
		case "expressjs":
			return <IconExpressJs />;
		case "external":
		case "demo":
			return <IconExternal />;
		case "git":
			return <IconGit />;
		case "github":
			return <IconGitHub />;
		case "html":
			return <IconHtml />;
		case "javascript":
			return <IconJavaScript />;
		case "linkedin":
			return <IconLinkedIn />;
		case "logo":
			return <IconLogo />;
		case "mail":
			return <IconMail />;
		case "menuclose":
			return <IconMenuClose />;
		case "menuopen":
			return <IconMenuOpen />;
		case "mongodb":
			return <IconMongoDB />;
		case "nextjs":
		case "next.js":
			return <IconNextJs />;
		case "nodejs":
		case "node.js":
			return <IconNodeJs />;
		case "python":
			return <IconPython />;
		case "reactjs":
		case "react.js":
			return <IconReactJs />;
		case "scss":
		case "sass":
			return <IconSass />;
		case "tailwindcss":
		case "tailwind css":
		case "tailwind":
			return <IconTailwindCSS />;
		default:
			return <IconExternal />;
	}
};

export default Icon;
