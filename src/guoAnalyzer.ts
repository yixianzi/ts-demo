import { Analyer } from "./crowller";

export default class guoAnalyzer implements Analyer {
  public analyze(html: string, filePath: string) {
    return html;
  }
}
