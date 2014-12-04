#!/bin/bash
mongo $1 --eval "var dbname='$1', name='$2', pass='$3'" mongouserdb.js
