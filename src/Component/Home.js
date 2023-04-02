import React,{Component} from "react";
export class Home extends Component{
    render(){
        return(
            <>
            <div style={{background:'#470547',height:'600px',width:'100%',color:'white'}}>
<div className="container-fluid">
    <div className="row">
        <div className="col-8 my-4" style={{textAlign:'center'}}>
        <div className="row" style={{alignItem:'center'}}>
        <div className="col-3"  style={{height:'200px',background:'#f25089',color:'white'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia obcaecati qui quod explicabo consequatur doloribus dolor nesciunt ratione commodi quos!</div>
        <div className="col-5"  style={{height:'200px',background:'#5350f2',color:'white'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia obcaecati qui quod explicabo consequatur doloribus dolor nesciunt ratione commodi quos!</div>
        <div className="col-3"  style={{height:'200px',background:'#50f25b',color:'white'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia obcaecati qui quod explicabo consequatur doloribus dolor nesciunt ratione commodi quos!</div></div>
        </div>
        <div className="col-4 my-2"> 
        <div className="row"><button className="btn my-1 " style={{background:'#e61957',}}>New </button></div>
        <div className="row"><button className="btn my-1 " style={{background:'#f250dd',}}>New </button></div>
        <div className="row"><button className="btn my-1 " style={{background:'#b450f2',}}>New </button></div>
        <div className="row"><button className="btn my-1 " style={{background:'#50edf2',}}>New </button></div>
        <div className="row"><button className="btn my-1 " style={{background:'#50f2ac',}}>New </button></div>
        </div>
    </div>
    <div className="row">
        <div className="col-3"></div>
        <div className="col-6"><form action="" className="bg-warning">
            <div style={{textAlign:'center'}}><h1 className="bg-primary text-light my-1">TextArea</h1></div>
            <textarea className="control-form "  id="#text" rows="6" style={{width:'100%' ,color:'white',background:'grey',cursor:"auto",}}></textarea>
            <div style={{textAlign:'center'}} ><button className="btn btn-success mb-2">Submit</button></div>
            </form></div>
        <div className="col-3"></div>
    </div>
</div>

            </div>
            </>
        )
    }
}