import api from "./api";

export const getListStatusReport = async() => {
    try {
        const response = await api.get('/report')
        return response.data;
    } catch (error) {
        return Promise.reject(error.response)
    }
}

export const registerStatusReport = async(form) => {
    const route = '/report';

    const body = {
        week: form?.week,
        dateStart: form?.date[0], 
        dateEnd: form?.date[1],
        dateSprintStart: form?.dateSprint[0],
        dateSprintEnd: form?.dateSprint[1],
        boardData: form?.boardData, // arquivo json do board do trello em base64
        comments: form?.comments
    }
    try {
        await api.post(route, body)
        window.location.replace('/')
    } catch(error) {
        return Promise.reject(error.response)
    }
}




