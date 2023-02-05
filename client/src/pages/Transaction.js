import { useEffect, useState } from 'react'

import TransactionDetails from '../components/transactionDetails'
import { useAuthContext } from '../hooks/useAuthContext'

const Transaction = () => {
    const [ payments, setPayment ] = useState()
    const { user } = useAuthContext()

    useEffect(() => {
        const fetchTransactions = async () => {
            const response = await fetch(`/payment/${user.user_Name}`)
            const json = await response.json()

            if(response.ok){
                setPayment(json)
            }
        }
        fetchTransactions();
        // eslint-disable-next-line
    }, [])
    return (
        <div>
            {payments && payments.map((payment)=> (
                <div key={payment._id}>
                    <TransactionDetails key={payment._id} payment={payment} />
                </div>
            ))}
        </div>
    )
} 

export default Transaction