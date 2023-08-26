import React from 'react'
import $ from 'jquery'
import './Ex_card.scss'
import { useEffect } from 'react'
import { RiGameFill} from 'react-icons/ri';
import { TbNotes} from 'react-icons/tb';
import { CgAppleWatch} from 'react-icons/cg';
import { BiWorld} from 'react-icons/bi';
import { ImVideoCamera} from 'react-icons/im';
import { AiFillGithub} from 'react-icons/ai';
import {motion} from 'framer-motion'
import img1 from '../../img/tictac.gif'
import img2 from '../../img/notes.PNG'
import img3 from '../../img/smartwatch.PNG'
import img4 from '../../img/threejs.gif'
import img5 from '../../img/movieapp.PNG'
const Ex_card = () => {
    useEffect(()=>{
      $(".option").click(function(){
        $(".option").removeClass("active");
        $(this).addClass("active");
        
     });
    },[])
   //  const transition={duration:5,type:'spring'};
  return (
    <div className='h'id='Project'>

         <div className='p-head'>
            <h1>Projects</h1>
         </div>

         <div className='project'>
            <div className="options">
               
               <motion.div
               initial={{bottom:'-20%'}}
               whileInView={{bottom:'0%'}}        
               transition={{duration:3,type:'spring'}}
               className="option active" style={{backgroundImage:`url(${img1})`}}>
                     <div className="shadow"></div>
                     <div className="label">
                           <div className="icon">
                              <RiGameFill/>
                           </div>
                           <div className="info">
                              <div className="main"><AiFillGithub size={30} /> <a href='https://github.com/pradeepkumar24rk/TicTac'>TicTacToe</a></div>
                              <div className="sub">Simple game using react js</div>
                           </div>
                        </div>
               </motion.div>

            <motion.div 
            initial={{bottom:'-20%'}}
            whileInView={{bottom:'0%'}}        
            transition={{duration:4,type:'spring'}}
            className="option" style={{backgroundImage:`url(${img2})`}}>
               <div className="shadow"></div>
               <div className="label">
                  <div className="icon">
                     <TbNotes/>
                  </div>
                  <div className="info">
                     <div className="main"><AiFillGithub size={30} /><a href="https://github.com/pradeepkumar24rk/Ocean-Notes">Ocean Notes</a></div>
                     <div className="sub">User can login with there userId using PHP </div>
                  </div>
               </div>
            </motion.div>

            <motion.div
            initial={{bottom:'-20%'}}
            whileInView={{bottom:'0%'}}        
            transition={{duration:5,type:'spring'}}
            className="option" style={{backgroundImage:`url(${img3})`}}>
               <div className="shadow"></div>
               <div className="label">
                  <div className="icon">
                     <CgAppleWatch/>
                  </div>
                  <div className="info">
                     <div className="main"><AiFillGithub size={30} /><a href="https://github.com/pradeepkumar24rk/Smart_Watch">Product_Page</a></div>
                     <div className="sub">Responsive Product page for watch using React js</div>
                  </div>
               </div>
            </motion.div>

            <motion.div
            initial={{bottom:'-20%'}}
            whileInView={{bottom:'0%'}}        
            transition={{duration:6,type:'spring'}}
            className="option" style={{backgroundImage:`url(${img4})`}}>
               <div className="shadow"></div>
               <div className="label">
                  <div className="icon">
                     <BiWorld/>
                  </div>
                  <div className="info">
                     <div className="main"><AiFillGithub size={30} /><a href="https://github.com/pradeepkumar24rk/New_world">New World</a></div>
                     <div className="sub">Simple 3D website using Three js</div>
                  </div>
               </div>
            </motion.div>

            <motion.div
            initial={{bottom:'-20%'}}
            whileInView={{bottom:'0%'}}        
            transition={{duration:7,type:'spring'}}
            className="option" style={{backgroundImage:`url(${img5})`}}>
               <div className="shadow"></div>
               <div className="label">
                  <div className="icon">
                     <ImVideoCamera/>
                  </div>
                  <div className="info">
                     <div className="main"><AiFillGithub size={30} /><a href="https://github.com/pradeepkumar24rk/Movie_app">Movie Search</a></div>
                     <div className="sub">Searching the movie using React js with OMDB API  </div>
                  </div>
               </div>
            </motion.div>

         </div>
      </div>
</div>
  )
}

export default Ex_card