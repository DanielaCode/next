import db from '../../../database/db'

const allAvos = async (req,res) => { 
    const allEntries = await db.getAll()
    res.end(JSON.stringify({data:allEntries}))
}

export default allAvos