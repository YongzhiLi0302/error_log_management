import axios from 'axios';

const API_URL = 'http://localhost:8080';
class Service {

    retrieveAllErrors() {
        return axios.get(`${API_URL}/log/errors`);
    }

    getErrorsTotalCount() {
        return axios.get(`${API_URL}/log/errors/totalCount`);
    }

    markErrorAsRead(id) {
        return axios.delete(`${API_URL}/log/errors`);
    }

    retrieveAllProcesses() {
        return axios.get(`${API_URL}/dashboard/flows`);
    }

    getTotalItems() {
        return axios.get(`${API_URL}/dashboard/flows/totalItems`)
    }

    getActiveProcessCount() {
        return axios.get(`${API_URL}/dashboard/flows/active`);
    }

    getFailedProcessCount() {
        return axios.get(`${API_URL}/dashboard/flows/failed`);
    }
}

export default new Service();