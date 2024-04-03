#!/bin/bash

# exit when one command return none-zero
set -e

CWD=$(pwd)

cd ${CWD}/app3 && npm run webpack-dev &
cd ${CWD}/hub && npm run webpack-dev &
cd ${CWD}/styleguide && npm run webpack-dev &

# wait until all exits
wait
