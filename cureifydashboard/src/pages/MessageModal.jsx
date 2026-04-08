import React, { useEffect, useState  } from 'react';
import "./MessageModal.css";
import close from "../assets/close.svg"
import { Link, useParams } from 'react-router-dom';
import { supabase } from '../supabase';
import SectionTitle from '../components/SectionTitle';

const MessageModal = ({ onClose }) => {
   
        //  const [loading, setLoading] = useState(true);
    const {id} = useParams();
    const [item, setItem]= useState("");

    useEffect(()=>{
         async function callmsgAPI(){
            const res = await supabase.from("Messages").select("*").eq("id",id);
            
setItem(res.data[0]);
            // console.log(res.data);
            // setLoading(false);

         }
         callmsgAPI();}, []);
    
        // if (loading) return <p>Loading...</p>;
    return ( 
<>
<div className="modal-overlay">
<div className='messageForm'>
    <div className='formtitlewbutton'>
    <SectionTitle Sectiontitle ="Message Details"/>
    <Link to="/messages" style={{textDecoration: "none"}}>
    
<img src={close} alt="close icon" className='close-icon'  />
    </Link>
    </div>

    <div className='secpartform'>
        <div className='senderwinoput'>
            <p className='sender'>Sender:</p>
                        <p className='senderName'>{item.name}</p>

        </div>
          <div className='senderwinoput'>
            <p className='sender'>Email:</p>
                        <p className='senderName'>{item.email}</p>

        </div>  <div className='senderwinoput'>
            <p className='sender'>Subject:</p>
                        <p className='senderName'>{item.subject}</p>

        </div>
          <div className='senderwinoput'>
            <p className='sender'>Message</p>
<div className='messageInput'>
    <p className='message'>{item.message}</p>
</div>
        </div>
        <p className='date'>Received on Nov 22, 2025 at 10:15 AM</p>
    </div>

</div>
</div>
{/* {
    msg.map(m)=>{
        let path = "/msg-details/"+m.id;
        return 
    }
} */}

</>

     );
}
 
export default MessageModal;