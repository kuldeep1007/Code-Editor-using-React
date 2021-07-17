import React from 'react';
import './App.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { Controlled } from 'react-codemirror2';
import Axios from 'axios';

function Editor({ language, value, onCodeChange }) {

    function handleCodeChange(editor, data, value){
        onCodeChange(value);
    }



    return (
        <div className="editor">
            <div className="editor__heading">
            

            </div> 
            <Controlled
                onBeforeChange = {handleCodeChange}
                value = {value}
                className = "code-editor-style"
                options = {{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    theme: 'material',
                    lineNumbers: true,

                }}

            />
            
        </div>
    )
}

export default Editor





