(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t){},105:function(e,t){},138:function(e,t){},139:function(e,t){},185:function(e,t){},186:function(e,t){},187:function(e,t){},188:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n.n(a),i=n(88),o=n.n(i),s=(n(96),n(20)),c=n.n(s),u=n(36),l=n(14),d=n(15),h=n(17),m=n(16),p=n(18),g=n(6),f=(n(99),n(89)),b=n.n(f),_=n(90),v=n(12),k=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={currentStream:null},n.startStream=n.startStream.bind(Object(g.a)(Object(g.a)(n))),n.stopStream=n.stopStream.bind(Object(g.a)(Object(g.a)(n))),n.currentStream=null,n.snapShotCanvas=document.createElement("canvas"),n.IMAGE_WIDTH=300,n.IMAGE_HEIGHT=300,n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"startStream",value:function(){var e=this,t=document.querySelector("video");navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"environment"}}).then(function(n){return e.currentStream=n,t.srcObject=n,n}).catch(function(e){console.log(e)})}},{key:"stopStream",value:function(){if(this.currentStream){var e=document.querySelector("video");this.snapShotCanvas.height=e.videoWidth,this.snapShotCanvas.width=e.videoHeight,this.snapShotCanvas.height=this.IMAGE_HEIGHT,this.snapShotCanvas.width=this.IMAGE_WIDTH,this.snapShotCanvas.getContext("2d").drawImage(e,0,0,this.snapShotCanvas.width,this.snapShotCanvas.height);var t=this.snapShotCanvas.toDataURL("image/png");this.currentStream.getTracks().forEach(function(e){e.stop()}),this.currentStream=null,this.props.getImage(t)}}},{key:"render",value:function(){var e=this.props.image,t=this.props.camera;return t?this.startStream():this.stopStream(),r.a.createElement("div",{className:"doggo-image-container"},r.a.createElement("video",{alt:"doggo",className:t?"doggo-image":"hidden",autoPlay:!0,playsInline:!0}),r.a.createElement("img",{src:e,alt:"doggo",className:"doggo-image"}))}}]),t}(a.Component),S=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"handleImage",value:function(e){this.props.getImage(URL.createObjectURL(e.target.files[0]))}},{key:"render",value:function(){var e=this,t=this.props.camera,n=this.props.modelLoaded;return r.a.createElement("div",{className:"input-container"},"standalone"in window.navigator&&window.navigator.standalone?r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"file",id:"file-input",accept:"image/*",capture:"camera",className:"input-buttons",onChange:function(t){return e.handleImage(t)}}),r.a.createElement("label",{type:"button",htmlFor:"file-input",className:"input-buttons",onClick:function(){return""},onTouchStart:function(){return""}},"Upload File")):r.a.createElement("button",{onClick:function(){return t?e.props.updateCamera(!1):e.props.updateCamera(!0)},className:"input-button",onTouchStart:function(){return""}},"Camera"),r.a.createElement("button",{onClick:function(){return e.props.predict()},className:"input-button",onTouchStart:function(){return""},disabled:!n},"Predict"))}}]),t}(a.Component),y=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"createTable",value:function(){}},{key:"render",value:function(){var e=this.props.prediction;return e?r.a.createElement("div",{className:e?"card":"hidden"},r.a.createElement("table",null,r.a.createElement("tbody",null,e.map(function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",null,r.a.createElement("th",{className:"pred-object"},e.className),r.a.createElement("th",{className:"pred-percent"},e.probability)))})))):""}}]),t}(a.Component),w=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={image:b.a,camera:!1,modelLoaded:!1,prediction:null},n.updateCamera=n.updateCamera.bind(Object(g.a)(Object(g.a)(n))),n.getImage=n.getImage.bind(Object(g.a)(Object(g.a)(n))),n.predict=n.predict.bind(Object(g.a)(Object(g.a)(n))),n.loadModel=n.loadModel.bind(Object(g.a)(Object(g.a)(n))),n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.loadModel()}},{key:"updateCamera",value:function(e){this.setState({camera:e})}},{key:"loadModel",value:function(){var e=Object(u.a)(c.a.mark(function e(){var t,n=this;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.outputClasses=_,e.next=3,v.b("https://s3-us-west-1.amazonaws.com/wsbuck/tfjs/model.json");case 3:return this.model=e.sent,this.setState({modelLoaded:!0}),t=v.d(function(){return n.model.predict(v.e([1,224,224,3]))}),e.next=8,t.data();case 8:t.dispose();case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getImage",value:function(e){this.setState({image:e})}},{key:"preprocessImage",value:function(e){var t=v.a.fromPixels(e).resizeNearestNeighbor([224,224]).toFloat(),n=v.c(127.5);return t.sub(n).div(n).expandDims()}},{key:"getTopKClasses",value:function(){var e=Object(u.a)(c.a.mark(function e(t,n){var a,r,i,o,s,u,l,d;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.data();case 2:for(a=e.sent,r=[],i=0;i<a.length;i++)r.push({value:a[i],index:i});for(r.sort(function(e,t){return t.value-e.value}),o=new Float32Array(n),s=new Int32Array(n),u=0;u<n;u++)o[u]=r[u].value,s[u]=r[u].index;for(l=[],d=0;d<s.length;d++)l.push({className:this.outputClasses[s[d]],probability:o[d]});return e.abrupt("return",l);case 12:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()},{key:"predict",value:function(){var e=Object(u.a)(c.a.mark(function e(){var t,n,a,r=this;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.querySelector("img"),n=v.d(function(){var e=v.a.fromPixels(t).resizeNearestNeighbor([224,224]).toFloat(),n=v.c(127.5),a=e.sub(n).div(n).reshape([1,224,224,3]);return r.model.predict(a)}),e.next=4,this.getTopKClasses(n,3);case 4:a=e.sent,this.setState({prediction:a}),console.log(a);case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(k,{image:this.state.image,camera:this.state.camera,getImage:this.getImage}),r.a.createElement(y,{prediction:this.state.prediction}),r.a.createElement(S,{updateCamera:this.updateCamera,camera:this.state.camera,predict:this.predict,modelLoaded:this.state.modelLoaded,getImage:this.getImage}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},89:function(e,t,n){e.exports=n.p+"static/media/dog.1afd5e79.jpg"},90:function(e){e.exports={0:"n02085620-Chihuahua",1:"n02085782-Japanese_spaniel",2:"n02085936-Maltese_dog",3:"n02086079-Pekinese",4:"n02086240-Shih-Tzu",5:"n02086646-Blenheim_spaniel",6:"n02086910-papillon",7:"n02087046-toy_terrier",8:"n02087394-Rhodesian_ridgeback",9:"n02088094-Afghan_hound",10:"n02088238-basset",11:"n02088364-beagle",12:"n02088466-bloodhound",13:"n02088632-bluetick",14:"n02089078-black-and-tan_coonhound",15:"n02089867-Walker_hound",16:"n02089973-English_foxhound",17:"n02090379-redbone",18:"n02090622-borzoi",19:"n02090721-Irish_wolfhound",20:"n02091032-Italian_greyhound",21:"n02091134-whippet",22:"n02091244-Ibizan_hound",23:"n02091467-Norwegian_elkhound",24:"n02091635-otterhound",25:"n02091831-Saluki",26:"n02092002-Scottish_deerhound",27:"n02092339-Weimaraner",28:"n02093256-Staffordshire_bullterrier",29:"n02093428-American_Staffordshire_terrier",30:"n02093647-Bedlington_terrier",31:"n02093754-Border_terrier",32:"n02093859-Kerry_blue_terrier",33:"n02093991-Irish_terrier",34:"n02094114-Norfolk_terrier",35:"n02094258-Norwich_terrier",36:"n02094433-Yorkshire_terrier",37:"n02095314-wire-haired_fox_terrier",38:"n02095570-Lakeland_terrier",39:"n02095889-Sealyham_terrier",40:"n02096051-Airedale",41:"n02096177-cairn",42:"n02096294-Australian_terrier",43:"n02096437-Dandie_Dinmont",44:"n02096585-Boston_bull",45:"n02097047-miniature_schnauzer",46:"n02097130-giant_schnauzer",47:"n02097209-standard_schnauzer",48:"n02097298-Scotch_terrier",49:"n02097474-Tibetan_terrier",50:"n02097658-silky_terrier",51:"n02098105-soft-coated_wheaten_terrier",52:"n02098286-West_Highland_white_terrier",53:"n02098413-Lhasa",54:"n02099267-flat-coated_retriever",55:"n02099429-curly-coated_retriever",56:"n02099601-golden_retriever",57:"n02099712-Labrador_retriever",58:"n02099849-Chesapeake_Bay_retriever",59:"n02100236-German_short-haired_pointer",60:"n02100583-vizsla",61:"n02100735-English_setter",62:"n02100877-Irish_setter",63:"n02101006-Gordon_setter",64:"n02101388-Brittany_spaniel",65:"n02101556-clumber",66:"n02102040-English_springer",67:"n02102177-Welsh_springer_spaniel",68:"n02102318-cocker_spaniel",69:"n02102480-Sussex_spaniel",70:"n02102973-Irish_water_spaniel",71:"n02104029-kuvasz",72:"n02104365-schipperke",73:"n02105056-groenendael",74:"n02105162-malinois",75:"n02105251-briard",76:"n02105412-kelpie",77:"n02105505-komondor",78:"n02105641-Old_English_sheepdog",79:"n02105855-Shetland_sheepdog",80:"n02106030-collie",81:"n02106166-Border_collie",82:"n02106382-Bouvier_des_Flandres",83:"n02106550-Rottweiler",84:"n02106662-German_shepherd",85:"n02107142-Doberman",86:"n02107312-miniature_pinscher",87:"n02107574-Greater_Swiss_Mountain_dog",88:"n02107683-Bernese_mountain_dog",89:"n02107908-Appenzeller",90:"n02108000-EntleBucher",91:"n02108089-boxer",92:"n02108422-bull_mastiff",93:"n02108551-Tibetan_mastiff",94:"n02108915-French_bulldog",95:"n02109047-Great_Dane",96:"n02109525-Saint_Bernard",97:"n02109961-Eskimo_dog",98:"n02110063-malamute",99:"n02110185-Siberian_husky",100:"n02110627-affenpinscher",101:"n02110806-basenji",102:"n02110958-pug",103:"n02111129-Leonberg",104:"n02111277-Newfoundland",105:"n02111500-Great_Pyrenees",106:"n02111889-Samoyed",107:"n02112018-Pomeranian",108:"n02112137-chow",109:"n02112350-keeshond",110:"n02112706-Brabancon_griffon",111:"n02113023-Pembroke",112:"n02113186-Cardigan",113:"n02113624-toy_poodle",114:"n02113712-miniature_poodle",115:"n02113799-standard_poodle",116:"n02113978-Mexican_hairless",117:"n02115641-dingo",118:"n02115913-dhole",119:"n02116738-African_hunting_dog"}},91:function(e,t,n){e.exports=n(188)},96:function(e,t,n){},99:function(e,t,n){}},[[91,1,2]]]);
//# sourceMappingURL=main.12d9be69.chunk.js.map