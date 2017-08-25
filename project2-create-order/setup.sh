#!/bin/bash

dropdb createorderdb_dev
createdb createorderdb_dev
yarn migrate
yarn seeds

dropdb createorderdb_test
createdb createorderdb_test
yarn migrate-test
yarn seeds-test
