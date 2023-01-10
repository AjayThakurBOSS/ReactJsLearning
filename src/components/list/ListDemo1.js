import React from 'react'

const ListDemo1 = () => {

    const cars =["tata"," Honda","tata"," Honda","tata"," Honda",]

    // How to print all the data from array?
    // We can achieve it by using map function as follow.

    // How to display all the array data as a list

  return (
    <div>
      list demo
      <hr>
      </hr>
      {cars.map((car, ind) => {
        return <div key = {ind}> {car}</div>
      })}

       <hr/>
       <ol>
        {cars.map((car, ind) => {
            return <li key = {ind}> {car}</li>
        })}
       </ol>
    </div>

   
  )
}

export default ListDemo1
