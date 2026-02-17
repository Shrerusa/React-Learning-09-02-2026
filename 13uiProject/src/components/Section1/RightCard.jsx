import React from 'react'
// import useRightContextInfo from '../../contexts/rightContextInfo'

const RightCard = ({data}) => {

    return (
        <div className='h-full w-1/3 bg-blue-200 rounded-4xl overflow-hidden relative shrink-0'>
            <img className='h-full w-full object-cover' src={data.img} alt={data.tag} />
            <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between text-white bg-amber-950/30'>
                <h2 className='h-12 w-12 text-xl font-bold bg-amber-50/25 rounded-full flex justify-center items-center'>{data.id}</h2>
                <div>
                    <p className='text-lg leading-normal text-shadow-2xs'>{data.info}</p>

                    <div className='flex justify-between mt-12'>
                        <button style={{backgroundColor: data.colorBtn}} className='font-medium px-8 py-2 rounded-full mt-1.5'>{data.tag}</button>
                        <button style={{backgroundColor: data.colorBtn}} className='   px-3 py-3 rounded-full mt-1.5'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightCard