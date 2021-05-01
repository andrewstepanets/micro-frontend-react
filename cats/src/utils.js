import axios from 'axios'


export const getRandomCat = async () => {
  const res = await axios.get('https://aws.random.cat/meow')
  return res.data.file
}