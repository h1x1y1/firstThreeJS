~function () {
  // 1.创建场景和摄像机
    const scene = new THREE.Scene()
  // 2.创建摄像机--透视摄像机--近小远大
    // const camera = new THREE.PerspectiveCamera("视角", "投影窗口的宽长比", 
    // "表示距离摄像机多远的位置开始渲染", "表示距离摄像机多远的位置截止渲染 1000");
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  // 3.创建 ThreeJs 渲染器
    const renderer = new THREE.WebGLRenderer();
    // 设置渲染器场景的大小
    renderer.setSize(window.innerWidth,window.innerHeight);

    document.body.appendChild(renderer.domElement);
}()