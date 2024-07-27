import puppeteer from 'puppeteer';

            const scrollPage = async (page)=>{
               while (true){
                const previusHeight = await page.evaluate('document.body.scrollHeight')
                await page.evaluate('window.scrollTo(0,document.body.scrollHeight)')
                await page.waitForFunction(`document.body.scrollHeight > ${previusHeight}`)
                await new Promise((resolve) => setTimeout(resolve, 1000))
            }
               }

            (async()=>{

            const browser = await puppeteer.launch({
                headless: false,
                defaultViewport: null,



            })
        
                const page = await browser.newPage()
                
            
                await page.goto('https://suplementos.com/marca/ultratech-nutrition/', {
                        waitUntil: "networkidle2"

                })

                
                await scrollPage(page);
                
                page.setDefaultNavigationTimeout(0);
    
                const results = await page.evaluate(()=>{
                    
                    
                    const productos =  document.querySelectorAll('.box-text.box-text-products')
                    const data =  [ ...productos].map((producto) =>{
                       
                        const Producto =  producto.querySelector('.name').innerText
                        const Categoria = producto.querySelector('.category').innerText
                        const Precio = producto.querySelector('.price-wrapper').innerText
                                               
                        return {
                            Producto,
                            Categoria,
                            Precio
                            }
                    }) 
                           return data
                        })
                        
                    await console.log(results)
                    await console.log(`Productos escaneados ${results.length}`)
                    await browser.close()

                       
    
                })();

