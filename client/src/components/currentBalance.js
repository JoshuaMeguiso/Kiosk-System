
const currentBalance = ({tenantBalance}) => { 
    const balanceConverted = parseFloat(tenantBalance.balance);
    return(
        <div className="tenant-details">
            <p><strong>Current Balance: {balanceConverted.toFixed(2)}</strong></p>
        </div>
    )
}

export default currentBalance