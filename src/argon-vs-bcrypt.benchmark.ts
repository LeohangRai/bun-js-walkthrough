import { password } from 'bun';
import figlet from 'figlet';

const plainTextSmall = 'anB76CFV';
const plainTextMedium = 'spTJah3xbaPiwhh5';
const plainTextLarge = 'x9OUX3n6AGdjLlTunlJtAWVFVk8rfm5T';

console.log(figlet.textSync('Argon vs Bcrypt'));
console.log(
  '------------------------------------------------------------------------------------\n\n'
);

/* Benchmark for small plain text hashing */
const argonHashStartTimeSmall = performance.now();
const argonHashSmall = await password.hash(plainTextSmall);
const argonHashEndTimeSmall = performance.now();

const argonVerifyStartTimeSmall = performance.now();
const isMatchArgonSmall = await password.verify(plainTextSmall, argonHashSmall);
const argonVerifyEndTimeSmall = performance.now();

console.log(
  '----------------------Benchmark for Small Plain Text Hashing------------------------'
);
console.log(`
Plain Text: ${plainTextSmall}
Plain Text Size: ${plainTextSmall.length}
Argon Hash Time: ${argonHashEndTimeSmall - argonHashStartTimeSmall}
Argon Hash Value: ${argonHashSmall}
Match: ${isMatchArgonSmall}
Argon Verification Time: ${argonVerifyEndTimeSmall - argonVerifyStartTimeSmall}
`);

const bcryptHashStartTimeSmall = performance.now();
const bcryptHashSmall = await password.hash(plainTextSmall, 'bcrypt');
const bcryptHashEndTimeSmall = performance.now();

const bcryptVerifyStartTimeSmall = performance.now();
const isMatchBcryptSmall = await password.verify(
  plainTextSmall,
  bcryptHashSmall
);
const bcryptVerifyEndTimeSmall = performance.now();

console.log(`
Plain Text: ${plainTextSmall}
Plain Text Size: ${plainTextSmall.length}
Bcrypt Hash Time: ${bcryptHashEndTimeSmall - bcryptHashStartTimeSmall}
Bcrypt Hash Value: ${bcryptHashSmall}
Match: ${isMatchBcryptSmall}
Bcrypt Verification Time: ${
  bcryptVerifyEndTimeSmall - bcryptVerifyStartTimeSmall
}
`);
console.log(
  '------------------------------------------------------------------------------------\n\n'
);
/* End of benchmark for small plain text hashing */

/* Benchmark for medium sized plain text hashing */
const argonHashStartTimeMedium = performance.now();
const argonHashMedium = await password.hash(plainTextMedium);
const argonHashEndTimeMedium = performance.now();

const argonVerifyStartTimeMedium = performance.now();
const isMatchArgonMedium = await password.verify(
  plainTextMedium,
  argonHashMedium
);
const argonVerifyEndTimeMedium = performance.now();

console.log(
  '----------------------Benchmark for Medium Plain Text Hashing------------------------'
);
console.log(`
Plain Text: ${plainTextMedium}
Plain Text Size: ${plainTextMedium.length}
Argon Hash Time: ${argonHashEndTimeMedium - argonHashStartTimeMedium}
Argon Hash Value: ${argonHashMedium}
Match: ${isMatchArgonMedium}
Argon Verification Time: ${
  argonVerifyEndTimeMedium - argonVerifyStartTimeMedium
}
`);

const bcryptHashStartTimeMedium = performance.now();
const bcryptHashMedium = await password.hash(plainTextMedium, 'bcrypt');
const bcryptHashEndTimeMedium = performance.now();

const bcryptVerifyStartTimeMedium = performance.now();
const isMatchBcryptMedium = await password.verify(
  plainTextMedium,
  bcryptHashMedium
);
const bcryptVerifyEndTimeMedium = performance.now();

console.log(`
Plain Text: ${plainTextMedium}
Plain Text Size: ${plainTextMedium.length}
Bcrypt Hash Time: ${bcryptHashEndTimeMedium - bcryptHashStartTimeMedium}
Bcrypt Hash Value: ${bcryptHashMedium}
Match: ${isMatchBcryptMedium}
Bcrypt Verification Time: ${
  bcryptVerifyEndTimeMedium - bcryptVerifyStartTimeMedium
}
`);
console.log(
  '------------------------------------------------------------------------------------\n\n'
);
/* End of benchmark for medium-sized plain text hashing */

/* Benchmark for large plain text hashing */
const argonHashStartTimeLarge = performance.now();
const argonHashLarge = await password.hash(plainTextLarge);
const argonHashEndTimeLarge = performance.now();

const argonVerifyStartTimeLarge = performance.now();
const isMatchArgonLarge = await password.verify(plainTextLarge, argonHashLarge);
const argonVerifyEndTimeLarge = performance.now();

console.log(
  '----------------------Benchmark for Large Plain Text Hashing------------------------'
);
console.log(`
Plain Text: ${plainTextLarge}
Plain Text Size: ${plainTextLarge.length}
Argon Hash Time: ${argonHashEndTimeLarge - argonHashStartTimeLarge}
Argon Hash Value: ${argonHashLarge}
Match: ${isMatchArgonLarge}
Argon Verification Time: ${argonVerifyEndTimeLarge - argonVerifyStartTimeLarge}
`);

const bcryptHashStartTimeLarge = performance.now();
const bcryptHashLarge = await password.hash(plainTextLarge, 'bcrypt');
const bcryptHashEndTimeLarge = performance.now();

const bcryptVerifyStartTimeLarge = performance.now();
const isMatchBcryptLarge = await password.verify(
  plainTextLarge,
  bcryptHashLarge
);
const bcryptVerifyEndTimeLarge = performance.now();

console.log(`
Plain Text: ${plainTextLarge}
Plain Text Size: ${plainTextLarge.length}
Bcrypt Hash Time: ${bcryptHashEndTimeLarge - bcryptHashStartTimeLarge}
Bcrypt Hash Value: ${bcryptHashLarge}
Match: ${isMatchBcryptLarge}
Bcrypt Verification Time: ${
  bcryptVerifyEndTimeLarge - bcryptVerifyStartTimeLarge
}
`);
console.log(
  '------------------------------------------------------------------------------------\n\n'
);
/* End of benchmark for large plain text hashing */
