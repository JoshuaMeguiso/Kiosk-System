import { useEffect} from 'react'

import TransactionDetails from '../components/transactionDetails'
import { useAuthContext } from '../hooks/useAuthContext'
import { useTransactionsContext } from  '../hooks/useTransactionsContext'

const Transaction = () => {
    const { transactions, dispatch } = useTransactionsContext()
    const { user } = useAuthContext()

    useEffect(() => {
        const fetchTransactions = async () => {
            const response = await fetch(`/transaction/${user.user_Name}/true`)
            const json = await response.json()

            if(response.ok){
                dispatch({type: 'SET_TRANSACTIONS', payload: json})
            }
        }
        fetchTransactions();
        // eslint-disable-next-line
    }, [])
    return (
        <div>
            {transactions && transactions.map((transaction)=> (
                <div key={transaction._id}>
                    <TransactionDetails key={transaction._id} transaction={transaction} />
                </div>
            ))}
        </div>
    )
} 

export default Transaction