let sum=0;
  let setValue=setInterval(() => {
      if(sum==19823){
        clearInterval(setValue)
      }
      sum+=7;
      console.log("Sum Value: ", sum);
  }, 7);