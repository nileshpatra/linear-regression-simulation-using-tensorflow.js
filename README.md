# linear-regression-simulation-using-tensorflow.js

- This repository is supposed to train the model and plot the best fit line using tensorflow 
Utilities :
  - p5.js
  - tf.js

Steps :<br>
  ---<b>1. PREPROCESSING DATA</b>---
  - Included the online hosted js files from official sites
  - Hosted from https://js.tensorflow.org and https://p5js.org and included int script
  - made a function to record coordinated of mouseclick and add in the data
  - also created a dot of show the clicked point<br>
  
  ---<b>2. INITIALIZING BIAS AND WEIGHT , CREATING PREDICT FUNCTION</b>---
  - created tensorflow variables m and b with random values between 0 and 1
  - made predict function using the basic formula y = m*x + c
  
  ---<b>3. TRAINING AND GETTING VALUES</b>---
  - used adam optimizer and passed the predict fuunction to minimize loss
  - the model is trained using the neural network with tfjs
  - plotted a line with the given slope and bias , reflected it in the canvas
  
---HERE IS HOW THE MODEL WORKS IN ACTION--:<br><br><br>
  <img src = "https://github.com/nileshpatra/linear-regression-simulation-using-tensorflow.js/blob/master/Screenshot_2018-12-23%20Screenshot.png">
  
  
