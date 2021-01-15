import { strict as assert } from 'assert';
import * as fs  from 'fs';
import * as path from 'path';
import rasmifize from '../src';


interface QuranWord {
  sura: number;
  verse: number;
  word: number;
  transliteration: string;
  original: string;
  rasm: string;
}

function quranDataProvider(): QuranWord[] {
  const lines = fs.readFileSync(path.resolve(__dirname, '../data/quran_text_rasm.csv'), "utf-8")
    .toString()
    .split("\n");

  const words = lines.map((line: string): QuranWord => {
    const lineData = line.split('\t');
    return {
      sura: parseInt(lineData[0].trim()),
      verse: parseInt(lineData[1].trim()),
      word: parseInt(lineData[2].trim()),
      transliteration: lineData[3].trim(),
      original: lineData[4].trim(),
      rasm: lineData[5].trim()
    };
  });

  return words;
}

describe('#rasmifize', () => {
  it('should strip the rasm of all words in the quran', () => {
    const quranWords: QuranWord[] = quranDataProvider();
    quranWords.forEach((quranWord: QuranWord) => {
      assert.equal(
        rasmifize(quranWord.original), 
        quranWord.rasm,
        `Failed at ${quranWord.sura}:${quranWord.verse}:${quranWord.word}`
      );
    })
  });
});

describe('regression test', () => {
  it('should convert reported errors correctly', () => {
      const dataProvider = [
        {
          input: 'وَهَيِّئۡ',
          expectation: 'وهىى'
        },
        {
          input: 'بِإِذۡنِیۖ وَتُبۡرِئُ ٱلۡأَكۡمَهَ',
          expectation: 'ٮادںى وٮٮرى الاکمه'
        }
      ];

      dataProvider.forEach(testData => {
          assert.equal(rasmifize(testData.input), testData.expectation);
      })
  });
})