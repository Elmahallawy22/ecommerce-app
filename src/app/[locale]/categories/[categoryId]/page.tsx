import React from 'react'

const Category = ({ params }: { params: { categoryId: string } }) => {
  return (
    <h1 className=' text-5xl'>{params.categoryId}</h1>
  )
}

export default Category