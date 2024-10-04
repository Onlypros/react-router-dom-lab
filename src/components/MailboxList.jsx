import { Link } from "react-router-dom";

const MailboxList = ({mailboxes}) => {
    return (
        <>
        <h1>Mailbox List</h1>
        <ul>
            {mailboxes.map((currentMailbox) =>
                <li key={currentMailbox._id}>
                    <Link to={`/mailboxes/${currentMailbox._id}`}>{currentMailbox.boxholder}</Link>
                </li>
            )}
        </ul>
        
        </>
    );
};

export default MailboxList;