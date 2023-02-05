import { add, format } from 'date-fns'

const StatementDetails = ({statement}) => {
    const end_Month = add(new Date(statement.start_Month), {months: 1})
    
    return(
        <div className="tenant-details">
            <p><strong>Tenant Name: </strong>{statement.tenant_Name}</p>
            <p><strong>Tenant ID: </strong>{statement.tenant_ID}</p>
            <p><strong>Room ID: </strong>{statement.room_ID}</p>
            <p><strong>Period Covered: </strong>
                {format(new Date(statement.start_Month), 'MMMM dd, Y')} - 
                {format(end_Month, 'MMMM dd, Y')}
            </p>
            <p><strong>Room Rate: </strong>₱ {parseFloat(statement.room_Rate).toFixed(2)}</p>
            <p><strong>Water Charge: </strong>₱ {parseFloat(statement.water_Charge).toFixed(2)}</p>
            <p><strong>Previous Reading: </strong>{statement.previous_Reading} KWH</p>
            <p><strong>Present Reading: </strong>{statement.present_Reading} KWH</p>
            <p><strong>Total Consume: </strong>{statement.total_Consume} KWH</p>
            <p><strong>Room Consume: </strong>₱ {parseFloat(statement.room_Consume).toFixed(2)}</p>
            <p><strong>Individual Consume: </strong>₱ {parseFloat(statement.individual_Consume).toFixed(2)}</p>
            <p><strong>Total Amount: </strong>₱ {parseFloat(statement.total_Amount).toFixed(2)}</p>
        </div>
    )
}
export default StatementDetails