import React from 'react'

function NotFound() {
  return (
    <div className="divide-y divide-gray-200">
      <div className="pt-6 pb-8 space-y-2 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Oops!
        </h1>
        <p className="text-lg leading-7 text-gray-800">
            <br></br><br></br>
                There's Nothing Here.
            <br></br><br></br>
          <strong><a href="/" target="_blank" rel="noreferrer">Return Home</a></strong>.
        </p>
      </div>
      </div>
  )
}

export default NotFound
