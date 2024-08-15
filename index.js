require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const githubData = {
    "login": "Anoopkumargithub",
    "id": 113820345,
    "node_id": "U_kgDOBsjCuQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/113820345?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Anoopkumargithub",
    "html_url": "https://github.com/Anoopkumargithub",
    "followers_url": "https://api.github.com/users/Anoopkumargithub/followers",
    "following_url": "https://api.github.com/users/Anoopkumargithub/following{/other_user}",
    "gists_url": "https://api.github.com/users/Anoopkumargithub/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Anoopkumargithub/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Anoopkumargithub/subscriptions",
    "organizations_url": "https://api.github.com/users/Anoopkumargithub/orgs",
    "repos_url": "https://api.github.com/users/Anoopkumargithub/repos",
    "events_url": "https://api.github.com/users/Anoopkumargithub/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Anoopkumargithub/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Anoop Kumar",
    "company": "GLA University Mathura",
    "blog": "",
    "location": "India",
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": "AnoopKumarAI",
    "public_repos": 18,
    "public_gists": 0,
    "followers": 4,
    "following": 10,
    "created_at": "2022-09-18T06:38:45Z",
    "updated_at": "2024-08-08T06:36:27Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res) =>{
    res.send('Anoop Kumar')
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please Login at Chai</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>Chai or code</h2>')
})

app.get('/github',(req,res) =>{
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})