import { Password, password } from 'bun';
import figlet from 'figlet';

type Algorithm =
  | Password.AlgorithmLabel
  | Password.Argon2Algorithm
  | Password.BCryptAlgorithm;

async function benchmarkAndPrint(plainText: string, algorithm?: Algorithm) {
  const startTime = performance.now();
  const hash = await password.hash(plainText, algorithm);
  const endTime = performance.now();

  const verifyStartTime = performance.now();
  const isMatch = await password.verify(plainText, hash);
  const verifyEndTime = performance.now();

  const algorithmName = algorithm == 'bcrypt' ? 'Bcrypt' : 'Argon';

  console.log(`
  Plain Text: ${plainText}
  Algorithm: ${algorithmName}
  Plain Text Size: ${plainText.length}
  Hash Time: ${endTime - startTime}
  Hash Value: ${hash}
  Match: ${isMatch}
  Verification Time: ${verifyEndTime - verifyStartTime}
  `);
}

const plainTextSmall = 'anB76CFV';
const plainTextMedium = 'spTJah3xbaPiwhh5';
const plainTextLarge = 'x9OUX3n6AGdjLlTunlJtAWVFVk8rfm5T';

console.log(figlet.textSync('Argon vs Bcrypt'));
console.log(
  '------------------------------------------------------------------------------------\n\n'
);

console.log(
  `----------------------Benchmark for Small Plain Text Hashing------------------------`
);
await benchmarkAndPrint(plainTextSmall);
await benchmarkAndPrint(plainTextSmall, 'bcrypt');
console.log(
  '------------------------------------------------------------------------------------\n\n'
);

console.log(
  `----------------------Benchmark for Medium Plain Text Hashing------------------------`
);
await benchmarkAndPrint(plainTextMedium);
await benchmarkAndPrint(plainTextMedium, 'bcrypt');
console.log(
  '------------------------------------------------------------------------------------\n\n'
);

console.log(
  `----------------------Benchmark for Large Plain Text Hashing------------------------`
);
await benchmarkAndPrint(plainTextLarge);
await benchmarkAndPrint(plainTextLarge, 'bcrypt');
console.log(
  '------------------------------------------------------------------------------------\n\n'
);
