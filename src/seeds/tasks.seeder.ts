import quotesData from '../../data/quotes.txt';
import { Quote } from '../interfaces/quote.interface';

export function getQuotesSeedData(): Quote[] {
  const quotes = quotesData.split('\n');
  return quotes.reduce((acc: Quote[], curr: string) => {
    const [quote, reference, stars] = curr.split('|');
    acc.push({
      quote: quote?.trim(),
      reference: reference?.trim(),
      stars: Number(stars) || 0
    });
    return acc;
  }, []);
}

export function getQuotesSeedDataFormattedString(): string {
  const quotesSeedData = getQuotesSeedData();
  return quotesSeedData.reduce((acc, curr, index) => {
    const { quote, reference, stars } = curr;
    acc += `('${quote}', '${reference}', '${stars}')${
      index < quotesSeedData.length - 1 ? ',' : ''
    }`;
    return acc;
  }, '');
}
