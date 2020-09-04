var http = require('http');

var resp = {
    "code": 200,
    "msg":""
};

var headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    "My-Post-Header": "My Header Value"
}

var body = "name=Vignesh%20Swaminathan&age=43";

var sresp = http.post("https://postman-echo.com/post", headers, body);
if(sresp != null){
    resp.msg = {
        code: sresp.code,
        headers: sresp.headers,
        body: sresp.body
    }
}else{
    resp.code = 500;
    resp.msg = "Could not fire HTTP POST request";
}

$r.response.headers["content-type"] = "application/json";
$r.response.body = JSON.stringify(resp);
