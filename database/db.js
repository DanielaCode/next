import allData from './data'


const getAll = async () =>{
  await randomDelay()
  return allData
}

const getById = async (id) =>{
  if (!Object.prototype.hasOwnProperty.call(allData, id)) {
    return null
  }
  const entry = allData[id]
  await randomDelay()
  return entry
}

const db={getAll,getById}
// Let's also add a delay to make it a bit closer to reality
const randomDelay = () =>
  new Promise((resolve) => {
    const max = 350
    const min = 100
    const delay = Math.floor(Math.random() * (max - min + 1)) + min

    setTimeout(resolve, delay)
  })

export default db
