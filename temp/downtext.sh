#!/bin/bash

if [ $# -lt 2 ];then
	echo "bash downtext.sh <link> <filename>"
	exit 1
fi


wget --header='accept-encoding:gzip' -O "$2.gz" "$1" && \
gzip -d "$2.gz"  && \
html2text "$2" > "$2.txt"
