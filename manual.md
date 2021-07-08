# 設定マニュアル

## 目次

1. ソフトウェアのインストール
2. (PCの)git環境の設定
3. githubのアカウント設定
4. VS Code の設定

## ソフトウェアのインストール
以下のソフトウェアをインストールしてください（内容割愛）
1. Google Chrome
2. Visual Studio Code (VS Code)
3. Git for Windows

## (PCの)git環境の設定
早めに設定した方が意外と簡単ですので、先にやっておきます。
ここではWindowsのユーザー名を `shozo` とします。
1. Git Bash を起動する
1. 起動時のディレクトリは `~` となりますが、これはユーザーのホームディレクトリーとなります。 `pwd` コマンドで確認できます。
    ```console
    shozo@SHOZO-SV7 MINGW64 ~
    $ pwd
    /c/Users/shozo
    ```
    `/c/Users/shozo` と表示されますが、 `C:\Users\shozo` と同じ意味です。
1. SSH鍵を作成します。次のコマンドを入力してください。
    ```
    ssh-keygen -t rsa -b 4096
    ```
    いくつか質問されますが、そのままEnterキーを押してください。
    以下のような実行結果となります。
    ```
    shozo@SHOZO-SV7 MINGW64 ~
    $ ssh-keygen -t rsa -b 4096
    Generating public/private rsa key pair.
    Enter file in which to save the key (/c/Users/shozo/.ssh/id_rsa):
    Created directory '/c/Users/shozo/.ssh'.
    Enter passphrase (empty for no passphrase):
    Enter same passphrase again:
    Your identification has been saved in /c/Users/shozo/.ssh/id_rsa
    Your public key has been saved in /c/Users/shozo/.ssh/id_rsa.pub
    The key fingerprint is:
    SHA256:PZeMgRX8JuMU2jmqNIFFoRF231q5vnGF2lsuAwVcDj4 shozo@SHOZO-SV7
    The key's randomart image is:
    +---[RSA 4096]----+
    |    +o+. o+o.    |
    |   . +.. ==+     |
    |    .o  ooE=.    |
    |    . . .+B*+o   |
    |       .S+=*= .  |
    |      o ..o= .   |
    |     . o  +.o .  |
    |      .    +o+   |
    |          . .o.  |
    +----[SHA256]-----+
    ```
1. github との接続設定を行います。
    以下のコマンドを実行してください。
    `code ~/.ssh/config`
    以下の内容を入力し保存してください。
    ```config
    Host github.com
        HostName github.com
        User git
        IdentityFile ~/.ssh/id_rsa
    ```
1. ユーザー情報を確認し、設定します。
    Git Bash にて
    `git config --global -l`
    を実行します。
    `user.name`と`user.email`が設定されていなければ次のコマンドを実行します。（名前とメールアドレスは自分のものを入力してください）
    ```
    git config --global user.name "NIIKURA Shozo"
    git config --global user.email "ss1561@hus.ac.jp"
    ```
    コマンド実行後に改めて
    `git config --global -l`
    を実行してください。
    こちらでの実行結果は以下のようになります。
    ```
    shozo@SHOZO-SV7 MINGW64 ~
    $ git config --global -l

    shozo@SHOZO-SV7 MINGW64 ~
    $ git config --global user.name "NIIKURA Shozo"

    shozo@SHOZO-SV7 MINGW64 ~
    $ git config --global user.email "ss1561@hus.ac.jp"

    shozo@SHOZO-SV7 MINGW64 ~
    $ git config --global -l
    user.name=NIIKURA Shozo
    user.email=ss1561@hus.ac.jp

    shozo@SHOZO-SV7 MINGW64 ~
    $
    ```

## githubのアカウント設定
動画を参照してください。チェックポイントを以下に示します。
- [ ] github のアカウントを作成したか？
- [ ] SSH鍵を登録したか？
    `~/.ssh/id_rsa.pub` の内容を登録します
- [ ] SSH接続できるか？
    Git Bash で `ssh git@github.com` を実行して確認する。
    接続できない場合は、SSH鍵の作成・登録に失敗している可能性がありますので、一つずつやり直します。





## VS Code の設定
