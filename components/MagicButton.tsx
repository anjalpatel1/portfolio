import React from 'react'

const MagicButton = ({
    title, icon, position, handleClick, otherClasses
}:{
    title:string; icon:React.ReactNode, position: string; handleClick?: () => void; otherClasses?:string;
} ) => {
  return (
    <div> 
    <button className=" relative inline-flex h-12 w-full animate-shimmer items-center justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 md:w-60 md:mt-10" onClick={handleClick}>
        <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-sltae-950 px-7 py-1 text-sm font-medium text-white gap-2 ${otherClasses}`}>
            {position === 'left' && icon}
            {title}
            {position === 'right' && icon}
        </span>
    </button>
  </div>
  )
}

export default MagicButton