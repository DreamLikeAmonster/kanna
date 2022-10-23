rm -rf kanna && git clone https://github.com/DreamLikeAmonster/kanna && sudo apt install ffmpeg imagemagick -y && cd kanna && npm install && npm install -g pm2 && pm2 start index.js && pm2 logs
