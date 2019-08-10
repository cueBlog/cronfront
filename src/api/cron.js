import request from '@/utils/request'

function getList(params) {
    return request({
        url: '/crons',
        method: 'get',
        params
      })
}

function addCron(params) {
    return request({
        url: '/cron',
        method: 'POST',
        data: params
    }) 
}

function editCron(params) {
    return request({
        url: '/cron',
        method: 'PUT',
        data: params
    })
}

function deleteCron(jobId) {
    return request({
        url: '/cron' ,
        method: 'DELETE' ,
        data: { jobId:jobId }
    })
}

function getCron(jobId) {
    return request({
        url: '/cron' ,
        method: 'GET' ,
        params: { jobId:jobId }

    })
}

export default {
    getList,
    addCron,
    deleteCron,
    getCron,
    editCron
}

