import React from 'react';

// 1. React Official Cyan Atom Logo
export const ReactLogo = ({ size = 28, className = '' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="-11.5 -10.23174 23 20.46348" 
    className={className}
    style={{ overflow: 'visible', filter: 'drop-shadow(0 0 8px rgba(97, 218, 251, 0.6))' }}
  >
    <circle cx="0" cy="0" r="2.1" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="1.1" fill="none">
      <ellipse rx="10.8" ry="4.1" />
      <ellipse rx="10.8" ry="4.1" transform="rotate(60)" />
      <ellipse rx="10.8" ry="4.1" transform="rotate(120)" />
    </g>
  </svg>
);

// 2. JavaScript Official Yellow Square Logo
export const JavaScriptLogo = ({ size = 28, className = '' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 128 128" 
    className={className}
    style={{ filter: 'drop-shadow(0 0 8px rgba(247, 223, 30, 0.5))' }}
  >
    <rect width="128" height="128" rx="18" fill="#F7DF1E" />
    <path 
      d="M75.5 100.8c3.2 5.3 7.6 9.1 15 9.1 6.3 0 10.3-3.1 10.3-7.5 0-5.2-4.2-7.1-11.2-10.2-10-4.3-16.6-9.7-16.6-21.2 0-10.5 8.1-18.5 20.9-18.5 8.9 0 15.3 3.3 19.8 11.2l-8.6 5.5c-2.4-4.3-5.2-6.2-11.2-6.2-4.5 0-7.8 2.8-7.8 6.5 0 4.5 3.3 6.3 10.3 9.4 11.5 4.9 17.7 10 17.7 21.9 0 12.5-9.8 19.2-23.7 19.2-13.3 0-21.6-6.4-25.9-14.7l11-4.5zM38.8 100.4c2.2 3.9 4.8 7.2 9.8 7.2 5 0 8.2-2.3 8.2-11.2V53.5h13.7v43.3c0 14.8-8.7 21.4-21.6 21.4-11.3 0-18-5.8-21.4-13.6l11.3-4.2z" 
      fill="#000000" 
    />
  </svg>
);

// 3. HTML5 Official Shield Logo
export const Html5Logo = ({ size = 28, className = '' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 512 512" 
    className={className}
    style={{ filter: 'drop-shadow(0 0 8px rgba(227, 79, 38, 0.45))' }}
  >
    <path fill="#E34F26" d="M71,460 L30,0 481,0 440,460 255,512" />
    <path fill="#EF652A" d="M256,472 L407,430 440,61 256,61" />
    <path fill="#EBEBEB" d="M256,208 L181,208 176,150 256,150 256,94 255,94 114,94 128,264 256,264 z M256,386 L255,386 192,369 188,322 132,322 139,407 255,439 256,439 z" />
    <path fill="#FFFFFF" d="M255,208 L255,264 329,264 322,342 255,360 255,417 371,385 381,264 382,264 397,94 255,94 255,150 339,150 334,208 z" />
  </svg>
);

// 4. CSS3 Official Shield Logo
export const Css3Logo = ({ size = 28, className = '' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 512 512" 
    className={className}
    style={{ filter: 'drop-shadow(0 0 8px rgba(21, 114, 182, 0.45))' }}
  >
    <path fill="#1572B6" d="M71,460 L30,0 481,0 440,460 255,512" />
    <path fill="#33A9DC" d="M256,472 L407,430 440,61 256,61" />
    <path fill="#EBEBEB" d="M256,208 L181,208 176,150 256,150 256,94 255,94 114,94 139,376 256,408 z M256,352 L255,352 196,336 192,293 136,293 143,375 255,406 256,406 z" />
    <path fill="#FFFFFF" d="M255,208 L380,208 376,252 255,252 255,308 319,308 313,374 255,390 255,446 371,414 382,293 384,264 397,94 255,94 255,150 341,150 336,208 z" />
  </svg>
);

// HTML5 & CSS3 Combined Dual Badge Logo
export const HtmlCssLogo = ({ size = 32, className = '' }) => (
  <div 
    className={className} 
    style={{ 
      display: 'inline-flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      gap: '3px', 
      position: 'relative' 
    }}
  >
    <Html5Logo size={Math.round(size * 0.78)} />
    <Css3Logo size={Math.round(size * 0.78)} />
  </div>
);

// 5. Python Official Blue & Yellow Snakes Logo
export const PythonLogo = ({ size = 28, className = '' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 128 128" 
    className={className}
    style={{ filter: 'drop-shadow(0 0 8px rgba(55, 118, 171, 0.45))' }}
  >
    <defs>
      <linearGradient id="py-blue" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#387eb8" />
        <stop offset="100%" stopColor="#366994" />
      </linearGradient>
      <linearGradient id="py-yellow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffe873" />
        <stop offset="100%" stopColor="#ffd438" />
      </linearGradient>
    </defs>
    <path 
      fill="url(#py-blue)" 
      d="M63.3 4.2c-15.3 0-24.6 6.8-24.6 20v14.6h25.2v3.7H25.3c-14.7 0-21.1 9.4-21.1 24.6 0 14.8 6.5 24.3 21.1 24.3h8.3v-12c0-13.4 9.5-23.7 23.3-23.7h24.7c7.4 0 13.5-6.1 13.5-13.5V24.2c0-13.2-9.9-20-22-20zm-11.4 8.7c2.9 0 5.3 2.4 5.3 5.3 0 2.9-2.4 5.3-5.3 5.3s-5.3-2.4-5.3-5.3c0-2.9 2.4-5.3 5.3-5.3z" 
    />
    <path 
      fill="url(#py-yellow)" 
      d="M64.7 123.8c15.3 0 24.6-6.8 24.6-20V89.2H64.1v-3.7h38.6c14.7 0 21.1-9.4 21.1-24.6 0-14.8-6.5-24.3-21.1-24.3h-8.3v12c0 13.4-9.5 23.7-23.3 23.7H46.4c-7.4 0-13.5 6.1-13.5 13.5v17.9c0 13.2 9.9 20 22 20zm11.4-8.7c-2.9 0-5.3-2.4-5.3-5.3 0-2.9 2.4-5.3 5.3-5.3s5.3 2.4 5.3 5.3c0 2.9-2.4 5.3-5.3 5.3z" 
    />
  </svg>
);

// 6. Django Official Green Logo with 'dj' emblem & REST banner
export const DjangoLogo = ({ size = 28, className = '' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 128 128" 
    className={className}
    style={{ filter: 'drop-shadow(0 0 8px rgba(68, 183, 139, 0.45))' }}
  >
    <rect width="128" height="128" rx="22" fill="#092e20" stroke="#2ba977" strokeWidth="2.5" />
    <path 
      d="M66 28h18v48c-5.2 1-9.5 1.5-14.5 1.5-14 0-22-6.5-22-18 0-11.5 8.5-18.8 20-18.8 2.8 0 4.8.4 6.5 1.2V28zm0 27.5c-1.8-.7-3.8-1-5.8-1-5.5 0-9.2 3.5-9.2 9.2s3.5 9 9.2 9c1.8 0 3.8-.4 5.8-1.1V55.5z" 
      fill="#44b78b" 
    />
    <path d="M42 45h17v48H42V45zm0 54h17v14H42V99z" fill="#44b78b" />
    {/* Subtle REST tag */}
    <rect x="74" y="86" width="46" height="24" rx="6" fill="#e11d48" />
    <text x="97" y="103" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="monospace" textAnchor="middle">REST</text>
  </svg>
);

// 7. PostgreSQL Official Slonik Elephant Logo
export const PostgresLogo = ({ size = 28, className = '' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 128 128" 
    className={className}
    style={{ filter: 'drop-shadow(0 0 8px rgba(51, 103, 145, 0.5))' }}
  >
    <circle cx="64" cy="64" r="58" fill="#336791" stroke="#5c93c4" strokeWidth="2" />
    <path 
      d="M63.8 26c-17.2 0-30.8 13.5-30.8 30.2 0 7.8 2.8 15 7.6 20.6-2.5 3.5-5.6 7.8-5.6 13.2 0 10.8 9.5 18 22.8 18 2.8 0 5.4-.3 7.8-1 2.4.7 5 1 7.8 1 13.3 0 22.8-7.2 22.8-18 0-5.4-3.1-9.7-5.6-13.2 4.8-5.6 7.6-12.8 7.6-20.6C94.6 39.5 81 26 63.8 26zm-8.8 24.5a4.2 4.2 0 1 1 0 8.4 4.2 4.2 0 0 1 0-8.4zm17.6 0a4.2 4.2 0 1 1 0 8.4 4.2 4.2 0 0 1 0-8.4zm-8.8 21c8 0 14.5 4.5 14.5 10s-6.5 10-14.5 10-14.5-4.5-14.5-10 6.5-10 14.5-10z" 
      fill="#FFFFFF" 
      opacity="0.95" 
    />
  </svg>
);

// 8. SQLite Feather & Cylinder Logo
export const SqliteLogo = ({ size = 28, className = '' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 128 128" 
    className={className}
    style={{ filter: 'drop-shadow(0 0 8px rgba(0, 173, 239, 0.45))' }}
  >
    <rect width="128" height="128" rx="22" fill="#003B57" stroke="#00ADEF" strokeWidth="2" />
    <path 
      d="M34 38c0-7.7 13.4-14 30-14s30 6.3 30 14v52c0 7.7-13.4 14-30 14s-30-6.3-30-14V38z" 
      fill="#00ADEF" 
      opacity="0.85" 
    />
    <ellipse cx="64" cy="38" rx="30" ry="14" fill="#67D9FF" />
    <path d="M34 56c4.6 5.8 16.7 10 30 10s25.4-4.2 30-10" fill="none" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
    <path d="M34 74c4.6 5.8 16.7 10 30 10s25.4-4.2 30-10" fill="none" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

// PostgreSQL / SQLite Dual Badge Logo
export const PostgresSqliteLogo = ({ size = 32, className = '' }) => (
  <div 
    className={className} 
    style={{ 
      display: 'inline-flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      gap: '3px' 
    }}
  >
    <PostgresLogo size={Math.round(size * 0.78)} />
    <SqliteLogo size={Math.round(size * 0.78)} />
  </div>
);

// 9. Git Official Orange Logo
export const GitLogo = ({ size = 28, className = '' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 128 128" 
    className={className}
    style={{ filter: 'drop-shadow(0 0 8px rgba(240, 80, 50, 0.5))' }}
  >
    <path 
      d="M124.6 57.3L70.7 3.4c-4.5-4.5-11.9-4.5-16.4 0L39.8 17.9l20.8 20.8c4.8-1.6 10.4-.6 14.3 3.2 3.9 3.9 4.9 9.5 3.3 14.3l20 20c4.8-1.6 10.4-.6 14.3 3.2 5.5 5.5 5.5 14.3 0 19.8-5.5 5.5-14.3 5.5-19.8 0-4.2-4.2-5-10.4-2.5-15.3L71.4 64.9v29.5c1.4 1 2.6 2.3 3.5 3.9 4.1 6.5 2.1 15.2-4.4 19.3-6.5 4.1-15.2 2.1-19.3-4.4-4.1-6.5-2.1-15.2 4.4-19.3 2.1-1.3 4.4-2 6.8-2v-31c-2.4 0-4.7-.7-6.8-2-4.1-2.6-6.5-7.1-6.5-11.9 0-3.1 1-6.2 3-8.8L31.6 17.5 3.4 45.7c-4.5 4.5-4.5 11.9 0 16.4l53.9 53.9c4.5 4.5 11.9 4.5 16.4 0l50.9-50.9c4.5-4.6 4.5-11.9 0-16.5v-.3z" 
      fill="#F05032" 
    />
  </svg>
);

// 10. GitHub Official Logo Badge
export const GithubBadgeLogo = ({ size = 28, className = '' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 128 128" 
    className={className}
    style={{ filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.35))' }}
  >
    <circle cx="64" cy="64" r="58" fill="#181717" stroke="rgba(255,255,255,0.25)" strokeWidth="3" />
    <path 
      fill="#FFFFFF" 
      fillRule="evenodd" 
      clipRule="evenodd" 
      d="M64 20C39.7 20 20 39.7 20 64c0 19.4 12.6 35.9 30.1 41.7 2.2.4 3-.9 3-2.1v-8.2c-12.2 2.7-14.8-5.3-14.8-5.3-2-5.1-4.9-6.4-4.9-6.4-4-2.7.3-2.7.3-2.7 4.4.3 6.8 4.6 6.8 4.6 3.9 6.8 10.3 4.8 12.8 3.7.4-2.9 1.5-4.8 2.8-5.9-9.8-1-20-4.9-20-21.8 0-4.8 1.8-8.8 4.5-11.9-.4-1.1-2-5.6.4-11.7 0 0 3.7-1.2 12.1 4.5 3.5-1 7.3-1.5 11-1.5s7.5.5 11 1.5c8.4-5.7 12.1-4.5 12.1-4.5 2.4 6.1.8 10.6.4 11.7 2.8 3.1 4.5 7.1 4.5 11.9 0 17-10.3 20.7-20.1 21.8 1.6 1.4 3 4.1 3 8.2v12.2c0 1.2.8 2.6 3 2.1C95.4 99.9 108 83.4 108 64c0-24.3-19.7-44-44-44z" 
    />
  </svg>
);

// Git & GitHub Combined Dual Logo
export const GitGithubLogo = ({ size = 32, className = '' }) => (
  <div 
    className={className} 
    style={{ 
      display: 'inline-flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      gap: '3px' 
    }}
  >
    <GitLogo size={Math.round(size * 0.78)} />
    <GithubBadgeLogo size={Math.round(size * 0.78)} />
  </div>
);

// 11. APIs RESTful Glowing Futuristic Logo
export const RestApiLogo = ({ size = 28, className = '' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 128 128" 
    className={className}
    style={{ filter: 'drop-shadow(0 0 10px rgba(0, 210, 255, 0.55))' }}
  >
    <defs>
      <linearGradient id="rest-bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0284c7" />
        <stop offset="50%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
    </defs>
    <rect width="128" height="128" rx="22" fill="url(#rest-bg-grad)" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
    <rect x="22" y="24" width="84" height="24" rx="8" fill="#090d16" fillOpacity="0.92" stroke="#38bdf8" strokeWidth="2.5" />
    <circle cx="34" cy="36" r="4" fill="#38bdf8" />
    <circle cx="46" cy="36" r="4" fill="#34d399" />
    <text x="82" y="41" fill="#38bdf8" fontSize="13" fontWeight="bold" fontFamily="monospace" textAnchor="middle">REST</text>

    <path d="M64 48 L64 74 M54 62 L64 48 L74 62" fill="none" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M64 74 L54 60 M64 74 L74 60" fill="none" stroke="#38bdf8" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />

    <rect x="22" y="78" width="84" height="26" rx="8" fill="#090d16" fillOpacity="0.92" stroke="#a855f7" strokeWidth="2.5" />
    <circle cx="34" cy="91" r="4" fill="#a855f7" />
    <circle cx="46" cy="91" r="4" fill="#f43f5e" />
    <text x="82" y="96" fill="#c084fc" fontSize="13" fontWeight="bold" fontFamily="monospace" textAnchor="middle">API</text>
  </svg>
);

// 12. PHP Oval Logo (from reference image)
export const PhpLogo = ({ size = 28, className = '' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 128 80" 
    className={className}
    style={{ filter: 'drop-shadow(0 0 8px rgba(119, 123, 179, 0.5))' }}
  >
    <ellipse cx="64" cy="40" rx="60" ry="36" fill="#777BB4" />
    <path 
      d="M36.2 25h-11L18 55h8l2.6-12h7.6c7.5 0 12.3-4.2 12.3-10.8 0-4.9-3.8-7.2-12.3-7.2zm-1.8 13.5h-5.2l2-9.2h5.2c4.1 0 5.8 1.2 5.8 4.4 0 3.3-2 4.8-5.8 4.8zm32.8-13.5H56.1L49 55h8l3.1-14.2h9.1l-3.1 14.2h8l6.8-30H73.9l-2.6 11.8H62.2L64.8 25zm33.8 0h-11L83 55h8l2.6-12h7.6c7.5 0 12.3-4.2 12.3-10.8 0-4.9-3.8-7.2-12.3-7.2zm-1.8 13.5H94l2-9.2h5.2c4.1 0 5.8 1.2 5.8 4.4 0 3.3-2 4.8-5.8 4.8z" 
      fill="#232531" 
    />
  </svg>
);

// 13. Swift Bird Orange Logo (from reference image)
export const SwiftLogo = ({ size = 28, className = '' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 128 128" 
    className={className}
    style={{ filter: 'drop-shadow(0 0 8px rgba(240, 81, 56, 0.5))' }}
  >
    <rect width="128" height="128" rx="24" fill="#F05138" />
    <path 
      d="M104.5 87.8c-12.2 14.5-31.5 22.2-50.5 20.2 19-8.5 32.4-22.6 37.6-35.4-8.8 4.8-18.7 7.7-28.7 8.5C45.2 82.5 30 69.2 24.5 50.8c-1.2-4.1-1.8-8.2-1.9-12.4 12.5 19.3 32.2 33 54.7 37.7-9.5-8.5-15.6-20.4-16.7-33.1-.2-2.8-.1-5.6.4-8.3 9.4 11.2 21.6 19.8 35.3 24.8 3.5 1.3 7.1 2.3 10.7 3-3.6-5.8-6.1-12.2-7.3-18.9-1.2-6.5-.9-13.2.9-19.6 12.2 13.5 20.8 30 24.6 47.9 1.6 7.4 1.8 15 .6 22.4-1.2 4.6-3.1 9.1-5.6 13.1z" 
      fill="#FFFFFF" 
    />
  </svg>
);

// 14. C Language Grey Hexagon (from reference image)
export const CLogo = ({ size = 28, className = '' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 128 128" 
    className={className}
    style={{ filter: 'drop-shadow(0 0 8px rgba(101, 154, 210, 0.45))' }}
  >
    <polygon points="64 4, 118 34, 118 94, 64 124, 10 94, 10 34" fill="#659AD2" />
    <polygon points="64 12, 110 38, 110 90, 64 116, 18 90, 18 38" fill="#4B729F" />
    <path 
      d="M64 36c-15.5 0-28 12.5-28 28s12.5 28 28 28c8.8 0 16.6-4.1 21.7-10.4l-11.2-7.5C71.3 77.8 67.9 80 64 80c-8.8 0-16-7.2-16-16s7.2-16 16-16c3.9 0 7.3 2.2 9.5 5.9l11.2-7.5C79.6 40.1 72.8 36 64 36z" 
      fill="#FFFFFF" 
    />
  </svg>
);

// 15. C++ Blue Hexagon (from reference image)
export const CppLogo = ({ size = 28, className = '' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 128 128" 
    className={className}
    style={{ filter: 'drop-shadow(0 0 8px rgba(0, 89, 156, 0.5))' }}
  >
    <polygon points="64 4, 118 34, 118 94, 64 124, 10 94, 10 34" fill="#00599C" />
    <polygon points="64 12, 110 38, 110 90, 64 116, 18 90, 18 38" fill="#004482" />
    <path 
      d="M56 36c-15.5 0-28 12.5-28 28s12.5 28 28 28c8.8 0 16.6-4.1 21.7-10.4l-11.2-7.5C63.3 77.8 59.9 80 56 80c-8.8 0-16-7.2-16-16s7.2-16 16-16c3.9 0 7.3 2.2 9.5 5.9l11.2-7.5C71.6 40.1 64.8 36 56 36z" 
      fill="#FFFFFF" 
    />
    <path d="M84 60h6v-6h4v6h6v4h-6v6h-4v-6h-6zm18 0h6v-6h4v6h6v4h-6v6h-4v-6h-6z" fill="#FFFFFF" />
  </svg>
);

// 16. C# Purple Hexagon (from reference image)
export const CSharpLogo = ({ size = 28, className = '' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 128 128" 
    className={className}
    style={{ filter: 'drop-shadow(0 0 8px rgba(155, 79, 150, 0.5))' }}
  >
    <polygon points="64 4, 118 34, 118 94, 64 124, 10 94, 10 34" fill="#9B4F96" />
    <polygon points="64 12, 110 38, 110 90, 64 116, 18 90, 18 38" fill="#68217A" />
    <path 
      d="M54 36c-15.5 0-28 12.5-28 28s12.5 28 28 28c8.8 0 16.6-4.1 21.7-10.4l-11.2-7.5C61.3 77.8 57.9 80 54 80c-8.8 0-16-7.2-16-16s7.2-16 16-16c3.9 0 7.3 2.2 9.5 5.9l11.2-7.5C69.6 40.1 62.8 36 54 36z" 
      fill="#FFFFFF" 
    />
    <text x="89" y="74" fill="#FFFFFF" fontSize="28" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">#</text>
  </svg>
);

// 17. Java Coffee Cup Logo (from reference image)
export const JavaLogo = ({ size = 28, className = '' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 128 128" 
    className={className}
    style={{ filter: 'drop-shadow(0 0 8px rgba(231, 111, 0, 0.45))' }}
  >
    <path d="M47.2 94.6c15.2 1.4 30.5-3.3 43.8-7.8-1.5 1.5-3.4 2.8-5.4 3.9-12.8 7.3-30.8 6.9-44.5 1.9-4.8-1.8-9.4-4.5-13.3-7.8 6.2 3.6 12.8 7.6 19.4 9.8z" fill="#E76F00" />
    <path d="M41.8 82.5c12.2 1.1 24.4-1.9 35.1-6.1-1.3 1.2-2.8 2.3-4.5 3.2-10.3 5.8-24.8 5.5-35.8 1.5-3.9-1.4-7.5-3.6-10.7-6.2 5 2.8 10.3 6 15.9 7.6z" fill="#E76F00" />
    <path d="M72.1 61.2c5.4 5.9-1.5 11.7-1.5 11.7s13.8-7.2 7.4-16.2c-5.8-8.1-13.8-12-21-17.7 5.1 4.2 10.8 17.4 15.1 22.2z" fill="#5382A1" />
    <path d="M54.7 20.4c-4.6 4.9-1.8 12.5 1.2 18 4.2 7.7 9.8 14.8 11.7 23.5-5.9-6.4-11.8-13.4-15.5-21.6-4.5-9.8-3.4-17.6 2.6-19.9z" fill="#E76F00" />
    <path d="M86.8 98.4c-17.4 11-45.7 10.8-63.5.7-1.7-1-3.3-2.1-4.7-3.4 12.8 6.2 27.5 9 41.7 8.2 9.2-.5 18.4-2.8 26.5-5.5z" fill="#5382A1" />
    <path d="M30.4 111.4c21.8 1.4 44.5-3.1 63.6-13.9 2-1.1 3.9-2.4 5.6-3.8-19.8 13.9-46.7 19.3-70.2 15.2-4.5-.8-8.8-2.2-12.9-4.1 4.5 2.6 9.1 5.2 13.9 6.6z" fill="#E76F00" />
  </svg>
);
