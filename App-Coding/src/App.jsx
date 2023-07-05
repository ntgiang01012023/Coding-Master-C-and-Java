// eslint-disable-next-line no-unused-vars
import React from 'react';
import './index.scss';
import SvgBg1 from './components/SvgBg1';
import SvgBg2 from './components/SvgBg2';
import SvgBg3 from './components/SvgBg3';
import Header from './Layouts/Header';
import Hero from './Layouts/Hero';
import CodeEditorC from './Layouts/CodeEditorC';
import CodeEditorJava from './Layouts/CodeEditorJava';
import Features from './Layouts/Features';

const App = () => {

  return (
    <div className='bg-background-blueblack w-full h-[600vh] relative overflow-hidden'>
      <div className="absolute top-[-170px] right-[40px] z-[0]">
        <img src="/GraphicHero.jpeg" alt="" />
      </div>
      <div className="absolute top-[-170px] right-[-180px] z-[0]">
        <SvgBg1 />
      </div>
      <div className="absolute top-[-170px] right-[-180px] z-[0]">
        <SvgBg2 />
      </div>
      <div className="absolute top-[-170px] right-[-180px] z-[0]">
        <SvgBg3 />
      </div>
      
      <Header />
      <Hero />
      <Features />
      <CodeEditorC />
      <CodeEditorJava />
    </div>
  );
};

export default App;
