import puppeteer from "puppeteer"

/*(async()=>{

    const URL = 'https://suplementos.com/marca/ultratech-nutrition/'

    const browser = await puppeteer.launch({headless:false})

        const page = await browser.newPage()

        await page.goto(URL, {waitUntil: 'networkidle2'})

        const tittle = await page.title()
        
        console.log('titulo de la pagina: '+tittle)

        let productos = []
        let nextPage = false

        await page.evaluate(()=>{
            const busqueda = Array.from(document.querySelectorAll('.title-wrapper'))
          
                busqueda.map(product =>{
                const nombre = product.querySelector('.woocommerce-loop-product__link').innerText
                const precio = product.querySelector('.amount').innerText
                
                console.log(nombre)
                console.log(precio)
            })
           
        })

        //page.close()
    })//();

    //abrir();

    (async()=>{

    
        const browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
            args: ['--start-maximized']
        })
    
            const page = await browser.newPage()
    
            await page.goto('https://suplementos.com/marca/ultratech-nutrition/')

            await page.screenshot({
                path: './src/example.png'
            })

            await browser.close()

    })//();*/

    (async()=>{

    
        const browser = await puppeteer.launch({
            headless: 'new',
            defaultViewport: null,
            args: ['--start-maximized']
        })
    
            const page = await browser.newPage()
    
            //await page.goto('https://quotes.toscrape.com')
            await page.goto('https://suplementos.com/marca/ultratech-nutrition/')
            //await page.click('a[href="/login"]')
            //await page.screenshot({path: './src/quoteimage.png'})
            
            let products = []
            let nextPage = true

            while (nextPage){

            const newProducts = await page.evaluate(()=>{
            
                return Array.from(document.querySelectorAll('.woocommerce-LoopProduct-link.woocommerce-loop-product__link'))
                
                return products.map(product =>{
                    const title = product.querySelector('p.name.product-title.woocommerce-loop-product__title').innerText
                    const price = product.querySelector('span.woocommerce-Price-currencySymbol').innerText

                })


                

            })
            products = [...products, ...newProducts]
            console.log(products)
        }
    
            await browser.close()

    })()