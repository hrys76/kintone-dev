(function(){
	"use strict";
	kintone.events.on('app.record.index.show',function(event){

	//増殖バクを防ぐ
	if(document.getElementById('my_index_button')!==null){
		return;
	}

	//ボタン
	var myIndexButton = document.createElement('button');
	myIndexButton.id = 'my_index_button';
	myIndexButton.innerHTML = '一覧のボタン';
	
	//　ボタンクリック時の処理
	myIndexButton.onclick = function(){
		var myHeaderSpace = kintone.app.getHeaderSpaceElement();
		//文字列要素
		var myListHeaderDiv = document.createElement('div');
		myListHeaderDiv.style.width = '100%';
		myListHeaderDiv.style.height = '35px';
		myListHeaderDiv.style.textAlign = 'center';
		myListHeaderDiv.style.fontSize = '30px';
		myListHeaderDiv.style.fontWeight = 'bold';
		myListHeaderDiv.style.backgroundColor = '#ffd78c';
		myListHeaderDiv.innerHTML = '押された';
		
		//メニュー下側の空白部分に文字列を表示
		myHeaderSpace.innerHTML = null;
		myHeaderSpace.appendChild(myListHeaderDiv);
	};

	//メニューの左側の空白部分にボタンを配置
	kintone.app.getHeaderMenuSpaceElement().appendChild(myIndexButton);
	});

	// レコード詳細画面が表示された時のイベント
	kintone.events.on('app.record.detail.show',function(event){
		var myIndexButton = document.createElement('button');
		myIndexButton.id = 'my_index_button';
		myIndexButton.innerHTML = 'メニュー部ボタン';
		myIndexButton.onclick = function(){
			window.alert('メニュー部');
		}
		kintone.app.record.getHeaderMenuSpaceElement().appendChild(myIndexButton);
	
		//任意のスペースフィールドにボタンを配置
		var mySpaceFieldButton = document.createElement('button');
		mySpaceFieldButton.id = 'my_space_field_button';
		mySpaceFieldButton.innerHTML = 'スペースボタン';
		mySpaceFieldButton.onclick = function(){
			window.alert('スペースフィールド');
		}
		kintone.app.record.getSpaceElement('my_space_field').appendChild(mySpaceFieldButton);
	});

	kintone.events.on('app.record.detail.show',function(event){
		var myHeaderMenuSpace = kintone.app.record.getHeaderMenuSpaceElement();
		var startButton = document.createElement('button');
		startButton.id = 'jaken_start_button';
		startButton.innerHTML ='ジャンケンキングに挑戦！！';
		myHeaderMenuSpace.innerHTML = '';
		
		var jankenItems = new Array("グー","チョキ","パー");
		//ジャンケンキングに挑戦
		startButton.onclick = function(){
			//ジャンケンスペース
			var jankenSpace = kintone.app.record.getSpaceElement('my_space_field');
			jankenSpace.innerHTML = '最初はグー！！<br />ジャンケン・・・<br />';
			jankenSpace.style.width = '400px';
			jankenSpace.parentNode.style.width = '400px';
			
			for(var i = 0; i< jankenItems.length; i++){
				var tmpButton = document.createElement('button');
				tmpButton.id = 'j_button' + i;
				tmpButton.innerHTML = jankenItems[i];
				tmpButton.onclick = function(){
					var you = this.id.replace('j_button','');
					var com = (you + 2) % jankenItems.length;
					jankenSpace.innerHTML = "あなた：" + jankenItems[you] + "<br />ジャンケンキング:" + jankenItems[com] + "<br />もう一度やりますか？";
				};
				jankenSpace.appendChild(tmpButton);
			}
		};
		myHeaderMenuSpace.appendChild(startButton);
	});
})();
