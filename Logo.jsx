import React from 'react'

const Logo = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ cursor: 'pointer' }}
    >
      {/* Background circle */}
      <circle cx="100" cy="100" r="100" fill="#ff7a59" />

      {/* Fork */}
      <g transform="translate(60, 40)">
        {/* Handle */}
        <path
          d="M30 20 Q35 30 30 50 Q25 65 15 75"
          stroke="white"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
        />

        {/* Fork prongs */}
        <line x1="15" y1="20" x2="15" y2="70" stroke="white" strokeWidth="6" strokeLinecap="round" />
        <line x1="30" y1="20" x2="30" y2="70" stroke="white" strokeWidth="6" strokeLinecap="round" />
        <line x1="45" y1="20" x2="45" y2="70" stroke="white" strokeWidth="6" strokeLinecap="round" />
        <line x1="60" y1="20" x2="60" y2="70" stroke="white" strokeWidth="6" strokeLinecap="round" />
      </g>

      {/* Speed lines */}
      <g transform="translate(30, 80)">
        <rect x="0" y="0" width="20" height="6" rx="3" fill="white" />
        <rect x="0" y="15" width="15" height="5" rx="2.5" fill="white" />
        <rect x="0" y="30" width="10" height="4" rx="2" fill="white" />
      </g>
    </svg>
  )
}

export default Logo
