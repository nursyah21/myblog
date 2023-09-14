# create new post

if [[ $1 == '' ]];then
  echo "error command"
  echo "usage:"
  echo "bash sh/new.sh <title>"
  exit
fi


cat << eof > content/$1.md
Title: $1
Description: description
Date: 2023-09-14 02:00
Tags: blog
eof

nano content/$1.md
