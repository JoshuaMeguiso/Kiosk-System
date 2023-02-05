import { format } from 'date-fns'

const transactionDetails = (props) => { 
    const transaction = props.transaction
    const tenant = props.tenant
    
    return(
        <div className="tenant-details">
            <p><strong>Month Bill: </strong>{format(new Date(transaction.start_Month), 'MMMM')}</p>
            <p><strong>Due Amount: </strong>₱ {parseFloat(transaction.true_Amount).toFixed(2)}</p>
            <p><strong>Paid Amount: </strong>₱ {parseFloat(transaction.amount_Paid).toFixed(2)}</p>
            <p><strong>Paid On: </strong>{format(new Date(transaction.updatedAt), 'MMMM dd, Y')}</p>
        </div>
    )
}

export default transactionDetails