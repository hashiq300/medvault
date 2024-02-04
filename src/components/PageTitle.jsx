import React from 'react'

const PageTitle = ({ title }) => {
  return (
    <div className='flex flex-col gap-5'>
        <h2 className=' text-3xl font-medium'>{title}</h2>
        <hr color='#D6D6D6'/>
    </div>
  )
}

export default PageTitle