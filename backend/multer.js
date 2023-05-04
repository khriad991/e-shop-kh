const multer = require("multer")

const storage = multer.diskStorage({
    destination:function (req,res,cd) {
        cd(null,"uploads/");
    },
    filename :function (req,file,cd){
        const uniqueSuffix = date.now() + "-"+ math.round.apply(math.random()*1e9)
        const fileName = file.originalname.split(".")[0];
        cd(null, fileName +'-' + uniqueSuffix + ".png");
    }
})

exports.upload = multer({storage:storage});
