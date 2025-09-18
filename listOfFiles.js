import fs from 'fs'

fs.readdir('./',(err,files)=>{
    if(err){
        console.error('Error reading the directory',err);
        return;
    }
    console.log('Files in current directory files',files)
})


async function listFiles() {
    try {
        const files = await fs.readdir("./");
        console.log("Files in current directory:", files);
    } catch (err) {
        console.error("Error reading the directory:", err);
    }
}

listFiles();
