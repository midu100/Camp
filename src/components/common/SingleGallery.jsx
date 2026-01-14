import React from 'react'

const SingleGallery = ({src}) => {
  return (
    <>
      <div className="group relative overflow-hidden rounded-2xl shadow-lg border-2 border-transparent hover:border-bd-green transition-all duration-300">
            <div className="aspect-square overflow-hidden">
              <img
                src={src}
                alt="Campaign Rally"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-white font-medium">জনসমুদ্র</p>
            </div>
          </div>
    </>
  )
}

export default SingleGallery