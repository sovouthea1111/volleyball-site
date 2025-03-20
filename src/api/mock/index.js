import experience from "@/api/mock/data/experience.json";
import education from "@/api/mock/data/education.json";

const fetch = (mockData, time = 0) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockData)
        }, time)
    })
}
export default {
    fetchExperience () {
        return fetch(experience, 1000);
    },
    fetchEducation () {
        return fetch(education, 1000);
    },

}