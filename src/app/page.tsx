import React from 'react'

const page = () => {
   return (
    <div><figure className="bg-slate-100 rounded-xl dark:bg-slate-800">
    <img className="w-24 h-24" src="/asimumer.pic.jpg" alt="" width="384" height="512"/>
    <div className="pt-6 space-y-4">
      <blockquote>
        <p className="text-lg">
          “Tailwind CSS is the only framework that I've seen scale
          on large teams. It’s easy to customize, adapts to any design,
          and the build size is tiny.”
        </p>
      </blockquote>
      <figcaption>
        <div>
          Muhammad Asim Umer
        </div>
        <div>
          Staff Engineer, RYK Developers
        </div>
      </figcaption>
    </div>
  </figure></div>
   )
  }

  export default page