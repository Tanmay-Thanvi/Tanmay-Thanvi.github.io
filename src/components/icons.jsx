const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const MailIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m4 7 7.2 5.4a1.5 1.5 0 0 0 1.8 0L20 7" />
  </svg>
);

export const MapPinIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M20 10.5c0 5.2-6.4 9.9-7.5 10.7a1 1 0 0 1-1 0C10.4 20.4 4 15.7 4 10.5a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10.5" r="2.6" />
  </svg>
);

export const ClockIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 8v4.3l3 1.9" />
  </svg>
);

export const CalendarIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <rect x="3.5" y="5" width="17" height="16" rx="2.5" />
    <path d="M8 3v4M16 3v4M3.5 10h17" />
  </svg>
);

export const ExternalLinkIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M9 6H6.5A2.5 2.5 0 0 0 4 8.5v9A2.5 2.5 0 0 0 6.5 20h9a2.5 2.5 0 0 0 2.5-2.5V15" />
    <path d="M13 4h7v7" />
    <path d="M20 4 10.5 13.5" />
  </svg>
);

export const FileTextIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M7 3.5h7l4 4V19a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 19V5A1.5 1.5 0 0 1 7 3.5Z" />
    <path d="M13.5 3.5V8h4.4" />
    <path d="M9 12.5h6M9 15.8h6" />
  </svg>
);

export const LinkedInIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="3.5" />
    <path d="M8.2 10.2v6.1M8.2 7.7v.02" />
    <path d="M12 16.3v-3.6c0-1.3.9-2.4 2.3-2.4 1.3 0 2 .9 2 2.4v3.6M12 12.7v3.6" />
  </svg>
);

export const GitHubIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M12 3.2a8.8 8.8 0 0 0-2.8 17.1c.4.1.6-.2.6-.4v-1.6c-2.4.3-3-1-3.2-1.6-.1-.3-.6-1.1-1-1.3-.3-.2-.7-.6 0-.6.7 0 1.2.6 1.4.9.8 1.3 2 1 2.6.8.1-.6.4-1 .7-1.3-2.4-.3-3.7-1.4-3.7-3.4 0-.8.3-1.5.7-2-.1-.3-.3-1.1.1-2.2 0 0 .8-.3 2.4.9a8 8 0 0 1 4.4 0c1.6-1.1 2.4-.9 2.4-.9.4 1.1.2 1.9.1 2.2.4.5.7 1.2.7 2 0 2-1.3 3.1-3.7 3.4.4.4.8 1 .8 2.1v2c0 .2.2.5.6.4A8.8 8.8 0 0 0 12 3.2Z" />
  </svg>
);

export const StarIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="m12 3.5 2.4 5 5.4.7-4 3.8.9 5.5-4.7-2.6-4.7 2.6.9-5.5-4-3.8 5.4-.7Z" />
  </svg>
);

export const ArrowRightIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M4 12h15M13 5l7 7-7 7" />
  </svg>
);

export const SunIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <circle cx="12" cy="12" r="4.2" />
    <path d="M12 3v2.2M12 18.8V21M4.4 4.4l1.5 1.5M18.1 18.1l1.5 1.5M3 12h2.2M18.8 12H21M4.4 19.6l1.5-1.5M18.1 5.9l1.5-1.5" />
  </svg>
);

export const MoonIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M20.5 14.6A8.6 8.6 0 0 1 9.4 3.5a8.6 8.6 0 1 0 11.1 11.1Z" />
  </svg>
);

/* Brand marks — kept as filled logotypes rather than outline icons. */
export const BrandLinkedIn = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12M7.12 20.45H3.56V9h3.56z"
    />
  </svg>
);

export const BrandGitHub = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.39-5.25 5.67.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z"
    />
  </svg>
);

export const SendIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M21 3 3 10.5l7 2.5 2.5 7L21 3Z" />
    <path d="M12.5 13 21 3" />
  </svg>
);

export const ShieldIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M12 3.2 5 5.8v5.4c0 4.4 3 7.3 7 9 4-1.7 7-4.6 7-9V5.8L12 3.2Z" />
  </svg>
);

export const CodeIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="m9 6-6 6 6 6M15 6l6 6-6 6" />
  </svg>
);

export const GitBranchIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <circle cx="6" cy="5.5" r="2.2" />
    <circle cx="6" cy="18.5" r="2.2" />
    <circle cx="18" cy="9.5" r="2.2" />
    <path d="M6 7.7v8.6M6 9c0 4.5 3 5 6.5 5H16" />
  </svg>
);

export const ArchiveIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <rect x="3.5" y="4" width="17" height="5" rx="1.5" />
    <path d="M4.5 9v9a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V9" />
    <path d="M10 13h4" />
  </svg>
);

export const TrophyIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M7 4h10v5a5 5 0 0 1-10 0Z" />
    <path d="M7 6H4.5a1 1 0 0 0-1 1.2c.4 2 1.8 3.3 3.6 3.6M17 6h2.5a1 1 0 0 1 1 1.2c-.4 2-1.8 3.3-3.6 3.6" />
    <path d="M12 14v3M9 20.5h6M9.5 20.5c0-1.8.6-2.7 2.5-3 1.9.3 2.5 1.2 2.5 3" />
  </svg>
);

export const PenIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M4 16.5V20h3.5L18 9.5l-3.5-3.5Z" />
    <path d="m14.5 6 3.5 3.5" />
  </svg>
);

export const CheckIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M5 12.5 9.5 17 19 7" />
  </svg>
);

export const DiamondIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 2.5 21 12l-9 9.5L3 12Z" />
  </svg>
);

export const ImageIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <rect x="3" y="4.5" width="18" height="15" rx="2.5" />
    <circle cx="8.5" cy="9.5" r="1.75" />
    <path d="m4 17 5-5 3.3 3.3M14 13l2-2 4 4" />
  </svg>
);

export const BrandEmail = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
    <path fill="#EA4335" d="M2 6.5 12 13l10-6.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
    <path fill="#34A853" d="M2 6.5V18a2 2 0 0 0 2 2h.8V8.1z" />
    <path fill="#4285F4" d="M21.2 20H20a2 2 0 0 0 2-2V6.5l-8.4 5.5 7.6 8z" />
    <path fill="#FBBC04" d="M2.8 20H4a2 2 0 0 0 2 0l6-5.2L8.4 11.5z" />
  </svg>
);
