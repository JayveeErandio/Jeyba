/* Object's Name: "cabinet" */
/* Property of Jayvee Erandio */

var cabinet = new THREE.Group();
var cabinetMaterial1 = new THREE.MeshBasicMaterial({ 
	map: new THREE.TextureLoader().load("https://raw.githubusercontent.com/iondrimba/wood-toy/main/src/assets/roughwood/basecolor.jpg" )
});
var cabinetMaterial2 = new THREE.MeshBasicMaterial({ 
	map: new THREE.TextureLoader().load("https://raw.githubusercontent.com/marbleit/threejs-chair/master/chair/textures/carpet.jpg" )
});
var cabinetMaterial3 = new THREE.MeshBasicMaterial({ 
	color: "#777777"
});

var cabinetMain = new THREE.Mesh(
	new THREE.BoxGeometry(1.5, 1.2, 0.5), 
	cabinetMaterial1
);
cabinetMain.position.set(0, 0.1, 0);

var cabinetFoot1 = new THREE.Mesh(
	new THREE.BoxGeometry(0.1, 0.2, 0.5),
	cabinetMaterial1
);
cabinetFoot1.position.set(-0.7, -0.6, 0);

var cabinetFoot2 = new THREE.Mesh(
	new THREE.BoxGeometry(0.1, 0.2, 0.5),
	cabinetMaterial1
);
cabinetFoot2.position.set(0.7, -0.6, 0);

var cabinetDrawerFB = new THREE.BoxGeometry(0.6, 0.25, 0.05);
var cabinetDrawerLR = new THREE.BoxGeometry(0.05, 0.25, 0.4);
var cabinetDrawerD = new THREE.BoxGeometry(0.5, 0.05, 0.4);
var cabinetKnob = new THREE.SphereGeometry(0.05, 10, 10);

var cabinetDrawer1F = new THREE.Mesh(
	cabinetDrawerFB,
	cabinetMaterial2
);
cabinetDrawer1F.position.z = 0.225;
var cabinetDrawer1B = new THREE.Mesh(
	cabinetDrawerFB,
	cabinetMaterial2
);
cabinetDrawer1B.position.z = -0.225;
var cabinetDrawer1L = new THREE.Mesh(
	cabinetDrawerLR, 
	cabinetMaterial2
);
cabinetDrawer1L.position.x = -0.275;
var cabinetDrawer1R = new THREE.Mesh(
	cabinetDrawerLR,
	cabinetMaterial2
);
cabinetDrawer1R.position.x = 0.275;
var cabinetDrawer1D = new THREE.Mesh(
	cabinetDrawerD,
	cabinetMaterial2
);
cabinetDrawer1D.position.y = -0.125;
var cabinetKnob1 = new THREE.Mesh(
	cabinetKnob,
	cabinetMaterial3
);
cabinetKnob1.position.z = 0.3;
	
var cabinetDrawer1 = new THREE.Group();
cabinetDrawer1.add(
	cabinetDrawer1F,
	cabinetDrawer1B,
	cabinetDrawer1L,
	cabinetDrawer1R,
	cabinetDrawer1D,
	cabinetKnob1,
);
cabinetDrawer1.position.set(-0.375, 0.45, 0.05);

var cabinetDrawer2F = new THREE.Mesh(
	cabinetDrawerFB,
	cabinetMaterial2
);
cabinetDrawer2F.position.z = 0.225;
var cabinetDrawer2B = new THREE.Mesh(
	cabinetDrawerFB,
	cabinetMaterial2
);
cabinetDrawer2B.position.z = -0.225;
var cabinetDrawer2L = new THREE.Mesh(
	cabinetDrawerLR, 
	cabinetMaterial2
);
cabinetDrawer2L.position.x = -0.275;
var cabinetDrawer2R = new THREE.Mesh(
	cabinetDrawerLR,
	cabinetMaterial2
);
cabinetDrawer2R.position.x = 0.275;
var cabinetDrawer2D = new THREE.Mesh(
	cabinetDrawerD,
	cabinetMaterial2
);
cabinetDrawer2D.position.y = -0.125;
var cabinetKnob2 = new THREE.Mesh(
	cabinetKnob,
	cabinetMaterial3
);
cabinetKnob2.position.z = 0.3;

var cabinetDrawer2 = new THREE.Group();
cabinetDrawer2.add(
	cabinetDrawer2F,
	cabinetDrawer2B,
	cabinetDrawer2L,
	cabinetDrawer2R,
	cabinetDrawer2D,
	cabinetKnob2,
);
cabinetDrawer2.position.set(0.375, 0.45, 0.05);

var cabinetDrawer3F = new THREE.Mesh(
	new THREE.BoxGeometry(1.35, 0.25, 0.05),
	cabinetMaterial2
);
cabinetDrawer3F.position.z = 0.225;
var cabinetDrawer3L = new THREE.Mesh(
	cabinetDrawerLR,
	cabinetMaterial2
);
cabinetDrawer3L.position.x = -0.6;
var cabinetDrawer3R = new THREE.Mesh(
	cabinetDrawerLR,
	cabinetMaterial2
);
cabinetDrawer3R.position.x = 0.6;
var cabinetDrawer3D = new THREE.Mesh(
	new THREE.BoxGeometry(1.25, 0.05, 0.4),
	cabinetMaterial2
);
cabinetDrawer3D.position.y = -0.125;
var cabinetKnob3 = new THREE.Mesh(
cabinetKnob,
cabinetMaterial3
);
cabinetKnob3.position.z = 0.3;

var cabinetDrawer3 = new THREE.Group();
cabinetDrawer3.add(
	cabinetDrawer3F,
	cabinetDrawer3L,
	cabinetDrawer3R,
	cabinetDrawer3D,
	cabinetKnob3,
);
cabinetDrawer3.position.set(0, 0.1, 0.05);

var cabinetDrawer4F = new THREE.Mesh(
	new THREE.BoxGeometry(1.35, 0.25, 0.05),
	cabinetMaterial2
);
cabinetDrawer4F.position.z = 0.225;
var cabinetDrawer4L = new THREE.Mesh(
	cabinetDrawerLR,
	cabinetMaterial2
);
cabinetDrawer4L.position.x = -0.6;
var cabinetDrawer4R = new THREE.Mesh(
	cabinetDrawerLR,
	cabinetMaterial2
);
cabinetDrawer4R.position.x = 0.6;
var cabinetDrawer4D = new THREE.Mesh(
	new THREE.BoxGeometry(1.25, 0.05, 0.4),
	cabinetMaterial2
);
cabinetDrawer4D.position.y = -0.125;
var cabinetKnob4 = new THREE.Mesh(
	cabinetKnob,
	cabinetMaterial3
);
cabinetKnob4.position.z = 0.3;

var cabinetDrawer4 = new THREE.Group();
cabinetDrawer4.add(
	cabinetDrawer4F,
	cabinetDrawer4L,
	cabinetDrawer4R,
	cabinetDrawer4D,
	cabinetKnob4,
);
cabinetDrawer4.position.set(0, -0.25, 0.05);

cabinet.add(
	cabinetMain,
	cabinetFoot1,
	cabinetFoot2,
	cabinetDrawer1,
	cabinetDrawer2,
	cabinetDrawer3,
	cabinetDrawer4,
);