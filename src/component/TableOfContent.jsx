/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import contents from './TableOfContent.json'
import { useState, useEffect, useRef, useContext } from 'react'
import { IconContext } from './Content'

const PageNumber = ({ number }) => (
  <h3 className="noto-serif text-base">{number}</h3> 
)

const Header = ({ title, directTo, hoverImage }) => {
  const { setIsCrossVisible, setIsHoverImageVisible,setHoverImage } = useContext(IconContext)
  const ref = useRef(null);
  useEffect(() => {
    ref.current.addEventListener('mouseenter',() => {
      setIsCrossVisible(false)
      setIsHoverImageVisible(true)
      setHoverImage(hoverImage)
    })
    
    ref.current.addEventListener('mouseleave',() => {
      setIsHoverImageVisible(false)
      setIsCrossVisible(true)
    })
  },[])

  return(
    <div className='z-30 lg:text-7xl text-5xl flex justify-center items-center px-8 text-center w-full leading-tight tracking-wide noto-serif font-medium uppercase'>
      <a id="nav-title" ref={ ref } href={directTo} className="w-max">
        {
          title.map((title, index) => (
            <div key={index}>{title}</div>
          ))
        }
      </a>  
    </div>
)
}

const Paragraph = ({ paragraph }) => (
  <p className="lg:text-2xl text-xl px-8 text-center w-full lg:w-3/5 leading-tight tracking-wide inter font-light"> 
    {paragraph} 
  </p>
)

export default function TableOfContent() {
  return(
    contents.map((content, index) => {
      return(
        <section key = {index} className="w-screen h-auto transition-opacity duration-500 flex flex-col justify-center items-center gap-10">
          <PageNumber number = {index +1}/>
          <Header title = {content.title} directTo={content.directTo} hoverImage = {content.hoverImage} />
          <Paragraph paragraph={content.paragraph} />
        </section>
      )
    })
  )
}