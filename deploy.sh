#!/bin/env bash
npm version $1 && \
    git push origin main:deploy
git push origin main