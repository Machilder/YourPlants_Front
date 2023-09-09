import axios from "axios"
import axiosCaseConverter from "axios-case-converter";

// applyCaseMiddleware:
// axiosで受け取ったレスポンスの値をスネークケース→キャメルケースに変換
// または送信するリクエストの値をキャメルケース→スネークケースに変換してくれるライブラリ

// ヘッダーに関してはケバブケースのままで良いので適用を無視するオプションを追加
const options = {
  ignoreHeaders: true 
}

const client = axios.create({
  //baseURL: "http://spline.blog:5000/api/v1"
  baseURL: "http://localhost:5000/api/v1"
  
});

export default axiosCaseConverter(client, options);