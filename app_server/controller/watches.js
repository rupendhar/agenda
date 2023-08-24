module.exports.homelist = function(req,res){
    res.render('watches-list',{title:'Home'});
};

module.exports.watchInfo = function(req,res){
    res.render('watch-info',{title:'Watch Info'});
};

module.exports.watchInfo2 = function(req,res){
    res.render('watch-info2',{title:'Watch Info'});
};