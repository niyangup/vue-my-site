import request from "@/api/request";

export function getBanner() {
    return request.get('/api/banner')
}
