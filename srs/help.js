import { Command } from 'commander/esm.mjs';

const program = new Command();
const help = () => {
  program
    .description('Compares two configuration files and shows a difference.')
    .version('1.0');

  program.parse();
};
export { help as help};
