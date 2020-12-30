import React from 'react'
import { graphql, Link } from 'gatsby'

function IndexPage({ data: { allGraphCmsPost } }) {
  return (
    <div className="divide-y divide-gray-200">
      <div className="pt-6 pb-8 space-y-2 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
          Hi, I'm Ronak
        </h1>
        <p className="text-lg leading-7 text-gray-800">
          I'm a sustainable marketing and growth lover who's a fan of marketing automation and overengineering things. I'm also a pizza purist, domain hoarder, and free wifi enthusiast.
          I'm currently the VP of Marketing at <strong><a href="https://graphcms.com?referrer=ronakganatra" target="_blank" rel="noreferrer">GraphCMS</a></strong>, Co-Creator of <strong><a href="https://buildyourdxp.com?referrer=ronakganatra" target="_blank" rel="noreferrer">Build Your DXP</a></strong>, and a Marketing & Growth Mentor at <strong><a href="https://www.mentoring-club.com/the-mentors/ronak-ganatra?referrer=ronakganatra" target="_blank" rel="noreferrer">The Mentoring Club</a></strong>.
          <br></br>
          <br></br>
          I write and rant about things related to marketing, growth, DXPs, and strategy.
        </p>
        <p className="text-1xl leading-7 text-indigo-600">
        <strong><a href="mailto:gunny@ronakganatra.com">Get in touch!</a></strong>
        </p>
      </div>

      <ul className="divide-y divide-gray-200">
        {allGraphCmsPost.nodes.map((post) => {
          return (
            <li key={post.id} className="py-12">
              <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                <dl>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base leading-6 font-medium text-gray-500">
                    <time dateTime={post.date}>{post.date}</time>
                  </dd>
                </dl>
                <div className="space-y-5 xl:col-span-3">
                  <div className="space-y-6">
                    <h2 className="text-2xl leading-8 font-bold tracking-tight">
                      <Link
                        to={`/posts/${post.slug}`}
                        className="text-gray-900"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    {post.excerpt && (
                      <div className="prose max-w-none text-gray-500">
                        {post.excerpt}
                      </div>
                    )}
                  </div>
                  <div className="text-base leading-6 font-medium">
                    <Link
                      to={`/posts/${post.slug}`}
                      className="text-indigo-500 hover:text-indigo-600"
                      aria-label={`Read "${post.title}"`}
                    >
                      Read more &rarr;
                    </Link>
                  </div>
                </div>
              </article>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export const indexPageQuery = graphql`
  {
    allGraphCmsPost(sort: { fields: date, order: DESC }) {
      nodes {
        id
        date: formattedDate
        excerpt
        slug
        title
      }
    }
  }
`

export default IndexPage
