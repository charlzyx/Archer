# Archer
> Trace On!

## 说人话的在[Forest10/ss-heroku](https://github.com/Forest10/ss-heroku)

## 0x00 server://
[![deploy to heroku](https://camo.githubusercontent.com/83b0e95b38892b49184e07ad572c94c8038323fb/68747470733a2f2f7777772e6865726f6b7563646e2e636f6d2f6465706c6f792f627574746f6e2e737667)](https://heroku.com/deploy?template=https://github.com/charlzyx/archer.git/tree/master)

## 0x01 server://snapshot
![](https://gitee.com/charlzyx/picgo/raw/master/go/20200522222941.png)


## 0x02 local://env
- node.js
- npm
- git
```
npm install pm2 -g
```

## 0x03 local://clone.this

```bash
cd ~ && git clone https://github.com/charlzyx/Archer.git && cd Archer && npm install
```

## 0x04 local://config.json

```bash
vim ~/Archer/config.json
```

custome config

```json
{
    "local_port": "1087",
    "server": "yourname.herokuapp.com",
    "password": "yourpassword"
}
```

## 0x05 local://save.life

```bash
# .bashrc or .zshrc
alias sso="pm2 start $HOME/archer/local.js --name archer"
alias ssk="pm2 stop archer"
```

## 0x06 local://enjoy!

```bash
sso
```


