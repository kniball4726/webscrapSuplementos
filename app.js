const puppeteer = require('puppeteer')

const abrir = async()=>{

    const URL = 'https://suplementos.com/marca/ultratech-nutrition/'
    const browser = await puppeteer.launch({
        headless:false
        })

        const page = await browser.newPage()

        await page.goto(URL, {waitUntil: 'networkidle2'})

        const tittle = await page.title()
        
        console.log('titulo de la pagina: '+tittle)

        //page.close()
    }

    abrir();