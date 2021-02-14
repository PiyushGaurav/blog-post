import axios from 'axios'

export default axios.create({
    baseURL:'http://7c52a6c9263a.ngrok.io/', //NOTE: this url will be changed/generated when you run npm run tunnel in https://github.com/PiyushGaurav/jsonserver.git repo, use the new base url here
})
