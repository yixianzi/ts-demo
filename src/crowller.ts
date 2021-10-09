// ts -> d.ts 翻译文件 => js
import superagent from "superagent";
import path from "path";
import fs from "fs";
import TestAnalyzer from "./testAnalyzer";

export interface Analyer {
  analyze: (html: string, filePath: string) => string;
}

class Crowller {
  private filePath = path.resolve(__dirname, "../data/course.json");

  private async getRawHtml() {
    const result = await superagent.get(this.url);
    return result.text;
  }

  private writeFile(content: string) {
    fs.writeFileSync(this.filePath, content);
  }

  private async initSpiderProcess() {
    const html = await this.getRawHtml();
    const fileContent = this.analyzer.analyze(html, this.filePath);
    this.writeFile(fileContent);
  }

  constructor(private url: string, private analyzer: Analyer) {
    this.initSpiderProcess();
  }
}

const url = "http://127.0.0.1:5500/public/test.html";
const anylyzer = TestAnalyzer.getInstance();
const crowller = new Crowller(url, anylyzer);
const a = 2;
