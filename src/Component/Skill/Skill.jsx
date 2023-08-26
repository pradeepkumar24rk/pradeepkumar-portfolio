import React from 'react'
import './Skill.css'
import {HiBadgeCheck} from 'react-icons/hi';
// import {motion} from 'framer-motion'

const Skill = () => {
    
  return (
    <div className='skill' id='Skills'>

        <div className='head'>
            <h1 style={{textTransform:"uppercase"}}>What Skills I have</h1>
        </div>

        <div className='skill-body'>
            <div className='front-end'>
                <h6>Frontend Development</h6>
                <div className='lang'>
                    <ul>
                        <li><HiBadgeCheck style={{color:'#2fe27a'}}/>HTML</li>
                        <li><HiBadgeCheck style={{color:'#2fe27a'}}/>JavaScript</li>
                        <li><HiBadgeCheck style={{color:'#2fe27a'}}/>Style-Components</li>
                       
                        
                    </ul>
                    <ul>
                        <li><HiBadgeCheck style={{color:'#2fe27a'}}/>CSS</li>
                        <li><HiBadgeCheck style={{color:'#2fe27a'}}/>Mantine UI</li>
                        <li><HiBadgeCheck style={{color:'#2fe27a'}}/>React js</li>
       
                    </ul>
                
                </div>
            </div>
            
            <div className='back-end'>
                <h6>Backend Development</h6>
                <div className='lang'>
                    <ul>
                    <li><HiBadgeCheck style={{color:'#2fe27a'}}/>Node js</li>
                        <li><HiBadgeCheck style={{color:'#2fe27a'}}/>Express js</li>
                        <li><HiBadgeCheck style={{color:'#2fe27a'}}/>RESTFULL API</li>

                    </ul>
                    <ul>
                        <li><HiBadgeCheck style={{color:'#2fe27a'}}/>MongoDB</li>
                        <li><HiBadgeCheck style={{color:'#2fe27a'}}/>MySQL</li>
                        <li><HiBadgeCheck style={{color:'#2fe27a'}}/>PHP</li>
                    </ul>
                
                </div>
            </div>
        </div>

    </div>
  )
}

export default Skill