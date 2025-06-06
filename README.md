# 📊 Log Analyzer CLI (Node.js)

Un projet CLI simple en Node.js qui lit un fichier `log.txt`, analyse les niveaux de logs (`INFO`, `WARNING`, `ERROR`) et génère un rapport `rapport.txt`.

---

## 👨‍💻 Auteur

**Hamza Fellah**

---

## 📝 Description

Ce projet permet d'automatiser l'analyse de fichiers de logs en ligne de commande. Il fournit des statistiques lisibles sur le nombre de messages `ERROR`, `WARNING` et `INFO`, et affiche ces résultats dans la console avec des couleurs pour une meilleure lisibilité.

Un fichier `rapport.txt` est également généré automatiquement.

---

## 📁 Structure du projet

log-analyzer-js/
├── log.txt # Fichier de logs à analyser
├── index.js # Script principal du projet
├── rapport.txt # Rapport généré après l'exécution
├── .gitignore # Ignore node_modules
├── package.json # Dépendances (chalk, fs, etc.)
├── Jenkinsfile # Pipeline Jenkins scripté
└── README.md # Ce fichier


---

## 🚀 Installation et utilisation

### 1. Cloner le dépôt

```bash
git clone https://github.com/Fhamza03/log-analyzer-js.git
cd log-analyzer-js
