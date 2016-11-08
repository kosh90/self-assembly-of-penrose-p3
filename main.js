var alpha = Math.PI / 5;
var side = 50;
var i = 0;
var j = 0;

// =============================================================================
// =        ====  ====        =======     ==  ==========  =====      ===      ==
// =  =========    ======  =========  ===  =  =========    ===  ====  =  ====  =
// =  ========  ==  =====  ========  =======  ========  ==  ==  ====  =  ====  =
// =  =======  ====  ====  ========  =======  =======  ====  ==  =======  ======
// =      ===  ====  ====  ========  =======  =======  ====  ====  =======  ====
// =  =======        ====  ========  =======  =======        ======  =======  ==
// =  =======  ====  ====  ========  =======  =======  ====  =  ====  =  ====  =
// =  =======  ====  ====  =========  ===  =  =======  ====  =  ====  =  ====  =
// =  =======  ====  ====  ==========     ==        =  ====  ==      ===      ==
// =============================================================================

function Fat_Tile(x, y, rot) {

    this.A = new Point(-50 * Math.cos(alpha), 0);
    this.B = new Point(0, 50 * Math.sin(alpha));
    this.C = new Point(50 * Math.cos(alpha), 0);
    this.D = new Point(0, -50 * Math.sin(alpha));

    this.vert = [];
    this.vert[0] = this.A;
    this.vert[1] = this.B;
    this.vert[2] = this.C;
    this.vert[3] = this.D;

    for (var i = 0; i < 4; i++) {
        this.vert[i] = this.vert[i].rotate(-rot, [0, 0]);

        this.vert[i] += [x, y];
        // console.log(this.vert[i]);
    }


    // this.ab = [new Point(-50 * Math.cos(alpha), 0), new Point(0, 50 * Math.sin(alpha))];
    // this.bc = [new Point(0, 50 * Math.sin(alpha)), new Point(50 * Math.cos(alpha), 0)];
    // this.cd = [new Point(50 * Math.cos(alpha), 0), new Point(0, -50 * Math.sin(alpha))];
    // this.da = [new Point(0, -50 * Math.sin(alpha)), new Point(-50 * Math.cos(alpha), 0)];

    this.ab = this.vert[1] - this.vert[0];
    this.bc = this.vert[2] - this.vert[1];
    this.cd = this.vert[3] - this.vert[2];
    this.da = this.vert[0] - this.vert[3];
    // this.C /0

    // var decoration_red = new Path.Arc(this.A + this.ab, this.A+[10,0], this.A - this.da);
    var decoration_blue = new Path.Arc(this.vert[0] + this.ab / 3, this.vert[0] + this.ab / 4 + this.bc / 4, this.vert[0] - this.da / 3);
    decoration_blue.strokeColor = 'blue';
    decoration_blue.strokeWidth = '3';

    var decoration_red = new Path.Arc(this.vert[2] - this.bc / 2, this.vert[2] - (this.ab + this.bc) / 3, this.vert[2] + this.cd / 2);
    decoration_red.strokeColor = 'red';
    decoration_red.strokeWidth = '3';

    this.edge = [];
    this.edge[0] = new Path(this.vert[0], this.vert[0] + this.ab);
    this.edge[0].vert = 'ab';
    this.edge[1] = new Path(this.vert[1], this.vert[1] + this.bc);
    this.edge[1].vert = 'bc';
    this.edge[2] = new Path(this.vert[2], this.vert[2] + this.cd);
    this.edge[2].vert = 'cd';
    this.edge[3] = new Path(this.vert[3], this.vert[3] + this.da);
    this.edge[3].vert = 'da';


    this.edge[0].outer = true;
    this.edge[1].outer = true;
    this.edge[2].outer = true;
    this.edge[3].outer = true;

    // this.tile = new Path(this.vertices);
    // this.tile.fillColor = 'red';
    for (var i = 0; i < 4; i++) {
        this.edge[i].strokeColor = 'black';
        this.edge[i].strokeWidth = '2';
        // this.edge[i].position += [x, y];
        // this.edge[i].rotate(rot, [x, y]);
    }

    this.outer = true;
    this.rotation = rot;

    function mark() {
        for (var i = 0; i < 4; i++) {
            this.edge[i].strokeColor = 'pink';
            this.edge[i].strokeWidth = '6';

        }
    }

    // this.edge[0].strokeColor = 'blue';
    // this.edge[1].strokeColor = 'black';
    // this.edge[2].strokeColor = 'green';
    // this.edge[3].strokeColor = 'red';

    // var myCircle = new Path.Circle(this.vert[1], 20);
    // myCircle.fillColor = 'black';
}

// =====================================================================================
// =        =  ====  =    =  =======  =======     ==  ==========  =====      ===      ==
// ====  ====  ====  ==  ==   ======  ======  ===  =  =========    ===  ====  =  ====  =
// ====  ====  ====  ==  ==    =====  =====  =======  ========  ==  ==  ====  =  ====  =
// ====  ====  ====  ==  ==  ==  ===  =====  =======  =======  ====  ==  =======  ======
// ====  ====        ==  ==  ===  ==  =====  =======  =======  ====  ====  =======  ====
// ====  ====  ====  ==  ==  ====  =  =====  =======  =======        ======  =======  ==
// ====  ====  ====  ==  ==  =====    =====  =======  =======  ====  =  ====  =  ====  =
// ====  ====  ====  ==  ==  ======   ======  ===  =  =======  ====  =  ====  =  ====  =
// ====  ====  ====  =    =  =======  =======     ==        =  ====  ==      ===      ==
// =====================================================================================

function Thin_Tile(x, y, rot) {

    this.A = new Point(-50 * Math.cos(alpha/2), 0);
    this.B = new Point(0, 50 * Math.sin(alpha/2));
    this.C = new Point(50 * Math.cos(alpha/2), 0);
    this.D = new Point(0, -50 * Math.sin(alpha/2));

    this.vert = [];
    this.vert[0] = this.A;
    this.vert[1] = this.B;
    this.vert[2] = this.C;
    this.vert[3] = this.D;

    for (var i = 0; i < 4; i++) {
        this.vert[i] = this.vert[i].rotate(-rot, [0, 0]);

        this.vert[i] += [x, y];
        // console.log(this.vert[i]);
    }


    // this.ab = [new Point(-50 * Math.cos(alpha), 0), new Point(0, 50 * Math.sin(alpha))];
    // this.bc = [new Point(0, 50 * Math.sin(alpha)), new Point(50 * Math.cos(alpha), 0)];
    // this.cd = [new Point(50 * Math.cos(alpha), 0), new Point(0, -50 * Math.sin(alpha))];
    // this.da = [new Point(0, -50 * Math.sin(alpha)), new Point(-50 * Math.cos(alpha), 0)];

    this.ab = this.vert[1] - this.vert[0];
    this.bc = this.vert[2] - this.vert[1];
    this.cd = this.vert[3] - this.vert[2];
    this.da = this.vert[0] - this.vert[3];
    // this.C /0

    // var decoration_red = new Path.Arc(this.A + this.ab, this.A+[10,0], this.A - this.da);
    var decoration_blue = new Path.Arc(this.vert[1] - this.ab / 3, this.vert[1] - this.ab / 4 + this.bc / 4, this.vert[1] + this.bc / 3);
    decoration_blue.strokeColor = 'blue';
    decoration_blue.strokeWidth = '3';

    var decoration_red = new Path.Arc(this.vert[3] + this.da / 3, this.vert[3] + this.da / 4 - this.cd / 4, this.vert[3] - this.cd / 3);
    decoration_red.strokeColor = 'red';
    decoration_red.strokeWidth = '3';

    this.edge = [];
    this.edge[0] = new Path(this.vert[0], this.vert[0] + this.ab);
    this.edge[0].vert = 'ab';
    this.edge[1] = new Path(this.vert[1], this.vert[1] + this.bc);
    this.edge[1].vert = 'bc';
    this.edge[2] = new Path(this.vert[2], this.vert[2] + this.cd);
    this.edge[2].vert = 'cd';
    this.edge[3] = new Path(this.vert[3], this.vert[3] + this.da);
    this.edge[3].vert = 'da';


    this.edge[0].outer = true;
    this.edge[1].outer = true;
    this.edge[2].outer = true;
    this.edge[3].outer = true;

    // this.tile = new Path(this.vertices);
    // this.tile.fillColor = 'red';
    for (var i = 0; i < 4; i++) {
        this.edge[i].strokeColor = 'blue';
        this.edge[i].strokeWidth = '2';
        // this.edge[i].position += [x, y];
        // this.edge[i].rotate(rot, [x, y]);
    }

    this.outer = true;
    this.rotation = rot;

    function mark() {
        for (var i = 0; i < 4; i++) {
            this.edge[i].strokeColor = 'pink';
            this.edge[i].strokeWidth = '6';

        }
    }

    // this.edge[0].strokeColor = 'blue';
    // this.edge[1].strokeColor = 'black';
    // this.edge[2].strokeColor = 'green';
    // this.edge[3].strokeColor = 'red';

    // var myCircle = new Path.Circle(this.vert[1], 20);
    // myCircle.fillColor = 'black';
}

// #############################################################################################################
// #############################################################################################################


// #############################################################################################################
// #############################################################################################################

function move_tile(tile, x, y) {
    tile.tile.position += [x, y];
    console.log('move')
}


// =================================================================================
// =       ==  ==========  ======     ==        =====        ====  ====        =====
// =  ====  =  =========    ====  ===  =  ===========  =========    ======  ========
// =  ====  =  ========  ==  ==  =======  ===========  ========  ==  =====  ========
// =  ====  =  =======  ====  =  =======  ===========  =======  ====  ====  ========
// =       ==  =======  ====  =  =======      =======      ===  ====  ====  ========
// =  =======  =======        =  =======  ===========  =======        ====  ========
// =  =======  =======  ====  =  =======  ===========  =======  ====  ====  ========
// =  =======  =======  ====  ==  ===  =  ===========  =======  ====  ====  ========
// =  =======        =  ====  ===     ==        =====  =======  ====  ====  ========
// =================================================================================


//place xtile to edge number 'num' of tile:
function place_fat_by_edge(tile, num) {

    var case_need_to_rewrite = -1;
    var tempvec = new Point(0, 0);
    var centre = new Point(0, 0);
    var x1 = tile.edge[num].firstSegment.point.x;
    var y1 = tile.edge[num].firstSegment.point.y;
    var x2 = tile.edge[num].lastSegment.point.x;
    var y2 = tile.edge[num].lastSegment.point.y;
    tile.edge[num].strokeColor = 'purple';
    tile.edge[num].strokeWidth = '4';
    //is it outer?

    // var start_cir = new Shape.Circle([x1, y1], 10);
    // start_cir.strokeColor = 'blue';
    // var end_cir = new Shape.Circle([x2, y2], 20);
    // end_cir.strokeColor = 'pink';

    if (tile.edge[num].vert == 'ab') {
        // console.log('we need to fit tile with da')
        case_need_to_rewrite = 0;
    }
    if (tile.edge[num].vert == 'bc') {
        // console.log('we need to fit tile with cd')
        case_need_to_rewrite = 1;
    }
    if (tile.edge[num].vert == 'cd') {
        // console.log('we need to fit tile with bc')
        case_need_to_rewrite = 2;
    }
    if (tile.edge[num].vert == 'da') {
        // console.log('we need to fit tile with ab')
        case_need_to_rewrite = 3;
    }

    //CASE AB -- 0th case:
    if (case_need_to_rewrite == 0) {
        tempvec = tile.ab.rotate(72, [0, 0]);
        centre = tile.vert[0] + (tile.ab + tempvec) / 2;

        var ytile = new Fat_Tile(centre.x, centre.y, -72 + tile.rotation);
    }
    //CASE BC -- 1th case:

    if (case_need_to_rewrite == 1) {
        tempvec = tile.bc.rotate(108, [0, 0]);
        // var temp_vec_path = new Path(tile.vert[1], tile.vert[1]+tempvec);
        // temp_vec_path.strokeColor = 'green';
        centre = tile.vert[1] + (tile.bc + tempvec) / 2;
        tile.edge[1].strokeColor = 'pink';

        var ytile = new Fat_Tile(centre.x, centre.y, 72 + tile.rotation);
    }


    //CASE CD -- 2th case:
    if (case_need_to_rewrite == 2) {
        tempvec = tile.cd.rotate(72, [0, 0]);
        // var temp_vec_path = new Path(tile.vert[2], tile.vert[2] + tempvec);
        // temp_vec_path.strokeColor = 'green';
        centre = tile.vert[2] + (tile.cd + tempvec) / 2;
        tile.edge[2].strokeColor = 'pink';

        var ytile = new Fat_Tile(centre.x, centre.y, -72 + tile.rotation);
    }

    //case DA
    if (case_need_to_rewrite == 3) {
        tempvec = tile.da.rotate(108, [0, 0]);
        var temp_vec_path = new Path(tile.vert[3], tile.vert[3] + tempvec);
        temp_vec_path.strokeColor = 'green';
        centre = tile.vert[3] + (tile.da + tempvec) / 2;
        tile.edge[3].strokeColor = 'pink';

        var ytile = new Fat_Tile(centre.x, centre.y, 72 + tile.rotation);
    }

    return ytile;

}


// =================================================================================================
// =        =    =  =======  =       ======  =======  =        ====  ====       ==      ===  ====  =
// =  ========  ==   ======  =  ====  =====   ======  =  =========    ===  ====  =  ===  ==   ==   =
// =  ========  ==    =====  =  ====  =====    =====  =  ========  ==  ==  ====  =  ====  ==  ==  ==
// =  ========  ==  ==  ===  =  ====  =====  ==  ===  =  =======  ====  =  ===   =  ===  ===  ==  ==
// =      ====  ==  ===  ==  =  ====  =====  ===  ==  =      ===  ====  =      ===      =====    ===
// =  ========  ==  ====  =  =  ====  =====  ====  =  =  =======        =  ====  =  ===  =====  ====
// =  ========  ==  =====    =  ====  =====  =====    =  =======  ====  =  ====  =  ====  ====  ====
// =  ========  ==  ======   =  ====  =====  ======   =  =======  ====  =  ====  =  ===  =====  ====
// =  =======    =  =======  =       ======  =======  =        =  ====  =  ====  =      ======  ====
// =================================================================================================

function find_tile_w_that_vertice(vertice) {
    nearby = [];
    var count = 0;
    for (var i = 0; i < tile.length; i++) {
        for (var j = 0; j < 4; j++) {
            if (vertice == tile[i].vert[j]) {
                nearby[count] = tile[i];
                count++;
            }
        }
    }
    console.log(count);
    var myCircle = new Path.Circle(vertice, 10);
    myCircle.fillColor = 'green';


}

// =============================================================================
// =  =====  ====  ====       ==  ====  =====       ==    =  =======  =  ====  =
// =   ===   ===    ===  ====  =  ===  ======  ====  ==  ==   ======  =  ===  ==
// =  =   =  ==  ==  ==  ====  =  ==  =======  ====  ==  ==    =====  =  ==  ===
// =  == ==  =  ====  =  ===   =  =  ========  ====  ==  ==  ==  ===  =  =  ====
// =  =====  =  ====  =      ===     ========       ===  ==  ===  ==  =     ====
// =  =====  =        =  ====  =  ==  =======  ========  ==  ====  =  =  ==  ===
// =  =====  =  ====  =  ====  =  ===  ======  ========  ==  =====    =  ===  ==
// =  =====  =  ====  =  ====  =  ====  =====  ========  ==  ======   =  ====  =
// =  =====  =  ====  =  ====  =  ====  =====  =======    =  =======  =  ====  =
// =============================================================================

function mark_tiles(tiles) {
    for (var i = 0; i < tiles.length; i++) {
        for (var j = 0; j < 4; j++) {
            tiles[i].edge[j].strokeColor = 'pink';
            tiles[i].edge[j].strokeWidth = '4';
        }
    }
}



// =====================================================================
// =================  =====  ====  ====    =  =======  =================
// =================   ===   ===    ====  ==   ======  =================
// =================  =   =  ==  ==  ===  ==    =====  =================
// =================  == ==  =  ====  ==  ==  ==  ===  =================
// =================  =====  =  ====  ==  ==  ===  ==  =================
// =================  =====  =        ==  ==  ====  =  =================
// =================  =====  =  ====  ==  ==  =====    =================
// =================  =====  =  ====  ==  ==  ======   =================
// =================  =====  =  ====  =    =  =======  =================
// =====================================================================

tile = [];
// tile[0].fat_tile.removeSegment(3)

// test_tile[2] = place_fat_by_edge(test_tile[0], 2);
// test_tile[3]= place_fat_by_edge(test_tile[2], 2);

// test.tile[2].mark();

// for (var i = 0; i < 4; i++) {
//     test_tile[2].edge[i].strokeColor = 'pink';
//     test_tile[2].edge[i].strokeWidth = '7';
// }


center_tile = new Fat_Tile(paper.view.center.x, paper.view.center.y, 0);
// center_tile.edge[0].strokeColor = 'blue';
// center_tile.edge[0].strokeWidth = '5';
//
//
tile[0] = place_fat_by_edge(center_tile, 0);
// test_tile[4] = place_fat_by_edge(test_tile[3], 0);
// test_tile[5] = place_fat_by_edge(test_tile[4], 0);
// test_tile[6] = place_fat_by_edge(test_tile[5], 0);

tile[1] = place_fat_by_edge(center_tile, 1);
tile[2] = place_fat_by_edge(center_tile, 2);
tile[3] = place_fat_by_edge(center_tile, 3);
tile[4] = place_fat_by_edge(tile[1], 1);
tile[5] = place_fat_by_edge(tile[4], 1);


tile[6]= new Thin_Tile(800, 100, 0);


find_tiles_w_that_vertice(center_tile.vert[3]);


mark_tiles(nearby);

// var A = new Point(-50 * Math.cos(alpha), 0);
// var B = new Point(0, 50 * Math.sin(alpha));
// var C = new Point(50 * Math.cos(alpha), 0);
// var D = new Point(0, -50 * Math.sin(alpha));

// A +=[200,200];
// B +=[200,200];
// C +=[200,200];
// D +=[200,200];
//
// var myCircleA = new Path.Circle(A, 20);
// myCircleA.fillColor = 'black';
// var myCircleB = new Path.Circle(B, 20);
// myCircleB.fillColor = 'blue';
// var myCircleC = new Path.Circle(C, 20);
// myCircleC.fillColor = 'black';
// var myCircleD = new Path.Circle(D, 20);
// myCircleD.fillColor = 'black';


// ######################################################################

// for (j = 0; j < tile.length; j++) {
//
// }
// for (j = 0; j < outer_edges.length; j++) {
//
// }
// while (var stop != true){
// 	outer_edges[i].
// }

// #############################################################################################################
// #############################################################################################################
// #############################################################################################################
// #############################################################################################################
// #############################################################################################################
// #############################################################################################################
// #############################################################################################################
// #############################################################################################################
// #############################################################################################################
// #############################################################################################################

//
// for (var key in test_tile[0]) {
//     // этот код будет вызван для каждого свойства объекта
//     // ..и выведет имя свойства и его значение
//     console.log("Ключ: " + key + " значение: " + test_tile[0][key]);
// }

// tool.onKeyDown = function(event) {
//     if (event.key == 'space') {
//         // Scale the path by 110%:
//         tile[i] = new Fat_Tile(100 * i, 100);
//         i++;
//     }
//     if (event.key == 'down') {
//         // Scale the path by 110%:
//         tile[i] = new Thin_Tile(100 * i, 100);
//         i++;
//
//         // Prevent the key event from bubbling
//         return false;
//     }
// }

console.log('end');
