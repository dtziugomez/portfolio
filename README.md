to host in git hub pages:npm install gh-pages
and in package.json add:
"predeploy": "npm run build",
"deploy": "gh-pages -d build",
into scripts

npm run deploy to generate in github
