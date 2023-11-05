export const fetchArticles = async (source, keyword, page, pageSize) => {
    let res;
    if (source === 'all') {
        if (keyword === '') {
            res = await fetch(`https://newsapi.org/v2/everything?q=a&page=${page}&pagesize=${pageSize}&apiKey=985fbed48e744fcba6fc1364621bff53`)
        } else {
            res = await fetch(`https://newsapi.org/v2/everything?q=${keyword}&page=${page}&pagesize=${pageSize}&apiKey=985fbed48e744fcba6fc1364621bff53`)
        }
    } else {
        if (keyword === '') {
            res = await fetch(`https://newsapi.org/v2/everything?sources=${source}&q=a&page=${page}&pagesize=${pageSize}&apiKey=985fbed48e744fcba6fc1364621bff53`)
        } else {
            res = await fetch(`https://newsapi.org/v2/everything?sources=${source}&q=${keyword}&page=${page}&pagesize=${pageSize}&apiKey=985fbed48e744fcba6fc1364621bff53`)
        }
    }

    const data = await res.json()
    return data
}