// import * as core from '@actions/core';
// import * as github from '@actions/github';
// import path from 'path';
const core = require('@actions/core');
const github = require('@actions/github');


try {
  
    // const indexPath = path.join(__dirname, 'dist', 'index.js');
    // console.log('indexPath:', indexPath); 

    const name = core.getInput('name');
    const greeting=`Hello ${name}`;
    core.setOutput('greeting', greeting);

  } 
  

  
  
  
  catch (error) {
    core.setFailed(error.message);
  }
