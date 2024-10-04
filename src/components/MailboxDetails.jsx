import { useParams } from "react-router-dom";

const MailboxDetails = ({mailboxes}) => {
    const { mailboxId } = useParams();
    const selectedBox = mailboxes.find(
      (mailbox) => mailbox._id === Number(mailboxId)
    );
    
    // If no mailbox is found, display an error message
    if (!selectedBox) {
        return <h1>Mailbox not found</h1>;
    }
    
    return (
        <>
            <h1 className='MD' >Mailbox {selectedBox._id}</h1>
            <h2 className='MD' >Details</h2>
            <ul><p className='MD' >Boxholder: {selectedBox.boxholder}</p></ul>
            <ul><p className='MD' >Box Size: {selectedBox.boxSize}</p></ul>
        </>
    )
}

export default MailboxDetails