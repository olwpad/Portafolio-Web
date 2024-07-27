import React from 'react'

export const Aboutme = () => {
  return (
    <section className='flex justify-center items-center'>
      <div className='flex flex-col items-center sm:items-start'>
        <div>
          <h2 className='text-4xl font-extrabold font-serif  text-textPrimary text-center mb-5'>Sobre mí</h2>
        </div>
        <div className='leading-relaxed text-textSecondary max-w-xl p-4 '>
          <p className='text-lg md:px-0 px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Possimus eum, illo voluptatem eos veritatis perspiciatis dolor dolore reprehenderit
            ab iure cum necessitatibus doloribus laudantium impedit odio? Impedit qui sunt ipsum!</p>
        </div>
      </div>
    </section>
  )
}
