const Todoitem = (props) => {

 const activityArr=props.activityArr
 const setactivityArr=props.setactivityArr

 const handlechange=(deleteid)=>{
     var temper= activityArr.filter(function(item){
        if (item.id===deleteid){
            return false
        }
        else{
            return true
        }
      })
      setactivityArr(temper)
 }
    return (
        
        <div className="flex justify-between">

            <p>{props.index + 1}.{props.item} </p>
             <button onClick={()=>{handlechange(props.id)}}><i class="fa-regular fa-trash-can" style={{color:"#fd5353"}}></i></button>
        </div>
    )

}
export default Todoitem