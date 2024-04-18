import * as fs from "fs";
import pdf from "pdf-parse";

let pdfPath = "";

const extractTextFromPDF = async (pdfPath: string): Promise<string> => {
  const dataBuffer = fs.readFileSync(pdfPath);
  const data = await pdf(dataBuffer);
  const text = data.text;
  console.log(data.info);
  console.log(data.metadata);

  return text;
};

extractTextFromPDF(pdfPath).then(
  (text) => {
    console.log("読み込み完了");
    // .txtに出力
    fs.writeFileSync("output.txt", text);
    console.log("output.txtに出力しました");
  },
  (error) => {
    console.error(error);
  }
);
