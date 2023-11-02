import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>

        <section className='reviewers'>
          <span className='star'>⭐</span>
          <h1 className='title'>Reviewers</h1>
          <p className='description'>Reviewers is where people can access guidelines, checklists, and other tools to assist them in reviewing papers or manuscripts. It provides a structured approach to ensure that the review process is thorough, efficient, and consistent.</p>
          <ul className='list'>
            <li className='item'>
              <img className='bullet' src="src\assets\Done_ring_round_fill.svg" alt="bullet" />
              <span>Checklist to Review an Academic Paper</span>
            </li>
            <li className='item'>
              <img className='bullet' src="src\assets\Done_ring_round_fill.svg" alt="bullet" />
              Peer Review Checklist
            </li>
            <li className='item'>
              <img className='bullet' src="src\assets\Done_ring_round_fill.svg" alt="bullet" />
              Checklist for Editors, Reviewers, and Authors of SPIE Journals
            </li>
          </ul>
        </section>

        <section className='reviews'>
          <div className='google'>
            <header className='rating'>
              <img className='logo' src='src\assets\google-testimonial.png' alt="logo de Google" />
              <div className='stars'>
                <img className='yellow-star' src="src\assets\yellow-star.svg" alt="4 de 5 estrellas" />
                <img className='yellow-star' src="src\assets\yellow-star.svg" alt="4 de 5 estrellas" />
                <img className='yellow-star' src="src\assets\yellow-star.svg" alt="4 de 5 estrellas" />
                <img className='yellow-star' src="src\assets\yellow-star.svg" alt="4 de 5 estrellas" />
                <img className='grey-star' src="src\assets\grey-star.svg" alt="4 de 5 estrellas" />
              </div>
            </header>
            <h4 className='name'>Samantha Lee</h4>
            <p className='review'>The checklist ensures that the review process is thorough</p>
          </div>
          <div className='meta'>
            <header className='rating'>
              <img className='logo' src='src\assets\meta-testimonial.png' alt="logo de Meta" />
              <div className='stars'>
                <img className='yellow-star' src="src\assets\yellow-star.svg" alt="5 de 5 estrellas" />
                <img className='yellow-star' src="src\assets\yellow-star.svg" alt="5 de 5 estrellas" />
                <img className='yellow-star' src="src\assets\yellow-star.svg" alt="5 de 5 estrellas" />
                <img className='yellow-star' src="src\assets\yellow-star.svg" alt="5 de 5 estrellas" />
                <img className='yellow-star' src="src\assets\yellow-star.svg" alt="5 de 5 estrellas" />
              </div>
            </header>
            <h4 className='name'>Rachel Patel</h4>
            <p className='review'>I highly recommend the Writecream Business Description</p>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
