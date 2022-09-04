import { LightningElement, track } from 'lwc';

export default class InfiniteScrollforpagenation extends LightningElement {

 @track arr=[
    {item:1},{item:2},{item:3},{item:4},{item:5},{item:6},{item:7},{item:8},
    {item:9},
    {item:10},
    {item:11},
    {item:12},
    {item:13},
    {item:14},
    {item:15},
    {item:16},
    {item:17},
    {item:18},

 ]

 @track boxes
 @track distanceboxtop

 connectedCallback(){

    window.addEventListener("scroll",this.CheckBoxes)
 }

factorofadding=1
 CheckBoxes=()=>{
    const triggerfrombottom = (window.innerHeight/5)*4
    this.boxes=this.template.querySelectorAll('.Eachbox')

    console.log('value of triggerbottom'+ triggerfrombottom)
    this.factorofadding=this.factorofadding+1;
     this.addData()
  
    this.boxes.forEach(eachbox => {
        

        this.distanceboxtop=eachbox.getBoundingClientRect().top
        console.log(this.distanceboxtop)
        if(this.distanceboxtop<triggerfrombottom)
        
        {
              eachbox.classList.add("show")
        }
        else{
            eachbox.classList.remove("show")
        }
    });
 }


 addData(){
   var a=this.arr.length+1
 
   let obj={item:2}
    obj["item"]=a;
  
  console.log("+++++"+this.arr)

     this.arr.push(obj)
   var b=this.arr.length+2
   let obj1={item:2}
    obj["item"]=b;
  //  alert(JSON.stringify(obj))
  console.log("+++++"+this.arr)
  
     this.arr.push(obj1)

 }




    
}