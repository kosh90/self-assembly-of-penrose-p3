var alpha = Math.PI / 5;

var side = 50;
var i = 0;
var j = 0;
var epsilon = 0.001;


// ==============================================================================================================
// ====  ====  =======  =========    ===  ====  ====  =        =       ======       =====  ====        =        =
// ===    ===  =======  ========  ==  ==  ====  ====  =  =======  ====  =====  ====  ===    ======  =======  ====
// ==  ==  ==  =======  =======  ====  =  ====  ====  =  =======  ====  =====  ====  ==  ==  =====  =======  ====
// =  ====  =  =======  =======  ====  =  ====  ====  =  =======  ====  =====  ====  =  ====  ====  =======  ====
// =  ====  =  =======  =======  ====  =   ==    ==  ==      ===  ====  =====       ==  ====  ====  =======  ====
// =        =  =======  =======  ====  ==  ==    ==  ==  =======  ====  =====  =======        ====  =======  ====
// =  ====  =  =======  =======  ====  ==  ==    ==  ==  =======  ====  =====  =======  ====  ====  =======  ====
// =  ====  =  =======  ========  ==  ====    ==    ===  =======  ====  =====  =======  ====  ====  =======  ====
// =  ====  =        =        ===    ======  ====  ====        =       ======  =======  ====  ====  =======  ====
// ==============================================================================================================
// >
function Allowed_Pattens() {
    var k = 0;
    allowed_pattern = [];



    points = [];
    points.push(new Point(50 * Math.cos(2 * alpha), 50 * Math.sin(2 * alpha)));
    points[0].kind = 'single_outward_arrow';

    points.push(new Point(50 * Math.cos(2 * alpha * 2), 50 * Math.sin(2 * alpha * 2)));
    points[1].kind = 'single_outward_arrow';

    points.push(new Point(50 * Math.cos(2 * alpha * 3), 50 * Math.sin(2 * alpha * 3)));
    points[2].kind = 'single_outward_arrow';

    points.push(new Point(50 * Math.cos(2 * alpha * 4), 50 * Math.sin(2 * alpha * 4)));
    points[3].kind = 'single_outward_arrow';

    points.push(new Point(50 * Math.cos(2 * alpha * 5), 50 * Math.sin(2 * alpha * 5)));
    points[4].kind = 'single_outward_arrow';


    allowed_pattern[0] = points;




    points = [];
    points.push(new Point(50, 0));
    points[0].kind = 'single_inward_arrow';

    points.push(new Point(50 * Math.cos(-4 * alpha), 50 * Math.sin(-4 * alpha)));
    points[1].kind = 'single_inward_arrow';

    points.push(new Point(50 * Math.cos(3 * alpha), 50 * Math.sin(3 * alpha)));
    points[2].kind = 'double_outward_arrow';



    allowed_pattern[1] = points;




    points = [];
    points.push(new Point(50 * Math.cos(2 * alpha), 50 * Math.sin(2 * alpha)));
    points[0].kind = 'single_outward_arrow';

    points.push(new Point(50 * Math.cos(2 * alpha * 2), 50 * Math.sin(2 * alpha * 2)));
    points[1].kind = 'single_outward_arrow';

    points.push(new Point(50 * Math.cos(2 * alpha * 3), 50 * Math.sin(2 * alpha * 3)));
    points[2].kind = 'single_outward_arrow';

    points.push(new Point(50 * Math.cos(2 * alpha * 4), 50 * Math.sin(2 * alpha * 4)));
    points[3].kind = 'single_outward_arrow';

    points.push(new Point(50 * Math.cos(alpha * 9), 50 * Math.sin(alpha * 9)));
    points[4].kind = 'double_outward_arrow';

    points.push(new Point(50 * Math.cos(2 * alpha * 5), 50 * Math.sin(2 * alpha * 5)));
    points[5].kind = 'single_outward_arrow';


    // allowed_pattern[2] = points;




    points = [];
    points.push(new Point(50, 0));
    points[0].kind = 'single_outward_arrow';

    k = -alpha;
    points.push(new Point(50 * Math.cos(k), 50 * Math.sin(k)));
    points[1].kind = 'single_outward_arrow';

    k = k - alpha;
    points.push(new Point(50 * Math.cos(k), 50 * Math.sin(k)));
    points[2].kind = 'single_outward_arrow';

    k = k - 2 * alpha;
    points.push(new Point(50 * Math.cos(k), 50 * Math.sin(k)));
    points[3].kind = 'single_outward_arrow';

    k = k - alpha;
    points.push(new Point(50 * Math.cos(k), 50 * Math.sin(k)));
    points[4].kind = 'double_outward_arrow';

    k = k - alpha;
    points.push(new Point(50 * Math.cos(k), 50 * Math.sin(k)));
    points[5].kind = 'single_outward_arrow';

    k = k - 2 * alpha;
    points.push(new Point(50 * Math.cos(k), 50 * Math.sin(k)));
    points[5].kind = 'single_outward_arrow';

    k = k - 2 * alpha;
    points.push(new Point(50 * Math.cos(k), 50 * Math.sin(k)));
    points[5].kind = 'single_outward_arrow';



    // allowed_pattern[3] = points;

}


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

    this.outer = false;
    this.rotation = rot;
    this.kind = 'fat';

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
    this.decoration_blue = new Path.Arc(this.vert[0] + this.ab / 3, this.vert[0] + this.ab / 4 + this.bc / 4, this.vert[0] - this.da / 3);
    this.decoration_blue.strokeColor = 'blue';
    this.decoration_blue.strokeWidth = '3';

    this.decoration_red = new Path.Arc(this.vert[2] - this.bc * 3 / 4, this.vert[2] - (this.ab + this.bc) / (2 + 1 / 4), this.vert[2] + this.cd * 3 / 4);
    this.decoration_red.strokeColor = 'red';
    this.decoration_red.strokeWidth = '3';

    this.edge = [];
    this.edge[0] = new Path(this.vert[0], this.vert[0] + this.ab);
    this.edge[0].vert = 'ab';
    this.edge[1] = new Path(this.vert[1], this.vert[1] + this.bc);
    this.edge[1].vert = 'bc';
    this.edge[2] = new Path(this.vert[2], this.vert[2] + this.cd);
    this.edge[2].vert = 'cd';
    this.edge[3] = new Path(this.vert[3], this.vert[3] + this.da);
    this.edge[3].vert = 'da';

    this.edge[0].vec = this.ab;
    this.edge[0].vec.kind = 'double_inward_arrow';

    this.edge[1].vec = this.bc;
    this.edge[1].vec.kind = 'single_inward_arrow';

    this.edge[2].vec = this.cd;
    this.edge[2].vec.kind = 'single_outward_arrow';

    this.edge[3].vec = this.da;
    this.edge[3].vec.kind = 'double_outward_arrow';


    this.edge[0].outer = false;
    this.edge[1].outer = false;
    this.edge[2].outer = false;
    this.edge[3].outer = false;

    // this.tile = new Path(this.vertices);
    // this.tile.fillColor = 'red';
    for (i = 0; i < 4; i++) {
        this.edge[i].strokeColor = 'black';
        this.edge[i].strokeWidth = '2';
        // this.edge[i].position += [x, y];
        // this.edge[i].rotate(rot, [x, y]);
    }



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


    this.outer = false;
    this.rotation = rot;
    this.kind = 'thin';

    this.A = new Point(-50 * Math.cos(alpha / 2), 0);
    this.B = new Point(0, 50 * Math.sin(alpha / 2));
    this.C = new Point(50 * Math.cos(alpha / 2), 0);
    this.D = new Point(0, -50 * Math.sin(alpha / 2));

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
    this.decoration_blue = new Path.Arc(this.vert[1] - this.ab / 3, this.vert[1] - this.ab / 4 + this.bc / 4, this.vert[1] + this.bc / 3);
    this.decoration_blue.strokeColor = 'blue';
    this.decoration_blue.strokeWidth = '3';

    this.decoration_red = new Path.Arc(this.vert[3] + this.da / 4, this.vert[3] + this.da / 4 - this.cd / 4, this.vert[3] - this.cd / 4);
    this.decoration_red.strokeColor = 'red';
    this.decoration_red.strokeWidth = '3';

    this.edge = [];
    this.edge[0] = new Path(this.vert[0], this.vert[0] + this.ab);
    this.edge[0].vert = 'ab';
    this.edge[1] = new Path(this.vert[1], this.vert[1] + this.bc);
    this.edge[1].vert = 'bc';
    this.edge[2] = new Path(this.vert[2], this.vert[2] + this.cd);
    this.edge[2].vert = 'cd';
    this.edge[3] = new Path(this.vert[3], this.vert[3] + this.da);
    this.edge[3].vert = 'da';


    this.edge[0].vec = this.ab;
    this.edge[0].vec.kind = 'double_outward_arrow';

    this.edge[1].vec = this.bc;
    this.edge[1].vec.kind = 'double_inward_arrow';

    this.edge[2].vec = this.cd;
    this.edge[2].vec.kind = 'single_outward_arrow';

    this.edge[3].vec = this.da;
    this.edge[3].vec.kind = 'single_inward_arrow';


    this.edge[0].outer = false;
    this.edge[1].outer = false;
    this.edge[2].outer = false;
    this.edge[3].outer = false;

    // this.tile = new Path(this.vertices);
    // this.tile.fillColor = 'red';
    for (i = 0; i < 4; i++) {
        this.edge[i].strokeColor = 'black';
        this.edge[i].strokeWidth = '2';
        // this.edge[i].position += [x, y];
        // this.edge[i].rotate(rot, [x, y]);
    }


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
    console.log('move');
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

    // tile.edge[num].outer = false;


    var case_need_to_rewrite = -1;
    var tempvec = new Point(0, 0);
    var centre = new Point(0, 0);
    var x1 = tile.edge[num].firstSegment.point.x;
    var y1 = tile.edge[num].firstSegment.point.y;
    var x2 = tile.edge[num].lastSegment.point.x;
    var y2 = tile.edge[num].lastSegment.point.y;
    // tile.edge[num].strokeColor = 'purple';
    // tile.edge[num].strokeWidth = '4';
    //is it outer?

    // var start_cir = new Shape.Circle([x1, y1], 10);
    // start_cir.strokeColor = 'blue';
    // var end_cir = new Shape.Circle([x2, y2], 20);
    // end_cir.strokeColor = 'pink';



    // ===    ==================================    =============
    // ==  ==  ================================  ==  ============
    // ==  ============  =======  =============  ============  ==
    // =    =====   ==    =====    ==   ======    =====   ==    =
    // ==  =====  =  ==  =======  ==     ======  =====  =  ==  ==
    // ==  ========  ==  =======  ==  =  ======  ========  ==  ==
    // ==  ======    ==  =======  ==  =  ======  ======    ==  ==
    // ==  =====  =  ==  =======  ==  =  ======  =====  =  ==  ==
    // ==  ======    ==   ======   ==   =======  ======    ==   =
    // ==========================================================
    if (tile.kind == 'fat') {

        // console.log('fat');

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
        if (case_need_to_rewrite === 0) {
            tempvec = tile.ab.rotate(72, [0, 0]);
            centre = tile.vert[0] + (tile.ab + tempvec) / 2;

            ytile = new Fat_Tile(centre.x, centre.y, -72 + tile.rotation);
        }
        //CASE BC -- 1th case:

        if (case_need_to_rewrite == 1) {
            tempvec = tile.bc.rotate(108, [0, 0]);
            // var temp_vec_path = new Path(tile.vert[1], tile.vert[1]+tempvec);
            // temp_vec_path.strokeColor = 'green';
            centre = tile.vert[1] + (tile.bc + tempvec) / 2;
            // tile.edge[1].strokeColor = 'pink';

            ytile = new Fat_Tile(centre.x, centre.y, 72 + tile.rotation);
        }


        //CASE CD -- 2th case:
        if (case_need_to_rewrite == 2) {
            tempvec = tile.cd.rotate(72, [0, 0]);
            // var temp_vec_path = new Path(tile.vert[2], tile.vert[2] + tempvec);
            // temp_vec_path.strokeColor = 'green';
            centre = tile.vert[2] + (tile.cd + tempvec) / 2;
            // tile.edge[2].strokeColor = 'pink';

            ytile = new Fat_Tile(centre.x, centre.y, -72 + tile.rotation);
        }

        //case DA
        if (case_need_to_rewrite == 3) {
            tempvec = tile.da.rotate(108, [0, 0]);
            // var temp_vec_path = new Path(tile.vert[3], tile.vert[3] + tempvec);
            // temp_vec_path.strokeColor = 'green';
            centre = tile.vert[3] + (tile.da + tempvec) / 2;
            // tile.edge[3].strokeColor = 'pink';

            ytile = new Fat_Tile(centre.x, centre.y, 72 + tile.rotation);
        }
    }


    // ===========================================================
    // ===    =====================================  =============
    // ==  ==  ====================================  =============
    // ==  ============  =======  =============  ==  =============
    // =    =====   ==    =====    ==   ======    =  ====  =  = ==
    // ==  =====  =  ==  =======  ==     ======  ==    =====     =
    // ==  ========  ==  =======  ==  =  ======  ==  =  =  =  =  =
    // ==  ======    ==  =======  ==  =  ======  ==  =  =  =  =  =
    // ==  =====  =  ==  =======  ==  =  ======  ==  =  =  =  =  =
    // ==  ======    ==   ======   ==   =======   =  =  =  =  =  =
    // ===========================================================

    if (tile.kind == 'thin') {

        // console.log('i cant do it ');

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
        if (case_need_to_rewrite === 0) {
            tempvec = tile.ab.rotate(108, [0, 0]);
            centre = tile.vert[0] + (tile.ab + tempvec) / 2;
            // var temp_vec_path = new Path(tile.vert[1], tile.vert[1] + tempvec);
            // temp_vec_path.strokeColor = 'green';

            ytile = new Fat_Tile(centre.x, centre.y, 198 + tile.rotation);
        }
        //CASE BC -- 1th case:

        if (case_need_to_rewrite == 1) {
            tempvec = tile.bc.rotate(72, [0, 0]);
            // var temp_vec_path = new Path(tile.vert[1], tile.vert[1]+tempvec);
            // temp_vec_path.strokeColor = 'green';
            centre = tile.vert[1] + (tile.bc + tempvec) / 2;
            // tile.edge[1].strokeColor = 'pink';

            ytile = new Fat_Tile(centre.x, centre.y, -18 + tile.rotation);
        }


        //CASE CD -- 2th case:
        if (case_need_to_rewrite == 2) {
            tempvec = tile.cd.rotate(72, [0, 0]);
            // var temp_vec_path = new Path(tile.vert[2], tile.vert[2] + tempvec);
            // temp_vec_path.strokeColor = 'green';
            centre = tile.vert[2] + (tile.cd + tempvec) / 2;
            // tile.edge[2].strokeColor = 'pink';

            ytile = new Fat_Tile(centre.x, centre.y, -54 + tile.rotation);
        }

        //case DA
        if (case_need_to_rewrite == 3) {
            tempvec = tile.da.rotate(108, [0, 0]);
            // var temp_vec_path = new Path(tile.vert[3], tile.vert[3] + tempvec);
            // temp_vec_path.strokeColor = 'green';
            centre = tile.vert[3] + (tile.da + tempvec) / 2;
            // tile.edge[3].strokeColor = 'pink';

            ytile = new Fat_Tile(centre.x, centre.y, -18 - 18 - 36 - 36 - 18 + tile.rotation);
        }
    }


    return ytile;

}


// =====================================================================================
// =       ==  ==========  ======     ==        =====        =  ====  =    =  =======  =
// =  ====  =  =========    ====  ===  =  ==============  ====  ====  ==  ==   ======  =
// =  ====  =  ========  ==  ==  =======  ==============  ====  ====  ==  ==    =====  =
// =  ====  =  =======  ====  =  =======  ==============  ====  ====  ==  ==  ==  ===  =
// =       ==  =======  ====  =  =======      ==========  ====        ==  ==  ===  ==  =
// =  =======  =======        =  =======  ==============  ====  ====  ==  ==  ====  =  =
// =  =======  =======  ====  =  =======  ==============  ====  ====  ==  ==  =====    =
// =  =======  =======  ====  ==  ===  =  ==============  ====  ====  ==  ==  ======   =
// =  =======        =  ====  ===     ==        ========  ====  ====  =    =  =======  =
// =====================================================================================


//place xtile to edge number 'num' of tile:
function place_thin_by_edge(tile, num) {
    // console.log('place_thin_tile.edge[num]',tile.edge[num]);
    // tile.edge[num].outer = false;

    var case_need_to_rewrite = -1;
    var tempvec = new Point(0, 0);
    var centre = new Point(0, 0);
    var x1 = tile.edge[num].firstSegment.point.x;
    var y1 = tile.edge[num].firstSegment.point.y;
    var x2 = tile.edge[num].lastSegment.point.x;
    var y2 = tile.edge[num].lastSegment.point.y;
    // tile.edge[num].strokeColor = 'purple';
    // tile.edge[num].strokeWidth = '4';
    //is it outer?

    // var start_cir = new Shape.Circle([x1, y1], 10);
    // start_cir.strokeColor = 'blue';
    // var end_cir = new Shape.Circle([x2, y2], 20);
    // end_cir.strokeColor = 'pink';


    // ===========================================================
    // ======  ==================================    =============
    // ======  =================================  ==  ============
    // ==  ==  ==================  =============  ============  ==
    // =    =  ====  =  = ======    ==   ======    =====   ==    =
    // ==  ==    =====     ======  ==     ======  =====  =  ==  ==
    // ==  ==  =  =  =  =  ======  ==  =  ======  ========  ==  ==
    // ==  ==  =  =  =  =  ======  ==  =  ======  ======    ==  ==
    // ==  ==  =  =  =  =  ======  ==  =  ======  =====  =  ==  ==
    // ==   =  =  =  =  =  ======   ==   =======  ======    ==   =
    // ===========================================================

    if (tile.kind == 'fat') {
        if (tile.edge[num].vert == 'ab') {

            case_need_to_rewrite = 0;
        }
        if (tile.edge[num].vert == 'bc') {

            case_need_to_rewrite = 1;
        }
        if (tile.edge[num].vert == 'cd') {

            case_need_to_rewrite = 2;
        }
        if (tile.edge[num].vert == 'da') {

            case_need_to_rewrite = 3;
        }

        //CASE AB -- 0th case:
        if (case_need_to_rewrite === 0) {
            tempvec = tile.ab.rotate(144, [0, 0]);
            // var temp_vec_path = new Path(tile.vert[0], tile.vert[0]+tempvec);
            // temp_vec_path.strokeColor = 'green';
            centre = tile.vert[0] + (tile.ab + tempvec) / 2;

            ytile = new Thin_Tile(centre.x, centre.y, 162 + tile.rotation);
        }

        //CASE BC -- 1th case:
        if (case_need_to_rewrite == 1) {
            tempvec = tile.bc.rotate(144, [0, 0]);
            // var temp_vec_path = new Path(tile.vert[1], tile.vert[1] + tempvec);
            // temp_vec_path.strokeColor = 'green';
            centre = tile.vert[1] + (tile.bc + tempvec) / 2;
            // tile.edge[1].strokeColor = 'pink';

            ytile = new Thin_Tile(centre.x, centre.y, 54 + tile.rotation);
        }

        //CASE CD -- 2th case:
        if (case_need_to_rewrite == 2) {
            tempvec = tile.cd.rotate(36, [0, 0]);
            // var temp_vec_path = new Path(tile.vert[2], tile.vert[2] + tempvec);
            // temp_vec_path.strokeColor = 'green';
            centre = tile.vert[2] + (tile.cd + tempvec) / 2;
            // tile.edge[2].strokeColor = 'pink';

            ytile = new Thin_Tile(centre.x, centre.y, 126 + tile.rotation);
        }

        //case DA
        if (case_need_to_rewrite == 3) {
            tempvec = tile.da.rotate(36, [0, 0]);
            // var temp_vec_path = new Path(tile.vert[3], tile.vert[3] + tempvec);
            // temp_vec_path.strokeColor = 'green';
            centre = tile.vert[3] + (tile.da + tempvec) / 2;
            // tile.edge[3].strokeColor = 'pink';

            ytile = new Thin_Tile(centre.x, centre.y, 18 + tile.rotation);
        }
    }

    //
    // ============================================================
    // ======  =====================================  =============
    // ======  =====================================  =============
    // ==  ==  ==================  =============  ==  =============
    // =    =  ====  =  = ======    ==   ======    =  ====  =  = ==
    // ==  ==    =====     ======  ==     ======  ==    =====     =
    // ==  ==  =  =  =  =  ======  ==  =  ======  ==  =  =  =  =  =
    // ==  ==  =  =  =  =  ======  ==  =  ======  ==  =  =  =  =  =
    // ==  ==  =  =  =  =  ======  ==  =  ======  ==  =  =  =  =  =
    // ==   =  =  =  =  =  ======   ==   =======   =  =  =  =  =  =
    // ============================================================

    if (tile.kind == 'thin') {
        if (tile.edge[num].vert == 'ab') {

            case_need_to_rewrite = 0;
        }
        if (tile.edge[num].vert == 'bc') {

            case_need_to_rewrite = 1;
        }
        if (tile.edge[num].vert == 'cd') {

            case_need_to_rewrite = 2;
        }
        if (tile.edge[num].vert == 'da') {

            case_need_to_rewrite = 3;
        }

        //CASE AB -- 0th case:
        if (case_need_to_rewrite === 0) {
            tempvec = tile.ab.rotate(36, [0, 0]);
            // var temp_vec_path = new Path(tile.vert[0], tile.vert[0]+tempvec);
            // temp_vec_path.strokeColor = 'green';
            centre = tile.vert[0] + (tile.ab + tempvec) / 2;

            ytile = new Thin_Tile(centre.x, centre.y, 144 + tile.rotation);
        }

        //CASE BC -- 1th case:
        if (case_need_to_rewrite == 1) {
            tempvec = tile.bc.rotate(144, [0, 0]);
            // var temp_vec_path = new Path(tile.vert[1], tile.vert[1]+tempvec);
            // temp_vec_path.strokeColor = 'green';
            centre = tile.vert[1] + (tile.bc + tempvec) / 2;
            // tile.edge[1].strokeColor = 'pink';

            ytile = new Thin_Tile(centre.x, centre.y, -144 + tile.rotation);
        }

        //CASE CD -- 2th case:
        if (case_need_to_rewrite == 2) {
            tempvec = tile.cd.rotate(36, [0, 0]);
            // var temp_vec_path = new Path(tile.vert[2], tile.vert[2] + tempvec);
            // temp_vec_path.strokeColor = 'green';
            centre = tile.vert[2] + (tile.cd + tempvec) / 2;
            // tile.edge[2].strokeColor = 'pink';

            ytile = new Thin_Tile(centre.x, centre.y, 144 + tile.rotation);
        }

        //case DA
        if (case_need_to_rewrite == 3) {
            tempvec = tile.da.rotate(144, [0, 0]);
            // var temp_vec_path = new Path(tile.vert[3], tile.vert[3] + tempvec);
            // temp_vec_path.strokeColor = 'green';
            centre = tile.vert[3] + (tile.da + tempvec) / 2;
            // tile.edge[3].strokeColor = 'pink';

            ytile = new Thin_Tile(centre.x, centre.y, -144 + tile.rotation);
        }
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

//nearby_edges_as_vectors also here
function find_tiles_w_that_vertice(vertice, sometiles) {
    nearby_tiles = [];

    nearby_edges_as_vectors = [];
    nearby_vert = [];
    var epsilon = 0.001;
    var count = 0;
    edges_count = 0;

    // console.log('sometiles.length', sometiles.length);
    // console.log(vertice  - sometiles[1].vert[1]);
    // console.log(sometiles[1].vert[1]);

    // console.log((vertice.x - sometiles[i].vert[j].x < epsilon));
    // console.log((vertice.y - sometiles[i].vert[j].y < epsilon));
    // (vertice.x - sometiles[i].vert[j].x <= epsilon)

    // (vertice.y - sometiles[i].vert[j].y <= epsilon)
    for (var i = 0; i < sometiles.length; i++) {
        for (var j = 0; j < 4; j++) {
            if ((Math.abs(vertice.x - sometiles[i].vert[j].x) <= epsilon) &&
                (Math.abs(vertice.y - sometiles[i].vert[j].y) <= epsilon)) {


                nearby_tiles[count] = sometiles[i];
                count++;

                if (j > 0) {
                    nearby_edges_as_vectors.push(sometiles[i].edge[j].vec);
                    // nearby_edges_as_vectors.push(sometiles[i].edge[j - 1].vec * (-1)); //not working
                    nearby_edges_as_vectors.push(reverse_vec(sometiles[i].edge[j - 1].vec));

                    edges_count += 2;
                }
                if (j === 0) {
                    nearby_edges_as_vectors.push(sometiles[i].edge[0].vec);
                    // nearby_edges_as_vectors.push(sometiles[i].edge[3].vec * (-1));  //not WORKING
                    nearby_edges_as_vectors.push(reverse_vec(sometiles[i].edge[3].vec));

                    edges_count += 2;
                }



                // console.log('.x -.x ', vertice.x - sometiles[i].vert[j].x);
                // console.log('.y - sometiles[i].vert[j].y ', vertice.y - sometiles[i].vert[j].y);
                // console.log('i ', i);
                // console.log('j ', j);
                // console.log('count', count);

                // break;

            }
        }
    }
    // for (var i = 0; i < sometiles.length; i++) {
    //     for (var j = 0; j < 4; j++) {
    //         if (vertice == sometiles[i].vert[j]) {
    //             nearby[count] = sometiles[i];
    //             count++;
    //         }
    //     }
    // }
    // console.log('count = ', count);
    var myCircle = new Path.Circle(vertice, 7);
    myCircle.strokeColor = 'green';

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

//
// =======================================================================================
// =  =====  ====  ====       ==  ====  =====        =       ===      ==        ==      ==
// =   ===   ===    ===  ====  =  ===  ======  =======  ====  =   ==   =  =======  ====  =
// =  =   =  ==  ==  ==  ====  =  ==  =======  =======  ====  =  ====  =  =======  ====  =
// =  == ==  =  ====  =  ===   =  =  ========  =======  ====  =  =======  ========  ======
// =  =====  =  ====  =      ===     ========      ===  ====  =  =======      ======  ====
// =  =====  =        =  ====  =  ==  =======  =======  ====  =  ===   =  ============  ==
// =  =====  =  ====  =  ====  =  ===  ======  =======  ====  =  ====  =  =======  ====  =
// =  =====  =  ====  =  ====  =  ====  =====  =======  ====  =   ==   =  =======  ====  =
// =  =====  =  ====  =  ====  =  ====  =====        =       ===      ==        ==      ==
// =======================================================================================

function mark_edges(some_edges) {

    for (var i = 0; i < some_edges.length; i++) {
        some_edges[i].strokeColor = 'purple';
        some_edges[i].strokeWidth = '4';
    }
}





// ==================================================================================================
// ==      ==        =        =====       =====  ====        =        =        =       ==  =======  =
// =   ==   =  ==========  ========  ====  ===    ======  =======  ====  =======  ====  =   ======  =
// =  ====  =  ==========  ========  ====  ==  ==  =====  =======  ====  =======  ====  =    =====  =
// =  =======  ==========  ========  ====  =  ====  ====  =======  ====  =======  ===   =  ==  ===  =
// =  =======      ======  ========       ==  ====  ====  =======  ====      ===      ===  ===  ==  =
// =  ===   =  ==========  ========  =======        ====  =======  ====  =======  ====  =  ====  =  =
// =  ====  =  ==========  ========  =======  ====  ====  =======  ====  =======  ====  =  =====    =
// =   ==   =  ==========  ========  =======  ====  ====  =======  ====  =======  ====  =  ======   =
// ==      ==        ====  ========  =======  ====  ====  =======  ====        =  ====  =  =======  =
// ==================================================================================================
// function get_pattern(vec) {
//
//     console.log('get pattern yo');
//
//     pattern = [];
//     for (var i = 0; i < vec.length; i++) {
//         console.log(i, '-th angle ', vec[i].angle);
//     }
//
//
//
// }
//
// ===============================================================================================
// ==      ====     =====  ====  ==========  ====       ======       ==       ====    ===       ==
// =  ====  ==  ===  ===    ===  =========    ===  ====  =====  ====  =  ====  ==  ==  ==  ====  =
// =  ====  =  ========  ==  ==  ========  ==  ==  ====  =====  ====  =  ====  =  ====  =  ====  =
// ==  ======  =======  ====  =  =======  ====  =  ===   =====  ====  =  ===   =  ====  =  ====  =
// ====  ====  =======  ====  =  =======  ====  =      =======       ==      ===  ====  =  ====  =
// ======  ==  =======        =  =======        =  ====  =====  =======  ====  =  ====  =  ====  =
// =  ====  =  =======  ====  =  =======  ====  =  ====  =====  =======  ====  =  ====  =  ====  =
// =  ====  ==  ===  =  ====  =  =======  ====  =  ====  =====  =======  ====  ==  ==  ==  ====  =
// ==      ====     ==  ====  =        =  ====  =  ====  =====  =======  ====  ===    ===       ==
// ===============================================================================================
function scalar_product(vec1, vec2) {
    return vec1.x * vec2.x + vec1.y * vec2.y;
}


//векторы нормированные
function is_collinear(vec1, vec2) {
    var temp = vec1.x * vec2.y - vec1.y * vec2.x;
    return Math.abs(temp);
}

// ================================================================================================
// ==      ==        =        =====  ====  =  =======  ======     ======  ====  =        ===     ==
// =   ==   =  ==========  ========  ====  =   ======  =====  ===  =====  ====  =  ========  ===  =
// =  ====  =  ==========  ========  ====  =    =====  ====  ===========  ====  =  =======  =======
// =  =======  ==========  ========  ====  =  ==  ===  =  =  ===========  ====  =  =======  =======
// =  =======      ======  ========  ====  =  ===  ==  ====  ===========   ==   =      ===  =======
// =  ===   =  ==========  ========  ====  =  ====  =  =  =  ============  ==  ==  =======  =======
// =  ====  =  ==========  ========  ====  =  =====    =  =  ============  ==  ==  =======  =======
// =   ==   =  ==========  ========   ==   =  ======   =  ==  ===  =======    ===  ========  ===  =
// ==      ==        ====  =========      ==  =======  =  ===     =========  ====        ===     ==
// ================================================================================================
function get_unic_vec(vectors) {
    var epsilon = 0.001;
    // console.log('get_unic_vec');
    unique_edges_as_vectors = [];
    unique_edges_as_vectors[0] = nearby_edges_as_vectors[0];

    for (var i = 1; i < nearby_edges_as_vectors.length; i++) {
        if (already_in_uniques(nearby_edges_as_vectors[i]) === 0) {
            unique_edges_as_vectors.push(nearby_edges_as_vectors[i]);
        }
        // console.log('i', i);

    }

    function already_in_uniques(edge_as_vec) {

        for (var j = 0; j < unique_edges_as_vectors.length; j++) {
            // console.log('j', j);
            if (vectors_are_equal(edge_as_vec, unique_edges_as_vectors[j])) {
                // console.log('ravno');
                // console.log(unique_edges_as_vectors[j].vec);
                // console.log(edge.vec);
                // console.log(edge.vec - unique_edges_as_vectors[j].vec);
                return 1;
            }

        }
        return 0;

        // console.log("unique_edges_as_vectors", unique_edges_as_vectors.length);
        // console.log("unique_edges_as_vectors", unique_edges_as_vectors);
    }
}

//
// ===========================================================================================================
// =       ==  =========    ===        =====       =====  ====        =        =        =       ==  =======  =
// =  ====  =  ========  ==  =====  ========  ====  ===    ======  =======  ====  =======  ====  =   ======  =
// =  ====  =  =======  ====  ====  ========  ====  ==  ==  =====  =======  ====  =======  ====  =    =====  =
// =  ====  =  =======  ====  ====  ========  ====  =  ====  ====  =======  ====  =======  ===   =  ==  ===  =
// =       ==  =======  ====  ====  ========       ==  ====  ====  =======  ====      ===      ===  ===  ==  =
// =  =======  =======  ====  ====  ========  =======        ====  =======  ====  =======  ====  =  ====  =  =
// =  =======  =======  ====  ====  ========  =======  ====  ====  =======  ====  =======  ====  =  =====    =
// =  =======  ========  ==  =====  ========  =======  ====  ====  =======  ====  =======  ====  =  ======   =
// =  =======        ===    ======  ========  =======  ====  ====  =======  ====        =  ====  =  =======  =
// ===========================================================================================================

function plot_pattern(vectors, x, y) {
    // console.log("plooooot_pattern");
    // console.log(vectors[0].kind);


    // console.log("plooooot_pattern");

    // console.log(vectors);


    // for(var i = 0; i < vectors.length; i++)
    // {
    // 		if(isNaN(vectors[0].kind )){
    // 			console.log('nan is ok');
    // 		}
    // 	}

    pattern_plot = [];
    var center = new Point(paper.view.center.x * x, paper.view.center.y * y);

    // console.log(center);



    for (var i = 0; i < vectors.length; i++) {
        pattern_plot[i] = new Path(center, center + vectors[i]);

        pattern_plot[i].strokeColor = 'green';


        pattern_plot[i].strokeWidth = '3';
        // console.log('pattern_plot kind');
        // console.log(pattern_plot.kind);
        if (vectors[i].kind == 'single_outward_arrow') {
            pattern_plot[i].strokeColor = 'red';
        }
        if (vectors[i].kind == 'double_outward_arrow') {
            pattern_plot[i].strokeColor = 'purple';
        }
        if (vectors[i].kind == 'single_inward_arrow') {
            pattern_plot[i].strokeColor = 'yellow';
        }
        if (vectors[i].kind == 'double_inward_arrow') {
            pattern_plot[i].strokeColor = 'blue';
        }

    }
}


// ========================================================================================================
// ==      ====    ===       ==        =====  ====  =        ===     ==        ===    ===       ===      ==
// =  ====  ==  ==  ==  ====  ====  ========  ====  =  ========  ===  ====  =====  ==  ==  ====  =  ====  =
// =  ====  =  ====  =  ====  ====  ========  ====  =  =======  ==========  ====  ====  =  ====  =  ====  =
// ==  ======  ====  =  ===   ====  ========  ====  =  =======  ==========  ====  ====  =  ===   ==  ======
// ====  ====  ====  =      ======  ========   ==   =      ===  ==========  ====  ====  =      ======  ====
// ======  ==  ====  =  ====  ====  =========  ==  ==  =======  ==========  ====  ====  =  ====  ======  ==
// =  ====  =  ====  =  ====  ====  =========  ==  ==  =======  ==========  ====  ====  =  ====  =  ====  =
// =  ====  ==  ==  ==  ====  ====  ==========    ===  ========  ===  ====  =====  ==  ==  ====  =  ====  =
// ==      ====    ===  ====  ====  ===========  ====        ===     =====  ======    ===  ====  ==      ==
// ========================================================================================================

function sort_vec(vectors) {
    var x = 0;
    var j = 0;
    for (var i = 1; i < vectors.length; i++) {
        x = vectors[i];
        j = i - 1;
        while ((j >= 0) && (vectors[j].angle > x.angle)) {
            vectors[j + 1] = vectors[j];
            j--;
        }
        vectors[j + 1] = x;
    }

}


function reverse_vec(vector) {
    if (vector.kind == 'single_outward_arrow') {
        vector = vector * (-1);
        vector.kind = 'single_inward_arrow';
        return vector;

    }
    if (vector.kind == 'single_inward_arrow') {
        vector = vector * (-1);
        vector.kind = 'single_outward_arrow';
        return vector;

    }
    if (vector.kind == 'double_outward_arrow') {
        vector = vector * (-1);
        vector.kind = 'double_inward_arrow';
        return vector;

    }
    if (vector.kind == 'double_inward_arrow') {
        vector = vector * (-1);
        vector.kind = 'double_inward_arrow';
        return vector;

    }
}

//
// ==========================================================================================================
// =    ==      ======    =        ========  ====  =======  =========    ===  ====  ====  =        =       ==
// ==  ==  ====  ======  =====  ==========    ===  =======  ========  ==  ==  ====  ====  =  =======  ====  =
// ==  ==  ====  ======  =====  =========  ==  ==  =======  =======  ====  =  ====  ====  =  =======  ====  =
// ==  ===  ===========  =====  ========  ====  =  =======  =======  ====  =  ====  ====  =  =======  ====  =
// ==  =====  =========  =====  ========  ====  =  =======  =======  ====  =   ==    ==  ==      ===  ====  =
// ==  =======  =======  =====  ========        =  =======  =======  ====  ==  ==    ==  ==  =======  ====  =
// ==  ==  ====  ======  =====  ========  ====  =  =======  =======  ====  ==  ==    ==  ==  =======  ====  =
// ==  ==  ====  ======  =====  ========  ====  =  =======  ========  ==  ====    ==    ===  =======  ====  =
// =    ==      ======    ====  ========  ====  =        =        ===    ======  ====  ====        =       ==
// ==========================================================================================================

function is_it_allowed(vec) {
    vec_temp = [];
    console.log('#############################>>>>>>>>>  IS IT ALLOWED AARHH? <<<<<<<<################################');
    // console.log(allowed_pattern[1]);
    // console.log(vec);
    // console.log('arrows:');
    // for (var i = 0; i < vec.length; i++) {
    // console.log(vec[i].kind);
    // }


    // console.log('qq', vec[0].kind);
    // vec[0] = vec[0] * (-1);
    // console.log('qqq', vec[0].kind);

    for (i = 0; i < allowed_pattern.length; i++) {
        // console.log('max i', allowed_pattern.length);
        // console.log('############################>>>>>>>>> i', i);
        for (j = 0; j < allowed_pattern[i].length; j++) {
            // console.log('rotating, j', j);
            vec_temp = rotate_and_match(vec, allowed_pattern[i][j].angle);
            if (patterns_are_equal(vec_temp, i)) {
                console.log('ALLOWED, patter num', i);
                console.log('rotation num', j);
                return 1;
            }
        }
    }

    console.log('NOT ALLOWED');
    console.log('is it allowed has ended');
    return 0;
}







/////////////////
/////////////////
function rotate_and_match(vec, angle) {

    angle = angle - vec[0].angle;
    for (var i = 0; i < vec.length; i++) {
        // console.log('vec angle old', vec[0]);
        // vec[i] = vec[i].rotate(angle - vec[0].angle, [0,0]);
        vec[i] = vec[i].rotate(angle, [0, 0]);
    }
    return vec;
}







/////////////////
/////////////////
function patterns_are_equal(vec, n) {
    var count = 0;
    for (var i = 0; i < vec.length; i++) {
        // console.log('patterns_are_equal i', i);
        for (var j = 0; j < allowed_pattern[n].length; j++) {
            // console.log('patterns_are_equal j', j);

            if (vectors_are_equal(vec[i], allowed_pattern[n][j])) {
                count++;
                // console.log("count", count);
                // console.log(vec[i], allowed_pattern[n][j]);
                break;

            }

        }


    }


    // console.log(vec.length, count);
    if (count == vec.length) {
        // console.log('patterns_are_equal -- TRUE');
        return 1;

    }



    // console.log('patterns_are_equal -- FALSE');
    return 0;


    // console.log('error');
}

function vectors_are_equal(vec1, vec2) {

    if ((Math.abs(vec1.x - vec2.x) < epsilon) &&
        (Math.abs(vec1.y - vec2.y) < epsilon)) {

        // console.log('vectors_are_equal -- TRUE');
        // console.log(vec1.x - vec2.x, vec1.y - vec2.y);
        return 1;
    } else {

        // console.log('vectors_are_equal -- FALSE');
        return 0;
    }

}
//
// ==============================================================================================================================
// ==      ==        =        =======    ===  ====  =        =        =       ======        =       ===      ==        ==      ==
// =   ==   =  ==========  =========  ==  ==  ====  ====  ====  =======  ====  =====  =======  ====  =   ==   =  =======  ====  =
// =  ====  =  ==========  ========  ====  =  ====  ====  ====  =======  ====  =====  =======  ====  =  ====  =  =======  ====  =
// =  =======  ==========  ========  ====  =  ====  ====  ====  =======  ===   =====  =======  ====  =  =======  ========  ======
// =  =======      ======  ========  ====  =  ====  ====  ====      ===      =======      ===  ====  =  =======      ======  ====
// =  ===   =  ==========  ========  ====  =  ====  ====  ====  =======  ====  =====  =======  ====  =  ===   =  ============  ==
// =  ====  =  ==========  ========  ====  =  ====  ====  ====  =======  ====  =====  =======  ====  =  ====  =  =======  ====  =
// =   ==   =  ==========  =========  ==  ==   ==   ====  ====  =======  ====  =====  =======  ====  =   ==   =  =======  ====  =
// ==      ==        ====  ==========    ====      =====  ====        =  ====  =====        =       ===      ==        ==      ==
// ==============================================================================================================================

function get_outer_edges(tiles) {
    outer_edges = [];
    // console.log('tiles0.edge', tiles[0].edge);
    // console.log('tiles0.edge', tiles[0].edge[3].outer);
    for (var i = 0; i < tiles.length; i++) {
        for (var j = 0; j < 4; j++) {
            if (tiles[i].edge[j].outer === true) {
                // console.log('tiles[i].edge[j].outer is true', i, j);
                outer_edges.push(tiles[i].edge[j]);
                outer_edges[outer_edges.length - 1].tilenum = i;
                outer_edges[outer_edges.length - 1].edgenum = j;
            }
        }
    }
}

//
// ============================================
// ===================================  =======
// ===================================  =======
// ============================  =====  =======
// =    ===   ==    ==========    =  =  ==   ==
// =  =  =     =  =  ==========  =====  =  =  =
// =  =  =  =  =  =  ==========  ==  =  =     =
// =    ==  =  =    ===========  ==  =  =  ====
// =  ====  =  =  =============  ==  =  =  =  =
// =  =====   ==  ====       ==   =  =  ==   ==
// ============================================

function pop_tile(tiles) {
    tilenum = [tiles.length - 1];
    for (var i = 0; i < 4; i++) {
        tiles[tilenum].edge[i].remove();
    }
    tiles[tilenum].decoration_blue.remove();
    tiles[tilenum].decoration_red.remove();
    tiles.pop();
}

//
// ==================================================================================
// =    ==      ======    =        =======    ===  ====  =        =        =       ==
// ==  ==  ====  ======  =====  =========  ==  ==  ====  ====  ====  =======  ====  =
// ==  ==  ====  ======  =====  ========  ====  =  ====  ====  ====  =======  ====  =
// ==  ===  ===========  =====  ========  ====  =  ====  ====  ====  =======  ===   =
// ==  =====  =========  =====  ========  ====  =  ====  ====  ====      ===      ===
// ==  =======  =======  =====  ========  ====  =  ====  ====  ====  =======  ====  =
// ==  ==  ====  ======  =====  ========  ====  =  ====  ====  ====  =======  ====  =
// ==  ==  ====  ======  =====  =========  ==  ==   ==   ====  ====  =======  ====  =
// =    ==      ======    ====  ==========    ====      =====  ====        =  ====  =
// ==================================================================================
// ребро и множество тайлов
// хотя можно просто искать в множестве outer_edges
// если совпало с кем-нибудь, то говорим не outer
// если нет, то пишем outer
//
function is_outer(edge, outer_edges) {

    for (var i = 0; i < outer_edges.length; i++) {
        if (edges_are_equal(outer_edges[i], edge)) {
            console.log('IS IT OUTER -- false');
            outer_edges[i].outer = false;
            return 0;
        }

    }
    console.log('IS IT OUTER -- TRUE');
    edge.outer = true;
    return 1;


}
//edges_are_equal
function edges_are_equal(edge1, edge2) {
    this.x1 = edge1.firstSegment.point.x;
    this.y1 = edge1.firstSegment.point.y;

    this.x2 = edge1.lastSegment.point.x;
    this.y2 = edge1.lastSegment.point.y;

    this.a1 = edge2.firstSegment.point.x;
    this.b1 = edge2.firstSegment.point.y;

    this.a2 = edge2.lastSegment.point.x;
    this.b2 = edge2.lastSegment.point.y;

    if ((this.x1 == this.a1) && (this.y1 == this.b1) && (this.x2 == this.a2) && (this.y2 == this.b2)) {
        console.log('edges_are_equal -- true');
        return 1;
    }
    if ((this.x1 == this.a2) && (this.y1 == this.b2) && (this.x2 == this.a1) && (this.y2 == this.b1)) {
        console.log('edges_are_equal -- true');
        return 1;
    }

    console.log('edges_are_equal -- false');
    return 0;

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

Allowed_Pattens();

plot_pattern(allowed_pattern[allowed_pattern.length - 1], 0.2, 0.2);
// plot_pattern(allowed_pattern[1], 1.2, 0.5);



a_tiles = [];
b_tiles = [];
c_tiles = [];
tile = [];
thin = [];
var outer_edges = [];

// a_tiles[0] = new Fat_Tile(paper.view.center.x , paper.view.center.y, 0);
// a_tiles.push(new place_thin_by_edge(a_tiles[0], 1));
// a_tiles.push(new place_thin_by_edge(a_tiles[1], 1));
// a_tiles.push(new place_fat_by_edge(a_tiles[2], 3));
// a_tiles.push(new place_thin_by_edge(a_tiles[3], 1));
// a_tiles.push(new place_thin_by_edge(a_tiles[4], 1));
// a_tiles.push(new place_fat_by_edge(a_tiles[5], 3));
// a_tiles.push(new place_fat_by_edge(a_tiles[6], 3));




b_tiles[0] = new Fat_Tile(paper.view.center.x, paper.view.center.y, 0);
b_tiles[0].edge[0].outer = true;
b_tiles[0].edge[2].outer = true;
b_tiles[0].edge[3].outer = true;
b_tiles.push(new place_fat_by_edge(b_tiles[0], 1));
b_tiles[1].edge[0].outer = true;
b_tiles[1].edge[3].outer = true;
b_tiles.push(new place_thin_by_edge(b_tiles[1], 1));
b_tiles[2].edge[0].outer = true;
b_tiles[2].edge[1].outer = true;
b_tiles[2].edge[3].outer = true;

// b_tiles.push(new place_thin_by_edge(b_tiles[2], 1));


// c_tiles[0] = new Thin_Tile(paper.view.center.x * 1, paper.view.center.y * 1.5, 0);
// c_tiles[1] = new Fat_Tile(paper.view.center.x * 1.5, paper.view.center.y * 1.75, 0);
// c_tiles.push(new place_fat_by_edge(c_tiles[0],2));

// #############################################################################################################
// #############################################################################################################
// #############################################################################################################
function is_it_forced(edge, tiles) {
    tiles.push(new place_fat_by_edge(tiles[edge.tilenum], edge.edgenum));
    find_tiles_w_that_vertice(edge.firstSegment.point, b_tiles);
    get_unic_vec(nearby_edges_as_vectors);
    plot_pattern(unique_edges_as_vectors, 0.2, 1.5);
    if (is_it_allowed(unique_edges_as_vectors)) {
        return -666;

    } else {
        pop_tile(tiles);
    }

    return -666;
}
// #############################################################################################################
// #############################################################################################################
// #############################################################################################################
get_outer_edges(b_tiles);
console.log("outer_edges", outer_edges);

// function mark_edges(edges)
// for (var i = 0; i < edges.length; i++) {
//     edges[i].strokeColor = 'purple';
// }

// find_tiles_w_that_vertice(a_tiles[0].vert[2], a_tiles);
// find_tiles_w_that_vertice(b_tiles[0].vert[2], b_tiles);
//
var rand = Math.floor((Math.random() * outer_edges.length));

get_outer_edges(b_tiles);

// -------- поставить тайл и обновить outer_edges:
b_tiles.push(new place_fat_by_edge(b_tiles[outer_edges[rand].tilenum], outer_edges[rand].edgenum));

// важная строчка, что не дело



// для всех ребер нового тайла обновить outer
update_outer_propery_4_new_tile(b_tiles[b_tiles.length-1], outer_edges);
// for (var i = 0; i < 4; i++) {
//     if (is_outer(b_tiles[b_tiles.length - 1].edge[i], outer_edges) === 1) {
//         // b_tiles[b_tiles.length - 1].edge[i].outer = true;
//         // outer_edges.push(b_tiles[b_tiles.length-1].edge[i]);
//     }
// }

// b_tiles[outer_edges[rand].tilenum].edge[outer_edges[rand].edgenum].outer = false;
get_outer_edges(b_tiles);

find_tiles_w_that_vertice(b_tiles[2].edge[1].firstSegment.point, b_tiles);


find_tiles_w_that_vertice(b_tiles[2].edge[1].lastSegment.point, b_tiles);

mark_edges(outer_edges);

// -------- кул

function update_outer_propery_4_new_tile(tile, outer_edges) {

    for (var i = 0; i < 4; i++) {
        is_outer(tile.edge[i], outer_edges);
        // b_tiles[b_tiles.length - 1].edge[i].outer = true;
        // outer_edges.push(b_tiles[b_tiles.length-1].edge[i]);

    }

}


// дальше

// случайно выбираем ребро на границе
// ну или цикл
//
// for (var i = 0; i < outer_edges.length; i++) {
// 	if(is_it_forced_check(outer_edges[i])>0){
//
// }
// }
// для данного ребра проверяем тип, пока только является ли он типа forced
// 	если является, то поставить подходящий тайл
// 	подровнять outer_edges
// если нет,
//
//

// outer_edges[rand].strokeColor = 'FUCHSIA';
// console.log('is it forced', is_it_forced(outer_edges[rand], b_tiles));
// var k =0;
// while (k<20) {
// 	rand = Math.floor((Math.random() * outer_edges.length));
// 	console.log('is it forced', is_it_forced(outer_edges[rand], b_tiles));
//
// 	k++;
// }
// console.log(b_tiles);
// pop_tile([b_tiles.length-1], b_tiles);
// console.log(b_tiles);

// mark_edges(nearby_edges_as_vectors);
// mark_tiles(nearby_tiles);

// get_unic_vec(nearby_edges_as_vectors);

// console.log(unique_edges_as_vectors, nearby_edges_as_vectors);
// plot_pattern(unique_edges_as_vectors, 0.2, 1.5);



// console.log('sort_check');
// sort_vec(unique_edges_as_vectors);
// console.log(unique_edges_as_vectors);

// is_it_allowed(unique_edges_as_vectors);



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


console.log('end');
