husky installieren:
```
npm install husky --save-dev
npx husky install
```

zum package.json hinzufügen:
```
{
  "scripts": {
    "prepare": "husky install"
  }
}
```

commitlint installieren:
```
npm install --save-dev @commitlint/cli @commitlint/config-conventional
```

Mit dem Prepare script von husky greift die commit-msg hook sobald das repository gecloned wird.



