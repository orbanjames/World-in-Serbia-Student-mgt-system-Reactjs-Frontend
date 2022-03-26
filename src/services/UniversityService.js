import axios from 'axios';
const UNIVERSITY_API_BASE_URL = "http://localhost:8080/api/v1/universities";

class UniversityService {
    getAllUniversities() {
        return axios.get(UNIVERSITY_API_BASE_URL);
    }
    createUniversity(university) {
        return axios.post(UNIVERSITY_API_BASE_URL, university);
    }
    getUniversityById(universityId) {
        return axios.get(UNIVERSITY_API_BASE_URL + '/' + universityId);
    }
    updateUniversity(university, universityId) {
        return axios.put(UNIVERSITY_API_BASE_URL + '/' + universityId, university);
    }
    deleteUniversity(universityId) {
        return axios.delete(UNIVERSITY_API_BASE_URL + '/' + universityId);
    }

}

export default new UniversityService()