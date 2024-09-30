import { Link } from "react-router-dom"
import Title from "../ui/Title"


const TestCoach = () => {
  const gallery = [
    {
      image:"https://i.ibb.co.com/LxVFGbh/c7120266-6fd6-40fa-9725-b539d5a22ef5.jpg"
    },
    {
      image:"https://i.ibb.co.com/rdqWtXn/photo-1579403124614-197f69d8187b.jpg"
    },
    {
      image:"https://i.ibb.co.com/x3B4T53/224911-1.jpg"
    },
    {
      image:"https://i.ibb.co.com/vjQLbjh/e51e80e9-1118-46a1-9b5f-f7870524610a.jpg"
    },
    {
      image:"https://i.ibb.co.com/ZYjx6kB/Brendon-Louw-2.jpg"
    },
  ]
  const listTitle= [
    {
      name:"Comprehensive batting drills designed to improve your technique and build consistency at the crease."
    },
    {
      name:"Personalized feedback from Brendon Louw, with a focus on enhancing your strengths and addressing areas for improvement."
    },
    {
      name:"Insights into the mental aspect of batting, including how to handle pressure situations and maintain focus during long innings."
    },
    {
      name:"A detailed walkthrough of Brendon’s own experiences at the first-class level, offering a glimpse into the mindset of a top cricketer."
    },
    {
      name:"Q&A session where you can ask Brendon about his career, training routines, and tips for aspiring cricketers."
    },
    {
      name:"A networking opportunity with fellow cricket enthusiasts and the chance to meet like-minded individuals who share your passion for the game."
    },
  ]
  return (
    <div>
      <div className="main mx-4 md:mx-4 lg:mx-[120px]  mt-12 py-4">
          <div className="title">
            <Title className=" my-2" title="Master the Art of Batting with Brendon Louw"/>
          </div>
          <div className="image grid md:grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="mother">
              <div className="big-image w-full h-full">
                {
                  gallery.slice(0, 1).map((item, index) => (
                    <div key={index} className="main">
                      <img className="h-full w-full object-cover rounded-lg" src={item?.image} alt="" />
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="smal hidden md:block">
              <div className="small grid grid-cols-2 gap-1">
                   {
                      gallery.slice(1,5).map((item, index) => (
                        <div key={index} className="main">
                          <img className="h-[255px] w-full object-cover rounded-lg" src={item?.image} alt="" />
                        </div>
                      ))
                    }
              </div>
            </div>
          </div>
          {/* london united king dom area start */}
          <div className="london lg:flex mt-8">
             <div className="text-area lg:w-[70%]">
                <div className="title">
                  <Title className="text-[20px] font-semibold" title="London, United Kingdom" />
                </div>
                <p className=" text-[#989193] text-[16px]">Cricket Batting Master Class</p>
                <div className="des mt-4">
                   <div className="profile flex gap-4">
                      <div className="profile h-12 w-12">
                         <img className=" h-full w-full rounded-full" src="https://i.ibb.co.com/x3B4T53/224911-1.jpg" alt="" />
                      </div>
                      <div className="text">
                         <Title className="text-[16px]" title="Hosted by Brendon Louw" />
                         <p className=" text-[#7d8490] text-[16px]">South African First-Class Cricketer</p>
                      </div>
                   </div>
                   <div className="des mt-4 flex flex-col gap-4">
                       <div className="item flex gap-4">
                          <div className="icon">
                             🏏
                          </div>
                          <div className="text">
                              <Title className="text-[16px]" title="Master Advanced Batting Techniques" />
                              <p className="text-[#989193]">Learn the nuances of batting with Brendon Louw as he shares his extensive experience from over 5000 first-class runs.</p>
                          </div>
                       </div>
                       <div className="item flex gap-4">
                          <div className="icon">
                            📈
                          </div>
                          <div className="text">
                              <Title className="text-[16px]" title="Get Personalized Feedback" />
                              <p className="text-[#989193]">Receive tailored advice and insights to improve your batting technique and game strategy.</p>
                          </div>
                       </div>
                       <div className="item flex gap-4">
                          <div className="icon">
                            🧠
                          </div>
                          <div className="text">
                              <Title className="text-[16px]" title="Mental Preparation for the Game" />
                              <p className="text-[#989193]">Learn how to stay focused and composed under pressure, and develop the mental toughness required to succeed.</p>
                          </div>
                       </div>
                       <div className="item flex gap-4">
                          <div className="icon">
                            🤝
                          </div>
                          <div className="text">
                              <Title className="text-[16px]" title="Exclusive Q&A Session" />
                              <p className="text-[#989193]">Engage with Brendon during an interactive Q&A, where you can ask about his cricket journey and get professional tips.</p>
                          </div>
                       </div>
                   </div>
                </div>
                
             </div>
             <div className="button-area w-[48%]  lg:w-[30%]">
                 <div className="item shadow-xl my-4 p-6 pt-4   lg:ml-10 rounded-lg">
                     <div className="title flex flex-col gap-2">
                        <Title className="text-[18px] font-medium" title="£59 per session" />
                        <p className=" text-[#8a8484] text-[16px]">Limited seats available</p>
                        <div className=" inline-block w-full pt-4">
                           <button className=" w-full text-white py-2 rounded-lg bg-gradient-to-r from-[#25bb74] to-[#378be2]">Book Now</button>
                        </div>
                     </div>
                 </div>
             </div>
          </div>
          {/* descprtion area start */}
          <div className="content mt-4">
             <div className="item">
                <p className=" text-[16px] text-[#384455]">
                    Join us in London for an exclusive cricket batting master class led by Brendon Louw, a seasoned first-class cricketer from South Africa with over 5000 runs to his name. This is a rare opportunity to learn the intricacies of batting from a professional who has excelled at the highest levels of the game.
                </p>
             </div>
             {/* what i do area start */}
             <div className="">
                <Title className="text-[18px] my-6" title="What you’ll do" />
                <p className="text-[#384455]">
                   During this master class, Brendon Louw will take you through the fundamentals of batting, focusing on technique, mental preparation, and game strategy. Whether you’re an aspiring cricketer or a seasoned player looking to refine your skills, this session will provide invaluable insights and hands-on experience.
                </p>
             </div>
             <p className="text-[#384455] my-4">Here’s what you can expect from this exclusive session:</p>

             {/* list area start */}
             <div className="content ml-4">
                <ul>
                    {
                      listTitle.map((item,index)=>
                          <li className=" list-disc my-4 text-[16px] text-[#384455]" key={index}>{item?.name}</li>
                      )
                    }
                </ul>
             </div>
             <p className="text-[#384455] my-6">
                Don’t miss this chance to learn from one of South Africa’s cricketing talents in the heart of London. Whether you’re looking to take your game to the next level or simply enjoy a day of cricketing excellence, this master class is for you.
             </p>
          </div> 
          {/* host area start */}
          <div className="main">
            <div className="content my-4">
              <div className="title">
                 <Title className="text-[24px]" title="Meet your Host"/>
              </div>
              <div className="main-item shadow-lg mt-6 rounded-lg">
                 <div className="item p-8 flex flex-col justify-center lg:flex-row lg:justify-start items-center gap-8 pb-12 ">
                    <div className="profile">
                     <div className="profile h-12 w-12">
                         <img className=" h-full w-full rounded-full" src="https://i.ibb.co.com/x3B4T53/224911-1.jpg" alt="" />
                      </div>
                    </div>
                    <div className="des text-center lg:text-start">
                       <div className="title">
                         <Title className="text-[20px]" title="Brendon Louw"/>
                       </div>
                       <p className="text-[16px] text-[#384455]">South African First-Class Cricketer</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
          {/* crickter skill area start */}
          <div className="main mt-4">
            <div className="content flex flex-col gap-4">
              <div className="item flex gap-4">
                 <p>🎓</p>
                 <p className="font-semibold text-[16px]">Cricketing Background: Over 5000 first-class runs</p>
              </div>
              <div className="item flex gap-4">
                 <p>🏏</p>
                 <p className="font-semibold text-[16px]">Specialization: Expert in batting technique and game strategy</p>
              </div>
              <div className="item flex gap-4">
                 <p>🌍</p>
                 <p className="font-semibold text-[16px]">International Experience: Played in various competitive leagues</p>
              </div>
              <div className="item flex gap-4">
                 <p>🏆</p>
                 <p className="font-semibold text-[16px]">Achievements: Multiple centuries in first-class cricket</p>
              </div>
              <div className="item flex gap-4">
                 <p>🎯</p>
                 <p className="font-semibold text-[16px]">Coaching Philosophy: Focus on technique, mental toughness, and consistency</p>
              </div>
            </div>
            <div className="des mt-6">
              <p className=" text-[16px]">
                  Brendon Louw is a seasoned first-class cricketer from South Africa, known for his exceptional batting skills and over 5000 runs in first-class cricket. With extensive experience playing in various competitive leagues, Brendon brings a wealth of knowledge and expertise to his coaching. His master classes are designed to help cricketers of all levels improve their technique, build mental toughness, and achieve greater consistency at the crease. Don't miss this opportunity to learn from one of the best and take your game to the next level.
              </p>
            </div>
            {/* card area start */}
            <div className="main">
              <div className="content grid grid-cols-1 gap-8 my-8">
                 <div className="item">
                    <div className="icon">
                       <p className="text-2xl">📅</p>
                    </div>
                    <div className="title mt-2">
                      <Title className="text-[16px] text-[#030718]" title="Choose Your Dates"/>
                    </div>
                    <p>
                       Select your preferred dates and the number of participants for the master class. Early booking is recommended due to limited availability.
                    </p>
                 </div>
                 <div className="item">
                    <div className="icon">
                       <p className="text-2xl">✅</p>
                    </div>
                    <div className="title mt-2">
                      <Title className="text-[16px] text-[#030718]" title="Secure Your Spot"/>
                    </div>
                     <p>
                     Once you’ve chosen your dates, complete the booking process to secure your spot. Spaces are limited, so act quickly to avoid missing out.
                    </p>
                 </div>
                 <div className="item">
                    <div className="icon">
                       <p className="text-2xl">📋</p>
                    </div>
                    <div className="title mt-2">
                      <Title className="text-[16px] text-[#030718]" title="Requirements"/>
                    </div>
                    <p>
                    Participants must bring their own cricket kit. While all necessary coaching equipment will be provided, personal gear is required for the class.
                    </p>
                 </div>
              </div>
               <p className=" text-[14px] text-[#a3a5a8]">
                  After booking, you’ll receive a confirmation email with all the details. Please review the <span className=" underline"><Link>terms and conditions</Link></span> for more information on the class, including cancellation policies and what to expect on the day
               </p>
               <div className="think my-4">
                  <Title className="text-[18px]" title="Things to Know" />
               </div>
               {/* safty venu area start */}
               <div className="content">
                 <div className="main md:flex ">
                    <div className="safty w-[50%]">
                      <div className="title">
                         <Title className=" text-[16px]" title="The basics"/>
                      </div>
                      <div className="desc text-[16px] flex flex-col gap-2 mt-2">
                          <p> Coaching sessions are indoors</p>
                          <p>Equipment provided</p>
                          <p>Up to 10 participants per session</p>
                          <Link className=" underline text-[#3566eb]">Show more</Link>
                      </div>
                    </div>
                    <div className="basic w-[50%]">
                      <div className="title">
                         <Title className=" text-[16px]" title="Safety & Venue"/>
                      </div>
                      <div className="des text-[16px] flex flex-col gap-2 mt-2">
                         <p>  First aid kit available</p>
                         <p>Emergency exits clearly marked</p>
                         <p>Fire extinguishers on-site</p>
                         <Link className=" underline text-[#3566eb]">Show more</Link>
                      </div>
                    </div>
                 </div>
               </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default TestCoach