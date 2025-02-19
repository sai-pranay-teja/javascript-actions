import * as core from '@actions/core';
import * as github from '@actions/github';


try {
    const name = core.getInput('name');
    const greeting_value=`Hello ${name}`;
    core.setOutput('greeting', greeting_value);

  } 
  

  
  catch (error) {
    core.setFailed(error.message);
  }