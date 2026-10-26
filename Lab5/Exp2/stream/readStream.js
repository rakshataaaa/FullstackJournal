const fs= require("fs")
// read stream
// const readStream = fs.createReadStream("abc.txt",{
//     encoding:"utf-8",
//     highWaterMark:10
// });
// readStream.on("data",(chunk)=>{
//     console.log("\n\n\n <===========>")
//     console.log(chunk);
// });

// write stream
const writeStream = fs.createWriteStream("writeStream.txt", "utf-8");
writeStream.write("happy world");
writeStream.close();

//pipe
const readerStream=fs.createReadStream("abc.txt","utf-8");
const writerStream=fs.createWriteStream("abc.txt.bak","utf-8");

readerStream.pipe(writeStream);
