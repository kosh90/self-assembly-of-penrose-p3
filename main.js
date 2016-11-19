var alpha = Math.PI / 5;

var side = 50;
var i = 0;
var j = 0;


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
    allowed_pattern = [];
    allowed_pattern[0] = ['>', '72', '>', '72', '>', '72', '>', '72', '>', '72'];
    allowed_pattern[1] = [];

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


    allowed_pattern[1] = points;

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

    this.outer = true;
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
    var decoration_blue = new Path.Arc(this.vert[0] + this.ab / 3, this.vert[0] + this.ab / 4 + this.bc / 4, this.vert[0] - this.da / 3);
    decoration_blue.strokeColor = 'blue';
    decoration_blue.strokeWidth = '3';

    var decoration_red = new Path.Arc(this.vert[2] - this.bc * 3 / 4, this.vert[2] - (this.ab + this.bc) / (2 + 1 / 4), this.vert[2] + this.cd * 3 / 4);
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

    this.edge[0].vec = this.ab;
    this.edge[1].vec = this.bc;
    this.edge[2].vec = this.cd;
    this.edge[3].vec = this.da;

    this.edge[0].outer = true;
    this.edge[1].outer = true;
    this.edge[2].outer = true;
    this.edge[3].outer = true;

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


    this.outer = true;
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
    var decoration_blue = new Path.Arc(this.vert[1] - this.ab / 3, this.vert[1] - this.ab / 4 + this.bc / 4, this.vert[1] + this.bc / 3);
    decoration_blue.strokeColor = 'blue';
    decoration_blue.strokeWidth = '3';

    var decoration_red = new Path.Arc(this.vert[3] + this.da / 4, this.vert[3] + this.da / 4 - this.cd / 4, this.vert[3] - this.cd / 4);
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


    this.edge[0].vec = this.ab;
    this.edge[1].vec = this.bc;
    this.edge[2].vec = this.cd;
    this.edge[3].vec = this.da;


    this.edge[0].outer = true;
    this.edge[1].outer = true;
    this.edge[2].outer = true;
    this.edge[3].outer = true;

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

        console.log('fat');

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

        console.log('i cant do it ');

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
            var temp_vec_path = new Path(tile.vert[1], tile.vert[1] + tempvec);
            temp_vec_path.strokeColor = 'green';

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
            tempvec = tile.cd.rotate(108, [0, 0]);
            // var temp_vec_path = new Path(tile.vert[2], tile.vert[2] + tempvec);
            // temp_vec_path.strokeColor = 'green';
            centre = tile.vert[2] + (tile.cd + tempvec) / 2;
            // tile.edge[2].strokeColor = 'pink';

            ytile = new Fat_Tile(centre.x, centre.y, 198 + tile.rotation);
        }

        //case DA
        if (case_need_to_rewrite == 3) {
            tempvec = tile.da.rotate(72, [0, 0]);
            // var temp_vec_path = new Path(tile.vert[3], tile.vert[3] + tempvec);
            // temp_vec_path.strokeColor = 'green';
            centre = tile.vert[3] + (tile.da + tempvec) / 2;
            // tile.edge[3].strokeColor = 'pink';

            ytile = new Fat_Tile(centre.x, centre.y, -18 + tile.rotation);
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
            var temp_vec_path = new Path(tile.vert[1], tile.vert[1] + tempvec);
            temp_vec_path.strokeColor = 'green';
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
                    nearby_edges_as_vectors.push(sometiles[i].edge[j - 1].vec * (-1));
                    edges_count += 2;
                }
                if (j === 0) {
                    nearby_edges_as_vectors.push(sometiles[i].edge[0].vec);
                    nearby_edges_as_vectors.push(sometiles[i].edge[3].vec * (-1));
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
    console.log('count = ', count);
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
        some_edges[i].strokeColor = 'green';
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

            if ((edge_as_vec.x - unique_edges_as_vectors[j].x < epsilon) &&
                (edge_as_vec.y - unique_edges_as_vectors[j].y < epsilon)) {
                console.log('ravno');
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

plot_pattern(allowed_pattern[0], 1, 1);
plot_pattern(allowed_pattern[1], 1.2, 1);

console.log(allowed_pattern[0][0].kind);


a_tiles = [];
b_tiles = [];
tile = [];
thin = [];
// tile[0].fat_tile.removeSegment(3)

// test_tile[2] = place_fat_by_edge(test_tile[0], 2);
// test_tile[3]= place_fat_by_edge(test_tile[2], 2);

// test.tile[2].mark();

// for (var i = 0; i < 4; i++) {
//     test_tile[2].edge[i].strokeColor = 'pink';
//     test_tile[2].edge[i].strokeWidth = '7';
// }


b_tiles[0] = new Fat_Tile(paper.view.center.x * 1.5, paper.view.center.y, 0);
b_tiles.push(new place_fat_by_edge(b_tiles[0], 1));
b_tiles.push(new place_thin_by_edge(b_tiles[1], 1));
b_tiles.push(new place_thin_by_edge(b_tiles[2], 1));

// thin[1] = place_fat_by_edge(thin[0], 0);
// thin[2] = place_fat_by_edge(thin[0], 1);
// thin[3] = place_fat_by_edge(thin[0], 2);
// thin[4] = place_fat_by_edge(thin[0], 3);

// thin[0]= new Fat_Tile(paper.view.center.x, paper.view.center.y, 0);
// thin[1] = place_thin_by_edge(thin[0], 0);
// thin[1] = place_thin_by_edge(thin[0], 1);
// thin[1] = place_thin_by_edge(thin[0], 2);
// thin[1] = place_thin_by_edge(thin[0], 3);



find_tiles_w_that_vertice(b_tiles[0].vert[2], b_tiles);

mark_edges(nearby_edges_as_vectors);
// mark_tiles(nearby_tiles);
get_unic_vec(nearby_edges_as_vectors);



// console.log(unique_edges_as_vectors[0].angleInRadians);

// var temp = unique_edges_as_vectors[0];
// unique_edges_as_vectors[0]=unique_edges_as_vectors[1];
// unique_edges_as_vectors[1]=temp;

// console.log(unique_edges_as_vectors[0].angle);
// console.log(unique_edges_as_vectors[1].angle);
// console.log(unique_edges_as_vectors[2].angle);
// console.log(unique_edges_as_vectors[3].angle);
// console.log(unique_edges_as_vectors[4].angle);


console.log('sort_check');
plot_pattern(unique_edges_as_vectors, 0.2, 1);
console.log(unique_edges_as_vectors);

sort_vec(unique_edges_as_vectors);
console.log(unique_edges_as_vectors);

plot_pattern(unique_edges_as_vectors, 0.1, 1);
// plot_pattern(nearby_edges_as_vectors, 0.5, 1);


// get_pattern(unique_edges_as_vectors);
// console.log("unique_edges_as_vectors", unique_edges_as_vectors );

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
