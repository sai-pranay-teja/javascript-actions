import * as core from '@actions/core';
import * as github from '@actions/github';

try {
  
    const name = core.getInput('name');
    const greeting=`Hello ${name}`;
    core.setOutput('greeting', greeting);

  }  
  
  
  catch (error) {
    core.setFailed(error.message);
  }
