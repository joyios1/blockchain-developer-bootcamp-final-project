# Tower Defense Game with NFTs

![game](./public/img/img.png)

install npm and ganache with:

```
    npm install --g truffle@5.4.1
    npm install ganache --global
```

cd to the folder 'blockchain-developer-bootcamp-final-project-main' and then run:

```
    npm install
    npm compile
    npm migrate
```

copy paste the GameToken.json file from 'build/contracts/' to the GameToken.js file in public/ but add 'GameToken =' in the beggining of the .js file. 

open a new terminal and type 'ganache' to start the local blockchain

then go to the original terminal (the one in the folder blockchain-developer-bootcamp-final-project-main) and run the game with:
```
    npm run start
```

an ethereum browser must be detected and an account must be connected to site. This way the user can earn NFTs when he clears the waves.

If the user clears a wave without losing any lives then an NFT will be sent to his address. The NFT can be either accepted of rejected.

Then the NFTs that have been unlocked can be used within the game!