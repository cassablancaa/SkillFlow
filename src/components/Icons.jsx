
const baseProps = {
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  fill: "none",
};

export function BackIcon({ className = "icon" }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none">
      <path
        d="M5 1H4L0 5L4 9H5V6H11C12.6569 6 14 7.34315 14 9C14 10.6569 12.6569 12 11 12H4V14H11C13.7614 14 16 11.7614 16 9C16 6.23858 13.7614 4 11 4H5V1Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function HomeIcon({ className = "icon" }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path d="M3 11L12 4L21 11" {...baseProps} />
      <path d="M5 10V20H19V10" {...baseProps} />
    </svg>
  );
}

export function UserIcon({ className = "icon" }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <circle cx="12" cy="8" r="4" {...baseProps} />
      <path d="M4 20C6 16 9 14 12 14C15 14 18 16 20 20" {...baseProps} />
    </svg>
  );
}

export function LoginIcon({ className = "icon" }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path d="M10 4H6C5 4 4 5 4 6V18C4 19 5 20 6 20H10" {...baseProps} />
      <path d="M13 8L18 12L13 16" {...baseProps} />
      <path d="M6 12H18" {...baseProps} />
    </svg>
  );
}

export function RegisterIcon({ className = "icon" }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <circle cx="9" cy="8" r="3.5" {...baseProps} />
      <path d="M3 20C5 16.5 7 15 9 15C11 15 13 16.5 15 20" {...baseProps} />
      <path d="M17 8V14" {...baseProps} />
      <path d="M14 11H20" {...baseProps} />
    </svg>
  );
}

export function MailIcon({ className = "icon" }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <rect x="3" y="5" width="18" height="14" rx="3" {...baseProps} />
      <path d="M3 7L12 13L21 7" {...baseProps} />
    </svg>
  );
}

export function LockIcon({ className = "icon" }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <rect x="5" y="11" width="14" height="9" rx="2" {...baseProps} />
      <path d="M8 11V8C8 5.5 9.5 4 12 4C14.5 4 16 5.5 16 8V11" {...baseProps} />
    </svg>
  );
}

export function EyeIcon({ className = "icon" }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path d="M2 12C5 7 8 5 12 5C16 5 19 7 22 12C19 17 16 19 12 19C8 19 5 17 2 12Z" {...baseProps} />
      <circle cx="12" cy="12" r="3" {...baseProps} />
    </svg>
  );
}

export function EyeOffIcon({ className = "icon" }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path d="M2 12C5 7 8 5 12 5C16 5 19 7 22 12C19 17 16 19 12 19C8 19 5 17 2 12Z" {...baseProps} />
      <circle cx="12" cy="12" r="3" {...baseProps} />
      <path d="M4 20L20 4" {...baseProps} />
    </svg>
  );
}

export function SearchIcon({ className = "icon" }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <circle cx="11" cy="11" r="6" {...baseProps} />
      <path d="M16 16L21 21" {...baseProps} />
    </svg>
  );
}

export function SettingsIcon({ className = "icon" }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <circle cx="12" cy="12" r="3" {...baseProps} />
      <path d="M12 2V5M12 19V22M19 12H22M2 12H5M17 7L19 5M5 19L7 17M17 17L19 19M5 5L7 7" {...baseProps} />
    </svg>
  );
}

export function LogoutIcon({ className = "icon" }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path d="M10 4H6C5 4 4 5 4 6V18C4 19 5 20 6 20H10" {...baseProps} />
      <path d="M14 8L19 12L14 16" {...baseProps} />
      <path d="M19 12H8" {...baseProps} />
    </svg>
  );
}
