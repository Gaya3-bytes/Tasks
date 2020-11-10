var bound = create('div', 'boundary')
var ban = create('div', "banner")
var profile = createimg('image.jpg')
var dname = create('div', "name");

var h = create('h2')
h.innerHTML = "GAYATHRI"

var cnt = create('div', 'contact');
var hr = create('hr');
var details = create('div', "details");
var pcntct = create('p');
pcntct.innerHTML = "gayathripi96@gmail.com"

var h2 = create('h2');
h2.innerHTML = `<i style="font-size:24px" class="fas fa-bullseye"></i>Objective`

var p = create('p');
p.innerHTML = "Looking forward to work in a challenging environment where I can learn, grow and thrive"

var h22 = create('h2');
h22.innerHTML = `<i style='font-size:24px' class='fas fa-laptop-code'></i> Technical Skills`;

var ul = create('ul', 'skills');
var li1 = createli(ul, 6);

var labeljs = createLabel("js", "Java Script");
var labelhtml = createLabel('html', 'HTML');
var labelcss = createLabel('css', "CSS");
var labelpy = createLabel('py', "Python");
var labelexcel = createLabel('excel', "Excel");
var labelmat = createLabel('mat', "MATLAB");

var progressJs = createProgress(65, 'js');
var progressHtml = createProgress(70, 'html');
var progressCss = createProgress(70, 'css');
var progresspy = createProgress(80, 'py');
var progressexcel = createProgress(70, 'excel');
var progressmat = createProgress(70, 'mat');

var h23 = create('h2');
h23.innerHTML = `<i style='font-size:24px' class='fas'>&#xf0b1;</i> Experience`;

var h41 = create('h4');
h41.innerHTML = `Content Writing Intern at Spaceonova (Aug 2020 - Present)`;

var ul2 = create('ul');
var li2 = createli(ul2, 4);
li2[0].innerHTML = "Content Writing"
li2[1].innerHTML = "Writing blogs"
li2[2].innerHTML = "Social Media handling"
li2[3].innerHTML = "Content design"

var h42 = create('h4');
h42.innerHTML = `Research Analyst at VEPL Pvt. Ltd (Nov 2019-Dec 2019)`;

var ul3 = create('ul');
var li3 = createli(ul3, 3);
li3[0].innerHTML = "Academic research and analysis"
li3[1].innerHTML = "Excel Data Analysis"
li3[2].innerHTML = "Report Writing"

var h43 = create('h4');
h43.innerHTML = `Internship at KSO, Indian Institute of Astrophysics, Kodaikanal`;

var ul4 = create('ul');
var li4 = createli(ul4, 3);
li4[0].innerHTML = "Project on correlation analysis of solar data"
li4[1].innerHTML = "Statistical analysis"
li4[2].innerHTML = "Data analysis in Python"


var h24 = create('h2');
h24.innerHTML = `<i style='font-size:24px' class='fas'>&#xf19d;</i> Education`;

var ul5 = create('ul');
var li5 = createli(ul5, 3);
li5[0].innerHTML = `<strong>Master of Technology</strong> Computational Mathematics (NIT Surathkal)`
li5[1].innerHTML = `<strong>Bachelor of Technology</strong> Electronics & Instrumentation (SRM University)`;
li5[2].innerHTML = ` <strong>XII</strong>&nbsp DAV School`;

var h25 = create('h2');
h25.innerHTML = `<i style='font-size:24px' class='fas'>&#xf406;</i> Hobbies`;

var ul6 = create('ul');
var li6 = createli(ul6, 4);
li6[0].innerHTML = `Badminton`
li6[1].innerHTML = `Reading books`;
li6[2].innerHTML = `Solving puzzles`;
li6[3].innerHTML = `Astronomy`;

document.body.append(bound);
bound.append(ban, cnt, hr, details);
ban.append(profile, dname);
dname.appendChild(h);
cnt.append(pcntct);
details.append(h2, p, h22, ul, h23, h41, ul2, h42, ul3, h43, ul4, h24, ul5, h25, ul6);
li1[0].append(labelC, progressC);
li1[1].append(labelcshp, progressCshp);
li1[2].append(labeljs, progressJs);
li1[3].append(labelhtml, progressHtml);
li1[4].append(labelcss, progressCss);
li1[5].append(labelsql, progressSql);


function create(element, classname) {
    var t = document.createElement(element);
    if (classname)
        t.setAttribute('class', classname);

    return t;
}

function createimg(source) {
    var i = document.createElement('img');
    i.setAttribute('src', source);
    return i;
}

// function createIcons(classname) {
//     var q = document.createElement('i');
//     q.setAttribute('class', 'fa ' + classname);
//     q.setAttribute('style', 'font-size : 24px');
//     return q.toString;
// }

function createli(elem, num) {
    var arr = []
    for (let i = 0; i < num; i++) {
        arr.push(document.createElement('li'));
        elem.appendChild(arr[i]);
    }
    return arr;
}

function createLabel(forname, text) {
    var a = document.createElement('label');
    a.setAttribute('for', forname);
    a.innerHTML = text;
    return a;
}

function createProgress(val, idname) {
    var d = document.createElement('progress');
    d.id = idname;
    d.setAttribute('value', val);
    d.setAttribute('class', 'progressbar');
    d.setAttribute('max', 100);
    return d;
}
