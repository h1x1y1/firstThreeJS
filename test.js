// 1. 定义场景
var scene = new THREE.Scene();
console.log(scene);

// 2. 定义相机 夹角：75度，显示大小:窗口宽度/窗口高度，显示距离：最近1米，最远1000米
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000 );

// 3. 定义渲染器
var renderer = new THREE.WebGLRenderer({ antialias: true });  // { antialias: true }---抗锯齿
renderer.setClearColor("black"); // 每次设置渲染器，清空渲染器颜色，变为白色
// 4. 设置渲染器大小
renderer.setSize(window.innerWidth, window.innerHeight);
console.log(renderer);
// 5. 将渲染器添加到 body 上
document.body.appendChild(renderer.domElement);

// 加入事件监听器,窗口自适应
window.addEventListener("resize", () => {
    // 初始化相机
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    // 初始化渲染器
    renderer.setSize(window.innerWidth, window.innerHeight);
})

// 6. 定义几何体
// 宽度，高度，深度，后面不设置默认为 1
// width, height, depth, widthSegments, heightSegments, depthSegments
var geometry = new THREE.BoxGeometry(2, 2, 2);
// 7.2创建纹理贴纸材质要注释材质的定义
const texture = new THREE.TextureLoader().load("./imgs/wenLi_01.jpg")
var material = new THREE.MeshBasicMaterial({ map: texture });

// 7. 定义材质
// var material = new THREE.MeshBasicMaterial({ color: "red" });
// 8. 定义网格， 几何体和材质组成网格
var cube = new THREE.Mesh(geometry, material);
// 9. 将网格模型添加到场景中
scene.add(cube);
// 10. 改变相机位置
// 此时我们的相机在坐标原点,物体也在坐标原点,所以我们什么也看不到
camera.position.z = 5; // 向屏幕外移动 5 米



// 11. 定义渲染方法
function render() {
    // 当浏览器空闲，就不断调用传入的函数
    requestAnimationFrame(render);
    // 让物体动起来
    cube.rotation.x += 0.01; // 围绕 x 轴旋转
    cube.rotation.y += 0.01; // 围绕 y 轴旋转
    // 通过场景和相机，把最终显示的东西渲染出来，渲染到 renderer.domElement 上
    renderer.render(scene, camera);
  }
  render();

