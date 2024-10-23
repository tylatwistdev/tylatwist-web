export const successResponse = (response) => {
    return response?.data ?? null
}
export const successResponseList = (response) => {
    return response?.data ?? []
}
export const errorResponse = () => {

}