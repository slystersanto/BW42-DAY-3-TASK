 let obj={  =>for loop
     "name":"slyster",
    "age":"95",
    "gender":"male",
     "degree":["Bsc","Msc","M.phil",]
 }
  for(var i=0; i<obj.degree.length;i++){
     console.log(obj.degree[i]);
  }



 let obj={    =>for in loop
    "name":"slyster",
     "age":"95",
     "gender":"male",
     "degree":["Bsc","Msc","M.phil",]
}
  for(var i in obj.degree){
     console.log(obj.degree[i]);
  }


let Obj = {  =>for of loop
     "name": "slyster",
     "age": "95",
     "gender": "Male",
     "degree":["Bsc","Msc","M.phil"]
 }

 for (let i of Object.keys(Obj)) {
     console.log( i, Obj[i]);
 }

