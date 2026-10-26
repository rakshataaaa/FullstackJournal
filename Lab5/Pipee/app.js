const readerStream = fs.createReadStream("Verylargefile.txt","utf-8");
const writeStream = fs.createWriteStream("Verylargefile.txt.bak","utf-8");
readerStream.pipe(writeStream);
process.stdin.pipe

process.stdin 