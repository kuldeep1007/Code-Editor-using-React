import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Editor from './Editor';

import Tabs from "./components/Tabs"; 


function App() {

  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [javascript, setJavascript] = useState('');

  const disp = 
  `
    <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${javascript}</script>
    </html>
  `

  let htmlfileReader;
  let cssfileReader;
  let jsfileReader;

  //HTML

  const handleFileReadHtml = (e) => {
  const content = htmlfileReader.result;
  console.log(content);
  setHtml(content);
  

  };
  
  const handleFileChosenHtml = (file) => {
    htmlfileReader = new FileReader();
    htmlfileReader.onloadend = handleFileReadHtml;
    htmlfileReader.readAsText(file);
  };

  //CSS

  const handleFileReadCss = (e) => {
    const content = cssfileReader.result;
    console.log(content);
    setCss(content);
    
  
    };
    
    const handleFileChosenCss = (file) => {
      cssfileReader = new FileReader();
      cssfileReader.onloadend = handleFileReadCss;
      cssfileReader.readAsText(file);
    };

    //JS

    const handleFileReadJs = (e) => {
      const content = jsfileReader.result;
      console.log(content);
      setJavascript(content);
      
    
      };
      
      const handleFileChosenJs = (file) => {
        jsfileReader = new FileReader();
        jsfileReader.onloadend = handleFileReadJs;
        jsfileReader.readAsText(file);
      };

  return (
    
    <div className="app">
      <div id="bod">
      <div className="app__heading">
        <h1><center>Code Editor</center></h1>
      </div>

      <div className="app__top">

        <div className="app__fileSection">


          <div className="app__file">

            

            

            
          </div>
          
        </div>  
        <div class="article-container">
        <Tabs> 
       <div label="HTML"> 
       <div class="article">
        <h3>HTML</h3>
        <Editor language="xml" value={html} onCodeChange={setHtml}/>
        <div className = "file__html">
            <div class="upload-btn-wrapper">
              <button class="btn">Upload HTML</button>
                <input 
                    type='file'
                    id='fileHtml'
                    className='inputfileHtml'
                    accept='.html'
                    onChange={e => handleFileChosenHtml(e.target.files[0])}
                />
            </div> 
           </div>
        </div> 
       </div> 
       <div label="CSS"> 
       <div class="article">
        <h3>CSS</h3>
        <Editor language="css" value={css} onCodeChange={setCss}/>
        <div className = "file__css">
            <div class="upload-btn-wrapper">
              <button class="btn">Upload CSS</button>
                <input 
                    type='file'
                    id='fileCss'
                    className='inputfileCss'
                    accept='.css'
                    onChange={e => handleFileChosenCss(e.target.files[0])}
                />

               </div>
            </div>

        </div> 
       </div> 
       <div label="JS"> 
       <div class="article">
          
          <h3>JS</h3>
          <Editor language="js" value={javascript} onCodeChange={setJavascript}/>
          <div className = "file__js">
              <div class="upload-btn-wrapper">
                <button class="btn">Upload JS</button>
              
                  <input 
                      type='file'
                      id='fileJs'
                      className='inputfileJs'
                      accept='.js'
                      onChange={e => handleFileChosenJs(e.target.files[0])}
                  />
              </div>
              </div>
          </div>
       </div> 
     </Tabs>
        
        
        
        </div>
      </div>
      </div>
      <div id="op" className="app__bottom">
        <iframe
          srcDoc={disp}
          title = "output"
          sandbox = "allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          frameBorder = "0"
          width = "100%"
          height = "100%"
        />
      </div>
      
    </div>
  );
}

export default App;
