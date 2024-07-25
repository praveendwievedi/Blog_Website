import React from 'react'

function Loading_page() {
  return (
    <div className='w-full bg-black flex justify-center items-center h-screen'>
    <div class="text-center">
    <div
    class="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-orange-500 mx-auto"
     ></div>
    <h2 class="text-zinc-900 dark:text-white mt-4">Loading...</h2>
    <p class="text-zinc-600 dark:text-zinc-400">
    You're about to embark on your blogging journey  </p>
   </div>
  </div>
  )
}

export default Loading_page
