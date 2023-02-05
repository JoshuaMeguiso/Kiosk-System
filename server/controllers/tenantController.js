const { default: mongoose } = require('mongoose')
const Tenant = require('../models/tenantModel')

//GET all tenants
const getTenants = async (req, res) => {
    const tenant = await Tenant.find({}).sort({createdAt: -1})
    res.status(200).json(tenant)
}

//GET single tenant
const getTenant = async (req, res) => {
    const {tenant_ID} = req.params
    const tenant = await Tenant.find({tenant_ID})
    res.status(200).json(tenant)
}

//POST new tenant
const createTenant = async(req, res) => {
    const {tenant_ID, room_ID, first_Name, last_Name, birth_Date, contact_Info, emergency_Num, address, start_Term, lease_Term, balance} = req.body;
    try{
        const tenant = await Tenant.create({tenant_ID, room_ID, first_Name, last_Name, birth_Date, contact_Info, emergency_Num, address, start_Term, lease_Term, balance})
        res.status(200).json(tenant)
    } catch (error) {
        res.json({error: error.message})
    }
}

//DELETE a tenant
const deleteTenant = async(req,res) => {
    const {tenant_ID} = req.params
    const tenant = await Tenant.findOneAndDelete({tenant_ID})
    res.status(200).json(tenant)
}

//UPDATE a tenant
const updateTenant = async(req,res) => {
    const {tenant_ID} = req.params
    const tenant = await Tenant.findOneAndUpdate({tenant_ID}, {
        ...req.body
    })
    res.status(200).json(tenant)
}


module.exports = {
    getTenants,
    getTenant,
    createTenant,
    deleteTenant,
    updateTenant
}