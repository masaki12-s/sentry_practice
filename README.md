# sentry_practice

## 用語
- **Organization**: 最上位のグルーピング
- **Project**: Orgamizationの中でさらにグルーピング
- **Environment**: Sentryがサポートするタグ（prod, staging, testingなど）
- **DSN(Data Source Name)**: 発生したイベントやエラーがどのプロジェクトと紐づくか識別するもの

## 導入
### ローカルでsentryを構築する
dockerで構築できるので今回はそれを試す

1. `coreutils`が必要らしい
    ```
    brew install coreutils
    ```
2. メモリを4GB確保しないといけないのでDockerで設定する

3. リポジトリをclone
    https://github.com/getsentry/self-hosted

    ```
    git clone https://github.com/getsentry/self-hosted
    ```

4. Setup
    ```
    ./install.sh --no-user-prompt
    ```

5. アカウント作成
    SaaSで提供されているsentryと同様に, ローカルでもログインにアカウント
    ```
    docker compose run --rm web createuser
    ```

6. 起動
    ```
    docker compose up -d
    ```
    コンテナが実行されると http://localhost:9000 からアクセスできる


## 設定
SDKの導入は各ディレクトリを参照する