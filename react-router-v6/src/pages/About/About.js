import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div className='about-mission' style={{ width: '50%', textAlign: 'center' }}>
          <h3>Our Mission</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident quia et natus vel sapiente perspiciatis impedit? Nulla velit, deserunt fugit reiciendis impedit ad, corporis non repellendus laborum sapiente obcaecati necessitatibus aliquam rerum accusamus inventore sint corrupti? Atque autem, dolorem repellendus quam blanditiis eius maiores, modi excepturi itaque eligendi eum incidunt voluptatibus porro, voluptate aliquid consequuntur dolores. Eum natus dolores eaque amet, quidem dignissimos in recusandae magni accusamus delectus. Nam expedita est minus a voluptatum maxime dolore vel dolorum quibusdam, ratione aperiam placeat ab culpa ipsam numquam exercitationem quo repellat libero perspiciatis, officia pariatur odit, totam molestiae aliquid. Dolor, sapiente laborum.</p>
          <NavLink to="/about/mission"
            style={{ backgroundColor: '#0b104e', padding: '10px 20px', borderRadius: '9999px', textDecoration: 'none', color: 'white', }}
          >Go Mission</NavLink>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className='about-vision' style={{ width: '50%', textAlign: 'center', marginBottom:'25px' }}>
            <h4>Vision 1</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, eaque!</p>
            <NavLink to="/about/vision/post1-151"
              style={{ backgroundColor: '#0b104e', padding: '5px 10px', borderRadius: '9999px', textDecoration: 'none', color: 'white', }}
            >Vision 1</NavLink>

          </div>
          <div className='about-vision' style={{ width: '50%', textAlign: 'center', marginBottom:'25px' }}>
            <h4>Vision 2</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, eaque!</p>
            <NavLink to="/about/vision/post2-242"
              style={{ backgroundColor: '#0b104e', padding: '5px 10px', borderRadius: '9999px', textDecoration: 'none', color: 'white', }}
            >Vision 2</NavLink>

          </div>
          <div className='about-vision' style={{ width: '50%', textAlign: 'center', marginBottom:'25px' }}>
            <h4>Vision 3</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, eaque!</p>
            <NavLink to="/about/vision/post3-343"
              style={{ backgroundColor: '#0b104e', padding: '5px 10px', borderRadius: '9999px', textDecoration: 'none', color: 'white', }}
            >Vision 3</NavLink>

          </div>
        </div>
      </div>
    </div>
  )
}

export default About