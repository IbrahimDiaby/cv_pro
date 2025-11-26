npm run build
cp .env dist/
cd dist/
git init
git add .
git commit -m "[DONE] : GITHUB FUN CHALLENGE CODE ADDED"
git branch -M main
git remote add origin git@github.com:IbrahimDiaby/CV.git
git push -u origin main