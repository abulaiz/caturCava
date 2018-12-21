var successPath = [
	{'pihak' : "enemy", 'posisi' : [6,7,8]},
	{'pihak' : "semua", 'posisi' : [0,4,8]},
	{'pihak' : "semua", 'posisi' : [2,4,6]},
	{'pihak' : "semua", 'posisi' : [0,3,6]},
	{'pihak' : "semua", 'posisi' : [1,4,7]},
	{'pihak' : "semua", 'posisi' : [2,5,8]},
	{'pihak' : "semua", 'posisi' : [3,4,5]},
	{'pihak' : "player", 'posisi' : [0,1,2]},
];

var kotaks = document.getElementsByClassName('kotak');
var path = [
	[0,1,2, 1,1,2, 2,2,2],
	[1,0,1, 2,1,2, 2,2,2],
	[2,1,0, 2,1,1, 2,2,2],

	[1,1,2, 0,1,2, 1,1,2],
	[1,1,1, 1,0,1, 1,1,1],
	[2,1,1, 2,1,0, 2,1,1],

	[2,2,2, 1,1,2, 0,1,2],
	[2,2,2, 2,1,2, 1,0,1],
	[2,2,2, 2,1,1, 2,1,0],
];

var itemTerpilih;
var sugestedBox = [];