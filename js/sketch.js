let cvs;// キャンバス
let player;//プレイヤースプライトlet 
let maru;//丸のスプライトを作る

let floor;//床
let he;
let gomi;
let huhu;
let ji;
let zimenn1 ;
let zimenn2lebel1 ;

let he1;
let he2;
let he3;
let he4;
let he5;
let he6;
let he7;
let he8;
let he9;
let he10;
let he11;
let he12;
let he13;
let he14;
let he15;
let he16;
let he17;
let he18;
let he19;
let he20;
let k1;
let k2;
let k3;
let k4;
let k5;
let k6;
let k7;
let k8;
let k9;
let k11;
let k12;
let k13;
let k14;
let k15;
let k16;
let k17;

let hantei;

let zunda;
let zunda1;
let zunda2;
let zunda3;

let itibanmigi;

let itibanmigikikaranibanme;


let sndCoin;// 1, 音源データ
let sndCoin1;// 1, 音源データ
let sndCoin2;// 1, 音源データ




 // 四角形の座標を計算

 

 
  


function setup(){
	// キャンバスの準備
	cvs = new Canvas(1500, 1000);
	world.gravity.x = 0; //x重力
	world.gravity.y = 6;// y重力
	frameRate(60);// フレームレート
	//スプライトを作る
	player = new Sprite(100,80);
	player.width = 32;//横幅
	player.height = 32;//高さ
	player.color ="yellowgreen"//色
	player.collider = "dynamic"//物理演算有効
	player.vel.x = 0//右に2の速度
	player.vel.y = 0
	player.image="./assets/reimu_good_01.png"
	//床
	floor = new Sprite(200,255);
	floor.width = 10;
	floor.height = 85;
	floor.color = "green";
	floor.collider = "static";//物理演算無効

	he = new Sprite(100,180);
	he.width = 70;
	he.height = 20;
	he.color = "green";
	he.collider = "static";//物理演算無効

	gomi = new Sprite(200,80);
	gomi.width = 10;
	gomi.height = 180;
	gomi.color = "green";
	gomi.collider = "static";//物理演算無効

	
	huhu = new Sprite(260,245);
	huhu.width = 10;
	huhu.height = 105;
	huhu.color = "green";
	huhu.collider = "static";//物理演算無効

	ji = new Sprite(260,65);
	ji.width = 10;
	ji.height = 180;
	ji.color = "green";
	ji.collider = "static";//物理演算無効

	zimenn1 = new Sprite(150,300);
	zimenn1.width = 2300;
	zimenn1.height = 10;
	zimenn1.color = "green";
	zimenn1.collider = "static";//物理演算無効

	zimenn2lebel1 = new Sprite(1400,300);
	zimenn2lebel1.width = 105;
	zimenn2lebel1.height = 10;
	zimenn2lebel1.color = "green";
	zimenn2lebel1.collider = "static";//物理演算無効

	he1 = new Sprite(350,75);
	he1.width = 10;
	he1.height = 180;
	he1.color = "green";
	he1.collider = "static";//物理演算無効

	he2 = new Sprite(350,250);
	he2.width = 10;
	he2.height = 90;
	he2.color = "green";
	he2.collider = "static";//物理演算無効
		//４本目
	he3 = new Sprite(450,230);
	he3.width = 10;
	he3.height = 150;
	he3.color = "green";
	he3.collider = "static";//物理演算無効

	he4 = new Sprite(450,50);
	he4.width = 10;
	he4.height = 110;
	he4.color = "green";
	he4.collider = "static";//物理演算無効

	//5本目
	he5 = new Sprite(550,240);
	he5.width = 10;
	he5.height = 120;
	he5.color = "green";
	he5.collider = "static";//物理演算無効

	he6 = new Sprite(550,50);
	he6.width = 10;
	he6.height = 150;
	he6.color = "green";
	he6.collider = "static";//物理演算無効

	//6本目
	he7 = new Sprite(650,250);
	he7.width = 10;
	he7.height = 100;
	he7.color = "green";
	he7.collider = "static";//物理演算無効

	he8 = new Sprite(650,50);
	he8.width = 10;
	he8.height = 200;
	he8.color = "green";
	he8.collider = "static";//物理演算無効

	//7本目
	he9 = new Sprite(750,250);
	he9.width = 10;
	he9.height = 100;
	he9.color = "green";
	he9.collider = "static";//物理演算無効

	he10 = new Sprite(750,50);
	he10.width = 10;
	he10.height = 200;
	he10.color = "green";
	he10.collider = "static";//物理演算無効

	//8本目
	he9 = new Sprite(850,240);
	he9.width = 10;
	he9.height = 120;
	he9.color = "green";
	he9.collider = "static";//物理演算無効

	he10 = new Sprite(850,50);
	he10.width = 10;
	he10.height = 170;
	he10.color = "green";
	he10.collider = "static";//物理演算無効

	//9本目
	he11 = new Sprite(950,230);
	he11.width = 10;
	he11.height = 130;
	he11.color = "green";
	he11.collider = "static";//物理演算無効

	he12 = new Sprite(950,50);
	he12.width = 10;
	he12.height = 130;
	he12.color = "green";
	he12.collider = "static";//物理演算無効

	//10本目
	he13 = new Sprite(1050,240);
	he13.width = 10;
	he13.height = 120;
	he13.color = "green";
	he13.collider = "static";//物理演算無効

	he14 = new Sprite(1050,50);
	he14.width = 10;
	he14.height = 160;
	he14.color = "green";
	he14.collider = "static";//物理演算無効

	//11本目
	he15 = new Sprite(1150,230);
	he15.width = 10;
	he15.height = 140;
	he15.color = "green";
	he15.collider = "static";//物理演算無効

	he16 = new Sprite(1150,50);
	he16.width = 10;
	he16.height = 130;
	he16.color = "green";
	he16.collider = "static";//物理演算無効

	//12本目
	he17 = new Sprite(1250,240);
	he17.width = 10;
	he17.height = 110;
	he17.color = "green";
	he17.collider = "static";//物理演算無効

	he18 = new Sprite(1250,50);
	he18.width = 10;
	he18.height = 160;
	he18.color = "green";
	he18.collider = "static";//物理演算無効

	//右端1本目
	he19 = new Sprite(200,350);
	he19.width = 110;
	he19.height = 10;
	he19.color = "green";
	he19.collider = "static";//物理演算無効

	he20 = new Sprite(1300,350);
	he20.width = 110;
	he20.height = 10;
	he20.color = "green";
	he20.collider = "static";//物理演算無効

	

	k2 = new Sprite(1100,350);
	k2.width = 110;
	k2.height = 10;
	k2.color = "green";
	k2.collider = "static";//物理演算無効

	//右端1本目
	k3 = new Sprite(600,350);
	k3.width = 110;
	k3.height = 10;
	k3.color = "green";
	k3.collider = "static";//物理演算無効

	

	k4 = new Sprite(1250,500);
	k4.width = 10;
	k4.height = 400;
	k4.color = "green";
	k4.collider = "static";//物理演算無効

	k5 = new Sprite(1250,800);
	k5.width = 10;
	k5.height = 100;
	k5.color = "green";
	k5.collider = "static";//物理演算無効

	k6 = new Sprite(1160,600);
	k6.width = 10;
	k6.height = 510;
	k6.color = "green";
	k6.collider = "static";//物理演算無効

	k7 = new Sprite(1050,600);
	k7.width = 10;
	k7.height = 510;
	k7.color = "green";
	k7.collider = "static";//物理演算無効

	k8 = new Sprite(850,510);
	k8.width = 10;
	k8.height = 450;
	k8.color = "green";
	k8.collider = "static";//物理演算無効

	k9 = new Sprite(850,800);
	k9.width = 10;
	k9.height = 30;
	k9.color = "green";
	k9.collider = "static";//物理演算無効

	k10 = new Sprite(650,600);
	k10.width = 10;
	k10.height = 500;
	k10.color = "green";
	k10.collider = "static";//物理演算無効

	k11 = new Sprite(550,600);
	k11.width = 10;
	k11.height = 500;
	k11.color = "green";
	k11.collider = "static";//物理演算無効

	k12 = new Sprite(350,500);
	k12.width = 10;
	k12.height = 470;
	k12.color = "green";
	k12.collider = "static";//物理演算無効

	k13 = new Sprite(350,800);
	k13.width = 10;
	k13.height = 30;
	k13.color = "green";
	k13.collider = "static";//物理演算無効

	k14 = new Sprite(250,650);
	k14.width = 10;
	k14.height = 600;
	k14.color = "green";
	k14.collider = "static";//物理演算無効

	k15 = new Sprite(150,650);
	k15.width = 10;
	k15.height = 600;
	k15.color = "green";
	k15.collider = "static";//物理演算無効


				//ゴールの形
	k16 = new Sprite(50,760);
	k16.width = 10;
	k16.height = 50;
	k16.color = "green";
	k16.collider = "static";//物理演算無効

	k17 = new Sprite(73,780);
	k17.width = 55;
	k17.height = 10;
	k17.color = "green";
	k17.collider = "static";//物理演算無効

	k18 = new Sprite(103,760);
	k18.width = 10;
	k18.height = 50;
	k18.color = "green";
	k18.collider = "static";//物理演算無効


	//一番右の上のギミック
	// k18 = new Sprite(1300,125);
	// k18.width = 90;
	// k18.height = 10;
	// k18.color = "green";
	// k18.collider = "static";//物理演算無効

	// k18 = new Sprite(1275,190);
	// k18.width = 40;
	// k18.height = 10;
	// k18.color = "green";
	// k18.collider = "static";//物理演算無効



	// k18 = new Sprite(1290,250);
	// k18.width = 10;
	// k18.height = 120;
	// k18.color = "green";
	// k18.collider = "static";//物理演算無効






	//ずんだもん
	zunda1 = new Sprite(1280,325);
	zunda1.width = 10;
	zunda1.height = 50;
	zunda1.color = "green";
	zunda1.collider = "static";//物理演算無効
	zunda1.image="./assets/ずんだもん.png"

	zunda = new Sprite(870,710);
	zunda.width = 10;
	zunda.height = 50;
	zunda.color = "green";
	zunda.collider = "static";//物理演算無効
	zunda.image="./assets/ずんだもん.png"

	//丸のギミックを作る
	//一番上の右の丸
	maru = new Sprite(1000,400);
	maru.diameter = 50;
	maru.width = 30;
	maru.height = 30;
	maru.color ="green"//色
	maru.collider = "static";//物理演算無効

	//一番上の真ん中の丸
	maru = new Sprite(930,400);
	maru.diameter = 50;
	maru.width = 30;
	maru.height = 30;
	maru.color ="green"//色
	maru.collider = "static";//物理演算無効
	// maru.collider = "dynamic"//物理演算有効
	// maru.vel.x = 0//右に2の速度
	// maru.vel.y = 0
	
	maru = new Sprite(930,470);
	maru.diameter = 50;
	maru.width = 30;
	maru.height = 30;
	maru.color ="green"//色
	maru.collider = "static";//物理演算無効

	maru = new Sprite(870,470);
	maru.diameter = 50;
	maru.width = 30;
	maru.height = 30;
	maru.color ="green"//色
	maru.collider = "static";//物理演算無効

	maru = new Sprite(990,470);
	maru.diameter = 50;
	maru.width = 30;
	maru.height = 30;
	maru.color ="green"//色
	maru.collider = "static";//物理演算無効

	maru = new Sprite(1020,540);
	maru.diameter = 50;
	maru.width = 30;
	maru.height = 30;
	maru.color ="green"//色
	maru.collider = "static";//物理演算無効

	maru = new Sprite(950,540);
	maru.diameter = 50;
	maru.width = 30;
	maru.height = 30;
	maru.color ="green"//色
	maru.collider = "static";//物理演算無効

	maru = new Sprite(900,540);
	maru.diameter = 50;
	maru.width = 30;
	maru.height = 30;
	maru.color ="green"//色
	maru.collider = "static";//物理演算無効

	//4段目
	maru = new Sprite(950,610);
	maru.diameter = 50;
	maru.width = 30;
	maru.height = 30;
	maru.color ="green"//色
	maru.collider = "static";//物理演算無効

	maru = new Sprite(910,610);
	maru.diameter = 50;
	maru.width = 30;
	maru.height = 30;
	maru.color ="green"//色
	maru.collider = "static";//物理演算無効

	maru = new Sprite(990,610);
	maru.diameter = 50;
	maru.width = 30;
	maru.height = 30;
	maru.color ="green"//色
	maru.collider = "static";//物理演算無効

	//5段目
	maru = new Sprite(990,680);
	maru.diameter = 50;
	maru.width = 30;
	maru.height = 30;
	maru.color ="green"//色
	maru.collider = "static";//物理演算無効

	maru = new Sprite(870,680);
	maru.diameter = 50;
	maru.width = 30;
	maru.height = 30;
	maru.color ="green"//色
	maru.collider = "static";//物理演算無効

	maru = new Sprite(900,680);
	maru.diameter = 50;
	maru.width = 30;
	maru.height = 30;
	maru.color ="green"//色
	maru.collider = "static";//物理演算無効

	//6段目
	maru = new Sprite(990,710);
	maru.diameter = 50;
	maru.width = 30;
	maru.height = 30;
	maru.color ="green"//色
	maru.collider = "static";//物理演算無効

	maru = new Sprite(990,740);
	maru.diameter = 50;
	maru.width = 30;
	maru.height = 30;
	maru.color ="green"//色
	maru.collider = "static";//物理演算無効

	maru = new Sprite(980,769);
	maru.diameter = 50;
	maru.width = 30;
	maru.height = 30;
	maru.color ="green"//色
	maru.collider = "static";//物理演算無効

	maru = new Sprite(957,790);
	maru.diameter = 50;
	maru.width = 30;
	maru.height = 30;
	maru.color ="green"//色
	maru.collider = "static";//物理演算無効

	maru = new Sprite(927,795);
	maru.diameter = 50;
	maru.width = 30;
	maru.height = 30;
	maru.color ="green"//色
	maru.collider = "static";//物理演算無効

	maru = new Sprite(897,797);
	maru.diameter = 50;
	maru.width = 30;
	maru.height = 30;
	maru.color ="green"//色
	maru.collider = "static";//物理演算無効

	maru = new Sprite(900,710);
	maru.diameter = 50;
	maru.width = 30;
	maru.height = 30;
	maru.color ="green"//色
	maru.collider = "static";//物理演算無効

	maru = new Sprite(888,737);
	maru.diameter = 50;
	maru.width = 25;
	maru.height = 25;
	maru.color ="green"//色
	maru.collider = "static";//物理演算無効

	maru = new Sprite(865,737);
	maru.diameter = 50;
	maru.width = 20;
	maru.height = 20;
	maru.color ="green"//色
	maru.collider = "static";//物理演算無効

	maru = new Sprite(865,737);
	maru.diameter = 50;
	maru.width = 20;
	maru.height = 20;
	maru.color ="green"//色
	maru.collider = "static";//物理演算無効

	maru = new Sprite(869,800);
	maru.diameter = 50;
	maru.width = 25;
	maru.height = 25;
	maru.color ="green"//色
	maru.collider = "static";//物理演算無効

//キャンバスの横と縦

hantei = new Sprite(0,0);
	hantei.width = 3000;
	hantei.height = 10;
	hantei.color = "green";
	hantei.collider = "static";//物理演算無効
	hantei.color = "yellowgreen"

	hantei = new Sprite(0,0);
	hantei.width = 10;
	hantei.height = 3000;
	hantei.color = "green";
	hantei.collider = "static";//物理演算無効
	hantei.color = "yellowgreen"

	hantei = new Sprite(1435,0);
	hantei.width = 10;
	hantei.height = 3000;
	hantei.color = "green";
	hantei.collider = "static";//物理演算無効
	hantei.color = "yellowgreen"

	hantei = new Sprite(0,810);
	hantei.width = 3000;
	hantei.height = 5;
	hantei.color = "green";
	hantei.collider = "static";//物理演算無効
	hantei.color = "yellowgreen"


	//一番右のギミック

	itibanmigi = new Sprite(1400,400);
	itibanmigi.width = 100;
	itibanmigi.height = 10;
	itibanmigi.color = "green";
	itibanmigi.collider = "static";//物理演算無効
	itibanmigi.color = "green"

	itibanmigi = new Sprite(1300,450);
	itibanmigi.width = 100;
	itibanmigi.height = 10;
	itibanmigi.color = "green";
	itibanmigi.collider = "static";//物理演算無効
	itibanmigi.color = "green"

	itibanmigi = new Sprite(1400,500);
	itibanmigi.width = 100;
	itibanmigi.height = 10;
	itibanmigi.color = "green";
	itibanmigi.collider = "static";//物理演算無効
	itibanmigi.color = "green"

	itibanmigi = new Sprite(1300,550);
	itibanmigi.width = 100;
	itibanmigi.height = 10;
	itibanmigi.color = "green";
	itibanmigi.collider = "static";//物理演算無効
	itibanmigi.color = "green"

	itibanmigi = new Sprite(1400,600);
	itibanmigi.width = 100;
	itibanmigi.height = 10;
	itibanmigi.color = "green";
	itibanmigi.collider = "static";//物理演算無効
	itibanmigi.color = "green"

	itibanmigi = new Sprite(1300,650);
	itibanmigi.width = 100;
	itibanmigi.height = 10;
	itibanmigi.color = "green";
	itibanmigi.collider = "static";//物理演算無効
	itibanmigi.color = "green"

	itibanmigi = new Sprite(1400,700);
	itibanmigi.width = 100;
	itibanmigi.height = 10;
	itibanmigi.color = "green";
	itibanmigi.collider = "static";//物理演算無効
	itibanmigi.color = "green"

	itibanmigi = new Sprite(1295,750);
	itibanmigi.width = 100;
	itibanmigi.height = 10;
	itibanmigi.color = "green";
	itibanmigi.collider = "static";//物理演算無効
	itibanmigi.color = "green"

	itibanmigi = new Sprite(1350,725);
	itibanmigi.width = 10;
	itibanmigi.height = 60;
	itibanmigi.color = "green";
	itibanmigi.collider = "static";//物理演算無効
	itibanmigi.color = "green"





	floor = new Sprite(810,700);
	floor.y = 500;
	floor.w = 90;
	floor.h = 5;
	floor.collider = 'static';
	floor.rotation = -35;

	floor = new Sprite(690,700);
	floor.y = 500;
	floor.w = 90;
	floor.h = 5;
	floor.collider = 'static';
	floor.rotation = 35;

	floor = new Sprite(690,750);
	floor.y = 550;
	floor.w = 110;
	floor.h = 5;
	floor.collider = 'static';
	floor.rotation = 35;

	floor = new Sprite(820,750);
	floor.y = 550;
	floor.w = 70;
	floor.h = 5;
	floor.collider = 'static';
	floor.rotation = -40;

	floor = new Sprite(800,750);
	floor.y = 600;
	floor.w = 120;
	floor.h = 5;
	floor.collider = 'static';
	floor.rotation = -40;

	floor = new Sprite(800,750);
	floor.y = 600;
	floor.w = 120;
	floor.h = 5;
	floor.collider = 'static';
	floor.rotation = -40;

	floor = new Sprite(680,750);
	floor.y = 600;
	floor.w = 80;
	floor.h = 5;
	floor.collider = 'static';
	floor.rotation = 40;

	floor = new Sprite(680,700);
	floor.y = 660;
	floor.w = 70;
	floor.h = 5;
	floor.collider = 'static';
	floor.rotation = 40;

	floor = new Sprite(780,700);
	floor.y = 680;
	floor.w = 190;
	floor.h = 5;
	floor.collider = 'static';
	floor.rotation = -40;

	floor = new Sprite(680,700);
	floor.y = 780;
	floor.w = 80;
	floor.h = 5;
	floor.collider = 'static';
	floor.rotation = 40;

	floor = new Sprite(680,700);
	floor.y = 400;
	floor.w = 80;
	floor.h = 5;
	floor.collider = 'static';
	floor.rotation = -40;

	floor = new Sprite(780,700);
	floor.y = 400;
	floor.w = 180;
	floor.h = 5;
	floor.collider = 'static';
	floor.rotation = -40;

	floor = new Sprite(750,700);
	floor.y = 345;
	floor.w = 120;
	floor.h = 5;
	floor.collider = 'static';
	floor.rotation = 40;













	sprite = new Sprite(500,400)
	sprite.rotation = 45;
	sprite.collider = 'static';

	sprite = new Sprite(430,500)
	sprite.rotation = 45;
	sprite.collider = 'static';

	sprite = new Sprite(500,600)
	sprite.rotation = 45;
	sprite.collider = 'static';
	
	sprite = new Sprite(430,700)
	sprite.rotation = 45;
	sprite.collider = 'static';

	sprite = new Sprite(390,600)
	sprite.rotation = 45;
	sprite.width = 40;
	sprite.height = 40;
	sprite.collider = 'static';
	sprite.image="./assets/marisa_bad_01.png"




	sprite = new Sprite(285,500);
	sprite.width = 20;
	sprite.height = 20;
	sprite.collider = 'static';
	sprite.image="./assets/marisa_bad_02.png"

	sprite = new Sprite(330,640);
	sprite.width = 20;
	sprite.height = 20;
	sprite.collider = 'static';
	sprite.image="./assets/marisa_bad_04.png"









//一番右から一個左
sprite= new Sprite(1190,640);
	sprite.width = 20;
	sprite.height = 20;
	sprite.collider = 'static';
	 sprite.image="./assets/marisa_good_02.png"

	 sprite= new Sprite(1220,500);
	sprite.width = 20;
	sprite.height = 20;
	sprite.collider = 'static';
	  sprite.image="./assets/marisa_good_03.png"










	
	sprite = new Sprite(100,500);
	sprite.width = 40;
	sprite.height = 40;
	sprite.collider = 'static';

	sprite = new Sprite(50,400);
	sprite.width = 40;
	sprite.height = 40;
	sprite.collider = 'static';

	sprite = new Sprite(50,600);
	sprite.width = 40;
	sprite.height = 40;
	sprite.collider = 'static';

	zunda2 = new Sprite(107,700);
	zunda2.width = 20;
	zunda2.height = 20;
	zunda2.collider = 'static';
	zunda2.image="./assets/ずんだもん.png"
	
	zunda = new Sprite(50,700);
	zunda.width = 20;
	zunda.height = 20;
	zunda.collider = 'static';
	zunda.image="./assets/ずんだもん.png"


	// sprite = new Sprite(20,700);
	// sprite.width = 10;
	// sprite.height = 10;
	// sprite.collider = 'static';
	// sprite.image="./assets/fb_coin.png"

	// sprite = new Sprite(135,700);
	// sprite.width = 10;
	// sprite.height = 10;
	// sprite.collider = 'static';
	// sprite.image="./assets/fb_coin.png"


	

	
	
	

}

function preload(){
	// 2, 音源ファイルのロード
	sndCoin = loadSound("./assets/3.wav");
	sndCoin1 = loadSound("./assets/76.wav");
	sndCoin1 = loadSound("./assets/うえーん.wav");

}


function draw(){
	background("skyblue");// 背景色




	//キーボードの入力でジャンプ
	if(kb.presses("up")){
		// player.vel.x = 5
		player.vel.y = -5;
	}
	if(kb.presses("right")){
		player.vel.x = 2;
		player.vel.y = 0;
	}
	if(kb.presses("left")){
		player.vel.x = -2;
		player.vel.y = 0;
	}
	if(kb.presses("down")){
		player.vel.x = 0;
		player.vel.y = 2;
	}



	

	player.collides(zunda, (a, b)=>{
		b.remove();// 敵を消すdd
		sndCoin.play();// 3, 音源データの再生
	});

	player.collides(zunda1, (a, b)=>{
		b.remove();// 敵を消すdd
		sndCoin2.play();// 3, 音源データの再生
	});

	player.collides(zunda2, (a, b)=>{
		b.remove();// 敵を消すdd
		sndCoin1.play();// 3, 音源データの再生
	});
	
	// 傾けた状態で棒を描画

	
}




// function draw() {
// 	background(220); // 背景色を指定
// 	// 円を描画
// 	fill(0, 0, 255); // 円の塗りつぶし色を指定 (青色)
// 	ellipse(200, 200, 100, 100); // 円の位置とサイズを指定
//   }w