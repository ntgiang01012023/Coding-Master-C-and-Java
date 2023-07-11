/* eslint-disable react/prop-types */
import { useState } from 'react';
import axios from 'axios';
import Try from '../components/Try';
import Result from '../components/Result';

const CodeEditorC = () => {
  const [javaCode, setJavaCode] = useState('');
  const [javaResult, setJavaResult] = useState('');

  const compileJavaCode = async () => {
    try {
      const response = await axios.post('http://localhost:5000/compileJava', {
        code: javaCode,
      });
      
      setJavaResult(response.data.result);
    } catch (error) {
      console.error('Lỗi biên dịch mã Java:', error);
      setJavaResult(error.response?.data?.error || 'Lỗi biên dịch mã Java');
    }
  };
  

  return (
    <section className='w-full h-[100vh] py-[50px]'>
      <div className="wrapper flex flex-col justify-center items-center">
        <h2 className="text-[40px] text-center">JAVA language free code editor</h2>
        <p className='text-[18px] text-center text-neutral-grey2-100 mb-[50px]'>With our online code editor, you can edit the code and see the results in your browser</p>
        <div className="flex justify-center">
          <BoxCompile
            javaCode={javaCode}
            setJavaCode={setJavaCode}
            compileJavaCode={compileJavaCode}
          />
          <BoxResult javaResult={javaResult} />
        </div>
      </div>
    </section>
  );
};

// eslint-disable-next-line react/prop-types
const BoxCompile = ({ javaCode, setJavaCode, compileJavaCode }) => {
  return (
    <div className="w-[600px] h-[440px] border-solid border-2 border-indigo-600 px-[10px] shadow-lg shadow-indigo-500/50">
      <div className="flex justify-between items-center py-[10px]">
        <h3 className="flex justify-between items-center text-primary-green-100 font-bold"><Try />Try Java</h3>
        <button className='button-36 w-[150px] h-[50px] bg-primary-blue-100 rounded-[10px] font-bold' id="btn-run-java" onClick={compileJavaCode}>Run Code</button>
      </div>
      <div className="box-left-main-java">
      <textarea className="w-full h-[350px] bg-transparent text-white outline-none px-[10px] py-[10px]"
          value={javaCode}
          onChange={(e) => setJavaCode(e.target.value)}
          cols="20"
          rows="10"
        ></textarea>
      </div>
    </div>
  );
};

const BoxResult = ({ javaResult }) => {
  return (
    <div className="w-[600px] h-[440px] border-solid border-2 border-indigo-600 shadow-lg shadow-indigo-500/50">
      <div className="px-[10px] py-[10px]">
        <span className="flex justify-start items-center text-primary-green-100 font-bold"> <Result />Result here</span>
      </div>
      <div className="box-right-main-java w-full h-[350px] bg-transparent text-white outline-none px-[10px] py-[10px]">
        <pre>{javaResult}</pre>
      </div>
    </div>
  );
};

export default CodeEditorC;
