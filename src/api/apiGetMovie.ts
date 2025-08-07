import { api } from '../utils/axios'

export async function getMoive() {
    const response = await api.get('/?action=info&id=2501')
    console.log(response.data)
    return response.data
    
}