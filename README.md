# Archer
> Trace On!

## 0x00 server://
[![deploy to heroku](https://camo.githubusercontent.com/83b0e95b38892b49184e07ad572c94c8038323fb/68747470733a2f2f7777772e6865726f6b7563646e2e636f6d2f6465706c6f792f627574746f6e2e737667)](https://heroku.com/deploy?template=https://github.com/charlzyx/archer.git/tree/master)


## 0x01 local://env
- node.js
- npm
- git
```
npm install pm2 -g
```

## 0x02 local://clone.this

```bash
cd ~ && git clone https://github.com/charlzyx/Archer.git && cd Archer && npm install
```

## 0x03 local://config.json

```bash
vim ~/Archer/config.json
```

```json
{
    // ...
    "local_port": "1087",
    "server": "yourname.herokuapp.com",
    "password": "yourpassword"
}
```

## 0x04 local://safe.life

```bash
# .bashrc or .zshrc
alias sso="pm2 start $HOME/archer/local.js --name archer"
alias ssk="pm2 stop archer"
```

## 0x05 local://enjoy!

```bash
sso
```
