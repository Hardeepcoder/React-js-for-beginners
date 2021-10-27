import react, {useState} from "react";
import { Button } from "@material-ui/core";

export default function ReactUI(){
    const [msg, setMsg] = useState();
    function del(){
        setMsg('your data has been deleted successfully');
    }
    function send(){
        setMsg('your data has been sent successfully');
    }
    function upload(){
        setMsg(['your data has been uploaded successfully']);
    }
    function save(){
        setMsg('your data has been saved successfully !');
    }
    return(
        <div style={{paddingTop:'10%'}}>
            <h1 class="alert text-primary display-4">Hello friends, Its Reactjs</h1>
            <Button variant="contained" color="secondary" 
            style={{margin:10}} onClick={() => del()}>Delete &nbsp;  <i class="fa fa-trash"></i></Button>

            <Button variant="contained" color="primary" 
            style={{margin:10}} onClick={() => send()}>Send &nbsp;  <i class="fa fa-user"></i></Button>
            
            <Button variant="contained" color="default" 
            style={{margin:10}} onClick={() => upload()}>Upload &nbsp;  <i class="fa fa-upload"></i></Button>

            <Button variant="contained" 
            style={{margin:10, backgroundColor:'green', color:'#fff'}} onClick={() => save()}> Save &nbsp; <i class="fa fa-save"></i></Button>

            <h3>{msg}</h3>

         
            
        </div>
    )
}