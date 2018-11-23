const puppeteer = require('puppeteer');
async function hyde(page){
    try {
        await page.waitForSelector('#loadingdone > table > tbody > tr > td:nth-child(2) > input', {
            visible: true,
          })
      } catch (error) {
          hydeLagi(page)
      }
}
async function hydeLagi(page){
hyde(page)
}

async function panda() {
 
 const browser = await puppeteer.launch({headless:true,args: ['--no-sandbox', '--disable-setuid-sandbox'] });      
    
  const page = await browser.newPage();
  await page.goto('https://1ink.info/ZBodz', {waitUntil: 'networkidle2'});
//   var cambim=await page.evaluate(()=>{
//       return document.querySelector("#loadingdone > table > tbody > tr > td:nth-child(2) > input")
//   })
  try {
    await page.waitForSelector('#loadingdone > table > tbody > tr > td:nth-child(2) > input', {
        visible: true,
      })
  } catch (error) {
      hyde(page)
  }
  
  await page.click("#loadingdone > table > tbody > tr > td:nth-child(2) > input")
//   var jamba=""
//   try {
//     jamba=await page.title()    
//   } catch (error) {
//       cumi(page,jamba)
//   }
  
//   while(jamba!="SPK Pemilihan Handphone (Samsung) menggunakan metode AHP - YouTube"){
//     try {
//         jamba=await page.title()    
//       } catch (error) {
//           cumi(page,jamba)
//       }
//   }  
  console.log("wait")
  await page.waitFor(10000)
  const jamba=await page.title()
  console.log(jamba)
//   await page.pdf({path: 'hn.pdf', format: 'A4'});
// await page.waitFor(10000)
  await browser.close();
}

panda()
