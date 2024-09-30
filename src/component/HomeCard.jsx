import React from 'react'

const HomeCard = () => {
  const cardItem = [
    {
      image:"https://i.ibb.co.com/pdxhTkq/property-5.jpg",
      title:"Test",
      des:"no location"
    },
    {
      image:"https://i.ibb.co.com/5YCxVj6/property-4.jpg",
      title:"Brendon 1:1",
      des:"no location"
    },
    {
      image:"https://i.ibb.co.com/fX4rBJz/1727358606179-property-7.jpg",
      title:"T20 - Tournament",
      des:"no location"
    },
    {
      image:"https://i.ibb.co.com/ZVx0hkP/1727431583681-pexels-case-originals-3601184.jpg",
      title:"Testing",
      des:"no location"
    },
    {
      image:"https://i.ibb.co.com/yszHhkv/1727357331205-property-9.jpg",
      title:"New event",
      des:"no location"
    },
  ]
  return (
    <div>
       <div className="content mx-6 lg:mx-20 my-4">
       <div className="item grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {
              cardItem.map((item, index) => (
                <div key={index} className="main">
                  <div className="image h-[300px] lg:h-[180px] rounded-lg relative">
                    <img className="rounded-lg object-cover w-full h-full" src={item?.image} alt="" />
                    <div className="hover-area hover:bg-gray-100/30 duration-300 absolute top-0 w-full h-full rounded-lg cursor-pointer"></div>
                  </div>
                  <div className="desc mt-1 first-letter:uppercase">
                    <p className="text-[14px] font-semibold">{item?.title}</p>
                    <p className="first-letter:uppercase text-[#7d7284] text-[14px] font-semibold">{item?.des}</p>
                  </div>
                </div>
              ))
            }
          </div>
       </div>
    </div>
  )
}

export default HomeCard