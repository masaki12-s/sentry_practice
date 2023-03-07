# sentry_practice

## 用語
- **Organization**: 最上位のグルーピング
- **Project**: Orgamizationの中でさらにグルーピング
- **Environment**: Sentryがサポートするタグ（prod, staging, testingなど）
- **DSN(Data Source Name)**: 発生したイベントやエラーがどのプロジェクトと紐づくか識別するもの

## 導入
### ローカルでsentryを構築する
dockerで構築できるので今回はそれを試す



```
npm install --save @sentry/browser @sentry/tracing
```

