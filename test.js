{
  var peg = require("pegjs");
}

{
  var mArissa = document.createElement("img");
mArissa.src ="images/m01.jpg";
document.body.appendChild(mArissa);
//document.write("work please")

var dir = "images/";
var fileextension = ".jpg";
$.ajax({
    //This will retrieve the contents of the folder if the folder is configured as 'browsable'
    url: dir,
    success: function (data) {
        //List all .png file names in the page
        $(data).find("a:contains(" + fileextension + ")").each(function () {
            var filename = this.href.replace(window.location.host, "").replace("http://", "");
            $("body").append("<img src='" + dir + filename + "'>");
        });
    }
});

}

start = "dance" {return mArissa;}

dance
