export const fetchArticles = async () => {
    const res = await fetch(`https://newsapi.org/v2/everything?q=Apple&from=2023-11-01&sortBy=popularity&apiKey=a1751ac6082e42acbc227fda84453483`)
    const data = await res.json()
    console.log(data)
    return data.articles
}