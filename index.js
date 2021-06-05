
console.log(mqtt)
console.log(influxdb)


let client = mqtt.connect('wss://test.mosquitto.org:8081' , 8080)


fetch('http://127.0.0.1:8278/' , {
    method: 'POST',
    body: JSON.stringify({
        title : "cheecker"
    }),
    headers: {
        "Content-Type" : "application/json",
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Methods": "GET , PUT , POST , DELETE"
    }
}).then(function (response) {
	if (response.ok) {
		return response.json();
	}
	return Promise.reject(response);
}).then(function (data) {
	console.log(data);
}).catch(function (error) {
	console.warn('Something went wrong.', error);
});

const scene = new THREE.Scene();
// var projector = new THREE.Projector();
scene.background = new THREE.Color('#DDE3FF')
const camera = new THREE.PerspectiveCamera( 45,
    window.innerWidth / window.innerHeight ,
    0.1 , 1000);

const renderer = new THREE.WebGLRenderer({ alpha : true });

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement )


let controls = new THREE.OrbitControls( camera, renderer.domElement );
controls.rotateSpeed = 1 / 4;
controls.noZoom = false;
controls.zoomSpeed = 1.5;
controls.staticMoving = true;
controls.minPolarAngle = Math.PI / 3;
controls.maxPolarAngle = Math.PI / 3;

EventsControls1  = new EventsControls( camera, renderer.domElement );
EventsControls2  = new EventsControls( camera, renderer.domElement );
EventsControls3  = new EventsControls( camera, renderer.domElement );
EventsControls4  = new EventsControls( camera, renderer.domElement );
EventsControls5  = new EventsControls( camera, renderer.domElement );
EventsControls6  = new EventsControls( camera, renderer.domElement );
EventsControls7  = new EventsControls( camera, renderer.domElement );
EventsControls8  = new EventsControls( camera, renderer.domElement );
EventsControls9  = new EventsControls( camera, renderer.domElement );
EventsControls10 = new EventsControls( camera, renderer.domElement );
EventsControls11 = new EventsControls( camera, renderer.domElement );
EventsControls12 = new EventsControls( camera, renderer.domElement );


let Texture = new THREE.TextureLoader().load(
    'http://127.0.0.1:8278/cher.png'
);

Texture.wrapS = THREE.RepeatWrapping;
Texture.wrapT = THREE.RepeatWrapping;
Texture.repeat.set( 4 , 4 );

const material = new THREE.MeshBasicMaterial( {   
    map: Texture,
});
const geometry = new THREE.PlaneGeometry( 100 , 100 , 1 , 1 )

const color = 0xDDE3FF;
const intensity = 2;
const light = new THREE.DirectionalLight( color , intensity );
light.position.set( -1, 2, 4 );

const cube = new THREE.Mesh( geometry, material );

camera.position.z = 150
cube.rotateX(-Math.PI / 2)

scene.add( cube );

scene.add( light );

const materialLine = new THREE.LineBasicMaterial( { color: 0x7F2100 } );
let points1 = [], points2 = [], points3 = [], points4 = [], points5 = [], points6 = [], points7 = [], points8 = [], points9 = [], points10 = [], points11 = [], points12 = [];

EventsControls1.map = cube;
EventsControls2.map = cube;
EventsControls3.map = cube;
EventsControls4.map = cube;
EventsControls5.map = cube;
EventsControls6.map = cube;
EventsControls7.map = cube;
EventsControls8.map = cube;
EventsControls9.map = cube;
EventsControls10.map = cube;
EventsControls11.map = cube;
EventsControls12.map = cube;

//First cheecker
EventsControls1.attachEvent( 'mouseOver', function () {
    // console.log('over')

    this.container.style.cursor = 'pointer';
});

EventsControls1.attachEvent( 'mouseOut', function () {
    this.container.style.cursor = 'auto';
});

EventsControls1.attachEvent( 'dragAndDrop', function () {
    controls.rotateSpeed = 0
    this.container.style.cursor = 'move';
    this.focused.position.y = this.previous.y;
    this.focused.position.x = 6.25 + 12.5 * Math.round( ( this.focused.position.x - 6.25 ) / 12.5 );
    this.focused.position.z = 6.25 + 12.5 * Math.round( ( this.focused.position.z - 6.25 ) / 12.5 );
});

client.on('connect', function () {
    client.subscribe('cheecker_1', function (err) {
      if (!err) {

        EventsControls1.attachEvent( 'mouseUp', function () {
            console.log('up')
            console.log( this.focused.position.x , this.focused.position.y , this.focused.position.z )
        
            points1.push( new THREE.Vector3(this.focused.position.x , this.focused.position.y , this.focused.position.z))
            const geometryLine = new THREE.BufferGeometry().setFromPoints( points1 ); 
            const line = new THREE.Line( geometryLine, materialLine )
            scene.add( line );

            console.log('Connect')
            client.publish('cheecker_1', `${this.focused.position.x} ${this.focused.position.y} ${this.focused.position.z}`)
           
        
            console.log(points1)
        
            controls.rotateSpeed = 1 / 4
        
            var x = ( this.focused.position.x - 6.25 ) / 12.5;
            var z = ( this.focused.position.z - 6.25 ) / 12.5;
        
            var sum = Math.abs( ( x + z ) % 2 );
            if ( sum == 0 ) { this.returnPrevious() }
            this.container.style.cursor = 'auto';
        });

        
      }
    })
  })
  
  
// Second cheecker
EventsControls2.attachEvent( 'mouseOver', function () {
    // console.log('over')

    this.container.style.cursor = 'pointer';
});

EventsControls2.attachEvent( 'mouseOut', function () {
    this.container.style.cursor = 'auto';
});

EventsControls2.attachEvent( 'dragAndDrop', function () {
    controls.rotateSpeed = 0
    this.container.style.cursor = 'move';
    this.focused.position.y = this.previous.y;
    this.focused.position.x = 6.25 + 12.5 * Math.round( ( this.focused.position.x - 6.25 ) / 12.5 );
    this.focused.position.z = 6.25 + 12.5 * Math.round( ( this.focused.position.z - 6.25 ) / 12.5 );
});

client.on('connect', function () {
    client.subscribe('cheecker_2', function (err) {
      if (!err) {
            EventsControls2.attachEvent( 'mouseUp', function () {
                console.log('up')
                console.log( this.focused.position.x , this.focused.position.y , this.focused.position.z )

                points2.push( new THREE.Vector3(this.focused.position.x , this.focused.position.y , this.focused.position.z))
                const geometryLine = new THREE.BufferGeometry().setFromPoints( points2 ); 
                const line = new THREE.Line( geometryLine, materialLine )
                scene.add( line );

                client.publish('cheecker_2', `${this.focused.position.x} ${this.focused.position.y} ${this.focused.position.z}`)

                console.log(points2)

                controls.rotateSpeed = 1 / 4

                var x = ( this.focused.position.x - 6.25 ) / 12.5;
                var z = ( this.focused.position.z - 6.25 ) / 12.5;

                var sum = Math.abs( ( x + z ) % 2 );
                if ( sum == 0 ) { this.returnPrevious() }
                this.container.style.cursor = 'auto';
            });

        }
    })
  })


// Third cheecker
EventsControls3.attachEvent( 'mouseOver', function () {
    // console.log('over')

    this.container.style.cursor = 'pointer';
});

EventsControls3.attachEvent( 'mouseOut', function () {
    this.container.style.cursor = 'auto';
});

EventsControls3.attachEvent( 'dragAndDrop', function () {
    controls.rotateSpeed = 0
    this.container.style.cursor = 'move';
    this.focused.position.y = this.previous.y;
    this.focused.position.x = 6.25 + 12.5 * Math.round( ( this.focused.position.x - 6.25 ) / 12.5 );
    this.focused.position.z = 6.25 + 12.5 * Math.round( ( this.focused.position.z - 6.25 ) / 12.5 );
});

client.on('connect', function () {
    client.subscribe('cheecker_3', function (err) {
      if (!err) {
            EventsControls3.attachEvent( 'mouseUp', function () {
                console.log('up')
                console.log( this.focused.position.x , this.focused.position.y , this.focused.position.z )

                points3.push( new THREE.Vector3(this.focused.position.x , this.focused.position.y , this.focused.position.z))
                const geometryLine = new THREE.BufferGeometry().setFromPoints( points3 ); 
                const line = new THREE.Line( geometryLine, materialLine )
                scene.add( line );

                client.publish('cheecker_3', `${this.focused.position.x} ${this.focused.position.y} ${this.focused.position.z}`)

                console.log(points3)

                controls.rotateSpeed = 1 / 4

                var x = ( this.focused.position.x - 6.25 ) / 12.5;
                var z = ( this.focused.position.z - 6.25 ) / 12.5;

                var sum = Math.abs( ( x + z ) % 2 );
                if ( sum == 0 ) { this.returnPrevious() }
                this.container.style.cursor = 'auto';
            });
        }
    })
  })

// Fourth cheecker
EventsControls4.attachEvent( 'mouseOver', function () {
    // console.log('over')

    this.container.style.cursor = 'pointer';
});

EventsControls4.attachEvent( 'mouseOut', function () {
    this.container.style.cursor = 'auto';
});

EventsControls4.attachEvent( 'dragAndDrop', function () {
    controls.rotateSpeed = 0
    this.container.style.cursor = 'move';
    this.focused.position.y = this.previous.y;
    this.focused.position.x = 6.25 + 12.5 * Math.round( ( this.focused.position.x - 6.25 ) / 12.5 );
    this.focused.position.z = 6.25 + 12.5 * Math.round( ( this.focused.position.z - 6.25 ) / 12.5 );
});

client.on('connect', function () {
    client.subscribe('cheecker_4', function (err) {
      if (!err) {
            EventsControls4.attachEvent( 'mouseUp', function () {
                console.log('up')
                console.log( this.focused.position.x , this.focused.position.y , this.focused.position.z )

                points4.push( new THREE.Vector3(this.focused.position.x , this.focused.position.y , this.focused.position.z))
                const geometryLine = new THREE.BufferGeometry().setFromPoints( points4 ); 
                const line = new THREE.Line( geometryLine, materialLine )
                scene.add( line );

                client.publish('cheecker_4', `${this.focused.position.x} ${this.focused.position.y} ${this.focused.position.z}`)

                console.log(points4)

                controls.rotateSpeed = 1 / 4

                var x = ( this.focused.position.x - 6.25 ) / 12.5;
                var z = ( this.focused.position.z - 6.25 ) / 12.5;

                var sum = Math.abs( ( x + z ) % 2 );
                if ( sum == 0 ) { this.returnPrevious() }
                this.container.style.cursor = 'auto';
            });
        }
    })
  })

// Fifth cheecker
EventsControls5.attachEvent( 'mouseOver', function () {
    // console.log('over')

    this.container.style.cursor = 'pointer';
});

EventsControls5.attachEvent( 'mouseOut', function () {
    this.container.style.cursor = 'auto';
});

EventsControls5.attachEvent( 'dragAndDrop', function () {
    controls.rotateSpeed = 0
    this.container.style.cursor = 'move';
    this.focused.position.y = this.previous.y;
    this.focused.position.x = 6.25 + 12.5 * Math.round( ( this.focused.position.x - 6.25 ) / 12.5 );
    this.focused.position.z = 6.25 + 12.5 * Math.round( ( this.focused.position.z - 6.25 ) / 12.5 );
});

client.on('connect', function () {
    client.subscribe('cheecker_5', function (err) {
      if (!err) {
            EventsControls5.attachEvent( 'mouseUp', function () {
                console.log('up')
                console.log( this.focused.position.x , this.focused.position.y , this.focused.position.z )

                points5.push( new THREE.Vector3(this.focused.position.x , this.focused.position.y , this.focused.position.z))
                const geometryLine = new THREE.BufferGeometry().setFromPoints( points5 ); 
                const line = new THREE.Line( geometryLine, materialLine )
                scene.add( line );

                client.publish('cheecker_5', `${this.focused.position.x} ${this.focused.position.y} ${this.focused.position.z}`)

                console.log(points5)

                controls.rotateSpeed = 1 / 4

                var x = ( this.focused.position.x - 6.25 ) / 12.5;
                var z = ( this.focused.position.z - 6.25 ) / 12.5;

                var sum = Math.abs( ( x + z ) % 2 );
                if ( sum == 0 ) { this.returnPrevious() }
                this.container.style.cursor = 'auto';
            });
        }
    })
  })

// Sixth cheecker
EventsControls6.attachEvent( 'mouseOver', function () {
    // console.log('over')

    this.container.style.cursor = 'pointer';
});

EventsControls6.attachEvent( 'mouseOut', function () {
    this.container.style.cursor = 'auto';
});

EventsControls6.attachEvent( 'dragAndDrop', function () {
    controls.rotateSpeed = 0
    this.container.style.cursor = 'move';
    this.focused.position.y = this.previous.y;
    this.focused.position.x = 6.25 + 12.5 * Math.round( ( this.focused.position.x - 6.25 ) / 12.5 );
    this.focused.position.z = 6.25 + 12.5 * Math.round( ( this.focused.position.z - 6.25 ) / 12.5 );
});

client.on('connect', function () {
    client.subscribe('cheecker_6', function (err) {
      if (!err) {
            EventsControls6.attachEvent( 'mouseUp', function () {
                console.log('up')
                console.log( this.focused.position.x , this.focused.position.y , this.focused.position.z )

                points6.push( new THREE.Vector3(this.focused.position.x , this.focused.position.y , this.focused.position.z))
                const geometryLine = new THREE.BufferGeometry().setFromPoints( points6 ); 
                const line = new THREE.Line( geometryLine, materialLine )
                scene.add( line );

                client.publish('cheecker_6', `${this.focused.position.x} ${this.focused.position.y} ${this.focused.position.z}`)

                console.log(points6)

                controls.rotateSpeed = 1 / 4

                var x = ( this.focused.position.x - 6.25 ) / 12.5;
                var z = ( this.focused.position.z - 6.25 ) / 12.5;

                var sum = Math.abs( ( x + z ) % 2 );
                if ( sum == 0 ) { this.returnPrevious() }
                this.container.style.cursor = 'auto';
            });
        }
    })
  })

// Seventh cheecker
EventsControls7.attachEvent( 'mouseOver', function () {
    // console.log('over')

    this.container.style.cursor = 'pointer';
});

EventsControls7.attachEvent( 'mouseOut', function () {
    this.container.style.cursor = 'auto';
});

EventsControls7.attachEvent( 'dragAndDrop', function () {
    controls.rotateSpeed = 0
    this.container.style.cursor = 'move';
    this.focused.position.y = this.previous.y;
    this.focused.position.x = 6.25 + 12.5 * Math.round( ( this.focused.position.x - 6.25 ) / 12.5 );
    this.focused.position.z = 6.25 + 12.5 * Math.round( ( this.focused.position.z - 6.25 ) / 12.5 );
});

client.on('connect', function () {
    client.subscribe('cheecker_7', function (err) {
      if (!err) {
            EventsControls7.attachEvent( 'mouseUp', function () {
                console.log('up')
                console.log( this.focused.position.x , this.focused.position.y , this.focused.position.z )

                points7.push( new THREE.Vector3(this.focused.position.x , this.focused.position.y , this.focused.position.z))
                const geometryLine = new THREE.BufferGeometry().setFromPoints( points7 ); 
                const line = new THREE.Line( geometryLine, materialLine )
                scene.add( line );

                client.publish('cheecker_7', `${this.focused.position.x} ${this.focused.position.y} ${this.focused.position.z}`)

                console.log(points7)

                controls.rotateSpeed = 1 / 4

                var x = ( this.focused.position.x - 6.25 ) / 12.5;
                var z = ( this.focused.position.z - 6.25 ) / 12.5;

                var sum = Math.abs( ( x + z ) % 2 );
                if ( sum == 0 ) { this.returnPrevious() }
                this.container.style.cursor = 'auto';
            });
        }
    })
  })

// Eighth cheecker
EventsControls8.attachEvent( 'mouseOver', function () {
    // console.log('over')

    this.container.style.cursor = 'pointer';
});

EventsControls8.attachEvent( 'mouseOut', function () {
    this.container.style.cursor = 'auto';
});

EventsControls8.attachEvent( 'dragAndDrop', function () {
    controls.rotateSpeed = 0
    this.container.style.cursor = 'move';
    this.focused.position.y = this.previous.y;
    this.focused.position.x = 6.25 + 12.5 * Math.round( ( this.focused.position.x - 6.25 ) / 12.5 );
    this.focused.position.z = 6.25 + 12.5 * Math.round( ( this.focused.position.z - 6.25 ) / 12.5 );
});

client.on('connect', function () {
    client.subscribe('cheecker_8', function (err) {
      if (!err) {
            EventsControls8.attachEvent( 'mouseUp', function () {
                console.log('up')
                console.log( this.focused.position.x , this.focused.position.y , this.focused.position.z )

                points8.push( new THREE.Vector3(this.focused.position.x , this.focused.position.y , this.focused.position.z))
                const geometryLine = new THREE.BufferGeometry().setFromPoints( points8 ); 
                const line = new THREE.Line( geometryLine, materialLine )
                scene.add( line );

                client.publish('cheecker_8', `${this.focused.position.x} ${this.focused.position.y} ${this.focused.position.z}`)

                console.log(points8)

                controls.rotateSpeed = 1 / 4

                var x = ( this.focused.position.x - 6.25 ) / 12.5;
                var z = ( this.focused.position.z - 6.25 ) / 12.5;

                var sum = Math.abs( ( x + z ) % 2 );
                if ( sum == 0 ) { this.returnPrevious() }
                this.container.style.cursor = 'auto';
            });
        }
    })
  })

// Ninth cheecker
EventsControls9.attachEvent( 'mouseOver', function () {
    // console.log('over')

    this.container.style.cursor = 'pointer';
});

EventsControls9.attachEvent( 'mouseOut', function () {
    this.container.style.cursor = 'auto';
});

EventsControls9.attachEvent( 'dragAndDrop', function () {
    controls.rotateSpeed = 0
    this.container.style.cursor = 'move';
    this.focused.position.y = this.previous.y;
    this.focused.position.x = 6.25 + 12.5 * Math.round( ( this.focused.position.x - 6.25 ) / 12.5 );
    this.focused.position.z = 6.25 + 12.5 * Math.round( ( this.focused.position.z - 6.25 ) / 12.5 );
});

client.on('connect', function () {
    client.subscribe('cheecker_9', function (err) {
      if (!err) {
            EventsControls9.attachEvent( 'mouseUp', function () {
                console.log('up')
                console.log( this.focused.position.x , this.focused.position.y , this.focused.position.z )

                points9.push( new THREE.Vector3(this.focused.position.x , this.focused.position.y , this.focused.position.z))
                const geometryLine = new THREE.BufferGeometry().setFromPoints( points9 ); 
                const line = new THREE.Line( geometryLine, materialLine )
                scene.add( line );

                client.publish('cheecker_9', `${this.focused.position.x} ${this.focused.position.y} ${this.focused.position.z}`)

                console.log(points9)

                controls.rotateSpeed = 1 / 4

                var x = ( this.focused.position.x - 6.25 ) / 12.5;
                var z = ( this.focused.position.z - 6.25 ) / 12.5;

                var sum = Math.abs( ( x + z ) % 2 );
                if ( sum == 0 ) { this.returnPrevious() }
                this.container.style.cursor = 'auto';
            });
        }
    })
  })

// Tenth cheecker
EventsControls10.attachEvent( 'mouseOver', function () {
    // console.log('over')

    this.container.style.cursor = 'pointer';
});

EventsControls10.attachEvent( 'mouseOut', function () {
    this.container.style.cursor = 'auto';
});

EventsControls10.attachEvent( 'dragAndDrop', function () {
    controls.rotateSpeed = 0
    this.container.style.cursor = 'move';
    this.focused.position.y = this.previous.y;
    this.focused.position.x = 6.25 + 12.5 * Math.round( ( this.focused.position.x - 6.25 ) / 12.5 );
    this.focused.position.z = 6.25 + 12.5 * Math.round( ( this.focused.position.z - 6.25 ) / 12.5 );
});

client.on('connect', function () {
    client.subscribe('cheecker_10', function (err) {
      if (!err) {
            EventsControls10.attachEvent( 'mouseUp', function () {
                console.log('up')
                console.log( this.focused.position.x , this.focused.position.y , this.focused.position.z )

                points10.push( new THREE.Vector3(this.focused.position.x , this.focused.position.y , this.focused.position.z))
                const geometryLine = new THREE.BufferGeometry().setFromPoints( points10 ); 
                const line = new THREE.Line( geometryLine, materialLine )
                scene.add( line );

                client.publish('cheecker_10', `${this.focused.position.x} ${this.focused.position.y} ${this.focused.position.z}`)

                console.log(points10)

                controls.rotateSpeed = 1 / 4

                var x = ( this.focused.position.x - 6.25 ) / 12.5;
                var z = ( this.focused.position.z - 6.25 ) / 12.5;

                var sum = Math.abs( ( x + z ) % 2 );
                if ( sum == 0 ) { this.returnPrevious() }
                this.container.style.cursor = 'auto';
            });
        }
    })
  })

// Eleventh cheecker
EventsControls11.attachEvent( 'mouseOver', function () {
    // console.log('over')

    this.container.style.cursor = 'pointer';
});

EventsControls11.attachEvent( 'mouseOut', function () {
    this.container.style.cursor = 'auto';
});

EventsControls11.attachEvent( 'dragAndDrop', function () {
    controls.rotateSpeed = 0
    this.container.style.cursor = 'move';
    this.focused.position.y = this.previous.y;
    this.focused.position.x = 6.25 + 12.5 * Math.round( ( this.focused.position.x - 6.25 ) / 12.5 );
    this.focused.position.z = 6.25 + 12.5 * Math.round( ( this.focused.position.z - 6.25 ) / 12.5 );
});

client.on('connect', function () {
    client.subscribe('cheecker_11', function (err) {
      if (!err) {
            EventsControls11.attachEvent( 'mouseUp', function () {
                console.log('up')
                console.log( this.focused.position.x , this.focused.position.y , this.focused.position.z )

                points11.push( new THREE.Vector3(this.focused.position.x , this.focused.position.y , this.focused.position.z))
                const geometryLine = new THREE.BufferGeometry().setFromPoints( points11 ); 
                const line = new THREE.Line( geometryLine, materialLine )
                scene.add( line );

                client.publish('cheecker_11', `${this.focused.position.x} ${this.focused.position.y} ${this.focused.position.z}`)

                console.log(points11)

                controls.rotateSpeed = 1 / 4

                var x = ( this.focused.position.x - 6.25 ) / 12.5;
                var z = ( this.focused.position.z - 6.25 ) / 12.5;

                var sum = Math.abs( ( x + z ) % 2 );
                if ( sum == 0 ) { this.returnPrevious() }
                this.container.style.cursor = 'auto';
            });
        }
    })
  })

// Twelfth cheecker
EventsControls12.attachEvent( 'mouseOver', function () {
    // console.log('over')

    this.container.style.cursor = 'pointer';
});

EventsControls12.attachEvent( 'mouseOut', function () {
    this.container.style.cursor = 'auto';
});

EventsControls12.attachEvent( 'dragAndDrop', function () {
    controls.rotateSpeed = 0
    this.container.style.cursor = 'move';
    this.focused.position.y = this.previous.y;
    this.focused.position.x = 6.25 + 12.5 * Math.round( ( this.focused.position.x - 6.25 ) / 12.5 );
    this.focused.position.z = 6.25 + 12.5 * Math.round( ( this.focused.position.z - 6.25 ) / 12.5 );
});

client.on('connect', function () {
    client.subscribe('cheecker_12', function (err) {
      if (!err) {
            EventsControls12.attachEvent( 'mouseUp', function () {
                console.log('up')
                console.log( this.focused.position.x , this.focused.position.y , this.focused.position.z )

                points12.push( new THREE.Vector3(this.focused.position.x , this.focused.position.y , this.focused.position.z))
                const geometryLine = new THREE.BufferGeometry().setFromPoints( points12 ); 
                const line = new THREE.Line( geometryLine, materialLine )
                scene.add( line );

                client.publish('cheecker_12', `${this.focused.position.x} ${this.focused.position.y} ${this.focused.position.z}`)

                console.log(points12)

                controls.rotateSpeed = 1 / 4

                var x = ( this.focused.position.x - 6.25 ) / 12.5;
                var z = ( this.focused.position.z - 6.25 ) / 12.5;

                var sum = Math.abs( ( x + z ) % 2 );
                if ( sum == 0 ) { this.returnPrevious() }
                this.container.style.cursor = 'auto';
            });
        }
    })
  })

client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString(), topic)
    // client.end()
  })

let h = 3
let geometryCy = new THREE.CylinderGeometry( 4, 4 , h,  36);
let materialCy = new THREE.MeshPhongMaterial({
        color: 0x7F2100,
        specular: 0x00b2fc,
        emissive: 0x000000,
        shiniess: 40,
        shading: false,
        blending: THREE.NormalBlending,
        depthTest: true,
})

let cylinder = new THREE.Mesh( geometryCy , materialCy );
cylinder.position.set(-43.75, h/2, 43.75)
cylinder.rotateX(Math.PI)
scene.add( cylinder ) 
// console.log(cylinder.position.x)
points1.push( new THREE.Vector3(cylinder.position.x , cylinder.position.y , cylinder.position.z))
EventsControls1.attach( cylinder )

let cylinder2 = new THREE.Mesh( geometryCy , materialCy );
cylinder2.position.set(-18.75 , h/2, 43.75)
scene.add( cylinder2 )
points2.push( new THREE.Vector3(cylinder2.position.x , cylinder2.position.y , cylinder2.position.z))
EventsControls2.attach( cylinder2 )

let cylinder3 = new THREE.Mesh( geometryCy , materialCy );
cylinder3.position.set(6.25 , h/2, 43.75)
scene.add( cylinder3 )
points3.push( new THREE.Vector3(cylinder3.position.x , cylinder3.position.y , cylinder3.position.z))
EventsControls3.attach( cylinder3 )

let cylinder4 = new THREE.Mesh( geometryCy , materialCy );
cylinder4.position.set(31.25 , h/2, 43.75)
scene.add( cylinder4 )
points4.push( new THREE.Vector3(cylinder4.position.x , cylinder4.position.y , cylinder4.position.z))    
EventsControls4.attach( cylinder4 )

let cylinder5 = new THREE.Mesh( geometryCy , materialCy );
cylinder5.position.set(-31.25 , h/2, 31.25)
scene.add( cylinder5 )
points5.push( new THREE.Vector3(cylinder5.position.x , cylinder5.position.y , cylinder5.position.z))
EventsControls5.attach( cylinder5 )

let cylinder6 = new THREE.Mesh( geometryCy , materialCy );
cylinder6.position.set(-6.25 , h/2, 31.25)
scene.add( cylinder6 )
points6.push( new THREE.Vector3(cylinder6.position.x , cylinder6.position.y , cylinder6.position.z))
EventsControls6.attach( cylinder6 )

let cylinder7 = new THREE.Mesh( geometryCy , materialCy );
cylinder7.position.set(18.75 ,  h/2, 31.25)
scene.add( cylinder7 )
points7.push( new THREE.Vector3(cylinder7.position.x , cylinder7.position.y , cylinder7.position.z))
EventsControls7.attach( cylinder7 )

let cylinder8 = new THREE.Mesh( geometryCy , materialCy );
cylinder8.position.set(43.75 , h/2, 31.25)
scene.add( cylinder8 )
points8.push( new THREE.Vector3(cylinder8.position.x , cylinder8.position.y , cylinder8.position.z))
EventsControls8.attach( cylinder8 )

let cylinder9 = new THREE.Mesh( geometryCy , materialCy );
cylinder9.position.set(-43.75 , h/2, 18.75)
scene.add( cylinder9 )
points9.push( new THREE.Vector3(cylinder9.position.x , cylinder9.position.y , cylinder9.position.z))
EventsControls9.attach( cylinder9 )

let cylinder10 = new THREE.Mesh( geometryCy , materialCy );
cylinder10.position.set(-18.75 , h/2, 18.75)
scene.add( cylinder10 )
points10.push( new THREE.Vector3(cylinder10.position.x , cylinder10.position.y , cylinder10.position.z))
EventsControls10.attach( cylinder10 )

let cylinder11 = new THREE.Mesh( geometryCy , materialCy );
cylinder11.position.set(6.25 , h/2, 18.75)
scene.add( cylinder11 )
points11.push( new THREE.Vector3(cylinder11.position.x , cylinder11.position.y , cylinder11.position.z))
EventsControls11.attach( cylinder11 )

let cylinder12 = new THREE.Mesh( geometryCy , materialCy );
cylinder12.position.set(31.25 , h/2, 18.75)
scene.add( cylinder12 )
points12.push( new THREE.Vector3(cylinder12.position.x , cylinder12.position.y , cylinder12.position.z))
EventsControls12.attach( cylinder12 )

function animate(){

    requestAnimationFrame( animate );
    // cube.rotation.x -= 0.01;
    // cube.rotation.y += 0.01;
    // checkerboard.rotation.z += 0.01;
    controls.update();
    renderer.render( scene, camera );
}

animate()
// renderer.render( scene, camera );

