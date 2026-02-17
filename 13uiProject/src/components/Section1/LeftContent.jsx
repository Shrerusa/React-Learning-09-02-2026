import React from 'react'

const LeftContent = () => {
    return (
        <div className='h-full w-1/3 flex flex-col justify-between '>
            <div className='p-5'>
                <h3 className='text-6xl font-bold mb-7 '>Prospective <br /> <span className='text-gray-700'> customer</span> <br /> segmentation</h3>
                <p className='text-lg font-medium text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nobis non, eligendi adipisci fugit iste earum iusto doloremque ipsum minus?</p>
            </div>

            <div className=''>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right size-16 "><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
            </div>
        </div>
    )
}

export default LeftContent