cd ../
CURRENT=`pwd`
BASENAME=`basename "$CURRENT"`
notify-send "start browser-sync and css preprocessor for $BASENAME" -i "html5.svg"
#gnome-terminal --tab -e "/bin/bash -c 'cd $CURRENT; ./css.sh'" --tab -e "/bin/bash -c 'cd $CURRENT; ./bs.sh'"
gnome-terminal --tab --quiet --title="css preprocessor for $BASENAME" -- './start/css.sh'
gnome-terminal --tab --quiet --title="browser-sync for $BASENAME" -- './start/bs.sh'