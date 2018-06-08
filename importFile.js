function selectFile() {
    $("#file").trigger("click");      //让import按钮的事件触发
}

function importFile() {
    var name = $('#file').val();　　　//获得文件名称,$('#file').val()含有路径 -- C:\fakepath\shudian1.pnml
    name=name.split("fakepath\\")[1];
    //判断是什么类型的文件，类型正确才上传，防止用户错误提交不正确的文件,防止浪费内存空间.
    if (name.includes(".xml") || name.includes(".pnml")) {
        $.ajaxFileUpload
        (
            {
                url:'/importFile',//用于文件上传的服务器端请求地址
                secureuri:false,//一般设置为false
                fileElementId:'file',//文件上传标签的id属性
                dataType: 'text',//返回值类型 一般设置为json
                success: function (data) //服务器成功响应处理函数
                {
                    alert("上传成功");
                },
                error: function (data)//服务器响应失败处理函数
                {
                    alert("上传失败");
                }
            }
        );
    }
    else{
        alert("文件格式必须是xml或pnml！");
    }
    return false;
}
