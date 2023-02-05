import { add, format } from 'date-fns'

const tenantDetails = ({ tenant }) => {
    return(
        <div className="tenant-details">
            <p><strong>Name: </strong> {tenant.first_Name} {tenant.last_Name}</p>
            <p><strong>Room ID: </strong>{tenant.room_ID}</p>
            <p><strong>Birthday: </strong>{format ( new Date(tenant.birth_Date), 'MMMM dd, Y')}</p>
            <p><strong>Contact Information: </strong>{tenant.contact_Info}</p>
            <p><strong>Emergency Number: </strong>{tenant.emergency_Num}</p>
            <p><strong>Address: </strong>{tenant.address}</p>
            <p><strong>Start of Term: </strong>{format ( new Date(tenant.start_Term), 'MMMM dd, Y')}</p>
            <p><strong>Lease of Term: </strong>{tenant.lease_Term} Months</p>
            <p><strong>End of Term: </strong>{format(add(new Date(tenant.start_Term), {months: tenant.lease_Term}), 'MMMM, dd, Y')}</p>
        </div>
    )
}

export default tenantDetails