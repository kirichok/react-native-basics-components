search="{PWD}"
replace=$(echo $PWD | sed 's_/_\\/_g')
file=$(pwd)/react-native.config.template.js

test -f $file && sed "s/${search}/${replace}/g" $file > react-native.config.js || echo none
