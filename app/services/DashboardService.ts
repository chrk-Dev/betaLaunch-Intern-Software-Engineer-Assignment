import apiService from '../api/apiManager'



class DashboardService {
    async getDashboardData() {
      return apiService.apiGet('https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do')
    }

}


export default new DashboardService()
