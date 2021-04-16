//for running  this chat app on localhost use =>>>     npm run dev

const moment= require('moment');



function formatMessage(username, text){
    return {
        username,
        text,
        time: moment().format('h:mm a')
    };
}
module.exports= formatMessage;