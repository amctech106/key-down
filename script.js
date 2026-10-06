
/* let inp = document.querySelector("input");
inp.addEventListener("input", function(val){
    if(val.data !==null){
        console.log(val.data);
    }
}) */

   /*  let device = document.querySelector("#device");
    let sel = document.querySelector("select");
    sel.addEventListener("change", function(dets){
        device.textContent=`${dets.target.value} Device Selected`
    }); */


  /* let device =  document.querySelector("#device");
   let sel = document.querySelector("select");
   sel.addEventListener("change" , function(dets){
    device.textContent = `${dets.target.value} Device Selected`
   }) */

    let h1 = document.querySelector("h1");
    window.addEventListener("keydown" , function(dets){
      if(dets.key ===" "){
        h1.textContent ="SPC"
      }else{
        h1.textContent = dets.key;
      }
    })