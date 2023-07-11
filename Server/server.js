const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { exec } = require('child_process');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.post('/compileJava', (req, res) => {
  const { code } = req.body;

  // Lưu mã vào một file tạm thời
  const fileName = 'Main.java';
  const filePath = __dirname + '/' + fileName;
  require('fs').writeFileSync(filePath, code);

  // Biên dịch và chạy mã Java
  exec(`javac ${filePath} && java ${fileName}`, (error, stdout, stderr) => {
    if (error) {
      console.error('Lỗi biên dịch mã Java:', error);
      res.status(500).json({ error: 'Lỗi biên dịch mã Java' });
      return;
    }

    // Xóa file tạm thời
    require('fs').unlinkSync(filePath);

    // Xóa file Main.class
  const classFilePath = `${__dirname}/Main.class`;
  require('fs').unlinkSync(classFilePath);

    // Gửi kết quả về client
    res.json({ result: stdout });
  });
});


app.post('/compileC', (req, res) => {
  const { code } = req.body;
  // Lưu mã vào một file tạm thời
  const fileName = 'Main.c';
  const filePath = `${__dirname}/${fileName}`;
  require('fs').writeFileSync(filePath, code);

  // Biên dịch và chạy mã C
  exec(`gcc ${filePath} -o ${__dirname}/Main.exe`, (error, stdout, stderr) => {
    if (error) {
      console.error('Lỗi biên dịch mã C:', error);
      res.status(500).json({ error: 'Lỗi biên dịch mã C' });
      return;
    }

    // Chạy file thực thi
    exec(`${__dirname}/Main.exe`, (execError, execStdout, execStderr) => {
      // Xóa file thực thi
      require('fs').unlinkSync(`${__dirname}/Main.exe`);

      // Xóa file tạm thời
      require('fs').unlinkSync(filePath);

      if (execError) {
        console.error('Lỗi thực thi tệp tin:', execError);
        res.status(500).json({ error: 'Lỗi thực thi tệp tin' });
        return;
      }
      // Gửi kết quả về client
      res.json({ result: execStdout });
    });
  });
});


// Khởi chạy server
const port = 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
