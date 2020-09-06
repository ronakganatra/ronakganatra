import React from 'react'

import GitHubSVG from '../svg/github.svg'
import LinkedInSVG from '../svg/linkedin.svg'
import TwitterSVG from '../svg/twitter.svg'

const socialLinks = [
  {
    Component: TwitterSVG,
    href: 'https://twitter.com/gunnyganatra/',
    title: 'Twitter',
  },
  {
    Component: LinkedInSVG,
    href: 'https://www.linkedin.com/in/ronakganatra/',
    title: 'LinkedIn',
  },
  {
    Component: GitHubSVG,
    href: 'https://github.com/ronakganatra/',
    title: 'GitHub',
  },
]

function Footer() {
  return (
    <footer className="bg-black">
      <div className="flex flex-col md:flex-row items-center md:justify-between py-6 max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-5xl space-y-6 md:space-y-0">
      <ul className="inline-flex space-x-6">
          {socialLinks.map(({ Component, href, title }, index) => (
            <li key={index}>
              <a
                href={href}
                target="_blank"
                className="block text-gray-300 hover:text-white p-1 text-sm"
                rel="noopener noreferrer"
                title={title}
              >
                <Component className="h-5 w-5" />
              </a>
            </li>
          ))}
        </ul>
        <p className="text-gray-100">
        © Ronak Ganatra, 2015 - Present | Powered by 
        <a href="https://graphcms.com?referrer=ronakganatra"> GraphCMS</a> and
        <a href="https://gatsbyjs.com"> Gatsby</a>. | Deployed on
        <a href="https://vercel.com"> Vercel</a>.
        </p>

      </div>
    </footer>
  )
}

export default Footer
