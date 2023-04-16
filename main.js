class MyPromise {
  constructor(cb) {
    const resolve = (param) => {
       this.param = param;
       if(this.thenCb){
           this.thenCb(this.param);
       }
    };
    cb(resolve);
  }
  then(thenCb) {
    if(this.param){
    thenCb(this.param);
    // return new MyPromise(resolve=>{resolve(thenCb(this.param)) ;})
    }else{
        this.thenCb=thenCb;
    }


  }
}

const resolver = (resolve1) => {
  setTimeout(() => {
    resolve1(1);
  }, 300);
};
const promise = new MyPromise(resolver);

promise.then((res) => {
  console.log(res); 
});
