import React from 'react'

const PageTitle = ({ title, icon }) => {

  return (
    <div className='flex flex-col gap-5'>
      <div className='flex h-fit items-center justify-between pr-3'>
        <h2 className=' text-3xl font-medium'>{title}</h2>
        {icon}
      </div>
        <hr color='#D6D6D6'/>
    </div>
  )
}

export default PageTitle