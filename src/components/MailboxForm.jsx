import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MailboxForm = ({addBox}) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        _id: 0,
        boxSize: '',
        boxholder: ''
    });

    function handleChange (event) {
        setFormData({...formData, [event.target.name]: event.target.value})
    };

    function handleSubmit (event) {
        event.preventDefault()
        addBox(formData)
       setFormData ({
        boxSize: '',
        boxholder: ''
        
       })
       navigate("/mailboxes");
    }

   

    

    return (
        <>
        <h1>New Mailbox</h1>
        <form onSubmit={handleSubmit}>
            <label className='MD' >Enter a Boxholder:</label>
            <input className='input' value={formData.boxholder}name="boxholder" type="text" onChange={handleChange} placeholder='Boxholder name'/>
            <label className='MD' >Select a Box Size:</label>
           <select className='input' value={formData.boxSize} name="boxSize" onChange={handleChange}>
            <option value="">Select a size</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
           </select>
           <button className='button' type='submit'>Submit</button>
        </form>
        </>
        
    )
}

export default MailboxForm;