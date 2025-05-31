const fs = require('fs');
const chalk = require('chalk');

// Niveaux de log
const levels = ['INFO', 'WARNING', 'ERROR'];
const stats = { INFO: 0, WARNING: 0, ERROR: 0 };

// Lire le fichier log
const lines = fs.readFileSync('log.txt', 'utf-8').split('\n');

// Compter les occurrences
lines.forEach(line => {
  levels.forEach(level => {
    if (line.startsWith(level)) stats[level]++;
  });
});

// Affichage coloré dans le terminal
console.log(chalk.blue.bold('\nStatistiques des logs :\n'));
levels.forEach(level => {
  const color =
    level === 'ERROR' ? chalk.red :
    level === 'WARNING' ? chalk.yellow :
    chalk.green;

  console.log(color(`${level}: ${stats[level]}`));
});

// Écriture dans le fichier rapport
const report = levels.map(level => `${level}: ${stats[level]}`).join('\n');
fs.writeFileSync('rapport.txt', report);

console.log(chalk.blue('\nRapport écrit dans rapport.txt'));
