let x = []
let y = []
let m,c
const learningRate = 0.1;
const optimizer = tf.train.adam(learningRate);
function setup(){
	createCanvas(400,400)
	m=tf.variable(tf.scalar(random(1)))
	c=tf.variable(tf.scalar(random(1)))
}

function loss(y_pred,y){
	return y_pred.sub(y).square().mean()
}
function predict(x){
	const x_new = tf.tensor1d(x)
	const y_pred = x_new.mul(m).add(c)
	return y_pred
}
function mousePressed(){
	x.push(map(mouseX,0,width,0,1))
	y.push(map(mouseY,0,height,1,0))
}
function draw(){
	tf.tidy(()=>{
	if (x.length > 0) {
      const ys = tf.tensor1d(y);
      optimizer.minimize(() => loss(predict(x), ys));
  }
})
	background(0)
	stroke(255)
	strokeWeight(5)
	for(let i=0;i<x.length;i++){
		point(map(x[i],0,1,0,width) , map(y[i],0,1,height,0))
	}

	xl = [0,1]
	yp = tf.tidy(()=>predict(xl))
	let yl = yp.dataSync()
	yp.dispose()


  let x1 = map(xl[0], 0, 1, 0, width);
  let x2 = map(xl[1], 0, 1, 0, width);

  let y1 = map(yl[0], 0, 1, height, 0);
  let y2 = map(yl[1], 0, 1, height, 0);

  strokeWeight(2)
  line(x1,x2,y1,y2)
  console.log(tf.memory().numTensors)

}