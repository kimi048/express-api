var express   = require('express');
var router    = express.Router();
var ArticleModel = require('../../models/articleModel.js');
console.log("articles loaded");
router.post('/',function(req,res){
  console.log("articles post/");
    // モデル作成．
    var Article = new ArticleModel();

    // データを詰め込む
    Article.title = req.body.title;
    Article.text = req.body.text;
    Article.setDate();

    // 保存処理
    Article.save(function(err) {
        if (err){
            // エラーがあった場合エラーメッセージを返す
            res.send(err);
        } else {
            // エラーがなければ「Success!!」
            res.json({ message: 'Success!!' });
        }
    });
});

router.get("/",function(req,res){
  ArticleModel
    .find()
    .then(function(articles){
      res.json(articles);
    });
});

router.get("/:id",function(req,res){
  var Articleid=req.params.id;
  ArticleModel.findById(Articleid,function(err,article){
    res.json(article);
  });
});

router.delete("/:id",function(req,res){
  var Articleid=req.params.id;
  ArticleModel.deleteOne({_id:Articleid})
    .then(function(){
      res.json({message:"Success!!"});
    });
});

//routerをモジュールとして扱う準備
module.exports = router;
router.get('/test',function(req,res){
  console.log("articles get /test");
  res.json({
    message:"This is article api"
  });
});

module.exports = router;