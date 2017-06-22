Xvfb :23 -ac -screen 0 1280x1024x8 &
export DISPLAY=:23
nightwatch tests/test-demo.js
pkill Xvfb
