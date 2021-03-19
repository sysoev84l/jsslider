CURRENT=`pwd`
BASENAME=`basename "$CURRENT"`

#comment="lesson_4"
notify-send "git commit and push $BASENAME" -i "/home/sysoev84l/Изображения/git/GitHub-Mark/PNG/GitHub-Mark-120px-plus.png"
git add .
git commit -m $BASENAME
git push -u origin main