const customers = new Promise((resolve,reject)=>{
   return Promise.resolve().then(()=>{
    let i = 0;
//    reject("oops");
    while(i<1_000_000){i++}
    resolve([
         {name:"Aravind",id:1},
         {name:"Aswin",id:2}
    ])
    reject("");
   })
});
const address = new Promise((resolve,reject)=>{
    return Promise.resolve().then(()=>{
     let i = 0;
     while(i<1_000_000){i++;}
     resolve([
          {customerid:1,city:"tiruchengode"},
          {customerid:2,city:"bellandur"}
     ])
    })
 });
// const fetchData = ()=>{
//      customers.then(c => {
//         address.then(a =>{
//           console.log(c);
//           console.log(a);
//         }).catch(err=>{console.log(err)})
//      }).catch(err=>{console.log(err)})
// }

// const fetchData = async()=>{
     // try {
     //      const c = await customers;
     //      const a = await address;
     //      console.log(c);
     //      console.log(a);
     // } catch (error) {
     //      console.log(error);
     // }
//      Promise.all([customers,address]).then(values=>
//           console.log(values)).catch(err=>
//           {console.log(err)})
   
// }

//promise all

// const fetchData = async()=>{
//      Promise.all([customers,address]).then((values)=>{
//           const[c,a]= values;
//           console.log(c);
//           console.log(a);
//      }).catch(err=>{
//           console.log(err);
//      })
// }

const fetchData = async()=>{
     try {
          const values = await Promise.all([customers,address]);
          const [c,a] = values;
          console.log(c);
          console.log(a);
     } catch (error) {
          console.log(error);
          
     }
}

fetchData();