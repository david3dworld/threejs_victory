import * as THREE from '../../build/three.module.js';
import { OrbitControls } from '../../examples/jsm/controls/OrbitControls.js';

class App{
     constructor() {
            const divContainer = document.querySelector("#webgl-container");
            this._divContainer = divContainer;

            const renderer = new THREE.WebGLRenderer({ antialias:true });
            renderer.setPixelRatio(window.devicePixelRatio);
            divContainer.appendChild(renderer.domElement);
            this._renderer = renderer;

            const scene = new THREE.Scene();
            this._scene = scene;

            this._setupCamera();
            this._setupLight();
            this._setupModel();
            this._setupControls();

            window.onresize = this.resize.bind(this);
            this.resize();

            requestAnimationFrame(this.render.bind(this));
        }

        _setupControls() {
            new OrbitControls(this._camera, this._divContainer);
        }

        _setupCamera() {
            const width = this._divContainer.clientWidth;
            const height = this._divContainer.clientHeight;
            const camera = new THREE.PerspectiveCamera(
                75,
                width / height,
                0.3,
                100
            );
            camera.position.z = 2;
            this._camera = camera;
        }

        _setupLight() {
            const color = 0xffffff;
            const intensity = 1;
            const light = new THREE.DirectionalLight(color, intensity);
            light.position.set(-1, 2, 4);
            this._scene.add(light);
        }
/*************************************************************************************************** 
Circle shape Box geometry parameter(BoxGeometry(width?: number, height?: number, depth?: number, widthSegments?: number, heightSegments?: number, depthSegments?: number): THREE.BoxBufferGeometry) 
***************************************************************************************************/
        // _setupModel() {
        //     const geometry = new THREE.BoxGeometry(1, 1, 1, 2, 2, 2);
        //     const fillMaterial = new THREE.MeshPhongMaterial({color: 0x515151});            
        //     const cube = new THREE.Mesh(geometry, fillMaterial);

        //     const lineMaterial = new THREE.LineBasicMaterial({color: 0xffff00});
        //     const line = new THREE.LineSegments(
        //         new THREE.WireframeGeometry(geometry), lineMaterial);
            
        //     const group = new THREE.Group()
        //     group.add(cube);
        //     group.add(line);

        //     this._scene.add(group);
        //     this._cube = group;            
        // }
/*************************************************************************************************** 
Circle shape circle geometry parameter(CircleGeometry(radius?: number, segments?: number, thetaStart?: number, thetaLength?: number): THREE.CircleBufferGeometry) 
***************************************************************************************************/
        // _setupModel() {
        //     const geometry = new THREE.CircleGeometry(1, 32, Math.PI/2, Math.PI);
        //     const fillMaterial = new THREE.MeshPhongMaterial({color: 0x515151});            
        //     const cube = new THREE.Mesh(geometry, fillMaterial);

        //     const lineMaterial = new THREE.LineBasicMaterial({color: 0xffff00});
        //     const line = new THREE.LineSegments(
        //         new THREE.WireframeGeometry(geometry), lineMaterial);
            
        //     const group = new THREE.Group()
        //     group.add(cube);
        //     group.add(line);

        //     this._scene.add(group);
        //     this._cube = group;            
        // }

/*************************************************************************************************** 
Cone shape circle geometry parameter(ConeGeometry(radius?: number, height?: number, radialSegments?: number, 
    heightSegments?: number, openEnded?: boolean, thetaStart?: number, thetaLength?: number): THREE.ConeBufferGeometry) 
***************************************************************************************************/


        // _setupModel() {
        //     const geometry = new THREE.ConeGeometry(0.7, 1.8, 32, 12, true, 0 , Math.PI);
        //     const fillMaterial = new THREE.MeshPhongMaterial({color: 0x512251});            
        //     const cube = new THREE.Mesh(geometry, fillMaterial);

        //     const lineMaterial = new THREE.LineBasicMaterial({color: 0xff2200});
        //     const line = new THREE.LineSegments(
        //         new THREE.WireframeGeometry(geometry), lineMaterial);
            
        //     const group = new THREE.Group()
        //     group.add(cube);
        //     group.add(line);

        //     this._scene.add(group);
        //     this._cube = group;            
        // }

/*************************************************************************************************** 
Cylindershape Cylinder geometry parameter(CylinderGeometry(radiusTop?: number, radiusBottom?: number, 
    height?: number, radialSegments?: number, heightSegments?: number, openEnded?: boolean, thetaStart?: number, 
    thetaLength?: number): THREE.CylinderBufferGeometry) 
***************************************************************************************************/

        // _setupModel() {
        //     const geometry = new THREE.CylinderGeometry(0.5, 0.5, 0.5, 32, 5, true, 0, Math.PI );
        //     const fillMaterial = new THREE.MeshPhongMaterial({color: 0x512251});            
        //     const cube = new THREE.Mesh(geometry, fillMaterial);

        //     const lineMaterial = new THREE.LineBasicMaterial({color: 0xff2200});
        //     const line = new THREE.LineSegments(
        //         new THREE.WireframeGeometry(geometry), lineMaterial);
            
        //     const group = new THREE.Group()
        //     group.add(cube);
        //     group.add(line);

        //     this._scene.add(group);
        //     this._cube = group;            
        // }
/*************************************************************************************************** 
Sphere shape Sphere geometry parameter(SphereGeometry(radius?: number, widthSegments?: number,
     heightSegments?: number, phiStart?: number, phiLength?: number, thetaStart?: number, thetaLength?: number): THREE.SphereBufferGeometry) 
***************************************************************************************************/

        // _setupModel() {
        //     const geometry = new THREE.SphereGeometry(0.7, 32, 12, 0, Math.PI, 0 , Math.PI/2);
        //     const fillMaterial = new THREE.MeshPhongMaterial({color: 0x512251});            
        //     const cube = new THREE.Mesh(geometry, fillMaterial);

        //     const lineMaterial = new THREE.LineBasicMaterial({color: 0xff2200});
        //     const line = new THREE.LineSegments(
        //         new THREE.WireframeGeometry(geometry), lineMaterial);
            
        //     const group = new THREE.Group()
        //     group.add(cube);
        //     group.add(line);

        //     this._scene.add(group);
        //     this._cube = group;            
        // }
/*************************************************************************************************** 
Ring shape Ring geometry parameter(RingGeometry(innerRadius?: number, outerRadius?: number, thetaSegments?: number,
     phiSegments?: number, thetaStart?: number, thetaLength?: number): THREE.RingBufferGeometry) 
***************************************************************************************************/

        // _setupModel() {
        //     const geometry = new THREE.RingGeometry(0.6, 1, 1, 1, 0 , Math.PI);
        //     const fillMaterial = new THREE.MeshPhongMaterial({color: 0x512251});            
        //     const cube = new THREE.Mesh(geometry, fillMaterial);

        //     const lineMaterial = new THREE.LineBasicMaterial({color: 0xff2200});
        //     const line = new THREE.LineSegments(
        //         new THREE.WireframeGeometry(geometry), lineMaterial);
            
        //     const group = new THREE.Group()
        //     group.add(cube);
        //     group.add(line);

        //     this._scene.add(group);
        //     this._cube = group;            
        // }
/*************************************************************************************************** 
Plane shape Plan geometry parameter(width?: number, height?: number, widthSegments?: number, heightSegments?: number): THREE.PlaneBufferGeometry) 
***************************************************************************************************/

        _setupModel() {
            const geometry = new THREE.PlaneGeometry(1, 2, 1, 3);
            const fillMaterial = new THREE.MeshPhongMaterial({color: 0x512251});            
            const cube = new THREE.Mesh(geometry, fillMaterial);

            const lineMaterial = new THREE.LineBasicMaterial({color: 0xff2200});
            const line = new THREE.LineSegments(
                new THREE.WireframeGeometry(geometry), lineMaterial);
            
            const group = new THREE.Group()
            group.add(cube);
            // group.add(line);

            this._scene.add(group);
            this._cube = group;            
        }
/*************************************************************************************************** 
Torus shape Torus geometry parameter(width?: number, height?: number, widthSegments?: number, heightSegments?: number): THREE.PlaneBufferGeometry) 
***************************************************************************************************/

        _setupModel() {
            const geometry = new THREE.TorusGeometry();
            const fillMaterial = new THREE.MeshPhongMaterial({color: 0x512251});            
            const cube = new THREE.Mesh(geometry, fillMaterial);

            const lineMaterial = new THREE.LineBasicMaterial({color: 0xff2200});
            const line = new THREE.LineSegments(
                new THREE.WireframeGeometry(geometry), lineMaterial);
            
            const group = new THREE.Group()
            group.add(cube);
            // group.add(line);

            this._scene.add(group);
            this._cube = group;            
        }

        resize(){
            const width = this._divContainer.clientWidth;
            const height = this._divContainer.clientHeight;

            this._camera.aspect = width / height;
            this._camera.updateProjectionMatrix();

            this._renderer.setSize(width, height);
        }

        render(time) {
            this._renderer.render(this._scene, this._camera);
            this.update(time);
            requestAnimationFrame(this.render.bind(this));
        }

        update(time) {
            time*= 0.0001; //second unit
            // this._cube.rotation.x = time;
            // this._cube.rotation.y = time;
        }
    }
window.onload = function() {
    new App();
}