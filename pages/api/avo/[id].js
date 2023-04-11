import db from '../../../database/db'

const avoById = async (req,res) => { 
    const entry = await db.getById(req.query.id)
    res.end(JSON.stringify({data:entry}))
}

export default avoById