import puppeteer from "puppeteer"

    (async()=>{

    
        /*const browser = await puppeteer.launch({
            headless: 'new',
            defaultViewport: null,
            args: ['--start-maximized']
        })
    
            const page = await browser.newPage()
    
            await page.goto('https://quotes.toscrape.com/')

            const results = await page.evaluate(()=>{
                const quotes = document.querySelectorAll('.quote')
                return quotes
                    })
                    
                console.log(results)
                   

            })();*/

            const browser = await puppeteer.launch({
                headless: 'new',
                defaultViewport: null,
                args: ['--start-maximized']
            })
        
                const page = await browser.newPage()
        
                await page.goto('https://quotes.toscrape.com/')
    
                const results = await page.evaluate(()=>{
                    const quotes = document.querySelectorAll('.quote')
                    const data = [ ...quotes].map((quote) =>{
                       
                        const Texto = quote.querySelector('.text').innerText
                        const Autor = quote.querySelector('.author').innerText
                        const Etiquetas = [ ... quote.querySelectorAll('.tag')].map((tag) => tag.innerText)
                        
                        return {
                            Texto,
                            Autor,
                            Etiquetas
                            }
                    }) 
                           return data
                        })
                        
                    console.log(results)
                       
    
                })();