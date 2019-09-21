import axios from 'axios';

const ERRORS_API_URL = 'http://localhost:8080';
class ErrorsService {

    retrieveAllErrors() {
        return axios.get(`${ERRORS_API_URL}/log/errors`);
    }

    getErrorsTotalCount() {
        return axios.get(`${ERRORS_API_URL}/log/errors/totalCount`);
    }

    markErrorAsRead(id) {
        return axios.delete(`${ERRORS_API_URL}/log/errors`);
    }
}

export default new ErrorsService()