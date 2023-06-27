import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';


inquirer
  .prompt([
    {
      message:"Enter URL link: ",
      name: "URL"
    }
  ])
  .then((answers) => {
    const ans = answers.URL;     
    
    //the url is added to file
    fs.writeFile('url.txt', ans, function(err)
    {
      if(err) throw err;
    });

    //creating qr image png
    var qr_svg = qr.image(ans, { type: 'png' }); // or 'svg' formats
    qr_svg.pipe(fs.createWriteStream('qr.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
