<%--
  Created by IntelliJ IDEA.
  User: yjk
  Date: 2018/6/8
  Time: 21:01
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>一个按钮实现文件异步上传</title>
    <link type="text/css" href="css/importFile.css" rel="stylesheet">
</head>
<body>
<div id="import">
    <div><img src="images/import_30x30_white.png"></div>
    <%--input须在import之前--%>
    <input type="file" id="file" name="file" title="import" onchange="importFile()" />
    <div onclick="return selectFile()">import</div>
</div>
</body>
<script type="text/javascript" src="js/jquery-3.3.1.js"></script>
<script type="text/javascript" src="js/ajaxfileupload.js"></script>
<script type="text/javascript" src="js/importFile.js"></script>
</html>
