# create new post

if [[ $1 == '' ]];then
  echo "error command"
  echo "usage:"
  echo "bash sh/newsecret.sh <title>"
  exit
fi


echo "- [$1](/mysecret/$1.html)" >> content/mysecret.md

cat << eof > content/mysecret/$1.md
$1

2023-09-14 02:00

eof

nano content/mysecret/$1.md
