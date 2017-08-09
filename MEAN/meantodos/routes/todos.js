var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://sara:sara@ds133670.mlab.com:33670/saramean',['todos'])

//get all todos
router.get('/todos', function(req, res, next){
  db.todos.find(function(err, todos){
    if(err){
      res.send(err);
    }else{
      res.json(todos);
    }
  });
});

//get one todo
router.get('/todo/:id', function(req, res, next){
  db.todos.findOne({
    _id: mongojs.ObjectId(req.params.id)
  }, function(err, todo){
    if(err){
      res.send(err);
    }else{
      res.json(todo);
    }
  });
});

//save todo
router.post('/todo', function(req, res, next){
  var todo = req.body;
  if(!todo.text || !(todo.isCompleated + '')){
    res.status(400);
  }else{
    db.save(todo, function(err, res){
      if(err){
        res.send(err);
      }else{
        res.json(res)
      }
    })
  }
})

//ukpdate

router.put('/todo/:id', function(req, res, next){
  var todo = req.body;
  var updObj = {};

  if(todo.isCompleated){
    updObj.isCompleated = todo.isCompleated;
  }if(todo.text){
    updObj.text = todo.text;
  }if(!updObj){
    res.status(400)
  }else{
    db.todos.update({
      _id: mongojs.ObjectId(req.params.id)
    },updObj, {}, function(err, result){
      if(err){
        res.send(err);
      }else{
        res.json(res)
      }
    });
  }
});

//del

router.delete('/todo/:id', function(req, res, next){

    db.todos.remove({
      _id: mongojs.ObjectId(req.params.id)
    }, '', function(err, result){
      if(err){
        res.send(err);
      }else{
        res.json(res)
      }
    })
})

module.exports = router;
