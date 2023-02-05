import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTenantsContext } from "../hooks/useTenantsContext"

//components
import TenantDetails from '../components/tenantDetails'
import CurrentBalance from '../components/currentBalance'
import { useAuthContext } from '../hooks/useAuthContext'

const Profile = () => {
    const { tenants, dispatch } = useTenantsContext()
    const { user } = useAuthContext()
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTenants = async () => {
            const response = await fetch(`/tenant/${user.user_Name}`)
            const json = await response.json()
            if(response.ok){
               dispatch({type: 'SET_TENANTS', payload: json}) 
            }
        }
        fetchTenants();
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <div>
                {tenants && tenants.map((tenant) => (
                    <div key={tenant.tenant_ID}>
                        <TenantDetails key={tenant.tenant_ID} tenant={tenant} />
                    </div>
                ))}
            </div>
            <div>
                {tenants && tenants.map((tenantBalance) => (
                    <div key={tenantBalance.tenant_ID}>
                        <CurrentBalance key={tenantBalance.tenant_ID} tenantBalance={tenantBalance} />
                    </div>
                ))}
            </div>
            <div className="container">
                <button className='btnSetting' onClick={() => navigate('setting')}> 
                    <i className="fa-solid fa-gear"></i> <strong>Setting</strong>
                </button>
            </div>
        </>
    )
} 

export default Profile