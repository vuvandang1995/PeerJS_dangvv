# PeerJS_dangvv
## Install Peerjs Server
### 1. Install nodejs, unzip
`wget -qO- https://deb.nodesource.com/setup_10.x | sudo -E bash -`
`sudo apt-get install -y nodejs`
`sudo apt-get install unzip`
### 2. Download setup file and install
```
wget https://github.com/peers/peerjs-server/archive/master.zip
unzip master.zip
cd peerjs-server-master/`
npm install
cd /usr/local/lib/
sudo npm install peer
sudo npm install peer -g
```
### 3. Run
`peerjs --port 9000 --key peerjs`
