const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {

		const data = {
				title: "Assalamu'alaikum",
		}

    req.vueOptions = {
        head: {
            title: 'Page Title',
            styles: [{style : "stylesheets/style.css"}]
        }    
    }

    res.renderVue('main.vue',data,req.vueOptions)

})


module.exports = router;
