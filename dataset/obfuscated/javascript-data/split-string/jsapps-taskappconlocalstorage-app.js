const a0_0x4cd470=a0_0x5575;(function(_0x27baa2,_0x55fdfa){const _0x4565fe=a0_0x5575,_0x1193b6=_0x27baa2();while(!![]){try{const _0x1f548d=-parseInt(_0x4565fe(0x165))/0x1*(parseInt(_0x4565fe(0x169))/0x2)+parseInt(_0x4565fe(0x15e))/0x3*(parseInt(_0x4565fe(0x15b))/0x4)+parseInt(_0x4565fe(0x141))/0x5+parseInt(_0x4565fe(0x140))/0x6*(-parseInt(_0x4565fe(0x14a))/0x7)+parseInt(_0x4565fe(0x155))/0x8+-parseInt(_0x4565fe(0x14f))/0x9*(-parseInt(_0x4565fe(0x148))/0xa)+-parseInt(_0x4565fe(0x13f))/0xb*(parseInt(_0x4565fe(0x162))/0xc);if(_0x1f548d===_0x55fdfa)break;else _0x1193b6['push'](_0x1193b6['shift']());}catch(_0x2ecf6c){_0x1193b6['push'](_0x1193b6['shift']());}}}(a0_0x21d1,0x780c2));let formTask=document[a0_0x4cd470(0x14e)+a0_0x4cd470(0x14c)]('#formTask');function a0_0x5575(_0x261a5b,_0x335c61){const _0x21d130=a0_0x21d1();return a0_0x5575=function(_0x5575e2,_0x4945fb){_0x5575e2=_0x5575e2-0x13b;let _0x5db883=_0x21d130[_0x5575e2];return _0x5db883;},a0_0x5575(_0x261a5b,_0x335c61);}formTask[a0_0x4cd470(0x166)+a0_0x4cd470(0x142)]('submit',saveTask);function saveTask(_0x233e53){const _0x592530=a0_0x4cd470;_0x233e53[_0x592530(0x159)+'ault']();let _0x2f025a=document['querySelec'+_0x592530(0x14c)]('#title')[_0x592530(0x13e)],_0x4d29f0=document[_0x592530(0x14e)+'tor']('#descripti'+'on')[_0x592530(0x13e)];if(_0x2f025a=='')return inputEmpty(),![];const _0x2770ab={'title':_0x2f025a,'description':_0x4d29f0};if(localStorage['getItem'](_0x592530(0x168))===null){let _0x574694=[];_0x574694[_0x592530(0x161)](_0x2770ab),localStorage['setItem'](_0x592530(0x168),JSON['stringify'](_0x574694));}else{let _0x586d90=JSON[_0x592530(0x14b)](localStorage['getItem']('tasks'));_0x586d90[_0x592530(0x161)](_0x2770ab),localStorage['setItem']('tasks',JSON[_0x592530(0x144)](_0x586d90));}getTask(),formTask[_0x592530(0x15c)]();}function a0_0x21d1(){const _0x169178=['3113qzTbgV','6LMgOQG','825180WBHxHY','stener','\x27)\x22>delete','stringify','setItem','my-3\x22>\x0a\x09\x09\x09','<p>','30UhCXHd','log','6821171XSBITU','parse','tor','tn\x20btn-dan','querySelec','2435103WUBPol','innerHTML','</h4>\x0a\x09\x09\x09\x09','splice','\x0a\x09\x09<div\x20cl','descriptio','1858224bGZGiV','div>\x0a\x09\x09</d','afterbegin','length','preventDef','<div\x20class','3204436yALFia','reset','y\x22>\x0a\x09\x09\x09\x09<h','3UGvtQz','a\x20class=\x22b','empty','push','19596HYgywb','getItem','iv>','81818Medxdj','addEventLi','#tasks','tasks','2RqSRPM','Task(\x27','title','</a>\x0a\x09\x09\x09</','value'];a0_0x21d1=function(){return _0x169178;};return a0_0x21d1();}function inputEmpty(){const _0x177067=a0_0x4cd470;console[_0x177067(0x149)](_0x177067(0x160));}function getTask(){const _0x4f1936=a0_0x4cd470;let _0x4e588a=JSON['parse'](localStorage[_0x4f1936(0x163)]('tasks')),_0x5e7d9b=document[_0x4f1936(0x14e)+_0x4f1936(0x14c)](_0x4f1936(0x167));_0x5e7d9b[_0x4f1936(0x150)]='';for(let _0x554aa8=0x0;_0x554aa8<_0x4e588a[_0x4f1936(0x158)];_0x554aa8++){let _0x1ebb7a=_0x4e588a[_0x554aa8][_0x4f1936(0x13c)],_0x379f37=_0x4e588a[_0x554aa8][_0x4f1936(0x154)+'n'];listItem=_0x4f1936(0x153)+'ass=\x22card\x20'+_0x4f1936(0x146)+_0x4f1936(0x15a)+'=\x22card-bod'+_0x4f1936(0x15d)+'4>'+_0x1ebb7a+(_0x4f1936(0x151)+_0x4f1936(0x147))+_0x379f37+('</p>\x0a\x09\x09\x09\x09<'+_0x4f1936(0x15f)+_0x4f1936(0x14d)+'ger\x22\x20onCli'+'ck=\x22delete'+_0x4f1936(0x13b))+_0x1ebb7a+(_0x4f1936(0x143)+_0x4f1936(0x13d)+_0x4f1936(0x156)+_0x4f1936(0x164)),_0x5e7d9b['insertAdja'+'centHTML'](_0x4f1936(0x157),listItem);}}function deleteTask(_0x492151){const _0x264f48=a0_0x4cd470;let _0x25deb5=JSON[_0x264f48(0x14b)](localStorage[_0x264f48(0x163)](_0x264f48(0x168)));for(let _0x3a626b=0x0;_0x3a626b<_0x25deb5[_0x264f48(0x158)];_0x3a626b++){_0x25deb5[_0x3a626b][_0x264f48(0x13c)]==_0x492151&&_0x25deb5[_0x264f48(0x152)](_0x3a626b,0x1);}localStorage[_0x264f48(0x145)](_0x264f48(0x168),JSON[_0x264f48(0x144)](_0x25deb5)),getTask();}getTask();