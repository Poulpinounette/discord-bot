import express from 'express';
import http from 'http';
import App from './app/App';

// command //
import Hug from './commands/Hug';
import Kiss from './commands/Kiss';
import Pat from './commands/Pat';
if(process.env.PROD == "TRUE"){
    console.log("PRODUCTION MODE !")
    let app = express()
    app.get("/", (request, response) => {

        response.sendStatus(200)
    })
    app.listen(process.env.PORT)
        setInterval(() => {
        http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`)
    }, (1000 * 60) * 5) // 5 minutes
}


new Hug(), new Kiss(), new Pat()


App.run()