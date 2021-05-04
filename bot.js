const moment = require('moment');
const simpleGit = require('simple-git');


const DATE = moment().subtract(95,'d').format();


simpleGit().commit("Responsive web design",{'--date':DATE}).push()