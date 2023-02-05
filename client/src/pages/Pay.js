import { useTransactionsContext } from  '../hooks/useTransactionsContext'
import { useNavigate } from 'react-router-dom'

const Pay = () => {
    const { transactions } = useTransactionsContext()
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
    }

    return (
        <div className="tenant-details">
            <div className="form">
                <form onSubmit={handleSubmit}>
                <h1>Payment</h1>
                <label><br/><h2><strong>Amount Due: </strong></h2></label>
                <input
                    type="float" 
                    disabled
                    value={parseFloat(transactions[0].true_Amount).toFixed(2)} 
                />
                <label><h2><strong>Total Cash Inserted: </strong></h2></label>
                <input 
                    type="float" 
                    //onChange={(e) => setPassword(e.target.value)} 
                    //value={password} 
                />
                <button className="btnPassword"><strong>Confirm</strong></button>
                <button className="btnPassword" onClick={() => navigate(-1)}><strong>Cancel</strong></button>
                </form>
            </div> 
        </div>
    )
} 

export default Pay