import * as React from 'react'

const SvgDiscordLogo = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.32 23.832c0-1.24.893-2.258 2.024-2.258s2.044 1.017 2.024 2.258c0 1.24-.893 2.257-2.024 2.257-1.11 0-2.023-1.016-2.023-2.257Zm7.241 0c0-1.24.893-2.258 2.024-2.258 1.13 0 2.023 1.017 2.023 2.258 0 1.24-.892 2.257-2.023 2.257-1.11 0-2.024-1.016-2.024-2.257Z"
      fill="#7289DA"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.004 4.643h26.794c2.26 0 4.1 1.817 4.1 4.069V44.15l-4.3-3.754-2.42-2.212-2.559-2.35 1.06 3.654H11.004c-2.26 0-4.1-1.818-4.1-4.07V8.712c0-2.252 1.84-4.07 4.1-4.07ZM28.76 28.84c.6.75 1.32 1.6 1.32 1.6 4.419-.139 6.118-3.003 6.118-3.003 0-6.36-2.879-11.516-2.879-11.516-2.88-2.134-5.619-2.075-5.619-2.075l-.28.316c3.4 1.028 4.98 2.51 4.98 2.51a16.443 16.443 0 0 0-6.02-1.897 17.128 17.128 0 0 0-4.039.04c-.105 0-.194.014-.295.031l-.045.008c-.7.059-2.4.316-4.539 1.244-.74.336-1.18.573-1.18.573s1.66-1.56 5.26-2.588l-.2-.237s-2.74-.059-5.62 2.075c0 0-2.879 5.155-2.879 11.516 0 0 1.68 2.864 6.099 3.003 0 0 .74-.89 1.34-1.64-2.54-.75-3.5-2.33-3.5-2.33s.2.137.56.335c.02.02.04.04.08.06.03.019.06.034.09.049a11.767 11.767 0 0 0 1.55.721c.82.316 1.8.632 2.94.85 1.499.276 3.259.374 5.178.019.94-.158 1.9-.435 2.9-.85.7-.256 1.48-.632 2.3-1.165 0 0-1 1.62-3.62 2.35Z"
      fill="#7289DA"
    />
  </svg>
)

export default SvgDiscordLogo
